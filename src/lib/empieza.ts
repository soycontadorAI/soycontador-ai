/**
 * Taller "Empieza aquí": tu primer día con Claude (2 horas en vivo).
 *
 * El escalón anterior a Claude para Contadores (Fiscalistas.AI). Sale de la
 * encuesta de agosto de 2026 al boletín: el 70 % estaba en nivel cero o
 * aficionado y no está listo para 8 horas de Claude Code. La definición
 * completa (precio, por qué Claude Pro recomendado, calendario de venta) vive
 * en `docs/taller-empieza-aqui.md`.
 *
 * Este taller SÍ publica precio: es producto de precio fijo, como el ebook.
 * La regla de "no publicar" es del high ticket (aclaración de Israel,
 * 2026-09-20). El precio se escribe UNA vez (`PRECIO`) y de ahí salen la
 * página, la FAQ, el JSON-LD, llms.txt, llms-full.txt y el pixel de Meta.
 *
 * CADA EDICIÓN NUEVA se cambia aquí y en ningún otro archivo: la fecha y el
 * checkout en `EDICIONES`, y la hora en `HORARIO` si cambia.
 */

const PRECIO = 697;
const MONEDA = "MXN";

function conUtm(url: string, contenido: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "soycontador");
  u.searchParams.set("utm_medium", "web");
  u.searchParams.set("utm_campaign", "empieza");
  u.searchParams.set("utm_content", contenido);
  return u.toString();
}

/**
 * Las ediciones. El cupo de 25 no se sube: si una fecha se llena se abre la
 * siguiente (decisión de Israel, 2026-09-20), y por eso esto es una lista.
 * Cada edición es un evento distinto en nas.com con su propio checkout (la
 * URL de compra directa, con el boleto elegido, no la página del evento).
 *
 * `agotado` se marca a mano en cuanto se venda el lugar 25: no sabemos si
 * nas.com cierra el boleto solo al llegar al cupo, y mientras no se pruebe,
 * el interruptor vive aquí. Una edición agotada se sigue mostrando (como
 * prueba de que se llenó) mientras no haya pasado su fecha.
 */
export interface Edicion {
  /** YYYY-MM-DD */
  inicio: string;
  fechaTexto: string;
  /** Checkout directo en nas.com; null mientras el evento no exista */
  checkout: string | null;
  agotado?: boolean;
}

export const EDICIONES: readonly Edicion[] = [
  {
    inicio: "2026-10-29",
    fechaTexto: "Jueves 29 de octubre",
    checkout:
      "https://nas.com/checkout-global?requestor=signupRequestor&communityCode=TODOCONTA_CLUB&communityId=67ab5a14d444670df4027cad&redirectTo=https%3A%2F%2Fnas.com%2Fmb%2Fcommunities%2F67ab5a14d444670df4027cad%2Fevents%2F6ad3ffacd4af52506ec9d19f&sourceInfoType=event&sourceInfoOrigin=6ad3ffacd4af52506ec9d19f",
  },
  // Segunda edición, SOLO si la del 17 se llena: se destapa, se crea el
  // evento en nas.com y se pega su checkout. Mientras, no existe para nadie.
  // { inicio: "2026-11-05", fechaTexto: "Jueves 5 de noviembre", checkout: null },
];

/**
 * La hora de las ediciones, del centro de México. Esa zona no cambia de
 * horario desde 2022, así que el desfase es fijo. De aquí salen el folio de la
 * página, el horario en texto y las fechas del JSON-LD.
 */
export const HORARIO = { inicio: "18:00", fin: "20:00", zona: "-06:00" } as const;

/** Fecha y hora ISO de una edición (por omisión, la de inicio). */
export function isoDe(e: Edicion, hora: string = HORARIO.inicio): string {
  return `${e.inicio}T${hora}:00${HORARIO.zona}`;
}

