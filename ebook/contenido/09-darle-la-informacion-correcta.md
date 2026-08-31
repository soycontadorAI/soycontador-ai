---
title: "Capítulo 9: Darle la información correcta desde la primera línea"
pubDate: 2026-03-13
description: "Prompt Engineering y el framework ISCA (Identidad, Situación, Consigna, Acabado) para contadores mexicanos."
chapter: 9
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-09.webp"
isFree: false
---

# Capítulo 9: Darle la información correcta desde la primera línea

<!--
Fuente: NUEVO
Concepto principal: Prompt Engineering / Estructura de un buen prompt
Términos para glosario: Prompt, Prompt Engineering, Identidad, Situación, Consigna, Acabado
-->

El otro día me llamó un cliente nuevo. Primer contacto. Le pregunté en qué le podía ayudar y me dijo, textual: "Es que tengo un problema con mis impuestos". Y se quedó callado. Como si con eso yo ya tuviera suficiente para resolver su vida fiscal completa.

Le tuve que sacar todo con pinzas. "¿Eres persona física o moral?" Persona física. "¿Qué régimen?" No sabía. "¿Facturas?" Algunas. "¿Cuánto ganas al mes?" Depende. "¿Tienes empleados?" A veces. Y así nos fuimos media hora hasta que logré armar un panorama mínimo para empezar a trabajar.

Ahora imagínate que ese cliente, en vez de llegar con un "tengo un problema con mis impuestos", hubiera llegado con una carpeta organizada: su constancia de situación fiscal, sus últimas declaraciones, un resumen de sus ingresos y gastos del período, y una pregunta concreta. "Quiero saber si me conviene cambiar de régimen fiscal dado que mis ingresos ya rebasaron los 3.5 millones." Esa consulta la resuelvo en quince minutos. La otra, si me va bien, en hora y media.

Pues con la IA pasa exactamente lo mismo. La calidad de lo que le preguntas determina la calidad de lo que te responde. Y no es cuestión de suerte ni de que un modelo sea mejor que otro. Es cuestión de estructura.

## La forma en que preguntas cambia la respuesta que recibes

Si algo deberías haber notado en los capítulos anteriores, es que la IA no lee tu mente. No sabe que eres contador (a menos que se lo digas, como vimos con el system prompt en el Capítulo 8). No sabe en qué país trabajas. No sabe si tu cliente es una persona física en RESICO o una empresa de manufactura con operaciones internacionales. No sabe si quieres una tabla comparativa, un párrafo de tres líneas o un análisis de cinco páginas.

Todo eso se lo tienes que comunicar. Y la forma en que lo comunicas tiene un nombre: prompt.

Pero aquí viene lo importante. Un prompt no es simplemente "lo que escribes en el chat". Un prompt es una instrucción estructurada. Y como toda estructura, tiene componentes. Si te faltan componentes, el resultado se debilita. Si los tienes todos, el resultado es dramáticamente mejor.

Piénsalo como una declaración anual. Si llenas solo los datos de identificación pero no capturas ingresos, deducciones ni pagos provisionales, el resultado no sirve o será muy diferente de la realidad (con todas sus consecuencias que eso implica). No porque el sistema del SAT sea malo, sino porque le diste información incompleta. Con la IA pasa igual.

> **Prompt Engineering (Ingeniería de prompts):** Es la habilidad de estructurar instrucciones claras y completas para obtener mejores respuestas de un modelo de IA. No es programación. Es comunicación precisa, como redactar un buen requerimiento profesional o un dictamen bien fundamentado.

## El framework ISCA: cuatro piezas que cambian todo

Después de meses usando IA en el despacho y de probar cientos de formas de preguntarle cosas, llegué a una estructura que funciona de forma consistente. En la literatura sobre prompt engineering la verás como **RCIF**: Rol, Contexto, Instrucción y Formato. Es una buena forma de recordarla.

