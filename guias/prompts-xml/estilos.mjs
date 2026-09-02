/**
 * Identidad "Libro mayor × terminal" aplicada a la guía de los 5 prompts.
 *
 * Los tokens y las fuentes NO se copian: se importan de ebook/lib/tema.mjs, que
 * es el único punto de inyección del diseño en PDF de este proyecto. Si allá
 * cambia el verde o entra un peso nuevo, esta guía lo hereda sin tocarse. Eso
 * es justo lo que evitó tener dos PDFs "parecidos" en vez de hermanos.
 *
 * Lo que SÍ vive aquí es la geometría de página, porque la guía usa un modelo
 * distinto al del libro: cada sección es una carta exacta (`.page` de 11in con
 * overflow oculto) en vez de texto que fluye. Es una decisión suya y se
 * respeta; forzarle el modelo del libro repaginaría las nueve páginas.
 *
 * Reglas de la identidad que este archivo respeta (design/DESIGN.md):
 * - El verde registro solo marca acción: la etiqueta de "copia desde aquí", el
 *   filete del prompt y los datos de salida. Nunca decora un fondo entero.
 * - Los prompts van sobre el fondo de terminal, porque eso es lo que son:
 *   algo que se pega en una consola de chat, no un recuadro de revista.
 * - Cifras, folios y prompts en mono. Serif solo en la cita del cierre.
 * - Sombras duras y desplazadas, jamás difusas.
 */

import { C, fontFaces } from "../../ebook/lib/tema.mjs";

