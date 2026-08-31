---
title: "Capítulo 4: Lo que cuesta hablarle a la IA"
pubDate: 2026-03-13
description: "Tokens, ventana de contexto, costo por uso. Qué es gratis, qué no, y cómo usar los modelos sin desperdiciar dinero."
chapter: 4
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-04.webp"
isFree: false
---

# Capítulo 4: Lo que cuesta hablarle a la IA

<!--
Fuente: Newsletter #6
Concepto principal: Tokens como unidad de costo en modelos de IA
Términos para glosario: token, tokens de entrada, tokens de salida, API, contexto, suscripcion, nivel gratuito
-->

Tengo un cliente —lo voy a llamar Don Ramón, por proteger al inocente— que cada vez que me llama, me cuenta la historia completa de su negocio desde que lo fundó en 1998. Quién le vendió el local. Por qué se peleó con su primer socio. Cómo le fue en la crisis del 2009. Y después de quince minutos de contexto innecesario, me suelta la pregunta real: "Oye, y esa factura que me llegó, ¿la puedo deducir?"

Dos minutos de pregunta. Quince minutos de rollo.

Y yo, que cobro por hora, ya perdí tiempo que no recupero. Tiempo que podría haber dedicado a otro cliente, a revisar una declaración, a lo que fuera. No es que Don Ramón sea mala persona. Es que no sabe que su forma de comunicarse tiene un costo.

Ahora imagina el caso contrario: la Licenciada Marta. Llama, va directo al grano. "Tengo un CFDI de un proveedor de servicios por $45,000 más IVA, régimen 612, y quiero saber si me lo puedo deducir aunque el pago fue en efectivo." Treinta segundos. Toda la información que necesito. Puedo responderle en el momento.

La diferencia entre Don Ramón y la Licenciada Marta es exactamente la diferencia entre un mal prompt y un buen prompt. Y esa diferencia, cuando hablas con la IA, se mide en algo muy concreto: tokens.

## Qué es un token (y por qué te cuesta dinero)

Cada vez que le escribes algo a un modelo de IA, tu texto no llega tal cual. Antes de procesarlo, el modelo lo descompone en fragmentos pequeños llamados tokens. Un token no es exactamente una palabra. A veces es una palabra completa, a veces es un pedazo de palabra, a veces es un signo de puntuación.

Como regla general, en español, una palabra equivale a entre 1 y 2 tokens. Un texto de 500 palabras son aproximadamente 375-700 tokens, dependiendo de la complejidad de las palabras.

Lo importante: cada token cuesta dinero. Tanto los que tú escribes (tokens de entrada) como los que el modelo te responde (tokens de salida).

> **Token:** Es el fragmento mínimo de texto que un modelo de IA procesa. Cada palabra se divide en uno o más tokens. Procesar tokens tiene un costo real: pagas por lo que escribes y por lo que el modelo te responde.

## Tokens de entrada vs tokens de salida

Aquí hay un detalle que poca gente conoce y que importa más de lo que parece: **los tokens de salida cuestan más que los de entrada**. En algunos modelos, hasta tres o cuatro veces más.

La lógica tiene sentido si lo piensas en términos contables. Leer un documento es más rápido que redactar uno. Revisar una balanza te toma menos tiempo que elaborarla desde cero. El modelo hace más trabajo generando una respuesta que leyendo tu pregunta.

Por eso, cuando le pides al modelo que te escriba un ensayo de cinco páginas sobre el tratamiento fiscal de los ingresos acumulables según el Título II de la LISR, estás generando muchos tokens de salida. Y esos cuestan.

No significa que debas pedirle respuestas cortas siempre. Significa que debes ser consciente de que una respuesta de 2,000 palabras cuesta significativamente más que una de 200. Y a veces, la de 200 es más útil.

> **Tokens de entrada vs tokens de salida:** Los tokens de entrada son los que tú escribes; los de salida, los que el modelo genera. Los de salida cuestan más porque el modelo hace más trabajo al producir texto que al leerlo.

## Cuánto cuesta en la práctica

Vamos a hablar de números, porque somos contadores y los números son lo nuestro.

Una conversación típica con un modelo de IA tiene entre 2,000 y 4,000 tokens en total (sumando tu consulta, el contexto de los archivos que subas y la respuesta del modelo). Con los precios de API de marzo de 2026, esto cuesta entre 0.2 y 2 centavos de dólar por interacción.

Si utilizas el modelo más capaz de cualquier familia, el costo se acerca a los 2 centavos; si usas su versión ligera, el costo es de apenas una quinta parte de un centavo. En cualquier caso, estamos hablando de fracciones de peso por cada consulta profesional, un costo insignificante comparado con el valor del tiempo ahorrado.