Pero a mí me gusta más llamarla **ISCA**: Identidad (Rol), Situación (Contexto), Consigna (Instrucción) y Acabado (Formato). No porque sea diferente en el fondo — los cuatro componentes son exactamente los mismos — sino porque los nombres me suenan más naturales cuando trabajo con ella en español. Y sí, ISCA son las letras de Israel Castro. Si ya me tomé el trabajo de destilarlo, que lleve firma.

Vamos con cada pieza.

**I - Identidad**

Le dices al modelo quién es. No quién eres tú, sino qué papel quieres que juegue para esta tarea.

"Eres un contador público mexicano especializado en personas físicas con actividad empresarial."

¿Te suena familiar? Debería. En el Capítulo 8 hablamos del system prompt, que le da al modelo una identidad para toda la conversación. La identidad en un prompt individual funciona igual, pero para una sola pregunta. Si ya tienes un system prompt configurado, este componente lo complementa o lo ajusta para el caso específico.

¿Por qué importa? Porque un modelo al que le dices "eres un contador mexicano" responde distinto que uno al que le dices "eres un abogado español". La perspectiva cambia, los artículos que cita cambian, la terminología cambia. Es como la diferencia entre pedirle opinión a un fiscalista y a un laboralista sobre la misma operación. Los dos son abogados, pero ven el problema desde ángulos distintos.

**S - Situación**

Le das la información de fondo que necesita para entender tu caso.

"Mi cliente tiene un negocio de e-commerce. Factura aproximadamente 2 millones al año. Está dado de alta en el régimen de actividad empresarial y profesional, régimen 612. Tiene tres empleados y opera desde Querétaro."

En el Capítulo 5 hablamos de la ventana de contexto y cómo el modelo solo sabe lo que le pones enfrente. Aquí es donde eso se vuelve práctico. La situación es la información que metes en esa ventana para que el modelo trabaje con datos reales, no con suposiciones genéricas.

La clave es dar contexto relevante. No le cuentes la historia de vida del cliente. Dale los datos que impactan la respuesta que necesitas: régimen fiscal, nivel de ingresos, tipo de operaciones, período fiscal, ubicación geográfica si es relevante. Lo justo. Ni de más (porque desperdicias tokens y confundes al modelo, como vimos en el Capítulo 4), ni de menos (porque la respuesta sale genérica e inútil).

**C - Consigna**

Le dices exactamente qué quieres que haga. Esta es la parte donde muchos fallan, porque creen que basta con dar contexto y el modelo va a adivinar qué necesitan.

"Necesito que analices si a mi cliente le conviene cambiar al Régimen Simplificado de Confianza y que identifiques los requisitos que debe cumplir, los beneficios fiscales y los riesgos de la transición."

Una consigna vaga da una respuesta vaga. Una consigna específica da una respuesta específica. Y aquí conecta directamente con lo que vimos en el Capítulo 6 sobre la cadena de pensamiento: entre más clara sea tu consigna, más fácil es para el modelo razonar paso a paso hacia la respuesta correcta.

Fíjate que la consigna del ejemplo no dice solo "analiza si le conviene cambiar al RESICO". Dice que identifique requisitos, beneficios y riesgos. Esos tres elementos le dan al modelo una ruta clara de lo que tiene que incluir en su respuesta. Es la diferencia entre decirle a un auxiliar "revisa esta declaración" y decirle "revisa esta declaración, verificando que los ingresos cuadren con los CFDIs, que las deducciones tengan comprobante vigente y que los pagos provisionales estén correctamente acreditados."

**A - Acabado**

Le dices cómo quieres que te entregue la respuesta.

"Responde en una tabla comparativa con tres columnas: concepto, régimen 612 y RESICO. Incluye al final un párrafo con tu recomendación y el fundamento legal."

Este componente es más poderoso de lo que parece. Sin él, el modelo decide por ti cómo presentar la información. A veces te da un ensayo de mil palabras cuando necesitabas cinco bullets. Otras te da bullets cuando necesitabas una narrativa para presentarle al cliente. Especificar el acabado reduce los tokens desperdiciados (Capítulo 4) y te da un resultado que puedes usar directamente, sin tener que reformatearlo.

## Un prompt malo vs un prompt bueno: el mismo caso, dos mundos

