/**
 * Identidad "Libro mayor × terminal" aplicada al PDF de "IA para Contadores".
 *
 * ÚNICO punto de inyección del diseño: los dos generadores (completo y preview)
 * importan de aquí, así que nunca divergen. Los tokens replican
 * soycontador-ai/src/styles/tokens.css; si allá cambia un color, aquí también.
 *
 * Reglas de la identidad que este archivo respeta (design/DESIGN.md):
 * - El verde registro (#0A7B45) solo marca acción/IA, jamás decora.
 * - La serif (Source Serif 4 itálica) solo aparece en citas y descripciones.
 * - Cifras, folios y prompts SIEMPRE en mono (JetBrains Mono).
 * - Sombras duras y desplazadas, nunca difusas.
 * - Mito vs. Realidad se dibuja como cuenta T: cargo en tinta, abono en verde.
 */

import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
/** Raíz del repo: de ebook/lib/ hay que subir dos para llegar a node_modules. */
const repo = resolve(__dirname, "..", "..");

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

export const C = {
  bg: "#FAFBFD",
  surface: "#F1F4F9",
  raised: "#FFFFFF",
  line: "#DFE6EF",
  ink: "#101828",
  inkSoft: "#3D4A5C",
  inkDim: "#5F6B80",
  accent: "#0A7B45",
  accentSoft: "#E4F4EB",
  termBg: "#0D1420",
  termChrome: "#141D2E",
  termInk: "#9FB0C9",
  termBright: "#E8EDF5",
  termDim: "#5A6B85",
  termOk: "#3DD68C",
  rojo: "#FF5F57",
  ambar: "#FEBC2E",
  verde: "#28C840",
};

/** Metadatos de esta edición. Se estampan en la portada, el colofón y el PDF. */
export const EDICION = {
  titulo: "IA para Contadores",
  subtitulo: "No te reemplaza la IA, te reemplaza el contador que la usa bien",
  autor: "Israel Castro",
  autorRol: "Contador público y desarrollador de software",
  nombre: "Segunda edición",
  fecha: "Agosto 2026",
  version: "2.0",
  sitio: "soycontador.ai",
  urlEbook: "https://soycontador.ai/ebook",
};

/** Geometría de página. Medida de ~6 in para que el renglón no se alargue. */
export const PAGINA = {
  margen: {
    top: "0.85in",
    bottom: "0.95in",
    left: "1.25in",
    right: "1.25in",
  },
};

// ---------------------------------------------------------------------------
// Tipografía embebida (el PDF no debe depender de fuentes del sistema)
// ---------------------------------------------------------------------------

/**
 * Se usan las variantes ESTÁTICAS de Fontsource, no las variables: Chrome
 * exporta cada instancia de una fuente variable como un Type 3 distinto por
 * página (244 subconjuntos en la primera prueba, con avisos de bounding box).
 * Con pesos estáticos embebe TrueType una sola vez por peso.
 */
function woff2(pkg, file) {
  const abs = resolve(repo, "node_modules", "@fontsource", pkg, "files", file);
  return `data:font/woff2;base64,${readFileSync(abs).toString("base64")}`;
}

function cara({ familia, pkg, slug, subset, peso, estilo = "normal" }) {
  const archivo = `${slug}-${subset}-${peso}-${estilo}.woff2`;
  return `@font-face{font-family:'${familia}';font-style:${estilo};font-weight:${peso};src:url(${woff2(pkg, archivo)}) format('woff2');}`;
}

/** Las tres familias de la marca, en base64, para que el PDF viaje solo. */
export function fontFaces() {
  const caras = [];
  for (const subset of ["latin", "latin-ext"]) {
    for (const peso of [400, 500, 700]) {
      caras.push({
        familia: "Space Grotesk",
        pkg: "space-grotesk",
        slug: "space-grotesk",
        subset,
        peso,
      });
    }
    for (const peso of [400, 700]) {
      caras.push({
        familia: "JetBrains Mono",
        pkg: "jetbrains-mono",
        slug: "jetbrains-mono",
        subset,
        peso,
      });
    }
    caras.push({
      familia: "Source Serif 4",
      pkg: "source-serif-4",
      slug: "source-serif-4",
      subset,
      peso: 400,
      estilo: "italic",
    });
  }
  return caras.map(cara).join("\n");
}

const F = {
  display: `'Space Grotesk', -apple-system, sans-serif`,
  body: `'Space Grotesk', -apple-system, sans-serif`,
  mono: `'JetBrains Mono', ui-monospace, monospace`,
  serif: `'Source Serif 4', Georgia, serif`,
};

