/**
 * Genera el PDF del lead magnet "3 flujos híbridos que te ahorrarán horas".
 *
 *   pnpm guia:flujos
 *
 * Venía de todoconta.com/flujos con la identidad de TodoConta (Inter, azul
 * #0B5FFF). Se rehízo aquí por lo mismo que la guía de los 5 prompts: el imán
 * es de la marca personal, así que el PDF tiene que salir con la identidad de
 * soycontador.ai y no con la del software.
 *
 * La hoja de estilo NO se duplica: se importa de la guía hermana. Las dos
 * comparten geometría de página (cada sección es una carta exacta) y tokens,
 * que a su vez vienen de ebook/lib/tema.mjs. Un solo punto de inyección para
 * las tres piezas en PDF.
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";

import { EDICION, isotipo, logotipo } from "../../ebook/lib/tema.mjs";
import { CSS } from "../prompts-xml/estilos.mjs";

const aqui = dirname(fileURLToPath(import.meta.url));

const GUIA = {
  titulo: "3 flujos híbridos que te ahorrarán horas",
  subtitulo:
    "Tres flujos que combinan IA y criterio del contador (clasificar CFDIs, conciliar a tres fuentes y responderle al SAT), con el prompt completo de cada uno.",
  salida: resolve(aqui, "3-flujos-hibridos.pdf"),
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
 * en el HTML para que la marca salga del tema y no de un SVG pegado a mano: el
 * día que cambie el isotipo, cambia en los PDFs a la vez.
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
doc.setKeywords(["CFDI", "conciliación", "SAT", "México", "IA para contadores", "prompts", "Claude"]);
doc.setProducer(EDICION.sitio);
doc.setCreator(EDICION.sitio);
writeFileSync(GUIA.salida, await doc.save());

console.log(`  ${GUIA.salida.split("/").pop()} · ${doc.getPageCount()} páginas`);
