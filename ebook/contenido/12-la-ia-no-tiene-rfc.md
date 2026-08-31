---
title: "Capítulo 12: La IA no tiene RFC ni responde ante el SAT"
pubDate: 2026-03-13
description: "Alucinaciones, checklist de verificación y groundedness. Por qué nunca debes firmar sin revisar lo que generó la IA."
chapter: 12
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-12.webp"
isFree: false
---

# Capítulo 12: La IA no tiene RFC ni responde ante el SAT. Tú sí

<!--
Fuente: Newsletter #5
Concepto principal: Alucinaciones (Hallucinations)
Términos para glosario: Alucinación, Hallucination, Verificación, Groundedness
-->

Todos tenemos un colega así.

El que te dice con total seguridad: "No, eso ya lo derogaron en la reforma de 2022". O: "El artículo 27, fracción VIII de la LISR dice claramente que sí es deducible". O: "La fecha límite para eso es el 17 de abril, no el 17 de marzo". Te lo dice con tal convicción que no le preguntas. Le crees. Porque suena seguro, porque habla rápido, porque nunca titubea.

Y tres días después, cuando lo verificas porque algo no te cuadra, resulta que la fracción no era la VIII sino la III. O que la fecha sí era en marzo. O que la disposición que supuestamente derogaron sigue vigente y aplicando.

Lo confrontas y te sale con: "Ah, me confundí, es que estaba pensando en otro artículo". Y ya. Sin más. Como si confundir una fracción de la LISR fuera lo mismo que equivocarse de mesa en un restaurante.

## El colega que nunca dice "no sé"

Pues la IA hace exactamente lo mismo. Y lo hace por la misma razón: no porque sea malintencionada, sino porque está diseñada para darte una respuesta, no para buscar la verdad.

Recuerda lo que vimos en el Capítulo 1 sobre cómo aprende la IA. Todo su entrenamiento es un ciclo de predecir y ajustar. El modelo nunca "busca" la respuesta correcta en una base de datos de hechos verificados. Lo que hace es calcular cuál es la siguiente palabra más probable dado todo lo que le dijiste antes. Es un sistema de predicción estadística sofisticadísimo, pero predicción al fin.

Y aquí está el problema: cuando el modelo no tiene suficiente información para darte la respuesta correcta, no se queda callado. No dice "mira, de esto no estoy seguro, déjame checar". Hace lo que tu colega: te da una respuesta con la misma confianza con la que te daría una que sí es correcta.

Ese fenómeno tiene nombre: alucinación.

> **Alucinación (Hallucination):** Es cuando un modelo de IA genera información que suena correcta y se presenta con total confianza, pero que es parcial o completamente falsa. No es un error aleatorio: es una consecuencia estructural de cómo funcionan los modelos de lenguaje.

La palabra "alucinación" es perfecta porque describe exactamente lo que pasa. El modelo no está mintiendo. No sabe que está diciendo algo incorrecto. Para él, esa respuesta es la más probable dado el contexto. El modelo está viendo cosas que no existen, igual que alguien que alucina.

Y esto es lo más importante que quiero que entiendas: la confianza del modelo no tiene ninguna correlación con la precisión de su respuesta. Cero. Nada. Te dice "el artículo 28, fracción V del CFF establece que..." con la misma seguridad si el artículo existe como si se lo acaba de inventar.

## Esto no es un bug. Es una característica

Aquí es donde mucha gente se pierde. Cada cierto tiempo sale alguien diciendo que la nueva versión de tal modelo ya "resolvió" el problema de las alucinaciones. Hace poco, en un grupo de colegas, alguien compartió una actualización de una herramienta y dijo: "100% libre de alucinación".

Eso no existe todavía. Y probablemente no existirá pronto.

No es que los ingenieros de las empresas de IA sean flojos o incompetentes. Es que la alucinación es consecuencia directa de la arquitectura de estos modelos. Mientras el modelo funcione prediciendo la siguiente palabra más probable, siempre existirá la posibilidad de que esa predicción sea incorrecta pero suene perfecta.

Piénsalo en términos contables: es como si tuvieras un sistema que calcula el ISR de tus clientes con base en patrones estadísticos de miles de declaraciones anteriores, en lugar de aplicar la ley artículo por artículo. La mayor parte del tiempo va a dar un resultado razonable. Pero de vez en cuando va a calcular algo que suena lógico, que parece correcto, pero que no tiene fundamento legal real.

