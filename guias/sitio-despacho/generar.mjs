/**
 * Genera el PDF del regalo "Rediseña el sitio de tu despacho con IA".
 *
 *   pnpm guia:sitio
 *
 * Lo entrega el autoresponder de la lista `sitio` de Sendy como archivo
 * ADJUNTO (ver CLAUDE.md de esta carpeta: regenerar aquí no actualiza lo que
 * reciben los suscriptores).
 *
 * El prompt, el de la firma y los 11 tips NO se escriben aquí: salen de
 * src/lib/sitio-prompt.md con el mismo parser que usa la página /sitio
 * (src/lib/sitio.mjs). Una sola fuente, así el PDF y la página no pueden decir
 * cosas distintas.
 *
 * La hoja de estilo se importa de la guía hermana, como en flujos-hibridos:
 * misma geometría de página y mismos tokens (ebook/lib/tema.mjs).
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";

import { C, contrapartida, EDICION } from "../../ebook/lib/tema.mjs";
import { partes } from "../../src/lib/sitio.mjs";
import { CSS } from "../prompts-xml/estilos.mjs";

const aqui = dirname(fileURLToPath(import.meta.url));

const GUIA = {
  titulo: "Rediseña el sitio de tu despacho con IA",
  subtitulo:
    "El prompt para rehacer el sitio de un despacho contable con Claude Code, el prompt del efecto de la firma y 11 tips.",
  salida: resolve(aqui, "redisena-tu-sitio-con-ia.pdf"),
};

/** Lo único propio de esta guía: la lista de tips, numerada como los folios. */
const CSS_PROPIO = `
.tips { list-style: none; margin: 14px 0 0; padding: 0; }
.tips li { margin: 0; padding: 9px 0 8px; border-top: 1px solid ${C.line}; }
.tips li:last-child { border-bottom: 1px solid ${C.line}; }
.tip-t { font-weight: 700; font-size: 10.4pt; letter-spacing: -0.01em; margin-bottom: 3px; }
.tip-n { font-family: 'JetBrains Mono', monospace; color: ${C.accent}; margin-right: 6px; }
.tips p { margin: 0; color: ${C.inkSoft}; }
/* Los prompts de esta guía vienen en párrafos (sitio.mjs los desenvuelve), no
   con saltos a mano como en flujos: el <pre> tiene que envolver o se sale. */
.prompt pre { white-space: pre-wrap; overflow-wrap: anywhere; font: inherit; }
`;

const escapar = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function documento(cuerpo) {
  return `<!doctype html>
<html lang="es-MX">
<head><meta charset="utf-8"><title>${GUIA.titulo}</title>
<style>${CSS}${CSS_PROPIO}</style>
</head>
<body>${cuerpo}</body>
</html>`;
}

/** El lockup sale del tema, no de un SVG pegado a mano (igual que flujos). */
function ponerMarca(html) {
  return html.replace(
    /<div class="brand">[\s\S]*?<\/div>/,
    `<div class="brand">${contrapartida({ tam: 16 })}</div>`,
  );
}

function llenar(html) {
  const { prompt, firma, tips } = partes(readFileSync(resolve(aqui, "../../src/lib/sitio-prompt.md"), "utf8"));
  const tipsHtml = (de, a) =>
    tips
      .filter((t) => t.n >= de && t.n <= a)
      .map(
        (t) =>
          `    <li><div class="tip-t"><span class="tip-n">${String(t.n).padStart(2, "0")}</span>${escapar(t.titulo)}</div><p>${escapar(t.texto)}</p></li>`,
      )
      .join("\n");
  return html
    .replace("<!-- PROMPT -->", escapar(prompt))
    .replace("<!-- FIRMA -->", escapar(firma))
    .replace(/<!-- TIPS:(\d+)-(\d+) -->/g, (_, de, a) => tipsHtml(Number(de), Number(a)));
}

const cuerpo = llenar(ponerMarca(readFileSync(resolve(aqui, "contenido.html"), "utf8")));
for (const marca of ["<!-- PROMPT -->", "<!-- FIRMA -->", "<!-- TIPS:"]) {
  if (cuerpo.includes(marca)) throw new Error(`Quedó sin llenar el marcador ${marca}`);
}

const navegador = await puppeteer.launch({ headless: true });
const pagina = await navegador.newPage();
await pagina.setContent(documento(cuerpo), { waitUntil: "networkidle0", timeout: 180_000 });
await pagina.evaluateHandle("document.fonts.ready");

// Guardarraíl: con overflow:hidden, lo que no cabe desaparece en silencio.
const desbordes = await pagina.evaluate(() =>
  [...document.querySelectorAll(".page")]
    .map((p, i) => ({ n: i + 1, sobra: Math.round(p.scrollHeight - p.clientHeight) }))
    .filter((p) => p.sobra > 1),
);
if (desbordes.length) {
  console.error("\n  Contenido recortado en:");
  for (const d of desbordes) console.error(`    página ${d.n}: se salen ${d.sobra}px`);
  console.error("\n  Ajusta el contenido o el tamaño antes de publicar.\n");
  await navegador.close();
  process.exit(1);
}

const bytes = await pagina.pdf({
  format: "Letter",
  printBackground: true,
  margin: { top: "0", bottom: "0", left: "0", right: "0" },
});
await navegador.close();

const doc = await PDFDocument.load(bytes);
doc.setTitle(GUIA.titulo);
doc.setAuthor(EDICION.autor);
doc.setSubject(GUIA.subtitulo);
doc.setKeywords(["sitio web", "despacho contable", "Claude Code", "IA para contadores", "prompts", "México"]);
doc.setProducer(EDICION.sitio);
doc.setCreator(EDICION.sitio);
writeFileSync(GUIA.salida, await doc.save());

console.log(`  ${GUIA.salida.split("/").pop()} · ${doc.getPageCount()} páginas`);
