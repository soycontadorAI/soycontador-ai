/**
 * Genera la muestra gratuita de "IA para Contadores": introducción y capítulos
 * 1 y 2, con el resto del índice a la vista pero marcado como bloqueado.
 *
 * Lee el MISMO markdown que el PDF completo (antes tenía el texto copiado a
 * mano y por eso se quedaba atrás en cada corrección). El diseño también sale
 * entero de ./lib/tema.mjs.
 *
 *   pnpm ebook:muestra
 */

import { dirname, resolve } from "path";
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

/** Lo que se regala. Si cambia, cambia también el chip de la portada. */
const ABIERTOS = [0, 1, 2];

// ---------------------------------------------------------------------------

const todos = cargarCapitulos();
const muestra = todos.filter((c) => ABIERTOS.includes(c.chapter));
const capitulos = todos.filter((c) => c.chapter <= 17);
const apendices = todos.filter((c) => c.chapter >= 18);

const cortesia = [
  portadaHtml({
    chip: "Muestra gratuita · Introducción y capítulos 1 y 2",
    pie: `${EDICION.sitio}/ebook`,
    ficha: [
      { num: "03", etq: "piezas abiertas" },
      { num: "18", etq: "en la edición completa" },
      { num: "00", etq: "líneas de código" },
    ],
  }),
  colofonHtml({
    filas: [
      { etq: "Esto es", val: "<b>Una muestra</b> de la edición completa" },
      { etq: "Incluye", val: "Introducción, capítulo 1 y capítulo 2, completos" },
      { etq: "Falta", val: "15 capítulos y 3 apéndices" },
      { etq: "Edición", val: `${EDICION.nombre} &middot; ${EDICION.fecha} &middot; v${EDICION.version}` },
      { etq: "Completo en", val: `<a href="${EDICION.urlEbook}">${EDICION.sitio}/ebook</a>` },
    ],
    nota: `
    <p><strong>Léela completa antes de decidir.</strong> No es un adelanto recortado:
    son tres piezas íntegras, con sus ejercicios y sus cierres, tal como están en
    el libro. Si al terminar el capítulo 2 sientes que ya entendiste algo que
    llevabas meses oyendo sin entender, el resto funciona igual.</p>
    <p>Y si no, no compres. Prefiero eso a un reembolso.</p>
    <p>Puedes reenviar este archivo a quien quieras: es la muestra, y para eso es.</p>`,
  }),
].join("\n");

const item = (ch) => ({
  num: numeroDe(ch),
  titulo: tituloDe(ch),
  desc: ch.description,
  bloqueado: !ABIERTOS.includes(ch.chapter),
});

const indice = indiceHtml({
  titulo: "Contenido completo",
  grupos: [
    { items: capitulos.map(item) },
    { etiqueta: "Apéndices", items: apendices.map(item) },
  ],
});

const paginas = muestra
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
  folio: "Hasta aquí la muestra",
  titulo: "Faltan 15 capítulos<br>y 3 apéndices.",
  parrafos: [
    "Lo que sigue es lo que convierte el concepto en oficio: cómo aprende un modelo y por qué su fecha de corte te importa, qué le cuesta pensar, cómo escribirle instrucciones que no se contradigan, cuándo desconfiar de lo que te contesta y qué nunca debe salir de tu despacho.",
    "Cierra con lo práctico: el glosario para no perderte en la jerga, los recursos que sí valen la pena y prompts de muestra listos para el contexto fiscal mexicano.",
  ],
  terminal: [
    `<a href="${EDICION.urlEbook}">${EDICION.sitio}/ebook</a> &nbsp;<span class="tenue">// libro completo en PDF</span>`,
    `<a href="https://www.youtube.com/@todoconta">youtube.com/@todoconta</a> &nbsp;<span class="tenue">// Jueves de ContadorIA, 11:00 am</span>`,
  ],
});

// ---------------------------------------------------------------------------

const salida = resolve(salidaDir, "ia-para-contadores-preview.pdf");
const paginasTotales = await renderLibro({
  cortesia,
  cuerpo: `${indice}\n${paginas}\n${cierre}`,
  salida,
  meta: { titulo: `${EDICION.titulo} (muestra gratuita)` },
});

console.log(`PDF generado: ${salida} (${paginasTotales} páginas)`);
