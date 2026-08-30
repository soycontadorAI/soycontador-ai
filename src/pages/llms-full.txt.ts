/**
 * GET /llms-full.txt (estático, se genera en build)
 *
 * Dump en markdown plano de todo el contenido del sitio para consumo de LLMs.
 * Se construye desde los mismos datos que las páginas (site.ts, faqs.ts,
 * capacitacion.ts, soluciones.ts, herramientas.ts): no puede desactualizarse.
 */

import type { APIRoute } from "astro";

import { EMPRESARIAL, ORGANIZACIONES, SESION_MENSUAL } from "../lib/capacitacion";
import { FAQ_CAPACITACION, FAQ_CLUB, FAQ_HOME, FAQ_SOLUCIONES } from "../lib/faqs";
import { HERRAMIENTAS } from "../lib/herramientas";
import { CLUB, EBOOK, PERSONA, PROGRAMA, SITE } from "../lib/site";
import { CASO_GASOLINERA, SOLUCIONES } from "../lib/soluciones";

function faqMd(items: { pregunta: string; respuesta: string }[]): string {
  return items.map((f) => `### ${f.pregunta}\n\n${f.respuesta}`).join("\n\n");
}

export const GET: APIRoute = () => {
  const doc = `# Israel Castro (soycontador.ai)

${SITE.descriptionDefault}

Claim central: "${SITE.claim}"

## Quién es Israel Castro

${PERSONA.bioCorta}

- Cargos: ${PERSONA.jobTitles.join(" y ")}
- País: México
- Temas que domina: ${PERSONA.knowsAbout.join(", ")}
- Perfiles: ${PERSONA.sameAs.join(" · ")}

## Capacitación en IA para contadores (https://soycontador.ai/capacitacion)

### ${SESION_MENSUAL.nombre} (${SESION_MENSUAL.precio} por persona)

${SESION_MENSUAL.duracion}. Incluye:
${SESION_MENSUAL.incluye.map((i) => `- ${i}`).join("\n")}

Temario:
${SESION_MENSUAL.temario.map((t) => `- ${t.bloque}: ${t.temas}`).join("\n")}

### ${EMPRESARIAL.nombre}

${EMPRESARIAL.descripcion}

${EMPRESARIAL.puntos.map((p) => `- ${p}`).join("\n")}

### ${ORGANIZACIONES.nombre}

${ORGANIZACIONES.descripcion}

${ORGANIZACIONES.puntos.map((p) => `- ${p}`).join("\n")}

## Soluciones a la medida (https://soycontador.ai/soluciones)

${SOLUCIONES.map((s) => `### ${s.titulo}\n\n${s.descripcion}`).join("\n\n")}

### Caso real: ${CASO_GASOLINERA.contexto}

Antes: ${CASO_GASOLINERA.antes}. Después: ${CASO_GASOLINERA.despues}.
${CASO_GASOLINERA.detalle}

## Herramientas (https://soycontador.ai/herramientas)

${HERRAMIENTAS.map((h) => `### ${h.nombre} (${h.estado})\n\n${h.descripcion}\n\nURL: ${h.url}`).join("\n\n")}

## Ebook "${EBOOK.titulo}" (${EBOOK.precio})

${EBOOK.headline}. ${EBOOK.pitch}

## ${PROGRAMA.nombre} (https://soycontador.ai/jueves)

${PROGRAMA.descripcion}

Horario: ${PROGRAMA.horario}
Canal: ${PROGRAMA.canal}

## ${CLUB.nombre} (https://soycontador.ai/club)

${CLUB.descripcion}

${CLUB.pilares.map((p) => `### ${p.titulo}\n\n${p.texto}`).join("\n\n")}

## Preguntas frecuentes

${faqMd(FAQ_HOME)}

${faqMd(FAQ_CAPACITACION)}

${faqMd(FAQ_SOLUCIONES)}

${faqMd(FAQ_CLUB)}
`;

  return new Response(doc, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
