/**
 * Ebook "IA para Contadores": temario, precios y compra.
 *
 * Fuente única de la página /ebook, del JSON-LD (Book + Offer) y de
 * llms-full.txt. El libro mismo vive en `ebook/` (contenido, diseño y
 * generadores de PDF); aquí solo está lo que se publica para venderlo, que es
 * copy de venta y no las `description` internas del frontmatter. Si cambia un
 * título de capítulo allá, se refleja aquí a mano.
 *
 * Edición vigente: segunda, agosto 2026 (ver ebook/CHANGELOG.md).
 */

export interface Pieza {
  num: string;
  titulo: string;
  resumen: string;
}

export interface Parte {
  romano: string;
  nombre: string;
  /** El verbo que ordena la parte: desmitificar, entender, usar... */
  verbo: string;
  piezas: Pieza[];
}

export const EDICION = {
  nombre: "Segunda edición",
  fecha: "agosto de 2026",
  paginas: 162,
} as const;

export const PARTES: Parte[] = [
  {
    romano: "I",
    nombre: "Qué es realmente la IA",
    verbo: "Desmitificar",
    piezas: [
      {
        num: "01",
        titulo: "La IA no es lo que crees que es",
        resumen:
          "Los LLM no piensan ni entienden: predicen. Entender esto es la diferencia entre usar bien o mal cualquier herramienta de IA.",
      },
      {
        num: "02",
        titulo: "No todos los modelos son iguales",
        resumen:
          "Parámetros, modelos de frontera contra modelos pequeños, benchmarks. Cómo elegir el modelo correcto para cada tarea.",
      },
      {
        num: "03",
        titulo: "Cómo aprende la IA",
        resumen:
          "Pre-entrenamiento, fine-tuning y RLHF explicados sin código. Por qué la fecha de corte del entrenamiento importa.",
      },
    ],
  },
  {
    romano: "II",
    nombre: "Cómo funciona por dentro",
    verbo: "Entender",
    piezas: [
      {
        num: "04",
        titulo: "Lo que cuesta hablarle a la IA",
        resumen:
          "Tokens, ventana de contexto, costo por uso. Qué es gratis, qué no, y cómo usar los modelos sin desperdiciar dinero.",
      },
      {
        num: "05",
        titulo: "La IA solo sabe lo que le cuentas",
        resumen:
          "La ventana de contexto y el efecto “lost in the middle”. Por qué las conversaciones largas deterioran las respuestas.",
      },
      {
        num: "06",
        titulo: "La diferencia entre adivinar y razonar",
        resumen:
          "Cadena de pensamiento, modelos de razonamiento contra velocidad, y el dial de esfuerzo que reemplazó a elegir modelo.",
      },
      {
        num: "07",
        titulo: "Temperatura y creatividad",
        resumen:
          "Por qué la misma pregunta te da respuestas distintas, y por qué el parámetro existe en unos modelos y desapareció en otros.",
      },
    ],
  },
  {
    romano: "III",
    nombre: "Cómo hablarle bien",
    verbo: "Usar",
    piezas: [
      {
        num: "08",
        titulo: "El manual de tu despacho, pero para la IA",
        resumen:
          "El System Prompt como manual interno de tu firma. Cómo personalizar la IA para que trabaje como tú quieres.",
      },
      {
        num: "09",
        titulo: "Darle la información correcta desde la primera línea",
        resumen:
          "Prompt engineering y el método ISCA (Identidad, Situación, Consigna, Acabado) para contadores mexicanos.",
      },
      {
        num: "10",
        titulo: "Cuando la IA no sabe, enséñale tú",
        resumen:
          "RAG y embeddings en términos simples, más el MCP: conectar la IA a tus datos en lugar de subírselos.",
      },
      {
        num: "11",
        titulo: "La IA aprende como tus hijos: con ejemplos, no con discursos",
        resumen:
          "Zero-shot, one-shot y few-shot. Cómo enseñarle con ejemplos en lugar de instrucciones larguísimas.",
      },
    ],
  },
  {
    romano: "IV",
    nombre: "Los riesgos que nadie te explica",
    verbo: "Proteger",
    piezas: [
      {
        num: "12",
        titulo: "La IA no tiene RFC ni responde ante el SAT",
        resumen:
          "Alucinaciones, checklist de verificación y groundedness. Por qué nunca debes firmar sin revisar lo que generó la IA.",
      },
      {
        num: "13",
        titulo: "La IA es tan poderosa como inocente",
        resumen:
          "Prompt injection, jailbreak y privacidad. Qué información de tus clientes nunca debe tocar un chat público.",
      },
      {
        num: "14",
        titulo: "Sesgo, ética y responsabilidad profesional",
        resumen:
          "Sesgo en IA, uso ético, transparencia con clientes y la responsabilidad que sigue siendo del contador.",
      },
    ],
  },
  {
    romano: "V",
    nombre: "El panorama real",
    verbo: "Decidir",
    piezas: [
      {
        num: "15",
        titulo: "Ojo con quien te vende automatizar TODA tu contabilidad",
        resumen:
          "Agentes de IA, automatización real contra promesa, y por qué el human-in-the-loop no es opcional en contabilidad.",
      },
      {
        num: "16",
        titulo: "Qué SÍ puedes hacer hoy",
        resumen:
          "Diez casos de uso listos para implementar mañana en tu despacho, sin necesidad de saber programar.",
      },
      {
        num: "17",
        titulo: "El contador que usa IA contra el que no",
        resumen:
          "Qué cambia de verdad en tu ventaja competitiva, y qué sigue siendo tuyo como profesionista.",
      },
    ],
  },
];