export const CSS = `
${fontFaces()}

* { margin: 0; padding: 0; box-sizing: border-box; }
@page { size: letter; margin: 0; }
html, body { background: ${C.raised}; }

body {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  color: ${C.ink};
  font-size: 9.8pt;
  /* 1.46 y no 1.5: Space Grotesk es más ancha que la Inter con la que se
     maquetó la guía, así que el texto ocupa más renglones y dos páginas se
     recortaban. Medido con el guardarraíl del generador. */
  line-height: 1.46;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.page {
  width: 8.5in;
  height: 11in;
  padding: 0.55in 0.75in 0.7in;
  page-break-after: always;
  position: relative;
  overflow: hidden;
}
.page:last-child { page-break-after: auto; }

/* ── Portada ───────────────────────────────────────────────────────────── */
.cover {
  background: ${C.bg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1in 0.9in 0.7in;
}
.cover .brand { display: inline-flex; align-items: center; gap: 12px; }
.cover .brand svg { display: block; flex-shrink: 0; }

/* El logotipo va en dos familias a propósito: solo el ".ai" cambia, y ese es
   el guiño al dominio y a la terminal. */
.logotipo { display: inline-flex; align-items: baseline; line-height: 1; }
.logotipo .lg-1 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: var(--lg-tam);
  letter-spacing: -0.035em;
  color: var(--lg-tinta);
}
.logotipo .lg-2 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: calc(var(--lg-tam) * 0.62);
  color: var(--lg-verde);
  margin-left: 1px;
}

/* El folio: mono en versalitas, como abre cada sección del sitio. */
.cover .kicker {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8pt;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.inkDim};
  margin-bottom: 20px;
}
.cover h1 {
  font-size: 31pt;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin-bottom: 18px;
}
/* El resaltado del titular es el marcador de la marca, no un color de texto. */
.cover h1 em {
  font-style: normal;
  /* La banda va en 0.34em y no en el 0.42 del texto corrido: a 31pt con un
     interlineado de 1.12 la caja del renglón queda apretada, y una banda alta
     se monta sobre la línea de arriba en vez de subrayar la suya. El clone la
     mantiene entera si la frase se parte en dos renglones. */
  background-image: linear-gradient(to top, ${C.termOk} 0, ${C.termOk} 0.34em, transparent 0.34em);
  background-repeat: no-repeat;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  padding: 0 0.06em;
}
.cover .sub {
  font-size: 11.5pt;
  color: ${C.inkSoft};
  max-width: 5.6in;
  line-height: 1.55;
}
.cover .capas {
  margin-top: 26px;
  border-left: 2px solid ${C.line};
  padding-left: 18px;
  font-size: 10pt;
  color: ${C.inkSoft};
}
.cover .capas div { padding: 3px 0; }
.cover .capas strong {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  font-weight: 700;
  color: ${C.accent};
  margin-right: 6px;
}
.cover .foot {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 2px solid ${C.ink};
  padding-top: 14px;
  font-size: 9pt;
  color: ${C.inkDim};
}

/* El "IA" del nombre del live, en verde: es lo único de esa palabra que se
   marca, y marca justamente la IA. */
.verde { color: ${C.accent}; }
.nota-chica { font-size: 8.8pt; color: ${C.inkDim}; }

/* ── Tipografía ────────────────────────────────────────────────────────── */
h2 {
  font-size: 16.5pt;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 6px;
}
h2 .num {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: ${C.accent};
}
h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8.6pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${C.ink};
  margin: 14px 0 5px;
}
p { margin-bottom: 8px; }
ul, ol { margin: 0 0 8px 17px; }
li { margin-bottom: 3px; }
strong { font-weight: 700; }
.lead { font-size: 10.4pt; color: ${C.inkSoft}; margin-bottom: 10px; }

/* El folio de sección, igual que en el sitio. */
.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8pt;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.inkDim};
  margin-bottom: 4px;
}

/* ── El prompt: terminal, no recuadro ──────────────────────────────────── */
.prompt {
  background: ${C.termBg};
  color: ${C.termBright};
  font-family: 'JetBrains Mono', monospace;
  font-size: 7.3pt;
  /* 1.38: el prompt es texto preformateado y aguanta más apretado que la
     prosa. Es lo que devuelve el espacio que se comió el cambio de familia
     en las páginas 5 y 6, sin encoger la letra. */
  line-height: 1.38;
  padding: 12px 15px;
  white-space: pre-wrap;
  margin: 0 0 10px;
  border-radius: 0 4px 4px 4px;
  box-shadow: 4px 4px 0 ${C.line};
}
/* La etiqueta se pega al prompt como la pestaña de una carpeta: es la acción
   (copiar) y por eso lleva el verde. */
.prompt-label {
  display: inline-block;
  background: ${C.accent};
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 7.2pt;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 11px;
  border-radius: 4px 4px 0 0;
}

/* ── Cajas ─────────────────────────────────────────────────────────────── */
.box {
  background: ${C.surface};
  border-left: 3px solid ${C.ink};
  padding: 11px 15px;
  margin: 11px 0;
  font-size: 9.2pt;
  border-radius: 0 4px 4px 0;
}
.box .box-title {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 8pt;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
/* La caja de IA sí lleva verde: habla de lo que hace la máquina. */
.box.ai { border-left-color: ${C.accent}; background: ${C.accentSoft}; }
.box.ai .box-title { color: ${C.accent}; }
/* La de advertencia va en ámbar, el del semáforo de los tokens. */
.box.warn { border-left-color: ${C.ambar}; background: #FDF8EC; }
.box.warn .box-title { color: #8A5A00; }

/* ── Tablas ────────────────────────────────────────────────────────────── */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8.6pt;
  margin: 9px 0 12px;
}
th {
  background: ${C.ink};
  color: #fff;
  text-align: left;
  padding: 6px 9px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 7.6pt;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
td { padding: 5.5px 9px; border-bottom: 1px solid ${C.line}; vertical-align: top; }
tr:nth-child(even) td { background: ${C.bg}; }
/* Las cifras en mono, como en todo el sistema. */
td.num, th.num { font-family: 'JetBrains Mono', monospace; text-align: right; }

/* ── Franja de metadatos del prompt ────────────────────────────────────── */
.meta { display: flex; gap: 12px; }
.meta > div {
  flex: 1;
  background: ${C.surface};
  border-top: 2px solid ${C.ink};
  padding: 9px 12px;
  font-size: 8.6pt;
  line-height: 1.45;
}
.meta .mt {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 7.4pt;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${C.inkDim};
  margin-bottom: 3px;
}

/* ── Pie de página ─────────────────────────────────────────────────────── */
.footer-line {
  position: absolute;
  bottom: 0.32in;
  left: 0.75in;
  right: 0.75in;
  border-top: 1px solid ${C.line};
  padding-top: 7px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 7.2pt;
  color: ${C.inkDim};
  display: flex;
  justify-content: space-between;
}

/* ── Cierre ────────────────────────────────────────────────────────────── */
.cta {
  background: ${C.termBg};
  color: ${C.termBright};
  padding: 24px 26px;
  margin-top: 16px;
  border-radius: 4px;
}
.cta h3 { color: ${C.termOk}; margin-top: 0; }
.cta p { color: ${C.termInk}; font-size: 9.6pt; }
.cta strong { color: ${C.termBright}; }
.cta .link { color: ${C.termOk}; font-weight: 700; }
`;