Veámoslo en acción. Mismo caso, misma pregunta de fondo, dos formas completamente distintas de pedirlo.

**El prompt malo:**

"¿Cómo calculo el ISR?"

¿Qué obtendrías con esto? Una explicación genérica de cómo se calcula el ISR en México. Probablemente te hable de personas físicas y morales al mismo tiempo. Quizá cite algunos artículos, quizá no. Te va a dar información correcta en términos generales, pero completamente inútil para resolver un caso real. Es como si un cliente te preguntara "¿cómo pago impuestos?" sin darte ningún dato más. Le podrías dar una respuesta, pero sería un discurso de una hora que no le resuelve nada.

**El prompt bueno (con ISCA):**

"Eres un contador público mexicano especializado en personas físicas con actividad empresarial (Identidad). Mi cliente está en el régimen 612, tiene un negocio de comercialización de ropa, factura 1.8 millones anuales, tiene deducciones autorizadas por 900 mil pesos, y ha realizado pagos provisionales mensuales durante todo el ejercicio 2025 (Situación). Necesito que calcules el ISR del ejercicio aplicando la tarifa del artículo 152 de la LISR, considerando sus pagos provisionales, y que determines si resulta saldo a favor o a cargo (Consigna). Presenta el cálculo en formato de cédula de trabajo con cada paso claramente identificado: ingreso acumulable, deducciones, base gravable, ISR según tarifa, subsidio si aplica, pagos provisionales acreditados y resultado (Acabado)."

La diferencia en la respuesta es abismal. Con el segundo prompt, el modelo te entrega algo que se parece a un papel de trabajo real. Puedes verificar cada línea. Puedes ajustar las cifras. Puedes mostrárselo a un colega. Con el primero, obtienes un artículo de blog.

## Los errores que todos cometemos (y cómo evitarlos)

Después de ver a muchos colegas usar IA por primera vez, he identificado cuatro errores que se repiten una y otra vez.

**Ser demasiado vago.** "Ayúdame con impuestos" es el equivalente a que tu cliente te diga "ayúdame con mi negocio". No hay suficiente información para hacer nada útil. La solución es siempre preguntarte: ¿si un colega me pidiera esto sin más contexto, podría ayudarle? Si la respuesta es no, tu prompt necesita más detalle.

**Dar información irrelevante.** El otro extremo. Pegarle al modelo tres páginas de antecedentes del cliente cuando solo necesitas que te calcule un coeficiente de utilidad. Recuerda el Capítulo 4: cada token cuesta. Y recuerda el Capítulo 5: la ventana de contexto tiene límite. Si la llenas de información irrelevante, le quitas espacio a la información que sí importa.

**No especificar el formato.** Este es el más común. Le preguntas algo y el modelo te responde con un ensayo de ocho párrafos cuando lo que necesitabas era una tabla o tres bullets. La IA no sabe cómo necesitas la información hasta que se lo dices. Y reformatear la respuesta a mano es tiempo perdido que te pudiste haber ahorrado con una línea adicional en el prompt.

**Meter varias preguntas sin relación en un solo prompt.** "Oye, ¿cómo calculo el ISR de mi cliente persona física, y también dime cómo facturo una nota de crédito, y de paso explícame qué es el CFDI 4.0?" Eso es como llegar con tu contador y pedirle que te resuelva tres temas distintos en la misma oración. El modelo va a intentar responder todo, pero la calidad de cada respuesta baja porque está repartiendo atención. Mejor haz una pregunta a la vez, o por lo menos agrupa las que están relacionadas.

## En la práctica

La contadora Sofía trabaja en un despacho en León, Guanajuato. Atiende principalmente personas físicas en RESICO y unas cuantas personas morales del régimen general. Cuando empezó a usar IA, hacía lo que todos: preguntas genéricas, respuestas genéricas.

Un día necesitaba determinar si un cliente en RESICO que había rebasado el límite de 3.5 millones de ingresos podía seguir tributando en ese régimen o tenía que cambiarse. Le preguntó al modelo: "¿Qué pasa si mi cliente rebasa el límite de RESICO?"

