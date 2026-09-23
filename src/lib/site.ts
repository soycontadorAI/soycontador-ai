/**
 * Fuente única de la entidad "Israel Castro".
 *
 * JSON-LD (schema.ts), el SEO por página, llms-full.txt y el footer se generan
 * de este objeto. Si un dato de identidad cambia, se cambia AQUÍ y en ningún
 * otro lado.
 *
 * Reglas de honestidad del copy (2026-08-30):
 * - Israel ES contador público Y desarrollador de software: eso se dice, es el
 *   diferenciador. Lo que nunca se escribe es el comparativo ("yo sí programo",
 *   que señala al colega que empieza) ni el presente falso ("escribo código
 *   todos los días": hoy lo dirige con IA, lo lee y lo pide en los términos
 *   correctos).
 * - TodoConta nació en 2012 como proyecto/blog; como SOFTWARE es de 2026.
 *   No afirmar "construyo software desde 2012".
 * - El MCP trabaja vía la cuenta de TodoConta (app online + servidor): NO
 *   prometer "ningún dato sale de tu computadora" (eso solo aplica a la app
 *   de escritorio). El contraste honesto es vs pegar datos en chats públicos.
 */

export const SITE = {
  url: "https://soycontador.ai",
  name: "soycontador.ai",
  locale: "es_MX",
  lang: "es-MX",

  titleDefault:
    "Israel Castro. Contador público y desarrollador de software. IA para contadores en México",
  descriptionDefault:
    "Soy Israel Castro, contador público y desarrollador de software. Ayudo a contadores y despachos de México a automatizar su operación fiscal con IA: talleres, soluciones a la medida, herramientas como TodoConta y su conexión MCP, y el live semanal Jueves de ContadorIA.",

  claim:
    "La IA no te va a reemplazar. Pero un contador que sabe usar IA para volverse infraestructura sí va a reemplazar al que no.",
} as const;

