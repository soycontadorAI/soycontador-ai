/**
 * servir.mjs: sirve el repo en http://localhost:4400 para ver los mockups.
 *
 * En Chrome los prototipos abren con doble clic. Firefox y Safari son más
 * estrictos con file:// y no cargan las fuentes de node_modules (las piden
 * desde una carpeta "de arriba"), así que ahí se ven con Georgia. Con este
 * servidor todo sale del mismo origen y se ve igual en los tres.
 *
 *   node design/mockups/mundos/servir.mjs
 *   → http://localhost:4400/design/mockups/
 *
 * Solo lectura, solo localhost, sin dependencias.
 */
import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const PUERTO = Number(process.env.PUERTO ?? 4400);
const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

/* Solo lo que los mockups necesitan. El repo tiene .env.local con llaves:
   nada fuera de esta lista se sirve, aunque sea en localhost. */
const PERMITIDO = ["design/", "public/", "node_modules/@fontsource/", "node_modules/@fontsource-variable/"];

createServer((req, res) => {
  const ruta = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let archivo = normalize(join(RAIZ, ruta));
  const relativa = archivo.slice(RAIZ.length + 1);
  if (!archivo.startsWith(RAIZ + "/") || !PERMITIDO.some((p) => relativa.startsWith(p)) || /(^|\/)\./.test(relativa)) {
    res.writeHead(403).end("Fuera de los mockups");
    return;
  }
  try {
    if (statSync(archivo).isDirectory()) archivo = join(archivo, "index.html");
    statSync(archivo);
  } catch {
    res.writeHead(404).end("No existe");
    return;
  }
  res.writeHead(200, { "Content-Type": TIPOS[extname(archivo)] ?? "application/octet-stream" });
  createReadStream(archivo).pipe(res);
}).listen(PUERTO, "127.0.0.1", () => {
  console.log(`Mockups en http://localhost:${PUERTO}/design/mockups/`);
});
