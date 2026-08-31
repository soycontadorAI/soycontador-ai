/**
 * Genera el PDF completo de "IA para Contadores".
 *
 * El diseño vive entero en ./lib/tema.mjs (identidad "Libro mayor × terminal"
 * de soycontador.ai) y la lectura del contenido en ./lib/contenido.mjs; aquí
 * solo se arma el documento.
 *
 *   pnpm ebook:libro
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import {
  cargarCapitulos,
  cuerpoDe,
  folioDe,
  imagenDe,
  numeroDe,
  tituloDe,
} from "./lib/contenido.mjs";
import {
  EDICION,
  capituloHtml,
  cierreHtml,
  colofonHtml,
  indiceHtml,
  portadaHtml,
  renderLibro,
} from "./lib/tema.mjs";

const salidaDir = resolve(dirname(fileURLToPath(import.meta.url)), "salida");

const todos = cargarCapitulos();
const capitulos = todos.filter((c) => c.chapter <= 17);
const apendices = todos.filter((c) => c.chapter >= 18);

// ---------------------------------------------------------------------------
// Hojas de cortesía
// ---------------------------------------------------------------------------

const cortesia = [
  portadaHtml({
    ficha: [
      { num: "17", etq: "capítulos" },
      { num: "03", etq: "apéndices" },
      { num: "00", etq: "líneas de código" },
    ],
  }),
  colofonHtml({
    filas: [
      { etq: "Título", val: `<b>${EDICION.titulo}</b>` },
      { etq: "Autor", val: `${EDICION.autor}, ${EDICION.autorRol.toLowerCase()}` },
      {
        etq: "Edición",
        val: `${EDICION.nombre} &middot; ${EDICION.fecha} &middot; v${EDICION.version}`,
      },
      { etq: "Contenido", val: "17 capítulos y 3 apéndices" },
      { etq: "En línea", val: `<a href="${EDICION.urlEbook}">${EDICION.sitio}/ebook</a>` },
    ],
    nota: `
    <p><strong>Este libro se mantiene vivo.</strong> La inteligencia artificial cambia
    de mes en mes, así que lo que caduca se actualiza y se vuelve a publicar. Por
    eso el libro enseña fundamentos antes que recetas: los fundamentos no
    caducan, las interfaces sí.</p>
    <p>Lo que sí cambia de un modelo a otro (parámetros, precios, memoria) va
    marcado como tal y con su fecha de verificación, para que sepas qué revisar
    y cuándo.</p>
    <p>Tu copia es de <strong>uso personal</strong>. Si el libro le sirve a un colega,
    mándale la liga (${EDICION.sitio}/ebook) en lugar del archivo: así le llegan
    también las actualizaciones.</p>`,
  }),
].join("\n");

// ---------------------------------------------------------------------------
// Cuerpo
// ---------------------------------------------------------------------------

const item = (ch) => ({ num: numeroDe(ch), titulo: tituloDe(ch), desc: ch.description });

const indice = indiceHtml({
  grupos: [
    { items: capitulos.map(item) },
    { etiqueta: "Apéndices", items: apendices.map(item) },
  ],
});

const paginas = todos
  .map((ch) =>
    capituloHtml({
      folio: folioDe(ch),
      titulo: tituloDe(ch),
      descripcion: ch.description,
      imagen: imagenDe(ch),
      cuerpo: cuerpoDe(ch),
    }),
  )
  .join("\n");

const cierre = cierreHtml({
  folio: "Cierre del asiento",
  titulo: "Gracias por leerlo completo.",
  parrafos: [
    "Si algo de aquí te ahorró una tarde de trabajo, ya valió la pena. Y si le sirve a un colega, mándale la liga del libro en lugar del archivo: así también le llegan las actualizaciones.",
    "Cada jueves a las 11 de la mañana, hora del centro de México, resuelvo en vivo un problema real de un despacho usando IA. Ahí es donde esto deja de ser teoría.",
  ],
  terminal: [
    `<a href="${EDICION.urlEbook}">${EDICION.sitio}</a>`,
    `<a href="https://www.youtube.com/@todoconta">youtube.com/@todoconta</a> &nbsp;<span class="tenue">// Jueves de ContadorIA</span>`,
  ],
});

// ---------------------------------------------------------------------------

const salida = resolve(salidaDir, "ia-para-contadores.pdf");
const paginasTotales = await renderLibro({
  cortesia,
  cuerpo: `${indice}\n${paginas}\n${cierre}`,
  salida,
});

console.log(`PDF generado: ${salida} (${paginasTotales} páginas)`);
