/**
 * armar.mjs: arma los prototipos de la ronda 3 ("mundos") sobre la home REAL.
 *
 * No hay maqueta escrita a mano: cada prototipo es el HTML que Astro compila
 * para `/`, con el mismo copy y el mismo CSS, más una capa de movimiento
 * encima. Así la comparación es de experiencia, no de contenido, y lo que se
 * aprueba aquí es exactamente lo que se porta al sitio.
 *
 *   pnpm build                              # una vez, para tener dist/
 *   node design/mockups/mundos/armar.mjs    # escribe g-, h- e i-*.html
 *
 * Qué le hace al HTML compilado, y por qué:
 *   - Mete el CSS del sitio en línea y apunta las fuentes a node_modules (como
 *     las plantillas de design/piezas/), para que abra con doble clic.
 *   - Quita la medición y el prefetch: un prototipo no manda datos a GA4.
 *   - Desarma los formularios: aquí no se envía nada a /api/lead ni a Sendy.
 *   - Agrupa las secciones en MUNDOS (día / noche). Es el único cambio de
 *     marcado que pide la propuesta, y se hace aquí para que quede en el HTML
 *     estático y no dependa de JavaScript.
 *
 * Trae el guardarraíl de los demás generadores del proyecto: si un patrón que
 * espera no aparece exactamente una vez, falla en vez de escribir un
 * prototipo a medias.
 *
 * OJO: está hecho para la home de ANTES de implementar la ronda (commit
 * cbf85b7: carrusel, sin mundos). Contra la de ahora sus guardarraíles fallan,
 * y está bien: los prototipos quedan como registro. Para regenerarlos, compilar
 * ese commit (ver design/MUNDOS.md §5).
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const aqui = dirname(fileURLToPath(import.meta.url));
const RAIZ = resolve(aqui, "..", "..", "..");
const DIST = resolve(RAIZ, "dist", "client");
const SALIDA = resolve(aqui, "..");

/* Desde design/mockups/ hasta la raíz del repo. */
const A_RAIZ = "../../";

if (!existsSync(resolve(DIST, "index.html"))) {
  console.error("Falta dist/client/index.html. Corre `pnpm build` primero.");
  process.exit(1);
}

/** Reemplaza y exige que el patrón aparezca exactamente `veces` veces. */
function cambia(html, patron, por, veces = 1) {
  const re = patron instanceof RegExp ? new RegExp(patron.source, patron.flags.includes("g") ? patron.flags : patron.flags + "g") : null;
  const n = re ? (html.match(re) ?? []).length : html.split(patron).length - 1;
  if (n !== veces) throw new Error(`Esperaba ${veces} coincidencia(s) de ${patron} y hubo ${n}.`);
  return re ? html.replace(re, por) : html.split(patron).join(por);
}

/* ---------- Fuentes: de /_astro/<nombre>.<hash>.woff2 a node_modules ---------- */
const PAQUETES = [
  ["space-grotesk", "node_modules/@fontsource-variable/space-grotesk/files"],
  ["jetbrains-mono", "node_modules/@fontsource-variable/jetbrains-mono/files"],
  ["instrument-serif", "node_modules/@fontsource/instrument-serif/files"],
];
function rutaFuente(archivo) {
  const limpio = archivo.replace(/\.[A-Za-z0-9_-]{8}\.(woff2?)$/, ".$1");
  for (const [prefijo, carpeta] of PAQUETES) {
    if (!limpio.startsWith(prefijo)) continue;
    if (!existsSync(resolve(RAIZ, carpeta, limpio))) throw new Error(`No encuentro ${carpeta}/${limpio}`);
    return `${A_RAIZ}${carpeta}/${limpio}`;
  }
  throw new Error(`Fuente sin paquete conocido: ${archivo}`);
}

