/**
 * Copy de /despachos: la página del Avatar B (dueño o socio de un despacho de
 * 5 a 50 personas). Ver `docs/avatar.md`.
 *
 * TRES REGLAS QUE NO SE TOCAN:
 *
 * 1. SIN PRECIO. Ni tarifa, ni rango, ni "desde". El ancla interna de
 *    $3,500-4,000/hora es piso de cotización y nunca sale del despacho de
 *    Israel. Lo que sustituye al precio no es el silencio: es decir con qué
 *    alcance se trabaja, qué pasa después del formulario y en cuánto tiempo.
 *    Una página sin precio Y sin siguiente paso solo produce ansiedad.
 * 2. LENGUAJE DE MARGEN, NO DE MIEDO. A este avatar no lo va a reemplazar la
 *    IA: él es el dueño. Lo que le duele es que el despacho no da más de sí
 *    sin contratar a alguien más. Nada de "no te quedes atrás" aquí; eso es
 *    de la home, que le habla al Avatar A.
 * 3. UN AVATAR POR PÁGINA. Al contador individual se le manda a /capacitacion
 *    y se le dice por qué. No se le vende aquí.
 *
 * La oferta está productizada en todoconta-apps/docs/taller-ia-despachos.md;
 * este archivo es su versión pública, sin números internos.
 */

/** El costo de no hacer nada, en la forma en que un contador lo lee. */
export const ARITMETICA = {
  folio: "DESP-01",
  titulo: "Lo que cuesta el operativo, al año",
  columnaCargo: "Cargo",
  filas: [
    { concepto: "Horas de cierre por contador, al mes", cargo: "18 h" },
    { concepto: "Contadores en el equipo", cargo: "12" },
    { concepto: "Horas mensuales en captura, descarga y cuadre", cargo: "216 h", detalle: true },
    { concepto: "Costo hora del equipo", cargo: "$280" },
  ],
  total: { concepto: "Al año", cargo: "$725,760" },
  nota:
    "El ejemplo es de un despacho de 12 contadores. Los tuyos salen del diagnóstico, y son los que deciden si esto te conviene o no. Ojo: no se recorta todo. Se recorta la parte que es captura, descarga y cuadre, y cuánto exactamente es lo que mide el piloto con un cliente tuyo.",
} as const;

/** Lo que se lleva el despacho. El entregable es la respuesta a "ya llevamos cursos". */
export const ENTREGABLES = [
  {
    titulo: "Cuatro a seis flujos corriendo",
    texto:
      "Montados durante las sesiones sobre la operación real del despacho, no sobre un ejemplo de manual: clasificación de CFDI, conciliación, complementos de pago, DIOT, nómina timbrada.",
  },
  {
    titulo: "El SOP de IA del despacho",
    texto:
      "Documentado: los prompts propios, quién revisa qué antes de firmar, y la lista de lo que NO se le da a la IA. Es lo que hace que el método sobreviva a la rotación de tu gente.",
  },
  {
    titulo: "Pack de prompts personalizado",
    texto:
      "A tus regímenes y a tu tipo de cliente. No es la lista genérica que circula en LinkedIn.",
  },
  {
    titulo: "Grabaciones y material",
    texto:
      "Las sesiones quedan grabadas, así que quien entre después al despacho las ve sin que tengas que volver a contratar nada.",
  },
  {
    titulo: "Certificado de participación",
    texto: "Para el expediente de cada quien y para la evidencia de capacitación.",
  },
] as const;

/** Cómo se ve por dentro. La regla de las 2 horas es argumento de venta. */
export const FORMATO = [
  "Ocho horas repartidas en sesiones de dos, nunca más de dos horas en un día. No es preferencia de calendario: nadie las aguanta con provecho, ni el equipo ni yo.",
  "Los días los pones tú: cuatro seguidos, o repartidos para que no choquen con el cierre.",
  "En línea o presencial. Hasta unas veinte personas por grupo.",
  "Sobre datos anonimizados de tu propia operación. La e.firma, las claves y los datos de tus clientes no se pegan en ninguna IA pública.",
  "Los prerrequisitos de cuentas se mandan antes, para no gastar la primera sesión instalando.",
] as const;

export const TEMARIO = [
  {
    horas: "1 h",
    titulo: "Cimientos",
    texto:
      "Cómo funciona la IA hoy, qué modelo sirve para qué, y las tres reglas de un flujo híbrido (la máquina hace el volumen, el contador firma).",
  },
  {
    horas: "2 h",
    titulo: "Flujos operativos",
    texto:
      "Clasificar CFDI deducible y no deducible. Conciliar banco contra CFDI contra contabilidad. En vivo, con datos del despacho.",
  },
  {
    horas: "2 h",
    titulo: "Flujos de cierre",
    texto: "Complementos de pago, armado de la DIOT y conciliación de la nómina timbrada.",
  },
  {
    horas: "1 h",
    titulo: "SAT y cliente",
    texto:
      "Redactar la respuesta a un requerimiento, y traducirla a algo que el cliente entienda sin asustarse.",
  },
  {
    horas: "1 h",
    titulo: "El SOP del despacho",
    texto:
      "Aquí se construye lo que queda: prompts propios, criterios de verificación y firma, y quién revisa qué.",
  },
  {
    horas: "1 h",
    titulo: "Guardarraíles y herramientas",
    texto:
      "Responsabilidad profesional, datos sensibles, y cómo TodoConta baja y procesa los XML que alimentan todo lo anterior.",
  },
] as const;

/**
 * Qué pasa después del formulario. Esto es lo que sustituye al precio: quien
 * no sabe cuánto cuesta necesita saber al menos qué sigue y cuándo.
 */
export const DIAGNOSTICO = [
  {
    paso: "01",
    titulo: "Llenas el formulario",
    texto:
      "Cinco minutos. Cuántos son, qué regímenes llevan y dónde se les va el tiempo hoy.",
  },
  {
    paso: "02",
    titulo: "Te contesto por correo",
    texto:
      "Si por lo que leo esto no es para tu despacho, te lo digo ahí mismo y no gastamos una llamada. Me ha pasado y prefiero decirlo.",
  },
  {
    paso: "03",
    titulo: "Llamada de treinta minutos",
    texto:
      "Sacamos la cuenta con tus números: cuántas horas se van en el cierre, cuánto cuesta esa hora, qué proceso duele más. Sin presentación de ventas.",
  },
  {
    paso: "04",
    titulo: "Propuesta de inversión",
    texto:
      "Por escrito, con alcance, calendario, entregables y precio cerrado por el proyecto. No cobro por hora: el número sale de lo que el despacho se lleva, no de cuánto tiempo estoy frente a tu equipo.",
  },
] as const;

/** El filtro. Le ahorra la llamada a los dos lados y hace creíble el resto. */
export const NO_ES_PARA_TI = [
  "Buscas una conferencia de una hora para el aniversario del despacho. Esto es implementación y se nota en el cansancio del equipo.",
  "Quieres que la IA haga el trabajo sin que nadie de tu gente aprenda a dirigirla. Ese producto no existe, y quien te lo venda te va a quedar mal.",
  "Son una o dos personas. Ahí sale más barato el taller abierto, que es el mismo método en formato individual.",
] as const;