// ---------------------------------------------------------------------------
// Marca
// ---------------------------------------------------------------------------

/** Isotipo "La contrapartida": la cuenta T con el abono en verde. */
export function isotipo({ alto = 44, tinta = C.ink, abono = C.accent } = {}) {
  return `<svg viewBox="8 20 80 56" width="${alto * 1.43}" height="${alto}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="12" y="25" width="72" height="5" fill="${tinta}"/>
  <rect x="45.5" y="25" width="5" height="46" fill="${tinta}"/>
  <rect x="16" y="39" width="24" height="7" fill="${tinta}"/>
  <rect x="16" y="52" width="17" height="7" fill="${tinta}"/>
  <rect x="56" y="39" width="24" height="7" fill="${abono}"/>
  <rect x="56" y="52" width="17" height="7" fill="${abono}"/>
</svg>`;
}

/** Logotipo de dos líneas: solo el ".ai" cambia de familia y de color. */
export function logotipo({ tinta = C.ink, verde = C.accent, tam = 15 } = {}) {
  return `<span class="logotipo" style="--lg-tam:${tam}pt;--lg-tinta:${tinta};--lg-verde:${verde}">
  <span class="lg-1">soycontador</span><span class="lg-2">.ai</span>
</span>`;
}

// ---------------------------------------------------------------------------
// Hoja de estilo
// ---------------------------------------------------------------------------

