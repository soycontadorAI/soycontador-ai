---
title: "Capítulo 3: Cómo aprende la IA"
pubDate: 2026-03-13
description: "Pre-entrenamiento, fine-tuning y RLHF explicados sin código. Por qué la fecha de corte del entrenamiento importa."
chapter: 3
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-03.webp"
isFree: false
---

# Capítulo 3: Cómo aprende la IA (y por qué le importa a un contador)

<!--
Fuente: Newsletter #4
Concepto principal: Fases de entrenamiento de un LLM (preentrenamiento, fine-tuning, RLHF)
Términos para glosario: preentrenamiento, fine-tuning, RLHF, training data cutoff, modelo de código abierto, modelo de código cerrado
-->

Acuérdate de tus primeros días en la universidad. No me refiero a los buenos (las fiestas, los cuates, las salidas del viernes). Me refiero a los otros días. Los de sentarte con una hoja tabular de doce columnas y registrar asientos contables a mano. Los de memorizar el catálogo de cuentas hasta que lo soñaras dormido. Los de resolver balanzas de comprobación que nunca cuadraban a la primera.

Horas y horas leyendo las NIF. Haciendo ejercicios que parecían interminables. Estudiando teoría que no sabías si algún día ibas a necesitar.

Y lo más frustrante: todavía sin tocar un cliente real. Sin abrir el portal del SAT. Sin batallar con un CFDI cancelado fuera de plazo. O la falta de un complemento de pago que hace que nada te cuadre con lo que dice el SAT. Solo absorbiendo información como esponja, sin saber muy bien para qué.

## Tres fases, un mismo camino

Pues resulta que la IA pasa por algo muy parecido antes de que tú puedas escribirle una sola palabra. No nace sabiendo. Aprende. Y su proceso de aprendizaje tiene tres fases que, curiosamente, se parecen mucho a tu carrera como contador.

### Fase 1: La universidad (preentrenamiento)

En esta primera fase, el modelo lee cantidades absurdas de texto. Libros, artículos, páginas web, código, conversaciones, documentos legales, foros. Miles de millones de textos. Su único trabajo es detectar patrones: cómo se construyen las oraciones, qué palabras tienden a ir juntas, cómo se estructura un argumento.

No sabe todavía para qué lo van a usar. No tiene idea de que alguien va a preguntarle sobre la deducibilidad de un gasto o sobre cómo llenar una DIOT. Solo aprende la estructura del lenguaje.

Igual que tú en la carrera. Aprendiste la teoría contable completa sin saber que un día ibas a tener un cliente que te llamara en pánico porque el SAT le mandó una carta-invitación por supuestas diferencias.

> **Preentrenamiento:** Es la primera fase de aprendizaje de un modelo de IA, donde lee miles de millones de textos para aprender patrones del lenguaje. No aprende a responder preguntas; aprende cómo funciona el idioma.

### Fase 2: El despacho (fine-tuning)

Ya terminaste la carrera. Llegas al despacho. Y te das cuenta de algo que nadie te dijo: lo que aprendiste en la universidad es la base, pero el trabajo real es otra cosa.

Ahora tienes que aprender a atender clientes. A estructurar respuestas que hagan sentido para alguien que no sabe de contabilidad. A no soltar tecnicismos sin explicarlos. A seguir instrucciones específicas: "necesito esta declaración para el viernes" o "quiero un resumen ejecutivo, no un tratado".

Para la IA, esta fase se llama fine-tuning. El modelo ya sabe mucho sobre lenguaje. Ahora lo entrenan específicamente para tener conversaciones útiles. Para responder cuando le preguntan. Para seguir instrucciones. Para ser un asistente y no solo una enciclopedia enorme que vomita información sin orden.

> **Fine-tuning:** Es la fase donde un modelo preentrenado se ajusta con datos específicos para que aprenda a tener conversaciones útiles, seguir instrucciones y responder de forma estructurada.

### Fase 3: Los clientes (RLHF)

Y luego llega la fase que más te enseña en cualquier profesión: los clientes reales.

El cliente que te regresa un trabajo porque no quedó como esperaba. El que te explica exactamente qué necesitaba y tú no entendiste a la primera. El socio que te revisa un papel de trabajo y te dice "esto está bien, pero esto otro no sirve así". Sin querer, te enseñan más que tres semestres juntos.

Para la IA, esto se llama RLHF: Reinforcement Learning from Human Feedback. Aprendizaje por retroalimentación humana. Miles de personas reales evalúan las respuestas del modelo. Señalan cuáles son útiles, cuáles son incorrectas, cuáles son peligrosas. El modelo aprende de esas correcciones y se ajusta. Una y otra vez.

