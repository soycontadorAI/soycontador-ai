/**
 * Oferta de capacitación en 3 modalidades (definidas por Israel 2026-08-30):
 *
 * 1. El taller: $4,999 MXN, precio PÚBLICO (decisión explícita). Son 8 horas
 *    en vivo REPARTIDAS EN SESIONES DE 2 HORAS, nunca una maratón de un día.
 *    Se abre una edición al mes, con calendario variable (2 h/día durante 2
 *    semanas, o 4 días seguidos). Incluye grabación, material y 30 días de
 *    acompañamiento sobre los proyectos del asistente.
 *    OJO CON EL COPY: no llamarlo "sesión mensual" (se lee como suscripción
 *    "pago y nos reunimos cada mes") y lo que se compra es UNA edición. Tampoco
 *    "taller abierto": "abierto" es jerga de capacitador y al comprador no le
 *    dice nada. Lo que comunica es la FECHA de la próxima edición.
 * 2. Organizaciones/capacitadoras (B2B2C): ellas revenden de forma masiva.
 *    El ancla de $3,500-4,000 MXN/hora es INTERNA: nunca se publica.
 * 3. Capacitación empresarial: equipos completos, sesiones grupales de 1-2 h
 *    por día. Solo por cotización: formulario extendido → llamada agendada.
 *
 * TEMARIO: borrador redactado por Claude a partir del enfoque del taller
 * "Despacho IA-First"; Israel lo va a revisar/reescribir.
 */

/**
 * Próxima edición del taller.
 *
 * Es el ÚNICO dato del sitio con fecha de caducidad, así que se cuida solo:
 * si `inicio` ya pasó, la página no la anuncia (ni al construir ni en el
 * navegador) y cae en el aviso de "te avisamos de la siguiente". Preferimos no
 * dar fecha a dar una vencida.
 *
 * Al abrir una edición nueva se actualiza aquí y ya: la fecha aparece en
 * /capacitacion, en la tarjeta de la home, en el JSON-LD y en llms.txt.
 */
export interface Edicion {
  /** ISO (YYYY-MM-DD). El día que arranca la primera sesión. */
  inicio: string;
  /** ISO. Último día, si se quiere anunciar el rango completo. */
  fin?: string;
  /** Cómo se reparten las 8 horas: "martes y jueves, 2 horas por sesión". */
  ritmo: string;
  /** "11:00 a 13:00, hora del centro de México". */
  horario: string;
}

/** TODO(Israel): fecha de la próxima edición. En null se muestra el aviso. */
export const PROXIMA_EDICION: Edicion | null = null;

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/**
 * La frase completa, no solo la fecha: con una sola fecha se dice "Empieza el
 * 16 de septiembre" y con rango "Del 15 al 24 de septiembre", donde el "empieza"
 * sobra porque el rango ya lo dice. Sin año, que siempre es este mes o el
 * siguiente y ponerlo suena a trámite.
 */
export function fechaDeEdicion(edicion: Edicion): string {
  const [, mesI, diaI] = edicion.inicio.split("-").map(Number);
  if (!edicion.fin) return `Empieza el ${diaI} de ${MESES[mesI - 1]}`;

  const [, mesF, diaF] = edicion.fin.split("-").map(Number);
  return mesI === mesF
    ? `Del ${diaI} al ${diaF} de ${MESES[mesF - 1]}`
    : `Del ${diaI} de ${MESES[mesI - 1]} al ${diaF} de ${MESES[mesF - 1]}`;
}

/** La edición solo si todavía no arranca. Null si ya pasó o no hay fecha. */
export function edicionVigente(hoy = new Date()): Edicion | null {
  if (!PROXIMA_EDICION) return null;
  const limite = new Date(`${PROXIMA_EDICION.inicio}T23:59:59-06:00`);
  return limite >= hoy ? PROXIMA_EDICION : null;
}