Los modelos han mejorado mucho. Alucinan menos que antes. Pero "menos" no es "nunca". Y en materia fiscal, la diferencia entre "casi siempre correcto" y "siempre correcto" puede ser una multa, un requerimiento del SAT o la pérdida de un cliente.

## Lo que la IA inventa en materia fiscal

Voy a ser específico porque esto lo he visto con mis propios ojos y necesitas saber qué tipo de errores comete.

**Artículos del CFF que no existen.** Le preguntas a la IA sobre algún tema fiscal y te cita un "artículo 42 Bis del Código Fiscal de la Federación" con toda la seguridad del mundo. Suena legítimo. Tiene la estructura correcta. Pero no existe. El modelo juntó palabras que estadísticamente van juntas en textos fiscales y creó una referencia ficticia.

**Tasas de ISR incorrectas para el ejercicio.** Te da una tasa de retención del 30% para un tipo de ingreso que en realidad tributa al 35%, o viceversa. El número que te da existió en algún momento, quizá en otro ejercicio fiscal, quizá para otro tipo de contribuyente. Pero no aplica al caso que le estás preguntando.

**Leyes derogadas citadas como vigentes.** El modelo fue entrenado con textos de diferentes épocas. Tiene información de leyes que ya no están vigentes mezclada con legislación actual. A veces te cita una disposición que fue derogada hace tres años como si siguiera aplicando. No distingue entre lo que era y lo que es.

**Fechas de publicación en el DOF inventadas.** Te dice "esta disposición fue publicada en el Diario Oficial de la Federación el 15 de marzo de 2024" y resulta que ese día no se publicó nada relevante. La fecha suena plausible, el formato es correcto, pero es completamente fabricada.

Cada uno de estos errores, si no lo verificas, se convierte en un problema con tu nombre encima. Porque la IA no tiene RFC. No presenta declaraciones por cuenta propia. No responde requerimientos del SAT.

Tú sí.

## Tu lista de verificación antes de confiar

Después de meses de usar la IA como herramienta de trabajo en el despacho, he desarrollado un proceso que hoy es automático para mí. Antes de usar cualquier dato fiscal que me da la IA, lo paso por estos cinco filtros:

**1. Verifica los números de artículo en la ley real.** Si la IA te cita el "artículo 27, fracción III de la LISR", abre la LISR y confirma que esa fracción dice lo que la IA afirma que dice. No asumas. Verifica. He encontrado fracciones correctas con contenido equivocado y fracciones inventadas con contenido que suena perfecto.

**2. Confirma tasas y porcentajes contra las tablas oficiales.** Si la IA te da una tasa de retención, una tarifa, un porcentaje de deducción, verifícalo contra la tabla oficial vigente para el ejercicio fiscal que estás trabajando. Las tasas cambian, los límites se actualizan, y el modelo no siempre tiene la versión más reciente.

**3. Revisa las fechas contra publicaciones del DOF.** Si la IA te dice que algo se publicó en una fecha específica, busca esa publicación. El DOF tiene un buscador. Toma treinta segundos. Si la publicación no existe, todo lo que se construye sobre esa referencia se cae.

**4. Cruza la información con criterios oficiales del SAT.** El SAT publica criterios normativos y no vinculativos. Si la IA te da una interpretación, verifícala contra estos criterios. A veces el modelo te da una interpretación que suena razonable pero que va directamente en contra de un criterio publicado.

**5. Si cita una fuente, verifica que la fuente exista.** Esto parece obvio pero es el error más común. La IA te dice "según la Resolución Miscelánea Fiscal para 2026, regla 2.7.1.35" y tú asumes que si te dio el número de regla, es porque la leyó. No. Verifica que esa regla exista y que diga lo que la IA afirma.

Cinco pasos. Menos de diez minutos en total. Y la diferencia entre un dato verificado y una alucinación con apariencia de legalidad.

## En la práctica

La contadora Elena tiene un cliente nuevo, persona moral del régimen general, que quiere saber si puede deducir los gastos de un viaje de negocios al extranjero. Elena decide usar la IA para hacer una primera investigación.

Le pregunta al modelo y recibe una respuesta impecable: cita el artículo 28 de la LISR, menciona los requisitos de deducibilidad, habla de la documentación comprobatoria, e incluso le da los límites de viáticos exentos para viajes al extranjero con el monto específico en pesos.

Elena, que no ha verificado, le manda un resumen al cliente con los montos. El cliente planea su viaje y sus gastos con base en esos números.

Dos meses después, al preparar la declaración anual, Elena revisa los montos contra la ley vigente. Los límites que la IA le dio no corresponden al ejercicio actual. Eran de dos ejercicios atrás. La diferencia es significativa y el cliente ya gastó más de lo deducible.

