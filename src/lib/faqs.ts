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
    pregunta: "¿No estoy demasiado grande para subirme a la IA?",
    respuesta:
      "Al revés. La parte cara de la ecuación son tus años, y esa ya la pagaste. Lo que falta se aprende en una tarde, y a esta altura es lo barato. Lo único que necesitas es método.",
  },
  {
    pregunta: "¿Es seguro usar IA con datos fiscales de mis clientes?",
    respuesta:
      "Pegar facturas o RFCs en un chat público es regalar la información de tu cliente. Trabajar tus XML por un canal privado y anonimizado es blindaje profesional: el dato no anda suelto y la información contable se queda donde debe estar. Y si quieres el grado máximo de control, la versión de escritorio de TodoConta procesa en tu equipo: tu e.firma, tus .key, tus .cer y los XML de tus clientes nunca salen de tu computadora.",
  },
  {
    pregunta: "¿Necesito saber programar para automatizar mi despacho?",
    respuesta:
      "No, y yo tampoco lo escribo. Del código se encarga la IA. Lo que necesitas es saber nombrar el problema en los términos correctos, y eso es justo lo que enseño. Yo la dirijo, y sé leer lo que escribe para saber si está bien. Tu criterio contable es la parte que no se puede automatizar, y da la casualidad de que es la parte que ya tienes.",
  },
  {
    pregunta: "¿Y si ya intenté con ChatGPT y no me sirvió?",
    respuesta:
      "Casi siempre es lo mismo: le pediste algo como si fuera un buscador. La IA responde al nivel del contexto que le das. Si le hablas como practicante, te contesta como practicante. Si le hablas como socio (con el caso, los datos y lo que quieres de salida), te contesta como socio. El método que enseño es exactamente eso.",
  },
  {
    pregunta: "¿Quién es Israel Castro?",
    respuesta:
      "Soy contador público con catorce años de ejercicio y desarrollador de software: estudié programación, trabajé como desarrollador en una startup mexicana y hoy automatizo mi propio despacho con IA. Construí TodoConta y su conexión MCP con Claude, y conduzco el live semanal Jueves de ContadorIA.",
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
      "Se cotiza, no hay tarifa de lista. El taller son 8 horas en vivo repartidas en sesiones de 2 horas (no una maratón de un día) e incluye la grabación, el material y 30 días de acompañamiento sobre tu proyecto; escríbeme por el formulario y te paso el precio y la fecha de la siguiente edición. La capacitación para empresas, despachos completos y organizaciones se cotiza por llamada, después de un formulario corto.",
  },
  {
    pregunta: "¿La capacitación es en línea o presencial?",
    respuesta:
      "Los dos formatos existen. El taller es en línea; para empresas, despachos y colegios de contadores en México también hay formato presencial, con el contenido adaptado al nivel del equipo.",
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
  {
    pregunta: "¿Qué es el vigía fiscal?",
    respuesta:
      "Es un monitor que revisa a diario la cartera de RFCs que administras y te avisa el mismo día en que algo cambia: la opinión de cumplimiento (32-D) se vuelve negativa, un RFC aparece en las listas 69 o 69-B, o se mueve el régimen o el domicilio en la constancia. Se construye a la medida sobre tu cartera y se cotiza por tamaño, después del diagnóstico.",
  },
  {
    pregunta: "¿El vigía fiscal abre el buzón tributario?",
    respuesta:
      "No, y es a propósito. Abrir un documento del buzón equivale a darte por notificado y arranca los plazos, así que un monitor que lo abriera solo te crearía obligaciones. El vigía te avisa que hay algo esperándote y la decisión de abrirlo, y cuándo, sigue siendo tuya.",
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

/**
 * Preguntas del Avatar B (dueño o socio de despacho). No repiten las de
 * FAQ_HOME a propósito: ese avatar pregunta otras cosas. La primera es la del
 * precio, y se contesta SIN precio pero con el siguiente paso, que es lo que
 * de verdad quita la ansiedad de una página sin tarifa.
 */
export const FAQ_DESPACHOS: FaqItem[] = [
  {
    pregunta: "¿Cuánto cuesta capacitar en IA al equipo de mi despacho?",
    respuesta:
      "Depende de cuántos son y del alcance, así que no hay tarifa de lista: se cotiza después de un diagnóstico corto. Llenas el formulario, platicamos treinta minutos con los números de tu despacho enfrente y te mando una propuesta de inversión por escrito, con alcance, calendario y precio cerrado por el proyecto. No cobro por hora, porque lo que compras no son mis horas.",
  },
  {
    pregunta: "¿Y si capacito a mi gente y se me va con la competencia?",
    respuesta:
      "Peor que capacitar a alguien y que se vaya es no capacitarlo y que se quede. Y en la práctica pasa al revés de lo que temes: se va el que no encuentra razón para quedarse, y un despacho donde se trabaja con herramientas modernas retiene mejor que uno donde se captura a mano hasta las once de la noche. Además, lo que queda no es solo lo que aprendió cada quien: queda escrito el método, con los prompts propios y los criterios de revisión. Y ese método es del despacho aunque alguien se vaya.",
  },
  {
    pregunta: "¿Tenemos que parar la operación para la capacitación?",
    respuesta:
      "No. Son sesiones de dos horas y nunca más de una al día, y los días los pones tú: seguidos o repartidos para que no choquen con el cierre. Es un tope que impongo yo por experiencia, no una concesión: nadie aguanta ocho horas seguidas con provecho.",
  },
  {
    pregunta: "Ya llevamos cursos de IA y no pasó nada. ¿Qué cambia aquí?",
    respuesta:
      "Que el entregable no son apuntes. Al terminar, tu equipo tiene entre cuatro y seis flujos montados y corriendo sobre la operación real del despacho, más el método por escrito. Se trabaja con tus clientes y tus regímenes, no con ejemplos de manual, y por eso lo que se monta el jueves sirve el viernes.",
  },
  {
    pregunta: "¿Es seguro usar IA con los datos de mis clientes?",
    respuesta:
      "Sí, con método, y este es el bloque al que le dedico una hora completa. Se trabaja con datos anonimizados: la e.firma, las claves y la información de tus clientes no se pegan en una IA pública, que es donde de verdad se pierde el control del dato. Para los CFDI que alimentan los flujos se usa TodoConta, que los baja y los procesa por un canal controlado en lugar de un chat abierto.",
  },
  {
    pregunta: "¿Sirve para un colegio de contadores o para un corporativo?",
    respuesta:
      "Sí, es el mismo programa impartido por bloques. Un colegio forma a sus agremiados y una empresa a su área contable; en los dos casos cambia el alcance y el calendario, no el método. Escríbeme por el mismo formulario y lo vemos en la llamada.",
  },
];
