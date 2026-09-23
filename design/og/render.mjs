/**
 * render.mjs — convierte las plantillas de `design/og/*.html` en los PNG de
 * Open Graph que viven en `public/`.
 *
 *   node design/og/render.mjs              # todas
 *   node design/og/render.mjs despachos    # solo og-despachos.html
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
import { readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const aqui = dirname(fileURLToPath(import.meta.url));
const RAIZ = resolve(aqui, "..", "..");

/** Medida de Open Graph. Facebook, LinkedIn y X sirven todos esta caja. */
const ANCHO = 1200;
const ALTO = 630;

const pedidas = process.argv.slice(2).filter((a) => !a.startsWith("--"));

const plantillas = readdirSync(aqui)
  .filter((f) => f.startsWith("og-") && f.endsWith(".html"))
  .filter((f) => !pedidas.length || pedidas.includes(f.replace(/^og-|\.html$/g, "")));

if (!plantillas.length) {
  console.error(
    pedidas.length
      ? `\n  No hay plantilla para: ${pedidas.join(", ")}\n  Se esperaba design/og/og-<nombre>.html\n`
      : "\n  No hay plantillas og-*.html en design/og/\n",
  );
  process.exit(1);
}

const navegador = await puppeteer.launch({ headless: true });

for (const plantilla of plantillas) {
  const nombre = plantilla.replace(/^og-|\.html$/g, "");
  const pagina = await navegador.newPage();
  await pagina.setViewport({ width: ANCHO, height: ALTO, deviceScaleFactor: 1 });
  await pagina.goto(pathToFileURL(resolve(aqui, plantilla)).href, {
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
  const destino = resolve(RAIZ, "public", `og-${nombre}.png`);
  writeFileSync(destino, bytes);
  console.log(`  ✓ public/og-${nombre}.png  (${(bytes.length / 1024).toFixed(0)} KB)`);
  await pagina.close();
}

await navegador.close();