export const CSS = `
${fontFaces()}

@page { size: Letter; }
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: ${F.body};
  font-size: 10.8pt;
  font-weight: 400;
  line-height: 1.62;
  color: ${C.ink};
  background: ${C.raised};
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  text-rendering: geometricPrecision;
}

/* --- Logotipo ------------------------------------------------------------ */
.logotipo { display: block; line-height: 1.05; }
.lg-1 {
  display: block;
  font-family: ${F.display};
  font-weight: 700;
  font-size: var(--lg-tam);
  letter-spacing: -0.035em;
  color: var(--lg-tinta);
}
.lg-2 {
  display: block;
  font-family: ${F.mono};
  font-weight: 700;
  font-size: calc(var(--lg-tam) * 0.82);
  letter-spacing: -0.02em;
  color: var(--lg-verde);
}

/* --- Hojas de cortesía (portada y colofón, a sangre) --------------------- */
.hoja {
  position: relative;
  width: 8.5in;
  height: 10.98in;
  overflow: hidden;
  page-break-after: always;
  background: ${C.bg};
  padding: 0.85in 1.25in;
}
.hoja:last-child { page-break-after: auto; }

/* Rayado de libro mayor: un renglón cada 32px. En pantalla el token --line
   (#DFE6EF) se pierde sobre --bg, así que el papel usa un tono medio grado
   más oscuro; sigue siendo textura, no decoración. */
/* La especificidad importa: .portada > * y .colofon > * suben el contenido por
   encima del papel, y sin este selector más fuerte se llevarían al rayado. */
.hoja > .rayado {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(to bottom, transparent 0, transparent 31px, #E5EBF3 31px, #E5EBF3 32px);
}
/* Línea de margen del libro mayor. */
.rayado::after {
  content: "";
  position: absolute;
  top: 0; bottom: 0; left: 0.95in;
  border-left: 1px solid #D5DFEC;
}

/* --- Portada ------------------------------------------------------------- */
.portada { display: flex; flex-direction: column; padding: 0.95in 0.95in 0; }
.portada > * { position: relative; }
.portada-cabeza { display: flex; align-items: flex-start; gap: 16pt; }
.portada-cuerpo { margin-top: auto; padding-bottom: 34pt; }
.portada-folio {
  font-family: ${F.mono};
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${C.accent};
  margin-bottom: 14pt;
}
.portada h1 {
  font-family: ${F.display};
  font-size: 61pt;
  font-weight: 700;
  line-height: 0.96;
  letter-spacing: -0.05em;
  color: ${C.ink};
}
.doble-raya {
  height: 4pt;
  border-top: 1.6pt solid ${C.ink};
  border-bottom: 1.6pt solid ${C.ink};
  margin: 20pt 0 18pt;
}
.portada-sub {
  font-family: ${F.serif};
  font-style: italic;
  font-size: 15pt;
  line-height: 1.4;
  color: ${C.inkSoft};
  max-width: 4.6in;
}
.portada-chip {
  display: inline-block;
  margin-top: 22pt;
  padding: 6pt 11pt;
  border: 1.2pt solid ${C.ink};
  background: ${C.accentSoft};
  font-family: ${F.mono};
  font-size: 7.6pt;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${C.ink};
}
.portada-ficha {
  display: flex;
  gap: 26pt;
  padding: 12pt 0 0;
  border-top: 1px solid ${C.line};
}
.ficha-dato { }
.ficha-num {
  display: block;
  font-family: ${F.mono};
  font-size: 17pt;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${C.ink};
}
.ficha-etq {
  display: block;
  font-family: ${F.mono};
  font-size: 7pt;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${C.inkDim};
  margin-top: 2pt;
}
.portada-autor {
  margin-top: 26pt;
  font-family: ${F.display};
  font-size: 13pt;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${C.ink};
}
.portada-rol {
  font-family: ${F.mono};
  font-size: 7.6pt;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${C.inkDim};
  margin-top: 4pt;
}
/* Franja de terminal al pie: el otro lado de la identidad. */
.portada-pie {
  margin: 0 -0.95in;
  background: ${C.termBg};
  padding: 13pt 0.95in;
  font-family: ${F.mono};
  font-size: 9pt;
  color: ${C.termBright};
  letter-spacing: 0.02em;
}
.portada-pie .prompt { color: ${C.termOk}; font-weight: 700; margin-right: 7pt; }

/* --- Colofón ------------------------------------------------------------- */
.colofon > * { position: relative; }
.colofon-folio {
  font-family: ${F.mono};
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.accent};
  margin-bottom: 26pt;
}
.colofon h2 {
  font-family: ${F.display};
  font-size: 20pt;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 6pt;
}
.colofon h2::before { content: none; }
.colofon-sub {
  font-family: ${F.serif};
  font-style: italic;
  font-size: 11.5pt;
  color: ${C.inkSoft};
  margin-bottom: 26pt;
}
.registro {
  border-top: 2pt solid ${C.ink};
  border-bottom: 2pt solid ${C.ink};
  margin-bottom: 22pt;
}
.registro-fila {
  display: grid;
  grid-template-columns: 1.35in 1fr;
  gap: 14pt;
  padding: 7pt 0;
  border-bottom: 0.6pt solid ${C.line};
}
.registro-fila:last-child { border-bottom: none; }
.registro-etq {
  font-family: ${F.mono};
  font-size: 7.4pt;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${C.inkDim};
  padding-top: 2pt;
}
.registro-val { font-size: 10.2pt; }
.registro-val b { font-weight: 700; }
.colofon-nota {
  border-left: 2.5pt solid ${C.accent};
  padding-left: 13pt;
  font-size: 9.8pt;
  line-height: 1.6;
  color: ${C.inkSoft};
  max-width: 5in;
}
.colofon-nota p { margin-bottom: 8pt; text-align: left; }
.colofon-nota p:last-child { margin-bottom: 0; }
.colofon-nota strong { color: ${C.ink}; }

/* --- Índice -------------------------------------------------------------- */
.indice { page-break-after: always; }
.indice-folio {
  font-family: ${F.mono};
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.accent};
  margin-bottom: 8pt;
}
.indice h2 {
  font-family: ${F.display};
  font-size: 24pt;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 16pt;
  padding-bottom: 12pt;
  border-bottom: 2.5pt solid ${C.ink};
}
.indice h2::before { content: none; }
.indice-seccion {
  font-family: ${F.mono};
  font-size: 7.6pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.inkDim};
  margin: 20pt 0 2pt;
  padding-bottom: 6pt;
  border-bottom: 1.2pt solid ${C.ink};
}
.indice-item {
  display: grid;
  grid-template-columns: 30pt 1fr auto;
  gap: 10pt;
  align-items: baseline;
  padding: 8pt 0;
  border-bottom: 0.6pt solid ${C.line};
  page-break-inside: avoid;
}
.indice-num {
  font-family: ${F.mono};
  font-size: 9pt;
  font-weight: 700;
  color: ${C.accent};
}
.indice-titulo {
  font-family: ${F.display};
  font-size: 10.6pt;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: ${C.ink};
}
.indice-desc {
  display: block;
  font-family: ${F.body};
  font-size: 8.4pt;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0;
  color: ${C.inkDim};
  margin-top: 3pt;
  max-width: 4.6in;
}
.indice-cerrado {
  font-family: ${F.mono};
  font-size: 6.6pt;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${C.inkDim};
  border: 0.8pt solid ${C.line};
  border-radius: 3px;
  padding: 3pt 6pt;
  white-space: nowrap;
}
.bloqueado .indice-num { color: ${C.inkDim}; }
.bloqueado .indice-titulo { color: ${C.inkSoft}; }

/* --- Capítulos ----------------------------------------------------------- */
.capitulo { page-break-before: always; }
.cap-cabeza {
  border-top: 3pt solid ${C.ink};
  padding-top: 13pt;
  margin-bottom: 22pt;
}
.cap-folio {
  font-family: ${F.mono};
  font-size: 8.4pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.accent};
  margin-bottom: 11pt;
}
.cap-cabeza h1 {
  font-family: ${F.display};
  font-size: 26pt;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: ${C.ink};
  margin-bottom: 11pt;
}
.cap-desc {
  font-family: ${F.serif};
  font-style: italic;
  font-size: 11.6pt;
  line-height: 1.45;
  color: ${C.inkSoft};
  max-width: 5in;
}
.cap-img {
  display: block;
  width: 100%;
  margin: 18pt 0 2pt;
  border: 0.8pt solid ${C.line};
  border-radius: 5px;
}

/* --- Tipografía de contenido -------------------------------------------- */
h2 {
  font-family: ${F.display};
  font-size: 14.5pt;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: -0.025em;
  color: ${C.ink};
  margin: 24pt 0 9pt;
  page-break-after: avoid;
}
h2::before {
  content: "";
  display: block;
  width: 26pt;
  height: 2.5pt;
  background: ${C.accent};
  margin-bottom: 8pt;
}
h3 {
  font-family: ${F.display};
  font-size: 11.6pt;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: ${C.ink};
  margin: 18pt 0 6pt;
  page-break-after: avoid;
}
p {
  margin-bottom: 9pt;
  text-align: justify;
  hyphens: auto;
  orphans: 2;
  widows: 2;
}
strong { font-weight: 700; }
em { font-style: italic; }
ul, ol { margin: 10pt 0 12pt 18pt; }
li { margin-bottom: 6pt; }
li::marker { color: ${C.inkDim}; }
hr {
  border: none;
  border-top: 0.8pt solid ${C.line};
  margin: 22pt 0;
}
a {
  color: ${C.accent};
  font-weight: 500;
  text-decoration: underline;
  text-decoration-thickness: 0.5pt;
  text-underline-offset: 2pt;
}

blockquote {
  font-family: ${F.serif};
  font-style: italic;
  font-size: 12pt;
  line-height: 1.5;
  color: ${C.inkSoft};
  border-left: 2.5pt solid ${C.accent};
  padding-left: 15pt;
  margin: 16pt 0;
  page-break-inside: avoid;
}
blockquote p { text-align: left; margin-bottom: 6pt; }
blockquote p:last-child { margin-bottom: 0; }

/* --- Código y prompts: bloque de terminal -------------------------------- */
pre {
  background: ${C.termBg};
  color: ${C.termBright};
  border-radius: 5px;
  padding: 13pt 15pt;
  margin: 14pt 0;
  font-family: ${F.mono};
  font-size: 8.4pt;
  line-height: 1.58;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  page-break-inside: avoid;
}
code {
  font-family: ${F.mono};
  font-size: 9pt;
  background: ${C.surface};
  border: 0.5pt solid ${C.line};
  border-radius: 3px;
  padding: 0.5pt 3pt;
}
pre code { background: none; border: none; padding: 0; font-size: inherit; color: inherit; }

/* --- Tablas: renglón de libro mayor -------------------------------------- */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 14pt 0;
  font-size: 9.6pt;
  border-top: 2pt solid ${C.ink};
  border-bottom: 2pt solid ${C.ink};
  page-break-inside: avoid;
}
th {
  font-family: ${F.mono};
  font-size: 7.6pt;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${C.inkDim};
  background: ${C.surface};
  text-align: left;
  padding: 7pt 9pt;
  border-bottom: 1pt solid ${C.ink};
}
td {
  padding: 7pt 9pt;
  border-bottom: 0.6pt solid ${C.line};
  vertical-align: top;
}
tr:last-child td { border-bottom: none; }

/* --- Cuenta T: Mito vs. Realidad ---------------------------------------- */
.cuenta-t { margin: 20pt 0; page-break-inside: avoid; }
.ct-folio {
  font-family: ${F.mono};
  font-size: 7.8pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.ink};
  padding-bottom: 7pt;
  border-bottom: 2pt solid ${C.ink};
}
.ct-fila {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 0.8pt solid ${C.line};
  page-break-inside: avoid;
}
.ct-fila:last-child { border-bottom: none; }
.ct-celda { padding: 11pt 14pt 11pt 0; }
.ct-abono { padding: 11pt 0 11pt 15pt; border-left: 1.5pt solid ${C.ink}; }
.ct-etq {
  display: block;
  font-family: ${F.mono};
  font-size: 7.2pt;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 5pt;
}
.ct-cargo .ct-etq { color: ${C.inkDim}; }
.ct-abono .ct-etq { color: ${C.accent}; }
.ct-celda p {
  font-size: 9.4pt;
  line-height: 1.55;
  margin: 0;
  text-align: left;
  hyphens: none;
}
.ct-cargo p { color: ${C.inkSoft}; }

/* --- Dato con fecha de corte -------------------------------------------- */
.dato-fechado {
  margin: 16pt 0;
  padding: 10pt 13pt;
  background: ${C.surface};
  border-left: 2.5pt solid ${C.inkDim};
  font-size: 9.3pt;
  line-height: 1.55;
  color: ${C.inkSoft};
  text-align: left;
  hyphens: none;
  page-break-inside: avoid;
}
.df-etq {
  display: block;
  font-family: ${F.mono};
  font-size: 7.2pt;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${C.inkDim};
  margin-bottom: 5pt;
}

/* --- La póliza: "Lo que te llevas" -------------------------------------- */
.poliza {
  margin: 24pt 0 0;
  border: 1.2pt solid ${C.ink};
  border-radius: 5px;
  background: ${C.raised};
  box-shadow: 5pt 5pt 0 ${C.line};
  page-break-inside: avoid;
}
.poliza-folio {
  font-family: ${F.mono};
  font-size: 7.8pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.ink};
  background: ${C.surface};
  border-bottom: 1.2pt solid ${C.ink};
  padding: 8pt 15pt;
}
.poliza ul { list-style: none; margin: 0; padding: 12pt 15pt 6pt; }
.poliza li {
  position: relative;
  padding-left: 15pt;
  margin-bottom: 8pt;
  font-size: 9.8pt;
  line-height: 1.55;
}
.poliza li::before {
  content: "▸";
  position: absolute;
  left: 0;
  top: -0.5pt;
  font-family: ${F.mono};
  font-weight: 700;
  color: ${C.accent};
}
.poliza .doble-raya { margin: 2pt 15pt 12pt; height: 3pt; border-width: 1.2pt; }

/* --- Terminal: "Pruébalo tú mismo" -------------------------------------- */
.terminal {
  margin: 20pt 0 0;
  border-radius: 6px;
  overflow: hidden;
  background: ${C.termBg};
  page-break-inside: avoid;
}
.term-chrome {
  background: ${C.termChrome};
  padding: 7pt 13pt;
  display: flex;
  align-items: center;
  gap: 5pt;
}
.term-dot { width: 7pt; height: 7pt; border-radius: 50%; display: inline-block; }
.term-nombre {
  font-family: ${F.mono};
  font-size: 7.2pt;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.termDim};
  margin-left: 9pt;
}
.term-cuerpo { padding: 14pt 15pt 8pt; }
.term-cuerpo ol { list-style: none; counter-reset: paso; margin: 0; padding: 0; }
.term-cuerpo li {
  counter-increment: paso;
  position: relative;
  padding-left: 24pt;
  margin-bottom: 10pt;
  font-family: ${F.mono};
  font-size: 8.3pt;
  line-height: 1.62;
  color: ${C.termInk};
}
.term-cuerpo li::before {
  content: "0" counter(paso);
  position: absolute;
  left: 0;
  color: ${C.termOk};
  font-weight: 700;
}
.term-cuerpo strong { color: ${C.termBright}; font-weight: 700; }
.term-cuerpo em { color: ${C.termBright}; }
.term-cuerpo a { color: ${C.termOk}; text-decoration: none; }
.term-cuerpo code {
  background: rgba(61, 214, 140, 0.12);
  border: none;
  color: ${C.termOk};
  font-size: 8.3pt;
}

/* --- Nota: "Si quieres ir más lejos" ------------------------------------ */
.nota-plus {
  margin: 18pt 0 0;
  padding-left: 14pt;
  border-left: 2.5pt solid ${C.accent};
  page-break-inside: avoid;
}
.nota-folio {
  font-family: ${F.mono};
  font-size: 7.2pt;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.accent};
  margin-bottom: 6pt;
}
.nota-plus p {
  font-size: 9.5pt;
  line-height: 1.58;
  color: ${C.inkSoft};
  text-align: left;
  margin-bottom: 6pt;
}
.nota-plus p:last-child { margin-bottom: 0; }

/* --- Cierre -------------------------------------------------------------- */
.cierre {
  page-break-before: always;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 8.4in;
}
.cierre-folio {
  font-family: ${F.mono};
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${C.accent};
  margin-bottom: 14pt;
}
.cierre h2 {
  font-family: ${F.display};
  font-size: 27pt;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.035em;
  margin: 0 0 14pt;
}
.cierre h2::before { content: none; }
.cierre p {
  font-size: 11pt;
  line-height: 1.62;
  color: ${C.inkSoft};
  text-align: left;
  max-width: 4.8in;
  margin-bottom: 10pt;
}
.cierre-caja {
  margin-top: 22pt;
  background: ${C.termBg};
  border-radius: 6px;
  padding: 18pt 20pt;
}
.cierre-caja .prompt { color: ${C.termOk}; font-weight: 700; }
.cierre-caja p {
  font-family: ${F.mono};
  font-size: 9.4pt;
  color: ${C.termBright};
  margin: 0 0 7pt;
  max-width: none;
}
.cierre-caja p:last-child { margin-bottom: 0; }
.cierre-caja .tenue { color: ${C.termDim}; font-size: 8.2pt; }
`;

