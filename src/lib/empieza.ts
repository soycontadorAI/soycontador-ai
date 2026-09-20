/**
 * Taller "Empieza aquí": Claude para contadores en 2 horas.
 *
 * El escalón anterior a Claude para Contadores (Fiscalistas.AI). Sale de la
 * encuesta de agosto de 2026 al boletín: el 70 % estaba en nivel cero o
 * aficionado y no está listo para 8 horas de Claude Code. La definición
 * completa (precio, por qué Claude Pro obligatorio, calendario de venta) vive
 * en `docs/taller-empieza-aqui.md`.
 *
 * Este taller SÍ publica precio: es producto de precio fijo, como el ebook.
 * La regla de "no publicar" es del high ticket (aclaración de Israel,
 * 2026-09-20). Al cambiarlo hay que tocar los cuatro lugares: aquí (que
 * alimenta la página y el JSON-LD), llms.txt y llms-full.txt.
 */

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
    inicio: "2026-10-17",
    fechaTexto: "Sábado 17 de octubre",
    checkout:
      "https://nas.com/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&sourceInfoType=event&sourceInfoOrigin=6aaf95ba7d4e46c810c12971&ticketCount=1&ticketTypeObjectId=6aaf95ba7d4e46c810c12972",
  },
  // Segunda edición, SOLO si la del 17 se llena: se destapa, se crea el
  // evento en nas.com y se pega su checkout. Mientras, no existe para nadie.
  // { inicio: "2026-10-24", fechaTexto: "Sábado 24 de octubre", checkout: null },
];

export const EMPIEZA = {
  nombre: "Empieza aquí",
  titulo: "Claude para contadores en 2 horas",
  /** Para el <title> y el JSON-LD, donde el nombre corto no dice nada solo */
  nombreCompleto: "Empieza aquí: Claude para contadores en 2 horas",
  descripcion:
    "Taller en vivo de 2 horas para contadores que no han usado inteligencia artificial o la probaron y les contestó como blog. Sales con un proyecto de Claude configurado para tu despacho, un prompt que cita el fundamento legal y tu primer lote de XML convertido en tabla y revisado. Sin conocimientos previos.",
  horario: "11:00 a 13:00, hora del centro de México",
  duracion: "2 horas en vivo",
  sede: "Por Zoom, con grabación disponible 30 días",
  cupo: 25,
  precio: "697",
  precioTexto: "$697 MXN",
  /** Lo que se paga aparte, dicho de frente: es parte del precio real */
  herramienta: {
    nombre: "Claude Pro",
    costoTexto: "unos $400 MXN al mes",
  },
  garantia:
    "Si cancelas hasta dos días antes de tu fecha te devuelvo el dinero completo. Si no puedes asistir en vivo, la grabación es tuya 30 días.",
} as const;

function limiteDe(e: Edicion): Date {
  return new Date(`${e.inicio}T23:59:59-06:00`);
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
      "Respuestas genéricas que no sirven para un caso real. No es la herramienta: es cómo se le pide. Eso se arregla en los primeros 30 minutos.",
  },
  {
    titulo: "Leíste el libro y no te has atrevido",
    texto:
      "Ya entiendes qué es y qué no. Te falta sentarte a hacerlo con alguien al lado. Eso es este taller.",
  },
] as const;

export const BLOQUES = [
  {
    minutos: "0 a 10",
    titulo: "Qué es y qué no",
    texto:
      "Predice, no piensa. Por qué resume una novela entera y no sabe que tu cliente es RESICO. Por qué contesta como blog.",
    sale: "La expectativa correcta",
  },
  {
    minutos: "10 a 40",
    titulo: "Cómo se le pide",
    texto:
      "La misma consulta fiscal, mal y bien: rol, contexto, instrucción, formato. Se agrega el renglón que exige el fundamento. Cada quien lo prueba con una duda propia.",
    sale: "Tu primer prompt que cita artículo",
  },
  {
    minutos: "40 a 70",
    titulo: "Tu proyecto",
    texto:
      "Se crea el proyecto de Claude del despacho. Qué se guarda ahí y qué nunca: los tres niveles, del chat público al canal controlado.",
    sale: "El proyecto configurado",
  },
  {
    minutos: "70 a 105",
    titulo: "La primera tarea",
    texto:
      "Lote de XML ficticios, tabla en Excel, revisión. Es la conciliación más simple que existe, y es la que Daniel hoy hace en minutos.",
    sale: "La tarea hecha y el prompt para repetirla",
  },
  {
    minutos: "105 a 120",
    titulo: "Qué sigue",
    texto:
      "Qué puedes hacer con esto la semana que entra, y dónde termina este taller y empieza el curso de 8 horas.",
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
      "El taller es de Claude y solo de Claude, a propósito. En dos horas con gente que empieza, dos herramientas son caos, y el proyecto que configuramos es una función concreta de Claude. Lo que aprendas el sábado es lo que vas a usar el lunes.",
  },
  {
    pregunta: "¿Por qué hace falta Claude Pro y no la versión gratuita?",
    respuesta:
      "Porque el plan gratuito tiene límites de uso que se topan en una sesión intensa, y que te salga 'alcanzaste tu límite' a la mitad del bloque de XML rompe el taller. Cuesta unos $400 MXN al mes, se paga aparte, y es la misma cuenta que vas a seguir usando. Si no la tienes, en el correo de confirmación te digo cómo sacarla en cinco minutos.",
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
      "$697 MXN, pago único, más tu suscripción a Claude Pro, que se paga aparte. Si cancelas hasta dos días antes de tu fecha te devuelvo el dinero completo.",
  },
] as const;