export const EMPIEZA = {
  nombre: "Empieza aquí",
  /* Ya no dice "Claude para contadores": se confundía con el curso de 8 horas
     (Israel, 2026-10-13). Las 2 horas viven en el folio y en el precio. */
  titulo: "tu primer día con Claude",
  /** Para el <title> y el JSON-LD, donde el nombre corto no dice nada solo */
  nombreCompleto: "Empieza aquí: tu primer día con Claude",
  descripcion:
    "Taller en vivo de 2 horas para contadores que no han usado inteligencia artificial o la probaron y les contestó como blog. Sales con un proyecto de Claude configurado para tu despacho, un prompt que cita el fundamento legal y tu primer lote de XML convertido en tabla y revisado. Sin conocimientos previos.",
  horario: `${HORARIO.inicio} a ${HORARIO.fin}, hora del centro de México`,
  duracion: "2 horas en vivo",
  sede: "Por Zoom, con grabación disponible 30 días",
  cupo: 25,
  precio: PRECIO,
  moneda: MONEDA,
  precioTexto: `$${PRECIO} ${MONEDA}`,
  /** Lo que se paga aparte, dicho de frente: es parte del precio real */
  herramienta: {
    nombre: "Claude Pro",
    /* Claude lo muestra en dólares; el aproximado en pesos va entre paréntesis.
       Dato del proveedor: verificado en claude.com/pricing el 2026-10-13
       (Pro, US$20 al mes; US$17 al mes con plan anual). */
    costoTexto: "US$20 al mes (aprox. $400 MXN)",
    verificado: "2026-10-13",
  },
  garantia:
    "Si cancelas hasta dos días antes de tu fecha te devuelvo el dinero completo. Si no puedes asistir en vivo, la grabación es tuya 30 días.",
} as const;

/**
 * Lo que recibe el pixel de Meta en ViewContent y AddToCart: el
 * producto, nunca la persona. SOLO parámetros estándar de Meta: el conjunto
 * de datos está en una categoría restringida y uno personalizado no pasa.
 */
export const PIXEL_EMPIEZA = {
  content_name: "empieza-aqui",
  content_type: "product",
  content_ids: ["taller-empieza"],
  value: PRECIO,
  currency: MONEDA,
} as const;

function limiteDe(e: Edicion): Date {
  return new Date(`${e.inicio}T23:59:59${HORARIO.zona}`);
}

/** Las ediciones que todavía no pasan, en orden de fecha (agotadas incluidas). */
export function edicionesVigentes(hoy = new Date()): Edicion[] {
  return EDICIONES.filter((e) => limiteDe(e) >= hoy).sort((a, b) => a.inicio.localeCompare(b.inicio));
}

/** La primera edición con lugares y checkout: es a la que apunta el botón. Null si no hay. */
export function edicionAbierta(hoy = new Date()): Edicion | null {
  return edicionesVigentes(hoy).find((e) => !e.agotado && e.checkout) ?? null;
}

/** URL de compra de una edición, con UTM de la página. */
export function checkoutDe(e: Edicion, contenido = "pagina"): string | null {
  return e.checkout ? conUtm(e.checkout, contenido) : null;
}

/**
 * Video atemporal de la página (por qué tomar el taller): sin fechas ni
 * precio, para que sirva en cualquier edición. Mientras `id` sea null la
 * página NO pinta el hueco. La carátula NO es la miniatura de YouTube (esa es
 * de CTR y desentona aquí): sale de `design/piezas/caratula-empieza.html`
 * con `node design/piezas/render.mjs caratula-empieza`.
 */
export const VIDEO_EMPIEZA: { id: string | null; titulo: string; poster: string; cinta: string } = {
  id: "QCA6xuvNSeM",
  titulo: "Por qué tomar el taller Empieza aquí",
  poster: "/assets/empieza-video.jpg",
  cinta: "Por qué empezar aquí",
};

/** La promesa: con qué sales. Es el argumento entero de la página. */
export const ENTREGABLES = [
  {
    titulo: "Un proyecto de Claude configurado para tu despacho",
    texto:
      "Con tus instrucciones, los regímenes que atiendes y tus formatos de entrega. Y sin un solo dato que no deba vivir ahí.",
  },
  {
    titulo: "Un prompt que te contesta como contador y cita el fundamento",
    texto:
      "Probado en vivo con una duda fiscal tuya. Con el renglón que le exige el artículo y que le hace decir cuando no lo tiene.",
  },
  {
    titulo: "Tu primera tarea operativa resuelta",
    texto:
      "Un lote de XML convertido en tabla y revisado: totales, duplicados, el CFDI que no cuadra. Con datos ficticios que te llevas para practicar.",
  },
] as const;

/** A quién le habla. Tres perfiles, los tres salieron de la encuesta. */
export const PARA_QUIEN = [
  {
    titulo: "No la has usado",
    texto:
      "Te da desconfianza o sientes que no tienes tiempo de aprenderla. Aquí no hay nada que saber antes: empezamos en cero.",
  },
  {
    titulo: "Probaste ChatGPT y te contestó como blog",
    texto:
      "Respuestas genéricas que no sirven para un caso real. No es la herramienta: es cómo se le pide. Eso se arregla en el primer bloque.",
  },
  {
    titulo: "Leíste el libro y no te has atrevido",
    texto:
      "Ya entiendes qué es y qué no. Te falta sentarte a hacerlo con alguien al lado. Eso es este taller.",
  },
] as const;