Si Elena hubiera aplicado el paso 2 de la lista de verificación —confirmar tasas y porcentajes contra tablas oficiales— habría detectado el error en treinta segundos. Antes de mandarle cualquier cosa al cliente. Antes de que el cliente tomara decisiones con datos incorrectos.

La IA le dio un excelente punto de partida. La estructura del análisis era correcta. Los artículos aplicables eran los correctos. Pero un dato específico —el monto— estaba mal. Y en temas de impuestos, un dato específico mal puede costar dinero real.

## Cómo reducir el riesgo (sin dejar de usar la IA)

No estoy diciendo que no uses la IA. Estoy diciendo que la uses con los ojos abiertos.

Hay dos mecanismos que reducen significativamente las alucinaciones. No las eliminan. Las reducen.

El primero lo vimos en el Capítulo 10: RAG. Cuando le das al modelo documentos específicos —la ley, el reglamento, la miscelánea— y le dices que responda solo con base en esos documentos, el modelo tiene menos espacio para inventar. En lugar de predecir qué diría la ley, lee lo que dice la ley. Es como la diferencia entre pedirle a alguien que te cuente de memoria lo que dice un artículo y pedirle que lo lea en voz alta con el documento enfrente.

El segundo lo vimos en el Capítulo 6: la cadena de pensamiento. Cuando obligas al modelo a razonar paso a paso, cada paso funciona como un punto de verificación. Si en el paso 3 dice algo que contradice el paso 1, tiene la oportunidad de detectarlo y corregirse. No es infalible, pero reduce errores de forma significativa.

Y el tercero eres tú. Tu criterio profesional. Tu conocimiento de la ley. Tu capacidad de leer una respuesta y detectar cuando algo no cuadra. La IA es una herramienta poderosa, pero necesita un profesional detrás que sepa distinguir entre una respuesta correcta y una alucinación bien escrita.

> **Groundedness (Fundamentación):** Es la medida en que una respuesta de la IA está basada en información real y verificable, en lugar de ser generada por predicción estadística. Una respuesta "grounded" se puede rastrear hasta su fuente original. Una respuesta no fundamentada puede sonar perfecta pero no tener respaldo real.

## Mito vs. Realidad

- **Mito:** "La nueva versión de tal modelo ya no alucina. Es 100% confiable."
- **Realidad:** Ningún modelo de lenguaje actual está libre de alucinaciones. Los modelos más recientes alucinan menos, pero la posibilidad siempre existe porque es inherente a cómo funcionan. En materia fiscal, "casi siempre correcto" no es suficiente.

- **Mito:** "Si la IA te cita un artículo de ley con número y fracción, es porque lo verificó."
- **Realidad:** La IA no verifica nada. Predice qué combinación de palabras es más probable. Puede inventar un número de artículo que suena perfecto y citarlo con total confianza. La única verificación real es la tuya.

---

### Lo que te llevas

- La alucinación no es un error que se va a corregir en la próxima actualización. Es una consecuencia estructural de cómo funcionan los modelos de lenguaje. La confianza con la que te da una respuesta no tiene relación con qué tan correcta es.
- Antes de usar cualquier dato fiscal generado por IA, pásalo por los cinco filtros: verifica artículos, confirma tasas, revisa fechas, cruza con criterios del SAT, y si cita una fuente, confirma que exista.
- La IA es un primer borrador extraordinario, no una fuente de verdad. Úsala para investigar, estructurar y analizar. Pero la firma en la declaración es tuya, y la responsabilidad ante el SAT también.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y pregúntale: "¿Cuáles son los requisitos de deducibilidad de los gastos de viaje al extranjero para una persona moral del régimen general según la LISR vigente? Dame los montos específicos de viáticos exentos."
2. Toma la respuesta y verifica cada dato contra la ley vigente. ¿Los artículos que citó existen? ¿Las fracciones dicen lo que el modelo afirma? ¿Los montos son correctos para el ejercicio fiscal actual?
3. Anota cuántos datos eran correctos y cuántos no. Ese ejercicio te va a calibrar mejor que cualquier artículo sobre qué tan confiable es la IA en temas fiscales.

### Si quieres ir más lejos

Los prompts del [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) ya incluyen instrucciones que le piden al modelo citar fuentes específicas y señalar cuándo no tiene certeza. Eso no elimina las alucinaciones, pero las hace más fáciles de detectar. Es como ponerle un auxiliar a cada respuesta en lugar de recibir solo el saldo final.