// ---------------------------------------------------------------------------
// Piezas de página
// ---------------------------------------------------------------------------

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Portada. `chip` pinta el distintivo de muestra en la edición preview.
 */
export function portadaHtml({ chip = null, ficha } = {}) {
  const fichaHtml = (ficha ?? [])
    .map(
      (d) =>
        `<span class="ficha-dato"><b class="ficha-num">${esc(d.num)}</b><span class="ficha-etq">${esc(d.etq)}</span></span>`,
    )
    .join("\n      ");

  return `<div class="hoja portada">
  <div class="rayado"></div>
  <div class="portada-cabeza">
    ${isotipo({ alto: 40 })}
    ${logotipo({ tam: 15 })}
  </div>
  <div class="portada-cuerpo">
    <p class="portada-folio">Ebook &middot; ${esc(EDICION.nombre)} &middot; ${esc(EDICION.fecha)}</p>
    <h1>IA para<br>Contadores</h1>
    <div class="doble-raya"></div>
    <p class="portada-sub">${esc(EDICION.subtitulo)}</p>
    ${chip ? `<p class="portada-chip">${esc(chip)}</p>` : ""}
    <div class="portada-ficha">
      ${fichaHtml}
    </div>
    <p class="portada-autor">${esc(EDICION.autor)}</p>
    <p class="portada-rol">${esc(EDICION.autorRol)}</p>
  </div>
  <div class="portada-pie"><span class="prompt">$</span>${esc(EDICION.sitio)}/ebook</div>
</div>`;
}

