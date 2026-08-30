/**
 * Fuente única de la entidad "Israel Castro".
 *
 * JSON-LD (schema.ts), el SEO por página, llms-full.txt y el footer se generan
 * de este objeto. Si un dato de identidad cambia, se cambia AQUÍ y en ningún
 * otro lado.
 */

export const SITE = {
  url: "https://soycontador.ai",
  name: "soycontador.ai",
  locale: "es_MX",
  lang: "es-MX",

  titleDefault:
    "Israel Castro. Contador público y desarrollador de software. IA para contadores en México",
  descriptionDefault:
    "Soy Israel Castro, contador público y desarrollador de software. Ayudo a contadores y despachos de México a automatizar su operación fiscal con IA: talleres, herramientas como TodoConta y MCP, y el live semanal Jueves de ContadorIA.",

  claim:
    "La IA no te va a reemplazar. Pero un contador que sabe usar IA para volverse infraestructura sí va a reemplazar al que no.",
} as const;

export const PERSONA = {
  id: `${SITE.url}/#israel-castro`,
  nombre: "Israel Castro",
  alternateName: "Isca",
  jobTitles: ["Contador Público", "Desarrollador de Software"],
  bioCorta:
    "Contador público con 15 años de ejercicio y desarrollador de software. Creador de TodoConta (software fiscal en producción desde 2012), de la conexión MCP que integra Claude con los CFDI del SAT sin exponer datos, y del live semanal Jueves de ContadorIA.",
  pais: "MX",

  sameAs: [
    "https://www.linkedin.com/in/soyisracastro/",
    "https://www.youtube.com/@todoconta",
    "https://github.com/soyisracastro",
    "https://todoconta.com",
  ],

  knowsAbout: [
    "inteligencia artificial para contadores",
    "IA para contadores",
    "Claude para contadores",
    "automatización de despachos contables",
    "automatización fiscal",
    "SAT",
    "CFDI",
    "descarga masiva de XML del SAT",
    "MCP (Model Context Protocol)",
    "contabilidad con inteligencia artificial",
  ],
} as const;

export const PROGRAMA = {
  nombre: "Jueves de ContadorIA",
  descripcion:
    "Live semanal en YouTube: cada jueves a las 11:00 (hora del centro de México) Israel resuelve en vivo un problema real de un despacho usando IA.",
  horario: "Jueves 11:00 am, hora del centro de México",
  canal: "https://www.youtube.com/@todoconta",
} as const;

export const CLUB = {
  nombre: "Club de Automatización Fiscal",
  siglas: "CAF",
  descripcion:
    "Membresía anual con lugares limitados para despachos que quieren automatizar su operación fiscal: software (TodoConta Enterprise con conexión MCP), un bootcamp de implementación en vivo cada mes y soporte humano cuando el equipo se atora. La entrada es por aplicación.",
  pilares: [
    {
      titulo: "Software listo para usar",
      texto:
        "TodoConta Enterprise multi-RFC: descarga masiva de CFDI, constancias, opinión 32-D, listas negras y nómina. Con conexión MCP para trabajar con Claude sin que un dato salga de tu equipo.",
    },
    {
      titulo: "Bootcamp mensual de implementación",
      texto:
        "Una sesión en vivo de 2 horas cada mes. No son videos grabados: automatizamos un proceso real de tu despacho en la sesión y sales con algo funcionando.",
    },
    {
      titulo: "Soporte humano cuando te atoras",
      texto:
        "¿Un prompt no sale? ¿La base local marca error? No estás solo: nuestro equipo revisa contigo hasta que quede.",
    },
  ],
} as const;

export const NAV = [
  { label: "Quién soy", href: "/sobre-mi" },
  { label: "Talleres", href: "/talleres" },
  { label: "Herramientas", href: "/herramientas" },
  { label: "Jueves", href: "/jueves" },
  { label: "Club", href: "/club" },
] as const;

export const FOOTER_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@todoconta" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/soyisracastro/" },
  { label: "GitHub", href: "https://github.com/soyisracastro" },
  { label: "TodoConta", href: "https://todoconta.com" },
  { label: "Aviso de privacidad", href: "/privacidad" },
] as const;
