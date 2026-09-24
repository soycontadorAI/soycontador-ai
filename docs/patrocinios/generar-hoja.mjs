/**
 * Genera el PDF de la hoja ejecutiva compartible de una serie, a partir del
 * markdown de esta carpeta, con la identidad del sitio (tokens de
 * src/styles/tokens.css, Instrument Serif en peso 400 para la display).
 *
 *   pnpm patrocinios:hoja                 # hoja-ejecutiva-noviembre-compartible.md
 *   pnpm patrocinios:hoja otra-hoja.md    # cualquier otra compartible
 *
 * Sale a docs/patrocinios/salida/ (fuera de git). Si el markdown todavía trae
 * placeholders [[...]], el archivo se llama *-borrador.pdf y los placeholders
 * se pintan en ámbar para que no se vayan sin querer. Ese PDF NO se manda.
 *
 * Las fuentes van embebidas en base64 (patrón de ebook/lib/tema.mjs) para que
 * el PDF viaje solo. Solo se lee la compartible: la interna nunca pasa por aquí.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";
import puppeteer from "puppeteer";

const aqui = dirname(fileURLToPath(import.meta.url));
const repo = resolve(aqui, "..", "..");
const entrada = resolve(aqui, process.argv[2] ?? "hoja-ejecutiva-noviembre-compartible.md");

if (/hoja-ejecutiva-noviembre\.md$/.test(entrada) || !/compartible/.test(entrada)) {
  console.error("Solo se genera PDF de una hoja *compartible*. La interna trae el precio.");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Tokens (copiados de src/styles/tokens.css; si allá cambian, aquí también)
// ---------------------------------------------------------------------------

const T = {
  bg: "#FBFAF7",
  surface: "#F3F1EB",
  raised: "#FFFFFF",
  line: "#E3E0D8",
  ink: "#14161A",
  inkSoft: "#454A54",
  inkDim: "#666B75",
  accent: "#0A7B45",
  accentSoft: "#E4F4EB",
  marker: "#3DD68C",
  ambar: "#FEBC2E",
};

// ---------------------------------------------------------------------------
// Fuentes embebidas
// ---------------------------------------------------------------------------

function woff2(pkg, file) {
  const abs = resolve(repo, "node_modules", "@fontsource", pkg, "files", file);
  if (!existsSync(abs)) return null;
  return `data:font/woff2;base64,${readFileSync(abs).toString("base64")}`;
}

function cara(familia, pkg, slug, peso, estilo = "normal") {
  const out = [];
  for (const subset of ["latin", "latin-ext"]) {
    const src = woff2(pkg, `${slug}-${subset}-${peso}-${estilo}.woff2`);
    if (src) out.push(`@font-face{font-family:'${familia}';font-style:${estilo};font-weight:${peso};src:url(${src}) format('woff2');}`);
  }
  return out.join("\n");
}

const fuentes = [
  cara("Instrument Serif", "instrument-serif", "instrument-serif", 400),
  cara("Instrument Serif", "instrument-serif", "instrument-serif", 400, "italic"),
  cara("Space Grotesk", "space-grotesk", "space-grotesk", 400),
  cara("Space Grotesk", "space-grotesk", "space-grotesk", 500),
  cara("Space Grotesk", "space-grotesk", "space-grotesk", 700),
  cara("JetBrains Mono", "jetbrains-mono", "jetbrains-mono", 400),
].join("\n");

const tieneSerif = fuentes.includes("Instrument Serif");
if (!tieneSerif) console.warn("Aviso: @fontsource/instrument-serif no está instalada; la display cae a Georgia.");

// ---------------------------------------------------------------------------
// Markdown → HTML
// ---------------------------------------------------------------------------

const md = readFileSync(entrada, "utf8");
const placeholders = [...md.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);
if (md.includes("—")) {
  console.error("La hoja trae una raya (—). Regla del sitio: no se publica con rayas.");
  process.exit(1);
}

marked.setOptions({ gfm: true });
let cuerpo = marked.parse(md);

// Placeholders visibles en ámbar, para que un borrador no se confunda con la versión final.
cuerpo = cuerpo.replace(/\[\[([^\]]+)\]\]/g, '<mark class="pendiente">$1</mark>');

// La firma es el último párrafo: sus renglones van uno debajo del otro.
cuerpo = cuerpo.replace(/<p>((?:(?!<p>)[\s\S])*)<\/p>\s*$/, (_, firma) => `<p class="firma">${firma.trim().replace(/\n/g, "<br>")}</p>\n`);

// El primer h1 y el primer párrafo en negritas forman la cabecera.
cuerpo = cuerpo.replace(/<h1>([\s\S]*?)<\/h1>\s*<p><strong>([\s\S]*?)<\/strong>\s*([\s\S]*?)<\/p>/, (_, t, s, r) =>
  `<header class="cabecera">
  <p class="kicker">Jueves de ContadorIA · Patrocinio de serie</p>
  <h1>${t}</h1>
  <p class="sub"><strong>${s}</strong> ${r}</p>
</header>`);

const html = `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<title>Hoja ejecutiva</title>
<style>
${fuentes}
@page { size: Letter; margin: 0.8in 0.85in 0.9in 0.85in; }
:root { --serif: ${tieneSerif ? "'Instrument Serif'," : ""} Georgia, serif; }
* { box-sizing: border-box; }
html { font-size: 10.5pt; }
body {
  margin: 0; color: ${T.ink}; background: ${T.bg};
  font-family: 'Space Grotesk', -apple-system, sans-serif; line-height: 1.45;
  -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
.cabecera { border-bottom: 2px solid ${T.ink}; padding-bottom: 10pt; margin-bottom: 14pt; }
.kicker { font-family: 'JetBrains Mono', monospace; font-size: 8pt; letter-spacing: .08em; text-transform: uppercase; color: ${T.accent}; margin: 0 0 6pt; }
h1 { font-family: var(--serif); font-weight: 400; font-size: 30pt; line-height: 1.05; margin: 0 0 8pt; letter-spacing: -.01em; }
.sub { margin: 0; color: ${T.inkSoft}; font-size: 10.5pt; }
.sub strong { color: ${T.ink}; font-weight: 500; }
h2 { font-family: var(--serif); font-weight: 400; font-size: 17pt; margin: 16pt 0 6pt; line-height: 1.15; break-after: avoid; }
h2::before { content: ""; display: inline-block; width: 14pt; height: 2pt; background: ${T.marker}; vertical-align: middle; margin-right: 7pt; }
p { margin: 0 0 7pt; }
ul { margin: 0 0 8pt; padding-left: 16pt; }
li { margin: 0 0 3pt; }
strong { font-weight: 500; }
a { color: ${T.accent}; text-decoration: none; }
table { width: 100%; border-collapse: collapse; margin: 6pt 0 10pt; font-size: 9.2pt; break-inside: auto; }
th, td { text-align: left; vertical-align: top; padding: 5pt 6pt; border-bottom: 1px solid ${T.line}; }
th { font-family: 'JetBrains Mono', monospace; font-weight: 400; font-size: 7.5pt; letter-spacing: .06em; text-transform: uppercase; color: ${T.inkDim}; border-bottom: 1px solid ${T.ink}; }
tr { break-inside: avoid; }
td:first-child { white-space: nowrap; font-weight: 500; }
table td:first-child { white-space: normal; }
.pendiente { background: ${T.ambar}; color: ${T.ink}; padding: 0 3pt; font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; }
.firma { margin-top: 14pt; padding-top: 10pt; border-top: 1px solid ${T.line}; color: ${T.inkSoft}; font-size: 9.5pt; line-height: 1.55; }
.firma a { display: inline-block; }
</style>
</head>
<body>
${cuerpo}
</body>
</html>`;

/* El pie no ve el CSS de la página, así que usa una sans del sistema. */
const PIE = `<div style="width:100%;font-family:Helvetica,Arial,sans-serif;font-size:7pt;color:${T.inkDim};padding:0 0.85in;display:flex;justify-content:space-between;">
  <span>soycontador.ai · Jueves de ContadorIA</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
</div>`;

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

const salidaDir = resolve(aqui, "salida");
mkdirSync(salidaDir, { recursive: true });
const base = entrada.split("/").pop().replace(/\.md$/, "");
const salida = resolve(salidaDir, `${base}${placeholders.length ? "-borrador" : ""}.pdf`);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0", timeout: 120_000 });
await page.evaluateHandle("document.fonts.ready");
const bytes = await page.pdf({
  format: "Letter",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate: PIE,
  margin: { top: "0.8in", bottom: "0.9in", left: "0.85in", right: "0.85in" },
});
await browser.close();
writeFileSync(salida, bytes);

console.log(`PDF generado: ${salida}`);
if (placeholders.length) {
  console.warn(`\nBORRADOR: quedan ${placeholders.length} placeholders. Este PDF no se manda.`);
  for (const p of placeholders) console.warn(`  - ${p}`);
}