/**
 * Colofón: registro de la edición + la nota de uso. También es donde se estampa
 * qué cambió, para que quien recibe la actualización sepa qué está leyendo.
 */
export function colofonHtml({ filas, nota }) {
  const filasHtml = filas
    .map(
      (f) =>
        `<div class="registro-fila"><span class="registro-etq">${esc(f.etq)}</span><span class="registro-val">${f.val}</span></div>`,
    )
    .join("\n    ");

  return `<div class="hoja colofon">
  <div class="rayado"></div>
  <p class="colofon-folio">Registro de la edición</p>
  <h2>${esc(EDICION.titulo)}</h2>
  <p class="colofon-sub">${esc(EDICION.subtitulo)}</p>
  <div class="registro">
    ${filasHtml}
  </div>
  <div class="colofon-nota">
    ${nota}
  </div>
</div>`;
}

/** Índice. Cada renglón lleva su descripción: el índice también vende. */
export function indiceHtml({ titulo = "Contenido", grupos }) {
  const grupoHtml = grupos
    .map((g) => {
      const items = g.items
        .map(
          (it) => `<div class="indice-item${it.bloqueado ? " bloqueado" : ""}">
      <span class="indice-num">${esc(it.num)}</span>
      <span>
        <span class="indice-titulo">${esc(it.titulo)}</span>
        ${it.desc ? `<span class="indice-desc">${esc(it.desc)}</span>` : ""}
      </span>
      ${it.bloqueado ? `<span class="indice-cerrado">edición completa</span>` : "<span></span>"}
    </div>`,
        )
        .join("\n    ");
      const etiqueta = g.etiqueta ? `<p class="indice-seccion">${esc(g.etiqueta)}</p>` : "";
      return `${etiqueta}\n    ${items}`;
    })
    .join("\n");

  return `<div class="indice">
  <p class="indice-folio">Índice</p>
  <h2>${esc(titulo)}</h2>
  ${grupoHtml}
</div>`;
}