La respuesta fue correcta en lo general pero no le sirvió para el caso. Le habló de RESICO tanto para personas físicas como morales. Mezcló reglas de diferentes años fiscales. No le dijo qué hacer en la práctica, solo le explicó la teoría.

Sofía recordó el framework ISCA y reescribió su prompt:

"Eres un consultor fiscal mexicano especializado en régimen de confianza para personas físicas. Mi cliente es una persona física en RESICO que inició operaciones en enero 2024 con un negocio de venta de alimentos preparados. Al cierre de noviembre 2025 sus ingresos acumulados ya suman 3.7 millones de pesos. Necesito que me expliques: 1) si está obligado a cambiar de régimen y a partir de cuándo, 2) a qué régimen pasaría, 3) qué obligaciones nuevas tendría, y 4) qué pasos debe seguir ante el SAT. Responde en formato de lista numerada con fundamento legal para cada punto."

La respuesta fue otra cosa. Específica, accionable, con los artículos correctos citados, en el formato que necesitaba. Sofía verificó los fundamentos legales, ajustó un par de detalles y en quince minutos tenía la respuesta lista para su cliente.

La diferencia no fue el modelo. Fue el prompt.

## Mito vs. Realidad

- **Mito:** "Si el modelo es bueno, no necesito esforzarme en cómo pregunto."
- **Realidad:** Hasta el modelo más avanzado del mercado te da respuestas mediocres si le das un prompt mediocre. La calidad de la entrada determina la calidad de la salida. Un modelo excelente con un prompt malo es como un contador brillante al que le das un expediente incompleto: puede ser el mejor del mundo, pero sin datos no hay milagros.

- **Mito:** "Escribir buenos prompts es una habilidad técnica que requiere estudiar programación."
- **Realidad:** Escribir buenos prompts es comunicación profesional. Si sabes redactar un dictamen fiscal, una opinión técnica o un correo claro a un cliente, ya tienes las habilidades que necesitas. ISCA no es más que organizar tu comunicación: darle al modelo una identidad, describirle la situación, darle una consigna específica y decirle cómo quieres el acabado. Nada que no hagas ya con tu equipo de trabajo.

---

### Lo que te llevas

- Un buen prompt tiene estructura, igual que un buen expediente de trabajo. El framework ISCA (Identidad, Situación, Consigna, Acabado) te da los cuatro componentes que necesitas para obtener respuestas útiles de cualquier modelo de IA.
- La diferencia entre un prompt vago y uno estructurado no es un poco mejor: es dramáticamente mejor. El mismo modelo, con la misma pregunta de fondo, te puede dar una respuesta genérica e inútil o un papel de trabajo que solo necesita verificación.
- Los errores más comunes al escribir prompts son los mismos que vemos cuando un cliente nos da información incompleta: ser demasiado vago, dar datos irrelevantes, no decir qué necesita exactamente, o pedir todo al mismo tiempo.

### Pruébalo tú mismo

1. Piensa en un caso fiscal real que tengas pendiente o que hayas resuelto recientemente. Abre cualquier modelo de IA y pregúntale de la forma que normalmente lo harías, sin pensar demasiado en la estructura.
2. Ahora, en un chat nuevo, reescribe tu pregunta usando ISCA: dale una identidad al modelo, describe la situación del caso, sé específico en la consigna y dile qué acabado quieres.
3. Compara ambas respuestas lado a lado. Fíjate no solo en la calidad del contenido, sino en lo útil que es cada una para tu trabajo real. La segunda debería ser algo que puedas usar directamente o con ajustes mínimos.

### Si quieres ir más lejos

El framework ISCA es la base. Una vez que lo dominas, escribir prompts efectivos se vuelve algo natural. Pero si quieres ver cómo se aplica esta estructura a 24 tareas específicas del despacho contable —desde revisión de CFDIs hasta análisis de regímenes fiscales— eso es exactamente lo que hace el [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd): cada prompt ya trae la identidad, la situación, la consigna y el acabado diseñados para tareas reales de la práctica contable mexicana.