export const PERSONA = {
  id: `${SITE.url}/#israel-castro`,
  nombre: "Israel Castro",
  alternateName: "Isca",
  jobTitles: ["Contador Público", "Desarrollador de Software"],
  bioCorta:
    "Contador público con 14 años de ejercicio y desarrollador de software: estudió programación, trabajó como desarrollador en una startup mexicana y hoy automatiza su propio despacho con IA. Creador de TodoConta (proyecto nacido en 2012, hoy software fiscal con conexión MCP) y del live semanal Jueves de ContadorIA.",
  pais: "MX",

  /*
   * El canal de YouTube es de la marca personal desde el 2026-09-15: el canal
   * que nació como @todoconta se renombró a @soycontadorAI (Israel quería
   * @soycontador.ai, pero el handle está tomado; si se libera, esto se
   * actualiza aquí y en ningún otro lado). TodoConta tendrá su propio canal
   * institucional nuevo, solo de producto.
   */
  sameAs: [
    "https://www.linkedin.com/in/soycontadorAI",
    "https://www.instagram.com/soycontador.ai/",
    "https://www.youtube.com/@soycontadorAI",
    "https://github.com/soycontadorAI",
    "https://todoconta.com",
  ],

  knowsAbout: [
    "inteligencia artificial para contadores",
    "IA para contadores",
    "Claude para contadores",
    "automatización de despachos contables",
    "automatización fiscal",
    "automatización de procesos con Python",
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
  canal: "https://www.youtube.com/@soycontadorAI",
} as const;

/** Tráiler del canal. La transcripción alimenta el VideoObject del JSON-LD. */
export const TRAILER = {
  videoId: "9y2Amy7AlIc",
  titulo: "IA para contadores: úsala y constrúyela sin ser programador",
  descripcion:
    "Israel Castro, contador público y desarrollador de software, presenta Jueves de ContadorIA: cada jueves enseña a usar y construir con inteligencia artificial sin ser programador, de colega a colega, para ganarle horas al trabajo fiscal.",
  duracionISO: "PT1M4S",
  duracionTexto: "1 minuto",
  fechaPublicacion: "2026-08-15",
  poster: "/assets/jueves-trailer.jpg",
  transcripcion:
    "¿Sientes que la inteligencia artificial va a reemplazar a los contadores y no sabes ni por dónde empezar? Descuida, llegaste al lugar correcto. Hola, soy Israel Castro, contador público y desarrollador de software. Y no solo utilizo la inteligencia artificial todos los días: construyo herramientas fiscales con ella. Herramientas que te permiten descarga masiva de CFDI de la página del SAT, un agente que te atiende 24/7 desde la palma de tu mano, así como una API que ya utilizan otras empresas. Productos de verdad, en producción. Cada jueves en Jueves de ContadorIA te enseño a usar y a construir con inteligencia artificial sin ser programador. En palabras simples, de colega a colega, para que le ganes horas de trabajo y dejes de tenerle miedo a la tecnología. Suscríbete y activa la campanita. Nos vemos el jueves a las 11 de la mañana.",
} as const;

export const CLUB = {
  nombre: "Club de Automatización Fiscal",
  siglas: "CAF",
  descripcion:
    "Membresía anual con lugares limitados para despachos que quieren automatizar su operación fiscal: software (TodoConta con conexión MCP), un bootcamp de implementación en vivo cada mes y soporte humano cuando el equipo se atora. La entrada es por aplicación.",
  pilares: [
    {
      titulo: "Software listo para usar",
      texto:
        "TodoConta multi-RFC: descarga masiva de CFDI, constancias, opinión 32-D, listas negras y nómina. Con conexión MCP para pedirle a Claude cálculos, conciliaciones y reportes en lenguaje natural.",
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

export const EBOOK = {
  titulo: "IA para Contadores",
  subtitulo: "Conceptos, herramientas y estrategia para el profesional contable",
  headline: "Entiende la IA antes de que la IA te rebase",
  pitch:
    "17 capítulos, 3 apéndices, cero código y cero jerga sin explicar. No te va a convertir en programador: te va a convertir en un contador que entiende la herramienta más importante de la próxima década.",
  precio: "$297 MXN",
  url: "/ebook" as string | null,
} as const;

/**
 * Medición. El ID de GA4 va aquí y no en una variable de entorno a propósito:
 * un ID de medición NO es un secreto (viaja en el HTML de cada página, se ve
 * con clic derecho), así que esconderlo no protege nada y sí introduce una
 * falla silenciosa, la de olvidarlo en Vercel y quedarse sin datos sin que
 * nadie se entere. Lo que sí separa entornos es la condición de carga, que
 * vive en Analytics.astro: en local y en los previews no se carga nada, para
 * que las pruebas propias no ensucien el número desde el primer día.
 */
export const MEDICION = {
  /** GA4. Null apaga la medición por completo. */
  ga: "G-TR03XNSEKC",
  /** Pixel de Meta. Pendiente del ID; en null no se carga. */
  metaPixel: null as string | null,
} as const;

/** Un enlace de menú, de pie o de botón. */
export interface Enlace {
  label: string;
  href: string;
}

/**
 * El menú de la cabecera es de cada página, no del sitio (decisión de Israel
 * 2026-09-20): cada una pasa a BaseLayout las anclas de sus propias secciones
 * y el botón que le corresponde. Este es solo el de la home (las 4 anclas de
 * 2026-08-30).
 */
export const NAV_HOME: readonly Enlace[] = [
  { label: "Quién soy", href: "/#quien" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Qué encuentras aquí", href: "/#ofertas" },
  { label: "Preguntas", href: "/#faq" },
];

/** El botón de cabecera de las páginas que no tienen formulario propio. */
export const CTA_DIAGNOSTICO: Enlace = { label: "Agenda un diagnóstico", href: "/contacto" };

/** Páginas internas, para el footer y el crawleo. */
export const NAV_PAGINAS = [
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Capacitación", href: "/capacitacion" },
  { label: "Taller: Empieza aquí", href: "/empieza" },
  { label: "Capacitación para despachos", href: "/despachos" },
  { label: "Soluciones a la medida", href: "/soluciones" },
  { label: "Herramientas", href: "/herramientas" },
  { label: "Ebook: IA para Contadores", href: "/ebook" },
  { label: "Jueves de ContadorIA", href: "/jueves" },
  { label: "Club de Automatización Fiscal", href: "/club" },
  { label: "Contacto", href: "/contacto" },
] as const;

/**
 * Programación de citas de Google Workspace (Calendar → "Programación de citas").
 * El enlace público se ve como https://calendar.app.google/XXXXXXXXXXXX
 *
 * Decisión de Israel 2026-08-31: **una sola agenda para todo** (diagnóstico,
 * cotización y capacitación). El mapa existe para poder partirla después sin
 * refactor: si algún día la capacitación empresarial necesita 45 minutos y otra
 * disponibilidad, se agrega su entrada y `calendarioDe("capacitacion")` la toma
 * sola. Es un cambio de datos, no de lógica.
 *
 * Mientras `default` sea null, el enlace no se pinta en ningún lado y el flujo
 * termina en el formulario, como hasta ahora.
 */
export type PropositoCita = "diagnostico" | "cotizacion" | "capacitacion";

const CALENDARIOS: Partial<Record<PropositoCita, string>> & { default: string | null } = {
  /** "Llamada con Israel Castro", 15 min con 15 de colchón, con Meet. Programación
      de citas de Workspace. Todas las llamadas duran lo mismo (decisión de
      Israel 2026-09-21; guion en docs/llamada-diagnostico.md). El colchón es
      lo que permite extender una llamada que lo amerite sin empalmar con la
      siguiente; deja de ser cierto el día que la agenda se llene. */
  default: "https://calendar.app.google/LoP7NXbqineYAJNd6",
};

export function calendarioDe(proposito?: PropositoCita): string | null {
  return (proposito && CALENDARIOS[proposito]) || CALENDARIOS.default;
}

export const FOOTER_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@soycontadorAI" },
  { label: "Instagram", href: "https://www.instagram.com/soycontador.ai/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/soycontadorAI" },
  { label: "GitHub", href: "https://github.com/soycontadorAI" },
  { label: "TodoConta", href: "https://todoconta.com" },
  { label: "Aviso de privacidad", href: "/privacidad" },
] as const;
