/**
 * Builders de JSON-LD. Todo sale de site.ts; las páginas componen su grafo
 * con estos bloques y lo emiten vía <JsonLd graph={[...]} />.
 */

import { CLUB, PERSONA, PROGRAMA, SITE, TRAILER } from "./site";
import type { FaqItem } from "./faqs";

type JsonLdObject = Record<string, unknown>;

/** Objeto Person completo. Solo en / y /sobre-mi; el resto referencia por @id. */
export function person(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": PERSONA.id,
    name: PERSONA.nombre,
    alternateName: PERSONA.alternateName,
    jobTitle: PERSONA.jobTitles,
    description: PERSONA.bioCorta,
    url: SITE.url,
    image: `${SITE.url}/assets/israel-castro.jpg`,
    nationality: { "@type": "Country", name: "México" },
    address: { "@type": "PostalAddress", addressCountry: PERSONA.pais },
    sameAs: [...PERSONA.sameAs],
    knowsAbout: [...PERSONA.knowsAbout],
  };
}

/** Referencia ligera a la Person para páginas interiores. */
export function personRef(): JsonLdObject {
  return { "@id": PERSONA.id };
}

export function webSite(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.descriptionDefault,
    inLanguage: SITE.lang,
    publisher: personRef(),
  };
}

/**
 * Capacitación. La sesión mensual abierta SÍ publica precio ($4,999 MXN,
 * decisión de Israel); empresarial y organizaciones se cotizan.
 */
export function capacitacionService(): JsonLdObject {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/capacitacion#servicio`,
    name: "Capacitación en IA para contadores y despachos contables",
    description:
      "Capacitación en inteligencia artificial aplicada al trabajo fiscal: sesión mensual abierta de 8 horas, programas para empresas y despachos, y licenciamiento para organizaciones y capacitadoras en México.",
    url: `${SITE.url}/capacitacion`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Capacitación en IA para despachos contables",
    offers: {
      "@type": "Offer",
      name: "Sesión mensual de automatización (8 horas en vivo)",
      price: "4999",
      priceCurrency: "MXN",
      url: `${SITE.url}/capacitacion`,
    },
  };
}

/** Soluciones a la medida (sin precio: cierre por diagnóstico). */
export function solucionesService(): JsonLdObject {
  return {
    "@type": "Service",
    "@id": `${SITE.url}/soluciones#servicio`,
    name: "Soluciones a la medida: automatización de procesos contables",
    description:
      "Desarrollo de automatizaciones para procesos específicos de despachos y empresas en México: reportes recurrentes, conciliaciones, concentrados y auditoría de flujos operativos con código.",
    url: `${SITE.url}/soluciones`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Automatización de procesos con IA y Python",
  };
}

/** Club de Automatización Fiscal (sin precio: cierre por aplicación). */
export function clubService(): JsonLdObject {
  return {
    "@type": "Service",
    "@id": `${SITE.url}/club#servicio`,
    name: CLUB.nombre,
    alternateName: CLUB.siglas,
    description: CLUB.descripcion,
    url: `${SITE.url}/club`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Membresía de automatización fiscal para despachos contables",
  };
}

export function juevesSeries(): JsonLdObject {
  return {
    "@type": "EventSeries",
    "@id": `${SITE.url}/jueves#serie`,
    name: PROGRAMA.nombre,
    description: PROGRAMA.descripcion,
    url: `${SITE.url}/jueves`,
    organizer: personRef(),
    location: { "@type": "VirtualLocation", url: PROGRAMA.canal },
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    inLanguage: "es",
  };
}

/**
 * Tráiler del canal. Incluye `transcript`: es lo que permite que buscadores y
 * LLMs indexen lo que se DICE en el video, no solo su título.
 */
export function trailerVideo(): JsonLdObject {
  return {
    "@type": "VideoObject",
    "@id": `${SITE.url}/jueves#trailer`,
    name: TRAILER.titulo,
    description: TRAILER.descripcion,
    thumbnailUrl: `${SITE.url}${TRAILER.poster}`,
    uploadDate: TRAILER.fechaPublicacion,
    duration: TRAILER.duracionISO,
    embedUrl: `https://www.youtube.com/embed/${TRAILER.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${TRAILER.videoId}`,
    transcript: TRAILER.transcripcion,
    inLanguage: "es-MX",
    creator: personRef(),
    publisher: personRef(),
    isPartOf: { "@id": `${SITE.url}/jueves#serie` },
  };
}

export function faqPage(items: readonly FaqItem[], pageUrl: string): JsonLdObject {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };
}

export function breadcrumbs(
  trail: readonly { name: string; path: string }[],
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path}`,
    })),
  };
}

/** Envuelve los bloques en un @graph listo para serializar. */
export function graph(...nodes: JsonLdObject[]): JsonLdObject {
  return { "@context": "https://schema.org", "@graph": nodes };
}
