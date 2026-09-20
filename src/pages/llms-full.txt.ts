/**
 * GET /llms-full.txt (estático, se genera en build)
 *
 * Dump en markdown plano de todo el contenido del sitio para consumo de LLMs.
 * Se construye desde los mismos datos que las páginas (site.ts, faqs.ts,
 * capacitacion.ts, soluciones.ts, herramientas.ts): no puede desactualizarse.
 */

import type { APIRoute } from "astro";

import { CASO_AUDITOR, EMPRESARIAL, ORGANIZACIONES, TALLER } from "../lib/capacitacion";
import { APENDICES, COMPRA, EDICION, FAQ_EBOOK, PARTES } from "../lib/ebook";
import { BLOQUES, EMPIEZA, ENTREGABLES, FAQ_EMPIEZA, INCLUYE, edicionesVigentes } from "../lib/empieza";
import { FAQ_CAPACITACION, FAQ_CLUB, FAQ_HOME, FAQ_SOLUCIONES } from "../lib/faqs";
import { HERRAMIENTAS } from "../lib/herramientas";
import { CLUB, EBOOK, PERSONA, PROGRAMA, SITE } from "../lib/site";
import { CASO_GASOLINERA, SOLUCIONES } from "../lib/soluciones";
import { TESTIMONIOS } from "../lib/testimonios";

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

### Caso real: ${CASO_AUDITOR.titulo}

${CASO_AUDITOR.parrafos.join("\n\n")}

${CASO_AUDITOR.trazabilidad}

Expediente: ${CASO_AUDITOR.expediente.filas.map((f) => `${f.concepto}: ${f.cargo}`).join(" · ")} · ${CASO_AUDITOR.expediente.total.concepto}: ${CASO_AUDITOR.expediente.total.cargo}.

### ${TALLER.nombre}

${TALLER.duracion}. Incluye:
${TALLER.incluye.map((i) => `- ${i}`).join("\n")}

Temario:
${TALLER.temario.map((t) => `- ${t.bloque}: ${t.temas}`).join("\n")}

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

## Taller "${EMPIEZA.nombreCompleto}" (https://soycontador.ai/empieza)

${EMPIEZA.descripcion}

Fechas: ${edicionesVigentes().map((e) => e.fechaTexto + (e.agotado ? " (agotado)" : "")).join("; ") || "próxima por anunciar"}. ${EMPIEZA.horario}. ${EMPIEZA.sede}. Cupo: ${EMPIEZA.cupo} por fecha; cuando una se llena se abre la siguiente.
Precio: ${EMPIEZA.precioTexto}, pago único. Requiere cuenta de ${EMPIEZA.herramienta.nombre} (${EMPIEZA.herramienta.costoTexto}, se paga aparte). ${EMPIEZA.garantia}
Es el paso anterior al curso Claude para Contadores (Fiscalistas.AI).

Con qué sales:
${ENTREGABLES.map((e) => `- ${e.titulo}: ${e.texto}`).join("\n")}

Las dos horas:
${BLOQUES.map((b) => `- Min ${b.minutos}, ${b.titulo}: ${b.texto} Sales con: ${b.sale}.`).join("\n")}

Incluye:
${INCLUYE.map((i) => `- ${i}`).join("\n")}

${faqMd(FAQ_EMPIEZA)}

## Ebook "${EBOOK.titulo}" (https://soycontador.ai/ebook)

${EBOOK.headline}. ${EBOOK.pitch}

${EDICION.nombre} (${EDICION.fecha}), ${EDICION.paginas} páginas en PDF.
Precio: ${COMPRA.ebook.precioTexto}, pago único. ${COMPRA.garantia}

Temario:

${PARTES.map(
  (parte) =>
    `### Parte ${parte.romano}. ${parte.nombre} (${parte.verbo})\n\n${parte.piezas
      .map((p) => `- ${p.num}. ${p.titulo}: ${p.resumen}`)
      .join("\n")}`,
).join("\n\n")}

### Apéndices

${APENDICES.map((a) => `- ${a.num}. ${a.titulo}: ${a.resumen}`).join("\n")}

${faqMd(FAQ_EBOOK)}

## ${PROGRAMA.nombre} (https://soycontador.ai/jueves)

${PROGRAMA.descripcion}

Horario: ${PROGRAMA.horario}
Canal: ${PROGRAMA.canal}

## ${CLUB.nombre} (https://soycontador.ai/club)

${CLUB.descripcion}

${CLUB.pilares.map((p) => `### ${p.titulo}\n\n${p.texto}`).join("\n\n")}

## Testimonios de colegas que tomaron la capacitación

${TESTIMONIOS.map(
  (t) => `### ${t.nombre}, ${t.despacho} (${t.ciudad})

${t.perfil} Sitio: ${t.sitio}${t.whatsapp ? ` · WhatsApp: +${t.whatsapp}` : ""}

Video: "${t.titulo}" (https://www.youtube.com/watch?v=${t.videoId})

Antes: "${t.antes}"

"${t.cita}"

Lo que cambió en su despacho:
${t.logros.map((l) => `- ${l}`).join("\n")}

"${t.remate}"`,
).join("\n\n")}

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
