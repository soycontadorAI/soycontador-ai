/**
 * GET /llms.txt (estático, se genera en build)
 *
 * El índice corto para LLMs. Antes era un archivo suelto en public/, y por eso
 * se quedó atrás: al agregar Instagram a la entidad entró al JSON-LD, al pie y
 * a llms-full.txt, pero no aquí. Ese es justo el fallo que la regla de
 * CLAUDE.md quiere evitar ("site.ts es la fuente única de la entidad; no
 * duplicar esos datos a mano"), y el archivo estático la contradecía en
 * silencio.
 *
 * Ahora los perfiles salen de PERSONA.sameAs, las rutas y los precios de sus
 * respectivas fuentes, y solo las descripciones viven aquí, porque son copy de
 * este archivo y de ningún otro lado.
 */

import type { APIRoute } from "astro";

import { TALLER } from "../lib/capacitacion";
import { EBOOK, PERSONA, SITE } from "../lib/site";

/** Etiqueta legible de cada perfil, por dominio. */
const ETIQUETAS: Array<[string, string]> = [
  ["youtube.com", "YouTube"],
  ["instagram.com", "Instagram"],
  ["linkedin.com", "LinkedIn"],
  ["github.com", "GitHub"],
  ["todoconta.com", "Software"],
];

function etiquetaDe(url: string): string {
  const match = ETIQUETAS.find(([dominio]) => url.includes(dominio));
  return match ? match[1] : new URL(url).hostname.replace(/^www\./, "");
}

/**
 * Qué es cada página, en una línea. Es lo único que se escribe a mano: la ruta
 * sale del objeto, no del texto, así que una página que se renombre no deja
 * aquí un enlace roto.
 */
const PAGINAS: Array<{ ruta: string; titulo: string; que: string }> = [
  { ruta: "/", titulo: "Inicio", que: "quién es Israel Castro y qué ofrece" },
  {
    ruta: "/sobre-mi",
    titulo: "Sobre mí",
    que: "trayectoria de Israel Castro como contador público y desarrollador de software",
  },
  {
    ruta: "/capacitacion",
    titulo: "Capacitación",
    que: `el taller de ${TALLER.duracion} (${TALLER.precio}), con una edición nueva cada mes (se compra UNA edición, no es suscripción); más capacitación para empresas y despachos y licenciamiento para organizaciones`,
  },
  {
    ruta: "/soluciones",
    titulo: "Soluciones a la medida",
    que: "automatización de procesos contables (reportes, conciliaciones, concentrados) desarrollada para tu negocio",
  },
  {
    ruta: "/herramientas",
    titulo: "Herramientas",
    que: "TodoConta, conexión MCP con el SAT y Abacus",
  },
  {
    ruta: "/jueves",
    titulo: "Jueves de ContadorIA",
    que: "live semanal, jueves 11:00 hora del centro de México",
  },
  {
    ruta: "/club",
    titulo: "Club de Automatización Fiscal",
    que: "membresía anual con software, bootcamp mensual y soporte humano (entrada por aplicación)",
  },
  {
    ruta: "/ebook",
    titulo: `Ebook: ${EBOOK.titulo}`,
    que: `17 capítulos y 3 apéndices para entender la IA sin código ni jerga, con contexto SAT/CFDI (${EBOOK.precio}, pago único). Segunda edición, agosto 2026. Muestra gratuita de 3 piezas`,
  },
];

export const GET: APIRoute = () => {
  const enlace = (p: (typeof PAGINAS)[number]) =>
    `- [${p.titulo}](${SITE.url}${p.ruta === "/" ? "/" : p.ruta}): ${p.que}`;

  const doc = `# ${PERSONA.nombre} (${SITE.url.replace("https://", "")})

> Israel Castro es contador público y desarrollador de software en México.
> Ayuda a contadores y despachos a automatizar su operación fiscal con
> inteligencia artificial: imparte talleres, construye herramientas en
> producción (TodoConta, conexión MCP entre Claude y los CFDI del SAT,
> Abacus por WhatsApp) y conduce el live semanal Jueves de ContadorIA.
> Su diferenciador: no es un capacitador genérico de IA; es contador y
> desarrollador, y sus credenciales son software real en uso.

Idioma del sitio: español de México. Contexto fiscal: SAT, CFDI, ISR, IVA.

## Páginas principales

${PAGINAS.map(enlace).join("\n")}

## Recursos

- [Contacto](${SITE.url}/contacto): diagnóstico para talleres y capacitación
- [Contenido completo en texto plano](${SITE.url}/llms-full.txt)

## Perfiles verificados

${PERSONA.sameAs.map((u) => `- ${etiquetaDe(u)}: ${u}`).join("\n")}
`;

  return new Response(doc, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
