/**
 * Genera el PDF del lead magnet "5 prompts para auditar tus XMLs con Claude".
 *
 *   pnpm guia:prompts
 *
 * El contenido vive en contenido.html (solo el cuerpo, sin estilos) y el
 * diseño en estilos.mjs, que a su vez importa los tokens y las fuentes de
 * ebook/lib/tema.mjs. Así el ebook y esta guía no pueden divergir: comparten
 * el mismo punto de inyección de la identidad.
 *
 * Cada sección es una carta exacta (.page de 11in con overflow oculto), así
 * que si se edita contenido hay que verificar que nada se recorte. El propio
 * script lo comprueba antes de imprimir y falla si algo se sale.
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";

import { EDICION, isotipo, logotipo } from "../../ebook/lib/tema.mjs";
import { CSS } from "./estilos.mjs";

const aqui = dirname(fileURLToPath(import.meta.url));

const GUIA = {
  titulo: "5 prompts para auditar tus XMLs con Claude",
  subtitulo:
    "La metodología de auditoría preventiva de CFDI en cuatro capas, convertida en prompts que puedes copiar y usar hoy.",
  salida: resolve(aqui, "5-prompts-auditar-xml-claude.pdf"),
};

function documento(cuerpo) {
  return `<!doctype html>
<html lang="es-MX">
<head><meta charset="utf-8"><title>${GUIA.titulo}</title>
<style>${CSS}</style>
</head>
<body>${cuerpo}</body>
</html>`;
}

/**
 * Sustituye el lockup de TodoConta por el de soycontador.ai. Se hace aquí y no
 * en el HTML para que la marca salga del tema y no de un SVG pegado a mano:
 * el día que cambie el isotipo, cambia en los dos PDFs a la vez.
 */
function ponerMarca(html) {
  return html.replace(
    /<div class="brand">[\s\S]*?<\/div>\s*(?=<)/,
    `<div class="brand">${isotipo({ alto: 30 })}${logotipo({ tam: 15 })}</div>\n    `,
  );
}

const cuerpo = ponerMarca(readFileSync(resolve(aqui, "contenido.html"), "utf8"));

const navegador = await puppeteer.launch({ headless: true });
const pagina = await navegador.newPage();
await pagina.setContent(documento(cuerpo), { waitUntil: "networkidle0", timeout: 180_000 });
await pagina.evaluateHandle("document.fonts.ready");

/*
 * Guardarraíl: con overflow:hidden, el contenido que no cabe desaparece en
 * silencio. Aquí se compara el alto real del contenido de cada página contra
 * su caja, y se avisa antes de imprimir un PDF con texto amputado.
 */
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
doc.setKeywords(["CFDI", "XML", "auditoría", "SAT", "México", "IA para contadores", "Claude"]);
doc.setProducer(EDICION.sitio);
doc.setCreator(EDICION.sitio);
writeFileSync(GUIA.salida, await doc.save());

console.log(`  ${GUIA.salida.split("/").pop()} · ${doc.getPageCount()} páginas`);