export const TALLER = {
  nombre: "Taller de automatización",
  precio: "$4,999 MXN",
  duracion: "8 horas en vivo, en sesiones de 2 horas",
  incluye: [
    "Las 8 horas en vivo, repartidas en sesiones de 2 horas (cupo limitado)",
    "Grabación de la sesión para repasar cuando quieras",
    "Material de la clase: prompts, plantillas y guías",
    "30 días de acompañamiento para ver la evolución de tu proyecto",
  ],
  /** Borrador de temario de 8 h, pendiente de revisión de Israel */
  temario: [
    {
      bloque: "01 · Fundamentos sin humo",
      temas:
        "Qué puede y qué no puede hacer la IA en un despacho. Seguridad y secreto profesional: qué nunca se pega en un chat público.",
    },
    {
      bloque: "02 · Prompts para trabajo fiscal",
      temas:
        "El método para pedirle a la IA en términos correctos: auditoría de CFDI, papeles de trabajo y redacción de escritos con casos reales del SAT.",
    },
    {
      bloque: "03 · Tus archivos, tu IA",
      temas:
        "Conectar Claude a tus XML y Exceles: conciliaciones, concentrados y reportes en lenguaje natural con la conexión MCP de TodoConta.",
    },
    {
      bloque: "04 · Automatiza un proceso completo",
      temas:
        "De la tarea repetitiva al script que corre en segundos: construimos en vivo una automatización de un proceso real (como el concentrado mensual de un cliente).",
    },
    {
      bloque: "05 · Tu proyecto y tu plan de 30 días",
      temas:
        "Cada asistente sale con su propio proyecto definido y el plan de acompañamiento para dejarlo funcionando en su despacho.",
    },
  ],
} as const;

/**
 * Caso real "auditor con poderes" (expediente verificado; publicado
 * ANONIMIZADO: sin nombre, sector, municipio ni cifras exactas ligables.
 * El honorario NO se publica. Pendiente: consentimiento por escrito del
 * cliente/contador referente antes de presumirlo con más detalle).
 */
export const CASO_AUDITOR = {
  titulo: "Esto es lo que cambia cuando el auditor trae IA",
  /** Los que se renderizan en la página. La trazabilidad la muestra el flujo. */
  parrafos: [
    "Un despacho me trajo el caso de una empresa con décadas de operación: cinco ejercicios fiscales, 257 páginas de declaraciones y balanzas, 513 cuentas contables y un testimonio notarial de 84 páginas escaneadas. Trabajo de semanas para un equipo tradicional.",
    "El núcleo del análisis salió en una noche: la IA hizo la lectura pesada y yo puse el criterio. El diagnóstico respondió la pregunta original del cliente (el cambio de régimen que pedía le habría costado hasta un millón de pesos al año, a cambio de nada) y encontró más de 11 millones de pesos en saldos a favor sin recuperar, además de un error de casi 850 mil pesos en su control de pérdidas.",
    "Eso hace un auditor con poderes: no cobra por las horas que tarda, cobra por lo que encuentra en ellas. Y esa forma de trabajar es exactamente la que enseño aquí.",
  ],
  /**
   * En la página esto lo comunica el componente FlujoExpediente; el texto
   * existe para llms-full.txt, que no ve el diagrama.
   */
  trazabilidad:
    "Cada cifra del informe salió con su fuente y su número de página: 90 partidas trazadas una por una, porque el trabajo de un contador no se firma con \"me lo dijo la máquina\".",
  expediente: {
    filas: [
      { concepto: "Ejercicios fiscales revisados", cargo: "5" },
      { concepto: "Páginas de PDF leídas", cargo: "257" },
      { concepto: "Cuentas contables verificadas", cargo: "513" },
      { concepto: "Cifras trazadas a su fuente", cargo: "90" },
    ],
    total: { concepto: "Núcleo del análisis", cargo: "1 noche" },
    nota: "// de documentación recibida a informe entregado: 14 días",
  },
} as const;

export const ORGANIZACIONES = {
  nombre: "Para organizaciones y capacitadoras",
  descripcion:
    "¿Capacitas contadores de forma masiva? Llevemos este programa a tu comunidad: colegios, capacitadoras y plataformas pueden licenciar el taller completo, con Israel al frente y su equipo en el soporte. Tú pones la audiencia; yo pongo el programa, la ejecución y las herramientas.",
  puntos: [
    "Programa probado de 8 horas, adaptable a tu calendario (4 sesiones de 2 horas, o el reparto que le funcione a tu comunidad)",
    "Con demostraciones en vivo sobre el SAT, no diapositivas teóricas",
    "Modelo de reventa: tú comercializas a tu comunidad, yo imparto",
  ],
} as const;

export const EMPRESARIAL = {
  nombre: "Capacitación empresarial",
  descripcion:
    "Para tu empresa o despacho completo: sesiones grupales de 1 a 2 horas por día, adaptadas a tu operación real y al nivel de tu equipo. Este programa solo se cotiza por llamada: primero me cuentas cómo opera tu equipo en el formulario y después agendamos.",
  puntos: [
    "Sesiones grupales de 1-2 horas por día, sin frenar la operación",
    "Sobre los procesos reales de tu empresa, no ejemplos genéricos",
    "Plan de adopción por rol: quién automatiza qué",
  ],
} as const;