/* ---------- La base: la home compilada, saneada ---------- */
function base() {
  let html = readFileSync(resolve(DIST, "index.html"), "utf8");

  // Los comentarios <!-- --> de index.astro llegan tal cual al HTML publicado
  // (notas internas de diseño, visibles en "ver código fuente"). Aquí estorban
  // para agrupar las secciones; en el sitio conviene pasarlos a {/* */}.
  html = html.replace(/<!--[\s\S]*?-->/g, "");

  // CSS del sitio en línea, en el mismo orden en que lo pide la página.
  const hojas = [...html.matchAll(/<link rel="stylesheet" href="\/_astro\/([^"]+\.css)">/g)].map((m) => m[1]);
  if (hojas.length !== 2) throw new Error(`Esperaba 2 hojas de estilo y hay ${hojas.length}.`);
  const css = hojas
    .map((h) => readFileSync(resolve(DIST, "_astro", h), "utf8"))
    .join("\n")
    .replace(/url\(\/_astro\/([^)]+)\)/g, (_, f) => `url(${rutaFuente(f)})`);
  for (const h of hojas) html = cambia(html, `<link rel="stylesheet" href="/_astro/${h}">`, "");
  html = cambia(html, "</head>", `<style id="sitio">${css}</style></head>`);

  // Scripts que no van en un prototipo: prefetch y los dos formularios. El de
  // la fachada del video se queda, en línea y con la medición desconectada.
  html = cambia(html, /<script type="module" src="\/_astro\/page\.[^"]+"><\/script>/, "");
  html = cambia(html, /<script type="module" src="\/_astro\/LeadForm[^"]+"><\/script>/, "");
  html = cambia(html, /<script type="module" src="\/_astro\/NewsletterForm[^"]+"><\/script>/, "");
  const video = readdirSync(resolve(DIST, "_astro")).find((f) => f.startsWith("VideoFacade") && f.endsWith(".js"));
  const codigoVideo = readFileSync(resolve(DIST, "_astro", video), "utf8").replace(
    /^import\{t as e\}from"\.\/medir\.[^"]+";/,
    "const e=()=>{};",
  );
  html = cambia(html, new RegExp(`<script type="module" src="/_astro/${video.replace(/\./g, "\\.")}"></script>`), `<script type="module">${codigoVideo}</script>`);

  // Rutas: imágenes a public/, anclas de la home a la misma página, y el resto
  // de los enlaces al sitio publicado para que no se rompan al hacer clic.
  html = html.replace(/src="\/assets\//g, `src="${A_RAIZ}public/assets/`);
  html = html.replace(/href="\/(favicon\.svg|favicon\.ico|apple-touch-icon\.png|site\.webmanifest)"/g, `href="${A_RAIZ}public/$1"`);
  html = cambia(html, '<link rel="sitemap" href="/sitemap-index.xml">', "");
  // El manifest no se puede leer desde file:// (CORS) y solo ensucia la consola.
  html = cambia(html, /<link rel="manifest"[^>]*>/, "");
  html = html.replace(/href="\/#/g, 'href="#');
  html = cambia(html, 'href="/" aria-label="soycontador.ai, inicio"', 'href="#" aria-label="soycontador.ai, inicio"');
  html = html.replace(/href="\/([a-z])/g, 'href="https://soycontador.ai/$1');
  html = cambia(html, /<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex">');

  // Formularios desarmados: el envío se queda en la página con un aviso.
  html = cambia(
    html,
    "</body>",
    `<script>document.addEventListener("submit",(e)=>{e.preventDefault();const f=e.target;const m=f.querySelector("small");if(m)m.textContent="Prototipo: este formulario no envía nada.";},true);</script></body>`,
  );
  return html;
}

/* ---------- Los mundos ----------
 * Cada sección cae en un mundo. Las secciones contiguas del mismo mundo se
 * envuelven juntas: la frontera entre mundos es lo que se anima, no la
 * frontera entre secciones. El mapa es el mismo en las tres direcciones para
 * que la comparación sea del MECANISMO, no de dónde cae la noche. */
const MAPA = [
  ["portada", "dia", "Acto 1 · la promesa"],
  ["escena", "noche", "La máquina trabaja de madrugada"],
  ["vuelta", "dia", "Acto 2 · la persona"],
  ["quien", "dia"],
  ["testimonios", "dia"],
  ["ofertas", "noche", "Acto 3 · el escaparate"],
  ["cita", "noche"],
  ["guia", "noche"],
  ["faq", "dia", "Acto 4 · la decisión"],
  ["bandos", "dia"],
  ["cierre", "dia"],
];

/* El mapa de G · Hojas después de la decisión de Israel (2026-10-01): el
 * asiento de cierre pasa al papel (el plumón de "no se regatea" no se lucía
 * sobre la noche) y con eso la noche del escaparate queda en las seis puertas.
 * La guía no se vuelve hoja: es una ISLA de terminal dentro del día, como la
 * figura de la terminal en la bio (cuarto elemento del renglón). */
const MAPA_HOJAS = MAPA.map(([seccion, mundo, nota]) => {
  if (seccion === "cita") return [seccion, "dia", "Acto 4 · la decisión"];
  if (seccion === "guia") return [seccion, "dia", null, "noche"];
  if (seccion === "faq") return [seccion, "dia"];
  return [seccion, mundo, nota];
});

function agrupa(html, { pieDentro = false, atributo = "data-mundo", mapa = MAPA } = {}) {
  const abre = html.indexOf("<main");
  const cuerpoIni = html.indexOf(">", abre) + 1;
  const cuerpoFin = html.indexOf("</main>");
  const cuerpo = html.slice(cuerpoIni, cuerpoFin);
  // split con lookahead no deja un trozo vacío al inicio: el primero ya es la
  // primera sección, y si no lo es, hay marcado suelto que no se sabe agrupar.
  const secciones = cuerpo.split(/(?=<section )/);
  if (!secciones[0].startsWith("<section ")) throw new Error("Había marcado suelto antes de la primera sección: " + secciones[0].slice(0, 160));
  if (secciones.length !== mapa.length) throw new Error(`Esperaba ${mapa.length} secciones y hay ${secciones.length}.`);

  const nombre = (s) => (s.match(/^<section (?:class="([a-z]+)"[^>]*?)?(?: ?id="([a-z]+)")?/) ?? []).slice(1).find(Boolean);
  let salida = "";
  let actual = null;
  secciones.forEach((s, i) => {
    const [esperado, mundo, , isla] = mapa[i];
    const visto = s.startsWith(`<section class="${esperado}"`) || s.startsWith(`<section id="${esperado}"`);
    if (!visto) throw new Error(`La sección ${i + 1} debía ser "${esperado}" y es "${nombre(s)}".`);
    if (mundo !== actual) {
      if (actual) salida += "</div>";
      salida += `<div class="mundo" ${atributo}="${mundo}">`;
      actual = mundo;
    }
    // Una isla es una sección que se pinta con el otro mundo sin cortar la hoja.
    salida += isla ? s.replace(/^<section /, `<section ${atributo}="${isla}" `) : s;
  });

  let pie = "";
  if (pieDentro) {
    // El pie se vuelve el último mundo: la última hoja, la que cierra el libro.
    const ini = html.indexOf('<footer class="site-footer"');
    const fin = html.indexOf("</footer>", ini) + "</footer>".length;
    if (ini < 0) throw new Error("No encontré el pie del sitio.");
    pie = `</div><div class="mundo mundo-pie" ${atributo}="noche">${html.slice(ini, fin)}`;
    html = html.slice(0, ini) + html.slice(fin);
    salida += pie;
    salida += "</div>";
    return html.slice(0, cuerpoIni) + salida + html.slice(html.indexOf("</main>"));
  }
  salida += "</div>";
  html = html.slice(0, cuerpoIni) + salida + html.slice(cuerpoFin);
  // Fuera de main, el pie se marca como mundo sin moverlo de lugar.
  return cambia(html, '<footer class="site-footer"', `<footer ${atributo}="noche" class="site-footer"`);
}

/* ---------- El logotipo elegido ----------
 * logos.js es la fuente única del marcado de las alternativas (lo lee también
 * su página de comparación). Es código de navegador, así que se evalúa en un
 * contexto aislado con un `window` de mentira y se toma el html de ahí. */
function montaLogo(html, clave) {
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(resolve(aqui, "..", "logos", "logos.js"), "utf8"), ctx);
  const logo = ctx.window.LOGOS?.[clave];
  if (!logo) throw new Error(`logos.js no trae "${clave}".`);
  html = cambia(
    html,
    /(<a class="site-logo" href="#" aria-label=")[^"]*(")([^>]*>)[\s\S]*?(<\/a>)/,
    `$1${logo.aria}$2$3${logo.html}$4`,
  );
  return cambia(html, "<html ", `<html data-logo="${clave}" `);
}

/* ---------- Las tres direcciones ---------- */
const DIRECCIONES = [
  /* La elegida (2026-10-01): con su mapa ajustado, el logotipo A montado en
     la cabecera y las tres alternativas de "Qué encuentras aquí". */
  {
    archivo: "g-hojas.html",
    clave: "hojas",
    titulo: "G · Hojas",
    mapa: MAPA_HOJAS,
    logo: "contrapartida",
    css: ["logos/logos.css", "mundos/ofertas.css"],
    js: ["mundos/ofertas.js"],
  },
  { archivo: "h-portal.html", clave: "portal", titulo: "H · Portal" },
  /* En Jornada el mundo es de la página entera (lo lleva el body), así que las
     secciones solo marcan su ZONA y no repintan nada por su cuenta. */
  { archivo: "i-jornada.html", clave: "jornada", titulo: "I · Jornada", atributo: "data-zona" },
];

const pedidas = process.argv.slice(2);
const html0 = base();
for (const d of DIRECCIONES) {
  if (pedidas.length && !pedidas.includes(d.clave)) continue;
  let html = agrupa(html0, { pieDentro: d.pieDentro, atributo: d.atributo, mapa: d.mapa });
  if (d.logo) html = montaLogo(html, d.logo);
  html = html.replace(/<title>([^<]*)<\/title>/, `<title>Prototipo ${d.titulo} · $1</title>`);
  html = cambia(
    html,
    "</head>",
    `<link rel="stylesheet" href="mundos/comun.css"><link rel="stylesheet" href="mundos/${d.clave}.css">` +
      (d.css ?? []).map((h) => `<link rel="stylesheet" href="${h}">`).join("") +
      "</head>",
  );
  html = cambia(html, "<html ", `<html data-direccion="${d.clave}" `);
  html = cambia(
    html,
    "</body>",
    `<script defer src="mundos/motor.js"></script><script defer src="mundos/${d.clave}.js"></script><script defer src="mundos/visor.js"></script>` +
      (d.js ?? []).map((j) => `<script defer src="${j}"></script>`).join("") +
      "</body>",
  );
  writeFileSync(resolve(SALIDA, d.archivo), html);
  console.log(`✓ design/mockups/${d.archivo} (${Math.round(html.length / 1024)} KB)`);
}