No es magia. Es iteración. Es la misma razón por la que tú eres mejor contador hoy que hace cinco años: porque has recibido retroalimentación de clientes, colegas y del propio SAT.

> **RLHF (Reinforcement Learning from Human Feedback):** Es la fase donde humanos evalúan las respuestas de la IA y la corrigen, como un socio experimentado que revisa y corrige el trabajo de un pasante hasta que mejora.

### Ninguna fase se puede saltar

Esto es importante: no puedes tomar un modelo sin preentrenamiento y hacerle fine-tuning. Sería como meter a alguien al despacho sin que haya pisado una universidad. Tampoco puedes saltar el RLHF y esperar que el modelo responda bien a preguntas complejas. Sería como contratar a un recién egresado y mandarlo solo con tu cliente más importante o más complejo en operaciones.

Cada fase construye sobre la anterior. Y cuando un modelo te da una respuesta que no te convence, no es porque sea tonto. Es porque en alguna de esas fases, para tu caso específico, le faltó algo. Y ese "algo" muchas veces lo puedes compensar tú dándole mejor contexto en tu prompt, como veremos en el Capítulo 5.

## El corte de conocimiento: por qué la IA no sabe lo que pasó ayer

Hay algo que las tres fases anteriores tienen en común: todas ocurren ANTES de que tú uses el modelo. El entrenamiento no es en tiempo real. No es como una página de noticias que se actualiza cada hora.

Esto significa que cada modelo tiene lo que se llama un "corte de conocimiento" o training data cutoff. Es la fecha hasta la cual el modelo tiene información. Después de esa fecha, para efectos prácticos, el mundo no existe para él.

Piensa en esto: si un modelo fue entrenado con datos hasta diciembre de 2024, y tú le preguntas sobre los cambios de la Miscelánea Fiscal 2026, literalmente no sabe. No es que se le olvidó. No es que te está mintiendo a propósito. Es que esa información no existía cuando aprendió.

Sin embargo, aquí hay un matiz importante: hoy en día, algunos modelos tienen acceso directo a internet. Esto les permite "salir" a buscar información en tiempo real para intentar cerrar esa brecha de conocimiento.

Pero ojo: tener internet no es lo mismo que tener criterio. Si el modelo busca la Miscelánea Fiscal 2026 y el primer resultado que encuentra es un blog con un error o una interpretación apresurada, la IA te dará ese dato incorrecto con la misma seguridad que si fuera oficial. El modelo no siempre jerarquiza la fuente; para él, un post en redes sociales podría tener el mismo peso que un comunicado del SAT si no se le entrena para distinguir la autoridad de la fuente.

Por eso, para temas fiscales que cambian cada año (tasas, reglas, facilidades, resoluciones del SAT), nunca confíes ciegamente en la respuesta del modelo, aunque te diga que lo acaba de buscar en Google. Siempre verifica contra la fuente oficial.

Y aquí viene el problema real: si no tiene acceso a internet, en lugar de decirte "no sé", muchos modelos van a intentar responder con lo que saben. Van a darte información desactualizada como si fuera vigente. O van a inventar algo que suene razonable pero que no corresponde con la norma actual.

Este concepto lo vamos a profundizar cuando hablemos de alucinaciones y responsabilidad profesional en el Capítulo 12.

> **Training data cutoff (corte de conocimiento):** Es la fecha límite de la información con la que fue entrenado un modelo. Todo lo que ocurrió después de esa fecha, el modelo simplemente no lo sabe.

## Código abierto vs código cerrado: lo que te importa en la práctica

Hay otra distinción que vale la pena que conozcas, aunque no seas programador. Los modelos de IA se dividen en dos grandes categorías: código cerrado y código abierto.

Un modelo de código cerrado es como usar Aspel COI, CONTPAQi Contabilidad, Contalink o cualquier software de contabilidad. Tú lo usas, metes datos, sacas reportes. Pero no puedes ver cómo funciona por dentro. No puedes modificarlo. No puedes instalarlo en tu propia computadora. Dependes completamente del proveedor. Los modelos de OpenAI (GPT), Anthropic (Claude), Google (Gemini) y X (Grok) son así.

Un modelo de código abierto es como una plantilla de Excel que alguien publicó y que cualquier persona puede descargar, modificar y adaptar a sus necesidades. Los modelos de Meta (Llama), Mistral o DeepSeek funcionan así. Alguien con conocimientos técnicos puede descargar el modelo, correrlo en su propia computadora y hasta ajustarlo para tareas específicas.

Para ti como contador, la diferencia práctica es esta:

