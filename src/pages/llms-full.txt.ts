/**
 * GET /llms-full.txt (estático, se genera en build)
 *
 * Dump en markdown plano de todo el contenido del sitio para consumo de LLMs.
 * Se construye desde los mismos datos que las páginas (site.ts, faqs.ts,
 * talleres.ts, herramientas.ts): no puede desactualizarse.
 */

import type { APIRoute } from "astro";

import { FAQ_CLUB, FAQ_HOME, FAQ_TALLERES } from "../lib/faqs";
import { HERRAMIENTAS } from "../lib/herramientas";
import { CLUB, PERSONA, PROGRAMA, SITE } from "../lib/site";
import { TALLERES } from "../lib/talleres";

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

## Talleres de IA para contadores y despachos (https://soycontador.ai/talleres)

Capacitación online o presencial para despachos, empresas y colegios de
contadores en México. El precio se cotiza tras un diagnóstico sin costo.

${TALLERES.map(
  (t) => `### ${t.titulo}

Para: ${t.para}

${t.descripcion}

Resultados:
${t.resultados.map((r) => `- ${r}`).join("\n")}`,
).join("\n\n")}

## Herramientas (https://soycontador.ai/herramientas)

${HERRAMIENTAS.map((h) => `### ${h.nombre} (${h.estado})\n\n${h.descripcion}\n\nURL: ${h.url}`).join("\n\n")}

## ${PROGRAMA.nombre} (https://soycontador.ai/jueves)

${PROGRAMA.descripcion}

Horario: ${PROGRAMA.horario}
Canal: ${PROGRAMA.canal}

## ${CLUB.nombre} (https://soycontador.ai/club)

${CLUB.descripcion}

${CLUB.pilares.map((p) => `### ${p.titulo}\n\n${p.texto}`).join("\n\n")}

## Preguntas frecuentes

${faqMd(FAQ_HOME)}

${faqMd(FAQ_TALLERES)}

${faqMd(FAQ_CLUB)}
`;

  return new Response(doc, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
