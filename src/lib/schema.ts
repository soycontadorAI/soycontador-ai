/**
 * Builders de JSON-LD. Todo sale de site.ts; las páginas componen su grafo
 * con estos bloques y lo emiten vía <JsonLd graph={[...]} />.
 */

import { CLUB, PERSONA, PROGRAMA, SITE } from "./site";
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

/** Talleres y capacitación (sin priceRange: el precio no se publica). */
export function talleresService(): JsonLdObject {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/talleres#servicio`,
    name: "Talleres de IA para contadores y despachos contables",
    description:
      "Capacitación en inteligencia artificial aplicada al trabajo fiscal para despachos, empresas y colegios de contadores en México. Online o presencial, con casos reales del SAT.",
    url: `${SITE.url}/talleres`,
    provider: personRef(),
    areaServed: { "@type": "Country", name: "México" },
    availableLanguage: "es",
    serviceType: "Capacitación en IA para despachos contables",
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