/** Encabezado de capítulo: folio en verde, título, descripción en serif. */
export function capituloHtml({ folio, titulo, descripcion, imagen, cuerpo }) {
  const img = imagen ? `<img class="cap-img" src="${imagen}" alt="${esc(titulo)}">` : "";
  return `<div class="capitulo">
  <div class="cap-cabeza">
    <p class="cap-folio">${esc(folio)}</p>
    <h1>${esc(titulo)}</h1>
    ${descripcion ? `<p class="cap-desc">${esc(descripcion)}</p>` : ""}
    ${img}
  </div>
  ${cuerpo}
</div>`;
}

/** Página de cierre, con la caja de terminal como llamada final. */
export function cierreHtml({ folio, titulo, parrafos, terminal }) {
  return `<div class="cierre">
  <p class="cierre-folio">${esc(folio)}</p>
  <h2>${titulo}</h2>
  ${parrafos.map((p) => `<p>${p}</p>`).join("\n  ")}
  <div class="cierre-caja">
    ${terminal.map((l) => `<p><span class="prompt">$</span> ${l}</p>`).join("\n    ")}
    <p class="tenue">${esc(EDICION.nombre)} &middot; ${esc(EDICION.fecha)} &middot; v${esc(EDICION.version)}</p>
  </div>
</div>`;
}

