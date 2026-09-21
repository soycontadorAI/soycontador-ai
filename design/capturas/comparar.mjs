/**
 * Instantánea de estilos computados del sitio construido, para demostrar que
 * un refactor de CSS no cambió nada visible.
 *
 * Por cada ruta y ancho recorre todos los elementos del <body> y guarda su
 * caja (getBoundingClientRect, redondeada) y las propiedades que deciden cómo
 * se ve, con clave = ruta DOM por posición. Dos instantáneas de dos builds se
 * comparan con `diff -r`: vacío significa cero cambio, incluidos los
 * subpíxeles que una captura no enseña.
 *
 * Uso:
 *   node design/capturas/comparar.mjs <carpeta-destino> [rutas separadas por coma]
 *
 * Supone el build servido en http://127.0.0.1:4321 (por ejemplo
 * `python3 -m http.server 4321 --bind 127.0.0.1` dentro de dist/client).
 * Pide movimiento reducido para que los reveals estén en su estado final y
 * ningún valor dependa del momento en que se tomó la foto. Los :hover no se
 * capturan: esos se revisan a mano.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import puppeteer from "puppeteer";

const OUT = process.argv[2];
if (!OUT) {
  console.error("Falta la carpeta destino.");
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const RUTAS = (
  process.argv[3] ??
  "/,/audita/,/capacitacion/,/club/,/contacto/,/dentro/,/despachos/,/ebook/,/empieza/,/flujos/,/gracias/,/herramientas/,/jueves/,/privacidad/,/recibos/,/sobre-mi/,/soluciones/,/404.html"
).split(",");
const ANCHOS = [390, 820, 1280];

const PROPS = [
  "display", "position", "opacity", "visibility", "overflow",
  "color", "background-color", "background-image", "background-size",
  "border-top", "border-right", "border-bottom", "border-left", "border-radius",
  "box-shadow", "outline",
  "padding", "margin", "gap", "grid-template-columns", "flex", "align-items", "justify-content",
  "font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing",
  "text-transform", "text-decoration", "text-align", "white-space",
  "transform", "translate", "max-width", "min-height", "z-index",
];

function volcar(props) {
  const filas = [];
  const ruta = (el) => {
    const partes = [];
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const i = Array.from(n.parentElement.children).indexOf(n) + 1;
      partes.unshift(`${n.tagName.toLowerCase()}:${i}`);
    }
    return partes.join(">");
  };
  // Lo que depende del instante de la foto no cuenta: un elemento con una
  // animación corriendo (la flecha "Baja") y el residuo del reveal, que unas
  // veces termina en `translate: none` y otras en `0px`.
  const limpio = (p, v) => {
    if (p === "translate" && v === "0px") return "none";
    if (p === "transform" && v === "matrix(1, 0, 0, 1, 0, 0)") return "none";
    return v;
  };
  for (const el of document.body.querySelectorAll("*")) {
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE") continue;
    if (el.getAnimations().some((a) => a.playState === "running")) continue;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const caja = [r.x, r.y + window.scrollY, r.width, r.height].map((v) => Math.round(v * 2) / 2);
    const estilos = props.map((p) => `${p}=${limpio(p, cs.getPropertyValue(p))}`).join(" | ");
    filas.push(`${ruta(el)}\n  caja=${caja.join(",")}\n  ${estilos}`);
  }
  return filas.join("\n");
}

/** Estados que solo existen después de enviar un formulario. */
function estadosOcultos() {
  document.querySelectorAll("[data-agenda]").forEach((e) => (e.hidden = false));
  document.querySelectorAll("form button[type=submit]").forEach((b) => (b.hidden = true));
  document.querySelectorAll(".nl-form").forEach((f) => (f.dataset.estado = "ok"));
}

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);

for (const ruta of RUTAS) {
  const nombre = ruta.replaceAll("/", "").replace(".html", "") || "home";
  for (const w of ANCHOS) {
    await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://127.0.0.1:4321${ruta}`, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    // Recorre la página para que todo [data-reveal] reciba is-visible.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 200));
    });
    writeFileSync(`${OUT}/${nombre}-${w}.txt`, await page.evaluate(volcar, PROPS));
    await page.evaluate(estadosOcultos);
    writeFileSync(`${OUT}/${nombre}-${w}-estados.txt`, await page.evaluate(volcar, PROPS));
  }
  console.log(nombre);
}
await browser.close();
