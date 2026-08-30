/**
 * Oferta de capacitación en 3 modalidades (definidas por Israel 2026-08-30):
 *
 * 1. Sesión mensual abierta: $4,999 MXN, precio PÚBLICO (decisión explícita).
 *    Incluye la sesión de 8 horas, grabación, material y 30 días de
 *    acompañamiento sobre los proyectos del asistente.
 * 2. Organizaciones/capacitadoras (B2B2C): ellas revenden de forma masiva.
 *    El ancla de $3,500-4,000 MXN/hora es INTERNA: nunca se publica.
 * 3. Capacitación empresarial: equipos completos, sesiones grupales de 1-2 h
 *    por día. Solo por cotización: formulario extendido → llamada agendada.
 *
 * TEMARIO: borrador redactado por Claude a partir del enfoque del taller
 * "Despacho IA-First"; Israel lo va a revisar/reescribir.
 */

export const SESION_MENSUAL = {
  nombre: "Sesión mensual de automatización",
  precio: "$4,999 MXN",
  duracion: "8 horas en vivo",
  incluye: [
    "La sesión completa en vivo (8 horas, cupo limitado)",
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

export const ORGANIZACIONES = {
  nombre: "Para organizaciones y capacitadoras",
  descripcion:
    "¿Capacitas contadores de forma masiva? Llevemos este programa a tu comunidad: colegios, capacitadoras y plataformas pueden licenciar el taller completo, con Israel al frente y su equipo en el soporte. Tú pones la audiencia; yo pongo el programa, la ejecución y las herramientas.",
  puntos: [
    "Programa probado de 8 horas, adaptable a tu formato (1 día intensivo o 4 sesiones de 2 horas)",
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