const DOTS = [C.rojo, C.ambar, C.verde]
  .map((c) => `<span class="term-dot" style="background:${c}"></span>`)
  .join("");

// ---------------------------------------------------------------------------
// Post-proceso del markdown: las secciones fijas se vuelven componentes
// ---------------------------------------------------------------------------

/**
 * Corta desde un encabezado hasta el siguiente encabezado (de cualquier nivel)
 * o hasta un <hr>. Devuelve null si la sección no existe en el capítulo.
 */
function cortar(html, nivel, tituloRe) {
  const abre = new RegExp(
    `(?:<hr\\s*/?>\\s*)?<h${nivel}[^>]*>\\s*(?:${tituloRe})\\s*</h${nivel}>`,
    "i",
  );
  const m = abre.exec(html);
  if (!m) return null;

  const resto = html.slice(m.index + m[0].length);
  const fin = /<h[1-6][\s>]|<hr[\s/>]/i.exec(resto);
  const corte = fin ? fin.index : resto.length;

  return { inicio: m.index, fin: m.index + m[0].length + corte, cuerpo: resto.slice(0, corte) };
}

function reemplazar(html, nivel, tituloRe, render) {
  const s = cortar(html, nivel, tituloRe);
  if (!s) return html;
  return html.slice(0, s.inicio) + render(s.cuerpo) + html.slice(s.fin);
}