"Entonces, si es tan barato, ¿por qué me importa?"

Porque eso es UNA conversación. Si usas la IA 50 veces al día —que es perfectamente normal en un despacho activo—, el costo se multiplica. Y si tus prompts son ineficientes y necesitas tres intentos para obtener la respuesta que querías, estás triplicando el gasto.

Ahora, si usas un modelo con razonamiento avanzado —como veremos en el Capítulo 6—, los tokens de "pensamiento" también cuentan. Una consulta compleja puede usar 10,000 o 20,000 tokens fácilmente. Y el costo ya no son fracciones de peso.

A escala de una empresa o un despacho con varios usuarios, esos centavos se convierten en cientos o miles de pesos al mes. Es como las comisiones bancarias: una no la sientes, pero al final del año te preguntas a dónde se fue todo ese dinero.

## Gratis vs de pago: qué obtienes realmente

"Pero yo uso la versión gratuita y no pago nada." Cierto. No pagas con dinero. Pero pagas de otras formas.

Los niveles gratuitos de los modelos de IA tienen limitaciones reales:

- **Límites de uso:** Solo puedes enviar cierto número de mensajes por hora o por día. En horas pico, te toca esperar.
- **Modelos menos potentes:** Generalmente te dan acceso al modelo básico, no al más avanzado. La diferencia en calidad de respuesta puede ser notable, especialmente en temas técnicos como fiscalización.
- **Sin acceso a funciones avanzadas:** Cosas como análisis de documentos, generación de imágenes o modelos con razonamiento extendido suelen estar reservadas para los planes de pago.

La suscripción típica ronda los 20 dólares al mes, aunque casi todos los proveedores tienen ya un escalón más caro para uso intensivo. Lo que obtienes a cambio: modelos más potentes, más mensajes, menos esperas y funciones adicionales.

La pregunta real no es "¿es caro o barato?". La pregunta es: "¿cuánto vale mi tiempo?"

Si eres un contador que cobra $500 pesos la hora de consultoría y la IA te ahorra 30 minutos en una tarea, esos 30 minutos valen $250 pesos. La suscripción de todo el mes se pagó sola en media hora. Incluso si cobras menos, piensa en cuántas horas al mes te ahorra tener un asistente que escribe borradores, resume documentos y organiza información. Si la respuesta es más de una hora, la cuenta es obvia.

## El verdadero costo de un mal prompt

Regresemos a Don Ramón y la Licenciada Marta.

Cuando Don Ramón le escribe a la IA, escribe algo así:

"Hola, tengo una duda. Mira, es que yo tengo un negocio de papelería desde hace muchos años y siempre he facturado normal pero ahora un proveedor me mandó una factura y no sé si está bien porque dice cosas que no entiendo y me preocupa que el SAT me vaya a decir algo. Tú qué opinas?"

Eso son muchos tokens de entrada que no aportan información útil. El modelo va a responder con algo genérico —"depende del tipo de factura, del régimen fiscal..."— que tampoco sirve. Don Ramón va a tener que aclarar. Otro mensaje. Más tokens. Y al tercer intento, tal vez llegue a una respuesta decente.

Tres rondas de conversación. Seis bloques de tokens (tres de entrada, tres de salida). Costo multiplicado por tres. Tiempo perdido.

La Licenciada Marta escribe:

"Soy contadora en México. Mi cliente está en el régimen 612 (personas físicas con actividades empresariales). Recibió un CFDI por $45,000 + IVA de un proveedor de servicios de limpieza. El pago fue en efectivo. Quiero saber: 1) ¿Es deducible para ISR? 2) ¿Hay algún límite por pago en efectivo según el artículo 27 de la LISR? Responde de forma concisa."

Una ronda. Un bloque de entrada, uno de salida. Respuesta precisa al primer intento. La diferencia en costo y en tiempo es brutal.

> **Ventana de contexto:** Es la cantidad máxima de tokens que un modelo puede procesar en una sola conversación (tanto lo que tú escribes como lo que el modelo responde). Si te pasas del límite, el modelo empieza a "olvidar" lo que le dijiste al principio.

## Por qué más largo no siempre es mejor

Hay una tentación natural: si la IA me puede escribir mucho, que me escriba mucho. Pero más tokens de salida no significan mejor respuesta. De hecho, muchas veces es al revés.

