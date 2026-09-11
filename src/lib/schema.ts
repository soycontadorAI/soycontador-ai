/**
 * Builders de JSON-LD. Todo sale de site.ts; las páginas componen su grafo
 * con estos bloques y lo emiten vía <JsonLd graph={[...]} />.
 */

import { APENDICES, COMPRA, EDICION, PARTES } from "./ebook";
import { CLUB, EBOOK, PERSONA, PROGRAMA, SITE, TRAILER } from "./site";
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
 * Capacitación. SIN nodo Offer desde el 2026-09-08: el taller dejó de publicar
 * precio, y el JSON-LD es lo primero que un buscador o un LLM cita. Nota
 * histórica de la decisión anterior ($4,999 MXN, decisión de
 * Israel); empresarial y organizaciones se cotizan.
 */
export function capacitacionService(): JsonLdObject {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/capacitacion#servicio`,
    name: "Capacitación en IA para contadores y despachos contables",
    description:
      "Capacitación en inteligencia artificial aplicada al trabajo fiscal: taller de 8 horas en sesiones de 2 horas, programas para empresas y despachos, y licenciamiento para organizaciones y capacitadoras en México.",
    url: `${SITE.url}/capacitacion`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Capacitación en IA para despachos contables",
  };
}

/** Soluciones a la medida (sin precio: cierre por diagnóstico). */
export function solucionesService(): JsonLdObject {
  return {
    "@type": "Service",
    "@id": `${SITE.url}/soluciones#servicio`,
    name: "Soluciones a la medida: automatización de procesos contables",
    description:
      "Desarrollo de automatizaciones para procesos específicos de despachos y empresas en México: reportes recurrentes, conciliaciones, concentrados, auditoría de flujos operativos con código y vigía fiscal (monitoreo diario de una cartera de RFCs: opinión de cumplimiento 32-D, listas 69 y 69-B y constancia de situación fiscal).",
    url: `${SITE.url}/soluciones`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Automatización de procesos con IA y Python",
  };
}

/**
 * Capacitación in company para despachos (sin precio: cierre por diagnóstico).
 * Va SIN nodo Offer a propósito. Publicar aquí un precio, aunque fuera un
 * rango, contradice la regla del proyecto y además el JSON-LD es lo primero
 * que un LLM cita.
 */
export function despachosService(): JsonLdObject {
  return {
    "@type": "Service",
    "@id": `${SITE.url}/despachos#servicio`,
    name: "Capacitación en IA para despachos contables (in company)",
    description:
      "Programa de implementación de inteligencia artificial para el equipo de un despacho contable en México: 8 horas en sesiones de 2, sobre la operación real del despacho. El equipo termina con entre 4 y 6 flujos corriendo (clasificación de CFDI, conciliación, complementos de pago, DIOT, nómina timbrada) y con el método del despacho por escrito. Se cotiza por proyecto tras un diagnóstico.",
    url: `${SITE.url}/despachos`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Capacitación in company en IA para equipos contables",
    audience: {
      "@type": "BusinessAudience",
      name: "Despachos contables, colegios de contadores y áreas contables de empresas en México",
    },
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

/**
 * Ebook como Book + Offer. Aquí el precio SÍ se publica (decisión de Israel);
 * `hasPart` expone el temario para que los buscadores y los LLM sepan qué trae
 * el libro sin tener que leer el PDF.
 */
export function ebookBook(): JsonLdObject {
  const capitulos = PARTES.flatMap((parte) =>
    parte.piezas.map((pieza) => ({
      "@type": "Chapter",
      position: Number(pieza.num),
      name: pieza.titulo,
      abstract: pieza.resumen,
      isPartOf: { "@type": "CreativeWorkSeries", name: `Parte ${parte.romano}. ${parte.nombre}` },
    })),
  );

  return {
    "@type": "Book",
    "@id": `${SITE.url}/ebook#libro`,
    name: EBOOK.titulo,
    alternateName: `${EBOOK.titulo}: ${EBOOK.subtitulo}`,
    description: EBOOK.pitch,
    url: `${SITE.url}/ebook`,
    image: `${SITE.url}/assets/ebook-portada.png`,
    author: personRef(),
    publisher: personRef(),
    inLanguage: "es-MX",
    bookFormat: "https://schema.org/EBook",
    bookEdition: `${EDICION.nombre} (${EDICION.fecha})`,
    numberOfPages: EDICION.paginas,
    about: [
      "inteligencia artificial para contadores",
      "IA aplicada a la contabilidad",
      "SAT",
      "CFDI",
      "prompt engineering",
    ],
    audience: { "@type": "Audience", audienceType: "Contadores públicos y despachos contables en México" },
    hasPart: [
      ...capitulos,
      ...APENDICES.map((ap) => ({ "@type": "Chapter", name: `Apéndice ${ap.num}. ${ap.titulo}`, abstract: ap.resumen })),
    ],
    offers: {
      "@type": "Offer",
      name: COMPRA.ebook.nombre,
      description: COMPRA.ebook.detalle,
      price: COMPRA.ebook.precio,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/ebook`,
    },
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
