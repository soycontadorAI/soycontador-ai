/**
 * Preguntas con respuesta answer-first: la respuesta directa va en las dos
 * primeras frases. El mismo dato alimenta la UI (FaqBlock) y el JSON-LD
 * FAQPage, para que nunca diverjan.
 */

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const FAQ_HOME: FaqItem[] = [
  {
    pregunta: "¿La IA va a reemplazar a los contadores?",
    respuesta:
      "No. Va a reemplazar a los que la ignoren. El contador que usa IA para automatizar su operación se vuelve infraestructura de sus clientes, y a la infraestructura de un negocio no la despiden.",
  },
  {
    pregunta: "¿Es seguro usar IA con datos fiscales de mis clientes?",
    respuesta:
      "Sí, siempre que la IA trabaje en tu computadora y no en un chat público. Para eso existe MCP (Model Context Protocol): Claude se conecta a tus archivos locales y ningún XML sale de tu entorno. Copiar y pegar RFCs o nóminas en un chat abierto sí es un riesgo para el secreto profesional.",
  },
  {
    pregunta: "¿Necesito saber programar para automatizar mi despacho?",
    respuesta:
      "No. Yo sí programo, para que tú no tengas que hacerlo. En mis talleres y herramientas trabajamos con soluciones listas para usar; tu parte es el criterio contable, no el código.",
  },
  {
    pregunta: "¿Quién es Israel Castro?",
    respuesta:
      "Soy contador público con 15 años de ejercicio y desarrollador de software, en México. Creé TodoConta (software fiscal en producción desde 2012), la conexión MCP que integra Claude con los CFDI del SAT, y conduzco el live semanal Jueves de ContadorIA.",
  },
];

export const FAQ_TALLERES: FaqItem[] = [
  {
    pregunta: "¿Qué incluye un taller de IA para contadores?",
    respuesta:
      "Trabajo práctico sobre casos reales del SAT: descarga y auditoría de CFDI, conciliaciones, papeles de trabajo y prompts que tu equipo se lleva funcionando. No es teoría de IA; es tu operación fiscal, automatizada en la sesión.",
  },
  {
    pregunta: "¿Los talleres son en línea o presenciales?",
    respuesta:
      "Los dos formatos existen. En línea para equipos distribuidos y presencial para despachos, empresas y colegios de contadores en México; el contenido se adapta al nivel del equipo tras un diagnóstico corto.",
  },
  {
    pregunta: "¿Cuánto cuesta un taller?",
    respuesta:
      "Depende del tamaño del equipo, el formato y el alcance. Por eso el primer paso es un diagnóstico sin costo: me cuentas cómo opera tu despacho y te propongo el taller con precio cerrado.",
  },
];

export const FAQ_CLUB: FaqItem[] = [
  {
    pregunta: "¿Qué es el Club de Automatización Fiscal?",
    respuesta:
      "Es una membresía anual para despachos que quieren automatizar su operación fiscal con acompañamiento. Combina software (TodoConta Enterprise con conexión MCP), un bootcamp de implementación en vivo cada mes y soporte humano cuando el equipo se atora.",
  },
  {
    pregunta: "¿Por qué la entrada es por aplicación?",
    respuesta:
      "Porque los lugares son limitados y el modelo es de acompañamiento real, no de curso grabado. Reviso cada aplicación para confirmar que tu despacho va a sacarle provecho desde el primer mes.",
  },
  {
    pregunta: "¿Esto es un curso de IA?",
    respuesta:
      "No. Los cursos te dan videos; el Club te deja procesos automatizados operando en tu despacho. Cada bootcamp mensual termina con algo funcionando, y si te atoras entre sesiones, el soporte lo destraba contigo.",
  },
];