Una respuesta de 2,000 palabras sobre un tema que se resuelve en 200 tiene un problema doble: te costó más y te toca a ti filtrar el relleno para encontrar la información útil. Es como recibir un dictamen de 50 páginas cuando lo único que necesitabas era un párrafo con la conclusión.

Cuando redactes tus prompts, no tengas miedo de pedir concisión. "Responde en máximo 3 párrafos" o "Dame solo la conclusión sin explicar el razonamiento" son instrucciones perfectamente válidas que te ahorran tokens y tiempo. En el Capítulo 8 vamos a ver cómo estructurar instrucciones de sistema que controlan la extensión y el formato de las respuestas.

## En la práctica

Ricardo tiene un despacho en Monterrey con tres auxiliares contables. Los cuatro usan la IA a diario para redactar correos a clientes, resumir disposiciones fiscales y preparar borradores de papeles de trabajo.

Cada uno hace unas 30 consultas al día. Son 120 consultas diarias del despacho. Si cada consulta promedio usa 3,000 tokens y los prompts son ineficientes (requieren dos intentos en promedio), estamos hablando de 720,000 tokens al día. Al mes (22 días hábiles), son casi 16 millones de tokens.

Con precios típicos de API, eso puede representar entre $500 y $3,000 pesos mensuales, dependiendo del modelo que usen. No es una fortuna, pero tampoco es trivial.

Ahora, si Ricardo entrena a su equipo para escribir mejores prompts —directos, con contexto, con formato específico— y reducen los intentos de dos a uno en promedio, acaban de cortar el consumo a la mitad. Mismo resultado, mitad de costo. Es exactamente la misma lógica que cuando optimizas los procesos del despacho para reducir horas de trabajo.

## Mito vs. Realidad

- **Mito:** Usar la IA es gratis, no cuesta nada.
- **Realidad:** Siempre hay un costo. Si usas la versión gratuita, la empresa lo absorbe a cambio de limitarte el acceso y usar tus datos para mejorar el modelo. Si pagas, lo pagas tú. Como todo en esta vida, no hay almuerzo gratis.

- **Mito:** Si pago la suscripción, puedo usar la IA de forma ilimitada.
- **Realidad:** Incluso los planes de pago tienen límites de uso, especialmente para los modelos más avanzados. Un prompt ineficiente sigue desperdiciando tu cuota de mensajes y tu tiempo, aunque no te cobren por token individual.

---

### Lo que te llevas

- Cada interacción con la IA se mide en tokens, y los tokens cuestan dinero. Los de salida cuestan más que los de entrada porque el modelo trabaja más al generar texto.
- La diferencia entre un buen prompt y uno malo no es solo la calidad de la respuesta: es el costo. Un prompt directo y con contexto te ahorra dinero, tiempo y frustración.
- La decisión de usar un plan gratuito o de pago depende de cuánto vale tu tiempo. Si la IA te ahorra más de una hora al mes, la suscripción probablemente se paga sola.

### Pruébalo tú mismo

1. Toma una duda que tengas (por ejemplo, sobre el IVA en servicios digitales) y escríbela de dos formas:
   - Versión "Don Ramón": Vaga, con rodeos y sin contexto. "Oye, ¿cómo está eso de los impuestos para este año? Ya ves que todo sube y uno ya ni sabe qué onda con el SAT..."
   - Versión "Licenciada Marta": Precisa y profesional. "Actúa como especialista fiscal. Explica los cambios específicos en la tasa de retención de ISR para plataformas digitales según la Miscelánea Fiscal 2026 en México."

2. Envía ambas y compara no solo la calidad de la respuesta, sino el "gasto" de recursos. Como la IA a veces falla al contar sus propios tokens en la charla, usa estas herramientas gratuitas para ver la realidad:
   - OpenAI Tokenizer: Es la herramienta clásica. Pegas tu texto y verás gráficamente cómo la IA "trocea" tus palabras. Es ideal para entender por qué las palabras largas o técnicas consumen más.
   - Anthropic Token Counter: Si usas Claude, ellos tienen una herramienta específica que te dice exactamente cuánto espacio ocupará ese contrato de 50 páginas que quieres subir.
   - Google AI Studio: Es el "laboratorio" de Gemini. Si pegas tu texto ahí, verás un contador en la esquina inferior que te dice exactamente cuántos tokens de los 2 millones disponibles estás usando.

### Si quieres ir más lejos

Cada uno de los [prompts del pack para contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) fue escrito pensando en eficiencia de tokens: máximo contexto útil en el mínimo espacio necesario. Si quieres ver cómo se estructura un prompt que no desperdicia ni una palabra, ahí tienes 24 ejemplos reales aplicados al trabajo diario del despacho.