- **Código cerrado:** Más fácil de usar, generalmente mejor rendimiento, pero tus datos pasan por los servidores de la empresa. Y dependes de sus políticas de privacidad.
- **Código abierto:** Más control sobre tus datos (puedes correrlo localmente, sin internet, nada sale de tu computadora), pero requiere conocimientos técnicos para instalarlo y generalmente necesita una computadora potente.

Si manejas información sensible de clientes (y como contador, siempre lo haces), esta distinción no es trivial. Saber que existen alternativas donde los datos no salen de tu equipo es importante, aunque hoy no las uses. Como veremos en el Capítulo 13, la ética y la privacidad en el uso de IA son temas que todo profesional debe tener en el radar.

## Por qué los modelos mejoran con el tiempo

Seguro has notado que cada pocos meses se anuncia una versión nueva de algún modelo, y que para cuando te aprendiste el nombre ya salió el siguiente. Los nombres cambian, pero la lógica es la misma: cada nueva versión pasó por las tres fases con más datos, mejor fine-tuning y más retroalimentación humana.

Es como la diferencia entre tú como recién egresado y tú después de diez años de experiencia. Misma persona, misma base, pero con más horas de vuelo.

Esto también significa que un prompt que te daba resultados mediocres hace seis meses puede darte resultados excelentes con un modelo más reciente. No porque tu prompt haya cambiado, sino porque el modelo que lo interpreta es mejor.

## En la práctica

Imagina que eres Adriana, contadora independiente en Querétaro, y un cliente te pregunta: "Oye, vi que salió una nueva facilidad del SAT para facturar gastos de gasolina. ¿Me aplica?"

Tu instinto es preguntarle a la IA. Le escribes: "¿Cuál es la nueva facilidad del SAT para deducción de gasolina?" Y el modelo te responde con mucha seguridad... citando una regla de la Resolución Miscelánea de 2024.

El problema: esa regla ya cambió. El modelo no lo sabe porque su corte de conocimiento es anterior a la actualización.

Si Adriana entiende el concepto de training data cutoff, no tomará la respuesta como verdad absoluta. La usa como punto de partida: "Ok, esta era la regla antes. Ahora deja busco en la RMF vigente si cambió algo." Le ahorró tiempo al modelo de búsqueda, pero hizo la verificación ella.

Eso es usar la IA como herramienta, no como oráculo. La IA te da el borrador; tú pones el criterio profesional.

## Mito vs. Realidad

- **Mito:** La IA se actualiza sola y siempre tiene la información más reciente.
- **Realidad:** Los modelos tienen un corte de conocimiento fijo. Todo lo posterior a esa fecha, no lo saben. Algunos modelos tienen acceso a internet para buscar información reciente, pero esa búsqueda no es lo mismo que haber sido entrenados con esos datos: es más superficial y puede contener errores.

- **Mito:** Si la IA da una mala respuesta, es porque la herramienta no sirve.
- **Realidad:** Muchas veces una mala respuesta significa que el modelo necesitaba mejor contexto de tu parte. Entender cómo aprende la IA te ayuda a darle la información que necesita para responderte bien.

---

### Lo que te llevas

- La IA aprende en tres fases (preentrenamiento, fine-tuning, RLHF) y ninguna se puede saltar. Entender esto te ayuda a saber por qué responde como responde.
- Cada modelo tiene un corte de conocimiento: no sabe lo que pasó después de su fecha de entrenamiento. Para temas fiscales que cambian cada año, siempre verifica con la fuente oficial.
- Existen modelos de código abierto y cerrado. La diferencia no es solo técnica: afecta dónde quedan los datos de tus clientes.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA (ChatGPT, Claude, Gemini, el que tengas a la mano) y pregúntale: "¿Cuál es tu fecha de corte de conocimiento?" Anota la respuesta.
2. Ahora pregúntale algo que sepas que cambió después de esa fecha. Por ejemplo: "¿Cuál es la tasa de recargos vigente para 2026?" o "¿Qué dice la Resolución Miscelánea Fiscal 2026 sobre la cancelación de CFDI?"
3. Compara la respuesta del modelo con la fuente oficial (DOF, página del SAT). Observa si el modelo te avisó que su información podría estar desactualizada o si te la presentó como si fuera vigente.

### Si quieres ir más lejos

Saber cómo aprende la IA es el primer paso. El segundo es saber cómo hablarle para que esas tres fases de entrenamiento trabajen a tu favor. En el [Pack de prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd), cada instrucción está diseñada considerando exactamente estos conceptos: le da al modelo el contexto fiscal mexicano que su preentrenamiento no cubre con suficiente profundidad.
