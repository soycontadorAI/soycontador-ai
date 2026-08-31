/**
 * Lectura del contenido de "IA para Contadores".
 *
 * La fuente de verdad del libro es `ebook/contenido/`. Los dos generadores de
 * PDF leen de aquí para que la muestra nunca se quede atrás de la edición
 * completa.
 */

import { readFileSync, readdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { marked } from "marked";

import { decorar } from "./tema.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
/** Raíz del proyecto del libro (ebook/), un nivel arriba de lib/. */
const raiz = resolve(__dirname, "..");
const capitulosDir = resolve(raiz, "contenido");
const imagenesDir = resolve(raiz, "imagenes");

const LETRAS = ["A", "B", "C", "D"];

/** Todas las piezas del libro, ordenadas por su número de capítulo. */
export function cargarCapitulos() {
  return readdirSync(capitulosDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(readFileSync(resolve(capitulosDir, f), "utf-8"));
      return { ...data, content, file: f };
    })
    .sort((a, b) => a.chapter - b.chapter);
}

/** La ilustración del capítulo, embebida para que el PDF viaje solo. */
export function imagenDe(ch) {
  if (ch.chapter > 17) return null;
  const archivo = `cap-${String(ch.chapter).padStart(2, "0")}.webp`;
  try {
    const buf = readFileSync(resolve(imagenesDir, archivo));
    return `data:image/webp;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

/** Etiqueta larga del encabezado: "Capítulo 07", "Apéndice B". */
export function folioDe(ch) {
  if (ch.chapter === 0) return "Introducción";
  if (ch.chapter >= 18) return `Apéndice ${LETRAS[ch.chapter - 18]}`;
  return `Capítulo ${String(ch.chapter).padStart(2, "0")}`;
}

/** Etiqueta corta del índice: "07", "B". */
export function numeroDe(ch) {
  if (ch.chapter === 0) return "00";
  if (ch.chapter >= 18) return LETRAS[ch.chapter - 18];
  return String(ch.chapter).padStart(2, "0");
}

/** El título sin su prefijo: el prefijo ya lo dice el folio. */
export function tituloDe(ch) {
  return ch.title
    .replace(/^Cap[íi]tulo\s+\d+:\s*/i, "")
    .replace(/^Introducci[óo]n:\s*/i, "")
    .replace(/^Ap[ée]ndice\s+[A-D]:\s*/i, "");
}

/**
 * Markdown a HTML: se quitan los comentarios de redacción y el H1 (el título lo
 * pone el diseño), y las secciones fijas se vuelven componentes de la marca.
 */
export function cuerpoDe(ch) {
  const limpio = ch.content.replace(/<!--[\s\S]*?-->/g, "");
  return decorar(marked.parse(limpio).replace(/<h1[^>]*>[\s\S]*?<\/h1>/, ""));
}