export const BLOQUES = [
  {
    titulo: "Qué es y qué no",
    texto:
      "Predice, no piensa. Por qué resume una novela entera y no sabe que tu cliente es RESICO. Por qué contesta como blog.",
    sale: "La expectativa correcta",
  },
  {
    titulo: "Cómo se le pide",
    texto:
      "La misma consulta fiscal, mal y bien: rol, contexto, instrucción, formato. Se agrega el renglón que exige el fundamento. Cada quien lo prueba con una duda propia.",
    sale: "Tu primer prompt que cita artículo",
  },
  {
    titulo: "Tu proyecto",
    texto:
      "Se crea el proyecto de Claude del despacho. Qué se guarda ahí y qué nunca: los tres niveles, del chat público al canal controlado.",
    sale: "El proyecto configurado",
  },
  {
    titulo: "La primera tarea",
    texto:
      "Lote de XML ficticios, tabla en Excel, revisión. Es la conciliación más simple que existe, y es la que Daniel hoy hace en minutos.",
    sale: "La tarea hecha y el prompt para repetirla",
  },
  {
    titulo: "Qué sigue",
    texto:
      "Qué puedes hacer con esto la semana que entra y cómo seguir si quieres ir más a fondo.",
    sale: "El mapa",
  },
] as const;

export const INCLUYE = [
  "Las 2 horas en vivo por Zoom, en grupo de 25",
  "La grabación, disponible 30 días",
  "El lote de XML ficticios y los prompts del taller, para repetirlo en casa",
  "La lista de verificación de qué nunca se sube a un chat",
  "La guía de 5 prompts para auditar XML con Claude",
] as const;

export const FAQ_EMPIEZA = [
  {
    pregunta: "¿Necesito saber algo de IA o de programación?",
    respuesta:
      "No. Cero. El taller empieza en qué es y qué no es la inteligencia artificial, y en dos horas no se escribe una sola línea de código. Está pensado para quien no la ha usado o la probó y se decepcionó.",
  },
  {
    pregunta: "¿Sirve si uso ChatGPT?",
    respuesta:
      "El taller es de Claude y solo de Claude, a propósito. En dos horas con gente que empieza, dos herramientas son caos, y el proyecto que configuramos es una función concreta de Claude. Lo que aprendas en el taller es lo que vas a usar el lunes.",
  },
  {
    pregunta: "¿Necesito Claude Pro?",
    respuesta:
      "No es obligatorio, pero te lo recomiendo. El plan gratuito tiene un límite de uso que se agota en una sesión intensa, y que te salga 'alcanzaste tu límite' a mitad del bloque de XML te deja sin terminar la práctica. Cuesta US$20 al mes (aprox. $400 MXN) y puedes cancelarla antes de que se renueve. Si no la tienes, en el correo de confirmación te digo cómo sacarla en cinco minutos.",
  },
  {
    pregunta: "¿Qué pasa si no puedo en vivo?",
    respuesta:
      "La grabación es tuya 30 días. Pero el taller está hecho para hacerlo en vivo: cada bloque termina con algo hecho en tu pantalla, y en vivo puedes atorarte y preguntar. Si sabes que no vas a poder, mejor espera la siguiente fecha: el cupo es de 25 y cuando una fecha se llena se abre otra.",
  },
  {
    pregunta: "¿Esto es el curso Claude para Contadores?",
    respuesta:
      "No: es el escalón anterior. Claude para Contadores son 8 horas en Fiscalistas.AI para ir a fondo, con Claude Code y Excel. Si sientes que ese todavía no es para ti, este taller es el paso de antes. Si ya usas proyectos de Claude, sáltate este y ve directo al curso.",
  },
  {
    pregunta: "¿Por qué solo 25 lugares?",
    respuesta:
      "Porque en dos horas con gente que empieza en cero, cada bloque termina con algo hecho en la pantalla de cada quien, y con más gente eso se vuelve conferencia. El cupo no se sube: cuando una fecha se llena, se abre la siguiente.",
  },
  {
    pregunta: "¿Cuánto cuesta el taller?",
    respuesta:
      `${EMPIEZA.precioTexto}, pago único. Te recomiendo además una suscripción a Claude Pro (US$20 al mes, aprox. $400 MXN, se paga aparte). Si cancelas el taller hasta dos días antes de tu fecha te devuelvo el dinero completo.`,
  },
] as const;
