/**
 * render.mjs — convierte las plantillas de `design/og/*.html` en los PNG de
 * Open Graph que viven en `public/`.
 *
 *   node design/og/render.mjs              # todas
 *   node design/og/render.mjs despachos    # solo og-despachos.html
 *
 * Cada plantilla declara su propio lienzo y su destino en dos meta, porque no
 * todas son Open Graph: el banner de LinkedIn mide 1584x396 y no se sirve
 * desde el sitio, se sube a mano.
 *
 *   <meta name="lienzo" content="1200x630">
 *   <meta name="salida" content="public/og-despachos.png">
 *
 * Por qué existe: hasta ahora los OG se renderizaban a mano y el archivo
 * quedaba en `public/` sin nada que lo reprodujera. El resultado fue que
 * `/despachos` sirvió durante semanas el OG del Avatar A, porque nadie tenía
 * a la mano el comando para hacer el suyo.
 *
 * Se carga con `goto file://` y NO con `setContent`, porque las plantillas
 * referencian las fuentes de `node_modules` y los retratos de `public/` por
 * ruta relativa. Con `setContent` no hay documento base y esas rutas no
 * resuelven: saldría la imagen con las fuentes de respaldo y sin retrato.
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const aqui = dirname(fileURLToPath(import.meta.url));
const RAIZ = resolve(aqui, "..", "..");

/** Medida por defecto: Open Graph. Facebook, LinkedIn y X sirven esta caja.
    Una plantilla la cambia con <meta name="lienzo" content="AxB">. */
const LIENZO_POR_DEFECTO = { ancho: 1200, alto: 630 };

/** Lee los meta de la plantilla sin montar un parser: son dos etiquetas. */
function leerMeta(html, nombre) {
  const m = html.match(new RegExp(`<meta\\s+name="${nombre}"\\s+content="([^"]+)"`, "i"));
  return m ? m[1] : null;
}

const pedidas = process.argv.slice(2).filter((a) => !a.startsWith("--"));

const plantillas = readdirSync(aqui)
  .filter((f) => f.endsWith(".html"))
  .filter((f) => !pedidas.length || pedidas.includes(f.replace(/\.html$/, "")));

if (!plantillas.length) {
  console.error(
    pedidas.length
      ? `\n  No hay plantilla para: ${pedidas.join(", ")}\n  Se esperaba design/og/<nombre>.html\n`
      : "\n  No hay plantillas .html en design/og/\n",
  );
  process.exit(1);
}

const navegador = await puppeteer.launch({ headless: true });

for (const plantilla of plantillas) {
  const nombre = plantilla.replace(/\.html$/, "");
  const fuente = resolve(aqui, plantilla);
  const html = readFileSync(fuente, "utf8");

  const lienzo = leerMeta(html, "lienzo");
  const [ANCHO, ALTO] = lienzo
    ? lienzo.split("x").map(Number)
    : [LIENZO_POR_DEFECTO.ancho, LIENZO_POR_DEFECTO.alto];
  const salida = leerMeta(html, "salida") ?? `public/${nombre}.png`;

  const pagina = await navegador.newPage();
  await pagina.setViewport({ width: ANCHO, height: ALTO, deviceScaleFactor: 1 });
  await pagina.goto(pathToFileURL(fuente).href, {
    waitUntil: "networkidle0",
    timeout: 60_000,
  });
  await pagina.evaluateHandle("document.fonts.ready");

  /*
   * Guardarraíl, hermano del de los generadores de guías: con overflow:hidden
   * el texto que no cabe desaparece sin avisar, y un OG amputado se descubre
   * cuando ya lo compartiste. Se compara el contenido real contra la caja.
   */
  const sobra = await pagina.evaluate(
    ([w, h]) => ({
      x: Math.round(document.body.scrollWidth - w),
      y: Math.round(document.body.scrollHeight - h),
    }),
    [ANCHO, ALTO],
  );
  if (sobra.x > 1 || sobra.y > 1) {
    console.error(
      `\n  ${plantilla}: el contenido se sale de la caja (${sobra.x}px de ancho, ${sobra.y}px de alto).` +
        `\n  Ajusta el copy o el tamaño de letra antes de publicar.\n`,
    );
    await navegador.close();
    process.exit(1);
  }

  const bytes = await pagina.screenshot({ type: "png" });
  const destino = resolve(RAIZ, salida);
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, bytes);
  console.log(`  ✓ ${salida}  ${ANCHO}x${ALTO}  (${(bytes.length / 1024).toFixed(0)} KB)`);
  await pagina.close();
}

await navegador.close();
