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
      "Sí, con método. El riesgo real es copiar y pegar RFCs, nóminas o facturas en un chat público, donde pierdes el control del dato. Con herramientas diseñadas para el trabajo fiscal la IA consulta tus CFDI por un canal controlado, y con la versión de escritorio de TodoConta tus XML se quedan en tu equipo.",
  },
  {
    pregunta: "¿Necesito saber programar para automatizar mi despacho?",
    respuesta:
      "No. Del código se encarga la IA; lo que necesitas es saber nombrar el problema en los términos correctos, y eso es justo lo que enseño. Soy desarrollador de software y ni yo tecleo código hoy: se lo describo a la IA y reviso lo que devuelve. Tu criterio contable es la parte que no se puede automatizar.",
  },
  {
    pregunta: "¿No estoy demasiado grande para subirme a la IA?",
    respuesta:
      "No, al contrario: tus años de experiencia son tu ventaja. La IA multiplica lo que ya sabes hacer; un contador con 20 años de criterio y las herramientas correctas supera a cualquier recién egresado que nació con el chip. Lo único que te falta es método, no juventud.",
  },
  {
    pregunta: "¿Quién es Israel Castro?",
    respuesta:
      "Soy contador público con 15 años de ejercicio y desarrollador de software: estudié programación, trabajé como desarrollador en una startup mexicana y hoy automatizo mi propio despacho con IA. Creé TodoConta y su conexión MCP con Claude, y conduzco el live semanal Jueves de ContadorIA.",
  },
];

export const FAQ_CAPACITACION: FaqItem[] = [
  {
    pregunta: "¿Qué incluye la capacitación en IA para contadores?",
    respuesta:
      "Trabajo práctico sobre casos reales del SAT: descarga y auditoría de CFDI, conciliaciones, papeles de trabajo y prompts que tu equipo se lleva funcionando. No es teoría de IA; es tu operación fiscal, automatizada en la sesión.",
  },
  {
    pregunta: "¿Cuánto cuesta un taller de IA para contadores?",
    respuesta:
      "El taller abierto cuesta $4,999 MXN por persona e incluye las 8 horas en vivo —repartidas en sesiones de 2 horas, no en una maratón de un día—, la grabación, el material y 30 días de acompañamiento sobre tu proyecto. La capacitación para empresas, despachos completos y organizaciones se cotiza por llamada, después de un formulario corto.",
  },
  {
    pregunta: "¿La capacitación es en línea o presencial?",
    respuesta:
      "Los dos formatos existen. El taller abierto es en línea; para empresas, despachos y colegios de contadores en México también hay formato presencial, con el contenido adaptado al nivel del equipo.",
  },
  {
    pregunta: "¿Puedo llevar este taller a mi organización o comunidad?",
    respuesta:
      "Sí. Colegios, capacitadoras y plataformas pueden licenciar el programa completo para su comunidad: tú comercializas a tu audiencia y yo imparto. Escríbeme por el formulario y platicamos el modelo.",
  },
];

export const FAQ_SOLUCIONES: FaqItem[] = [
  {
    pregunta: "¿Qué es una solución a la medida?",
    respuesta:
      "Es un desarrollo hecho para un proceso específico de tu negocio: automatizar un reporte que hoy armas a mano, mejorar un flujo que ya tienes o auditar tu operación con código. Tú no aprendes a programar; recibes la herramienta funcionando.",
  },
  {
    pregunta: "¿Qué tipo de procesos se pueden automatizar?",
    respuesta:
      "Casi cualquier tarea repetitiva que viva en archivos y sistemas: concentrados de ventas, conciliaciones, descargas del SAT, papeles de trabajo, reportes recurrentes. La prueba de fuego es simple: si cada mes haces los mismos pasos con datos nuevos, se puede automatizar.",
  },
];

export const FAQ_CLUB: FaqItem[] = [
  {
    pregunta: "¿Qué es el Club de Automatización Fiscal?",
    respuesta:
      "Es una membresía anual para despachos que quieren automatizar su operación fiscal con acompañamiento. Combina software (TodoConta con conexión MCP), un bootcamp de implementación en vivo cada mes y soporte humano cuando el equipo se atora.",
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