/** Quita los envoltorios de bloque y deja el texto con sus etiquetas en línea. */
function soloTexto(fragmento) {
  return fragmento
    .replace(/<\/?(?:p|li|ul|ol)[^>]*>/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * "Mito vs. Realidad" se vuelve cuenta T: cargo en tinta, abono en verde.
 * El libro escribe esa sección de dos formas (párrafos sueltos en el capítulo 1,
 * lista con viñetas en los demás), así que se buscan las marcas y no la
 * estructura: cada <strong>Mito:</strong> abre un renglón y el siguiente
 * <strong>Realidad:</strong> lo cierra.
 */
function cuentaT(html) {
  const abre = /(?:<hr\s*\/?>\s*)?<h2[^>]*>\s*Mito\s+vs\.?\s+Realidad\s*<\/h2>/i;
  const m = abre.exec(html);
  if (!m) return html;

  const desde = m.index + m[0].length;
  const cola = html.slice(desde);
  const cierra = /<h[1-3][\s>]|<hr[\s/>]/i.exec(cola);
  const finSeccion = cierra ? cierra.index : cola.length;
  const seccion = cola.slice(0, finSeccion);
  const resto = cola.slice(finSeccion);

  const marca = /<strong>\s*(Mito|Realidad)\s*:?\s*<\/strong>/gi;
  const trozos = [];
  let etiqueta = null;
  let inicio = 0;
  for (let mm; (mm = marca.exec(seccion)); ) {
    if (etiqueta) trozos.push([etiqueta, soloTexto(seccion.slice(inicio, mm.index))]);
    etiqueta = mm[1];
    inicio = mm.index + mm[0].length;
  }
  if (etiqueta) trozos.push([etiqueta, soloTexto(seccion.slice(inicio))]);

  const pares = [];
  let pendiente = null;
  for (const [tipo, texto] of trozos) {
    if (/^mito$/i.test(tipo)) {
      if (pendiente !== null) pares.push([pendiente, ""]);
      pendiente = texto;
    } else {
      pares.push([pendiente ?? "", texto]);
      pendiente = null;
    }
  }
  if (pendiente !== null) pares.push([pendiente, ""]);
  if (!pares.length) return html;

  const filas = pares
    .map(
      ([mito, real]) => `  <div class="ct-fila">
    <div class="ct-celda ct-cargo"><span class="ct-etq">Mito</span><p>${mito}</p></div>
    <div class="ct-celda ct-abono"><span class="ct-etq">Realidad</span><p>${real}</p></div>
  </div>`,
    )
    .join("\n");

  const bloque = `<section class="cuenta-t">
  <p class="ct-folio">Mito &middot; Realidad</p>
${filas}
</section>`;

  return html.slice(0, m.index) + bloque + resto;
}

/**
 * Convención antienvejecimiento: cualquier párrafo que abra con
 * "**Verificado en <mes> de <año>.**" se marca visualmente como dato con fecha
 * de corte, para que la próxima actualización sea un barrido y no arqueología.
 */
function datoFechado(html) {
  return html.replace(
    /<p>\s*<strong>\s*(Verificado[^<]*?)\s*<\/strong>\s*([\s\S]*?)<\/p>/gi,
    (_, etiqueta, cuerpo) =>
      `<p class="dato-fechado"><span class="df-etq">${etiqueta.replace(/\.$/, "")}</span>${cuerpo.trim()}</p>`,
  );
}

/**
 * Convierte las tres secciones de cierre de cada capítulo en los componentes
 * de la identidad: la póliza, la terminal y la nota.
 */
export function decorar(html) {
  let out = datoFechado(cuentaT(html));

  out = reemplazar(
    out,
    3,
    "Lo que te llevas",
    (cuerpo) => `<section class="poliza">
  <p class="poliza-folio">Lo que te llevas</p>
  ${cuerpo.trim()}
  <div class="doble-raya"></div>
</section>`,
  );

  out = reemplazar(
    out,
    3,
    "Pru[eé]balo t[uú] mismo",
    (cuerpo) => `<section class="terminal">
  <div class="term-chrome">${DOTS}<span class="term-nombre">pruébalo tú mismo</span></div>
  <div class="term-cuerpo">${cuerpo.trim()}</div>
</section>`,
  );

  out = reemplazar(
    out,
    3,
    "Si quieres ir m[aá]s lejos",
    (cuerpo) => `<section class="nota-plus">
  <p class="nota-folio">Si quieres ir más lejos</p>
  ${cuerpo.trim()}
</section>`,
  );

  return out;
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

function documento(cuerpo, { rayado = false } = {}) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><style>${CSS}${rayado ? "" : "\nbody{background:#FFFFFF;}"}</style></head>
<body>
${cuerpo}
</body>
</html>`;
}

const PIE = `<style>${fontFaces()}</style>
<div style="width:100%;padding:0 1.25in;font-family:'JetBrains Mono',monospace;font-size:7pt;letter-spacing:0.08em;color:${C.inkDim};display:flex;justify-content:space-between;-webkit-print-color-adjust:exact;">
  <span>IA PARA CONTADORES &middot; ${EDICION.sitio.toUpperCase()}</span>
  <span class="pageNumber"></span>
</div>`;

/**
 * Arma el PDF en dos pasadas y las une:
 *  - las hojas de cortesía (portada y colofón) van a sangre y sin foliar,
 *  - el cuerpo lleva márgenes de lectura y número de página al pie.
 * Unirlas con pdf-lib es la única forma de que la portada no salga numerada.
 */
export async function renderLibro({ cortesia, cuerpo, salida, meta = {} }) {
  const browser = await puppeteer.launch({ headless: true });

  async function aPdf(html, opciones) {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0", timeout: 180_000 });
    await page.evaluateHandle("document.fonts.ready");
    const bytes = await page.pdf({ format: "Letter", printBackground: true, ...opciones });
    await page.close();
    return bytes;
  }

  const cortesiaPdf = await aPdf(documento(cortesia, { rayado: true }), {
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });

  const cuerpoPdf = await aPdf(documento(cuerpo), {
    margin: PAGINA.margen,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: PIE,
  });

  await browser.close();

  const doc = await PDFDocument.create();
  for (const bytes of [cortesiaPdf, cuerpoPdf]) {
    const src = await PDFDocument.load(bytes);
    const paginas = await doc.copyPages(src, src.getPageIndices());
    paginas.forEach((p) => doc.addPage(p));
  }

  doc.setTitle(meta.titulo ?? EDICION.titulo);
  doc.setAuthor(EDICION.autor);
  doc.setSubject(meta.subtitulo ?? EDICION.subtitulo);
  doc.setKeywords(["IA para contadores", "inteligencia artificial", "SAT", "México", "contabilidad"]);
  doc.setProducer(EDICION.sitio);
  doc.setCreator(EDICION.sitio);

  const { writeFileSync } = await import("fs");
  writeFileSync(salida, await doc.save());
  return doc.getPageCount();
}