export const APENDICES: Pieza[] = [
  {
    num: "A",
    titulo: "Glosario de términos",
    resumen:
      "Todos los términos técnicos del libro explicados en español con analogías contables. Tu referencia rápida.",
  },
  {
    num: "B",
    titulo: "Recursos recomendados",
    resumen:
      "Herramientas, lecturas y recursos seleccionados para seguir aprendiendo, con su fecha de verificación.",
  },
  {
    num: "C",
    titulo: "Cinco prompts de muestra",
    resumen:
      "Prompts listos para usar en situaciones fiscales y contables reales del despacho mexicano.",
  },
];

/** Los dos productos que se venden en nas.io. El precio SÍ se publica. */
function conUtm(url: string, contenido: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "soycontador");
  u.searchParams.set("utm_medium", "web");
  u.searchParams.set("utm_campaign", "ebook");
  u.searchParams.set("utm_content", contenido);
  return u.toString();
}

const NAS_BASE =
  "https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB";

export const COMPRA = {
  ebook: {
    nombre: "IA para Contadores",
    precio: "297",
    precioTexto: "$297 MXN",
    detalle: "PDF completo: 17 capítulos y 3 apéndices",
    url: conUtm(`${NAS_BASE}&productId=69cd0ae3e2df2b4a3aa7eb2a`, "solo-ebook"),
  },
  bundle: {
    nombre: "IA para Contadores + Pack de Prompts",
    precio: "597",
    precioTexto: "$597 MXN",
    detalle: "El libro completo más los 25 prompts con el contexto fiscal mexicano ya incorporado",
    url: conUtm(`${NAS_BASE}&productId=69cd0f8e84606b692086aba1`, "bundle"),
  },
  garantia: "Garantía de 7 días: si no te sirve, te devuelvo tu dinero sin preguntas.",
} as const;

export const EBOOK_META = {
  headline: "Entiende la IA antes de que la IA te rebase",
  gancho: "La IA ya está en los despachos.",
  subgancho:
    "El problema no es que no la uses. Es que no sabes qué tan mal la estás usando.",
  remate: "No te reemplaza la IA. Te reemplaza el contador que la usa bien.",
  muestra: "Introducción y capítulos 1 y 2, completos",
} as const;

export const FAQ_EBOOK = [
  {
    pregunta: "¿Necesito saber de tecnología para entender este libro?",
    respuesta:
      "No. El libro no tiene una sola línea de código y cada concepto técnico se explica con una analogía contable. Si sabes lo que es una conciliación, tienes todo lo que necesitas para entender qué es una ventana de contexto.",
  },
  {
    pregunta: "¿Es un manual de ChatGPT?",
    respuesta:
      "No, y eso es a propósito. Los tutoriales enseñan botones y los botones cambian cada mes. Este libro enseña cómo funcionan los modelos por debajo, que es lo que te sirve con la herramienta que salga mañana.",
  },
  {
    pregunta: "¿Cuánto cuesta el ebook de IA para contadores?",
    respuesta:
      "$297 MXN el libro completo en PDF, o $597 MXN junto con el Pack de Prompts para Contadores. Los dos se pagan una vez y las actualizaciones de edición te llegan sin costo.",
  },
  {
    pregunta: "¿Sirve si trabajo con el SAT y la legislación mexicana?",
    respuesta:
      "Sí: está escrito desde un despacho mexicano. Los ejemplos son CFDI, ISR, requerimientos del SAT y papeles de trabajo, en pesos y con la normativa de aquí.",
  },
  {
    pregunta: "El libro se escribió en 2026, ¿ya no está viejo?",
    respuesta:
      "Se mantiene vivo: la segunda edición (agosto de 2026) actualizó todo lo que caducó y los datos que dependen del proveedor van marcados con su fecha de verificación. Si compras hoy y sale una edición nueva, te llega sin costo.",
  },
  {
    pregunta: "¿Puedo leer algo antes de comprarlo?",
    respuesta:
      "Sí. La muestra gratuita trae la introducción y los capítulos 1 y 2 completos, con sus ejercicios, no un adelanto recortado. Te la mando por correo y decides después.",
  },
];
