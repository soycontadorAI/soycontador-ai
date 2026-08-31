---
title: "Capítulo 5: La IA solo sabe lo que le cuentas"
pubDate: 2026-03-13
description: "La ventana de contexto y el efecto 'lost in the middle'. Por qué conversaciones largas deterioran las respuestas."
chapter: 5
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-05.webp"
isFree: false
---

# Capítulo 5: La IA solo sabe lo que le cuentas

<!--
Fuente: Newsletter #8
Concepto principal: Context Window (Ventana de Contexto)
Términos para glosario: Context Window, tokens de contexto, truncamiento, lost in the middle
-->

Mi esposa llega del trabajo, ajetreada por el calor y el tráfico, pero con unas ganas de contarme una historia que, según ella, es el chisme del año. De la emoción, arranca a media conversación, con nombres que jamás he escuchado, situaciones que no ubico y referencias a pláticas que aparentemente ya debería conocer. Yo asiento con cara de que entiendo, pero por dentro estoy armando un rompecabezas con la mitad de las piezas faltantes.

Al final no me queda más remedio que pararla para decirle: "_Espera. ¿Quién es Lupita? ¿Qué pasó antes? ¿Por qué estamos hablando de un vestido rojo?_"

Cuando por fin me da el contexto completo, todo tiene sentido. El chisme es bueno la verdad, el haberle preguntado ciertos detalles ayudaron, y hasta puedo opinar con propiedad. Pero sin esos antecedentes, mi mejor respuesta era un "ah, qué bárbaro" y, claro, pensaría que no le estaba prestando atención.

Eso es exactamente lo que le pasa a un modelo de IA cuando le escribes sin contexto. No es que sea tonto. No es que no sepa de contabilidad. Es que le estás contando el chisme a medias y esperas que te dé una respuesta completa.

## Tu conversación tiene límites físicos

Cuando hablas con un modelo de IA, existe un límite real y concreto de cuánta información puede "ver" al mismo tiempo. Ese límite se llama ventana de contexto, y funciona como un escritorio con espacio finito.

Imagina que tienes un escritorio donde solo caben 20 hojas. Puedes acomodar estados financieros, balanzas de comprobación, papeles de trabajo. Pero el escritorio tiene un borde. Cuando llega la hoja 21, la hoja 1 se cae al suelo. Ya no la ves. Ya no existe para ti mientras trabajas.

El modelo de IA funciona igual. Todo lo que está dentro de la ventana de contexto lo puede leer, analizar y usar para responderte. Todo lo que queda fuera, simplemente no existe. No es que lo ignore a voluntad. Literalmente no lo puede ver.

> **Context Window (Ventana de Contexto):** Es la cantidad máxima de texto que un modelo de IA puede procesar de una sola vez. Incluye tanto lo que tú le escribes como lo que el modelo te responde. Todo lo que queda fuera de esta ventana, para la IA no existe.

Ahora, hay algo que mucha gente no entiende y que cambia completamente cómo deberías trabajar con estas herramientas: la ventana de contexto no solo incluye tu mensaje. Incluye toda la conversación. Cada mensaje que tú escribes y cada respuesta que el modelo genera van llenando ese escritorio. Si llevas una conversación larga, eventualmente el escritorio se llena.

¿Y qué pasa cuando se llena? El modelo empieza a "olvidar" lo que dijiste al principio. No te avisa. No te dice "oye, ya no recuerdo lo que me dijiste hace veinte mensajes". Simplemente deja de tener acceso a esa información. Tú sigues hablando como si el modelo supiera todo lo anterior, y el modelo responde con lo que le queda visible. Ahí es donde empiezan las respuestas raras, las contradicciones y la frustración de "pero si ya te lo dije".

## Cuánto cabe en el escritorio

Para que tengas una referencia práctica: los modelos actuales manejan ventanas de contexto de entre 100,000 y 200,000 tokens. Como vimos en el Capítulo 4, un token no es exactamente una palabra, pero como aproximación puedes pensar que 100,000 tokens equivalen a unas 75,000 palabras en español. Eso es un libro completo. Parece mucho, ¿verdad?

Y lo es. Puedes subir un estado financiero de 50 páginas, una escritura constitutiva completa o el texto íntegro de la Ley del ISR, y el modelo lo puede leer. Técnicamente cabe en el escritorio.

Pero aquí viene el matiz importante: que quepa no significa que lo procese igual de bien.

Los investigadores han descubierto un fenómeno que llaman "lost in the middle" —perdido en el medio—. Cuando le das al modelo un texto muy largo, presta más atención al principio y al final, y tiende a perderse detalles de la parte media. Es como cuando lees un documento larguísimo: recuerdas bien cómo empezaba y cómo terminaba, pero los párrafos del medio no quedan del todo claro y hasta puedes llegar a "imaginar" qué decían más o menos.

Esto tiene implicaciones directas para tu trabajo. Si subes un dictamen fiscal de 80 páginas y le preguntas algo específico que está en la página 45, el modelo podría no captar ese detalle con la misma precisión que si estuviera en la primera o la última página. No es un error del modelo. Es una limitación real de cómo funcionan estas arquitecturas.

## La memoria que no existe

Hay otro punto que necesitas entender, porque genera muchísima confusión: **el modelo, por sí mismo, no recuerda nada entre conversaciones.** Cada vez que abres un chat nuevo, parte de cero. No recuerda que ayer le pediste que analizara la situación fiscal del cliente Martínez. No sabe que la semana pasada le explicaste cómo funciona tu despacho. Para él, cada conversación nueva es como conocer a un desconocido en la calle.

Lo que sí existe hoy, y conviene entender bien porque cambió el panorama, es la **memoria del producto**. ChatGPT, Claude y Gemini guardan por su cuenta notas sobre ti (a qué te dedicas, cómo prefieres que te respondan, en qué has estado trabajando) y se las vuelven a pegar al modelo al arrancar cada conversación. Parece que te recuerda, pero lo que ocurre por debajo es lo de siempre: alguien le está entregando ese contexto otra vez. Y como veremos en el Capítulo 8, las instrucciones personalizadas hacen lo mismo pero con lo que tú decidas.

La distinción importa para tu trabajo. Que la herramienta arrastre contexto viejo sin avisarte es cómodo para lo cotidiano y peligroso para lo fiscal: si te acordó el criterio de un cliente y lo aplica al de otro, el error se ve razonable. Cuando el resultado tenga que ser limpio y reproducible, empieza en un chat sin memoria y dale tú el contexto completo.

Dentro de una misma conversación sí hay continuidad. Si en el mensaje 1 le dices "soy contador en un despacho de Monterrey con 15 clientes personas morales del régimen general", en el mensaje 5 todavía lo sabe. Pero solo porque esa información sigue dentro de la ventana de contexto. El modelo no "recuerda" en el sentido humano de la palabra. Simplemente está releyendo toda la conversación cada vez que genera una respuesta.

Por eso las conversaciones largas se vuelven problemáticas. No solo por el límite de la ventana, sino porque entre más larga la conversación, más tokens se gastan en releer lo anterior —como vimos en el Capítulo 4— y menos espacio queda para contenido nuevo.

## Lo que pasa cuando la ventana se compacta

Algunos modelos —Claude es uno de ellos— han implementado una solución parcial al problema de la ventana llena: cuando la conversación se alarga demasiado, el modelo compacta automáticamente lo que ya se dijo. En lugar de simplemente cortar los mensajes más antiguos, genera un resumen interno de la conversación y lo usa como sustituto.

Suena bien en teoría. Y para muchos casos lo es: si llevas una hora hablando de ideas para redactar un correo, un resumen comprimido de esa discusión conserva lo esencial.

Pero en materia fiscal, esto tiene un riesgo que no puedes ignorar.

Cuando el modelo compacta una conversación sobre una disposición fiscal, no compacta cualquier texto: compacta lenguaje jurídico donde cada palabra importa. La diferencia entre "podrá" y "deberá" en un artículo del CFF no es estilística, es la diferencia entre una obligación y una facultad. La referencia a una fracción específica —el artículo 27, fracción III, inciso b— no es un detalle menor, es el fundamento legal de una deducción. Un resumen automático puede quedarse con la idea general y perder exactamente eso.

La regla práctica: si llevas una conversación larga sobre un tema fiscal con fundamentos legales específicos, no confíes en que el modelo todavía tiene acceso fiel a lo que dijiste al principio. Cuando notes que las respuestas empiezan a ser más vagas o menos precisas, es señal de que la compactación ya ocurrió. La solución más segura es abrir un chat nuevo y repetir el contexto relevante desde cero. Sí, es un paso extra. Pero en fiscal, un matiz omitido puede costarle caro a tu cliente —y a ti.

## En la práctica

Imagínate esta situación. La contadora Laura tiene un cliente nuevo, una empresa de manufactura en Querétaro. Necesita analizar si aplica el estímulo fiscal del artículo 186 de la LISR por contratar personas con discapacidad. Abre un chat con su modelo de IA y escribe:

"¿Aplica el estímulo fiscal por contratar discapacitados?"

La respuesta que obtiene es genérica. Le habla del artículo 186, le da los requisitos generales, menciona que necesita un certificado del IMSS. Información correcta pero que podría haber sacado de Google en tres minutos.

Ahora imagina que Laura escribe esto:

"Soy contadora fiscal en un despacho en Querétaro. Tengo un cliente persona moral del régimen general de ley que manufactura autopartes. Acaba de contratar a 3 personas con discapacidad motriz (certificada por el IMSS). Quiero aplicar el estímulo del artículo 186 de la LISR. El cliente tiene utilidad fiscal proyectada para 2026 de $4.2 millones. Necesito saber: 1) si aplica el estímulo con estas características, 2) cómo calcularlo, 3) en qué línea del ISR anual se refleja, y 4) qué documentación soporte necesito tener en el expediente para una eventual revisión del SAT."

La diferencia es brutal. Ahora el modelo sabe quién pregunta, para qué tipo de cliente, en qué contexto fiscal, con qué números reales, y exactamente qué necesita saber. La respuesta pasa de ser un artículo de Wikipedia a ser un memo fiscal personalizado.

La diferencia entre una respuesta genérica y una que parece que te la dio un colega que conoce tu despacho no es la inteligencia del modelo. Es el contexto que tú le das.

Y cuando subes documentos largos, recuerda el efecto "lost in the middle". Si necesitas que el modelo analice un punto específico de un CFDI de nómina o de una declaración anual, mejor señala exactamente dónde está lo que te interesa, en lugar de subir todo el documento y esperar que lo encuentre solo.

## Mito vs. Realidad

- **Mito:** "La IA ya sabe de contabilidad mexicana, no necesito explicarle mi situación."
- **Realidad:** El modelo fue entrenado con información general. Sabe que existe el SAT, el ISR y los CFDI. Pero no sabe nada de tu cliente, tu despacho, tu criterio profesional ni tu situación específica. Sin ese contexto, te da respuestas de manual. Con él, te da respuestas de colega.

- **Mito:** "Si la conversación es larga, la IA recuerda todo lo que le dije."
- **Realidad:** Cuando la conversación excede la ventana de contexto, el modelo pierde acceso a los mensajes más antiguos. No te avisa. Simplemente deja de tener esa información disponible. Si estás en una conversación larga y sientes que el modelo "olvidó" algo, probablemente es exactamente eso lo que pasó.

---

### Lo que te llevas

- La ventana de contexto es el límite físico de cuánta información puede ver la IA al mismo tiempo. Lo que queda fuera de esa ventana no existe para el modelo.
- Dar contexto completo —quién eres, qué necesitas, situación específica, qué ya intentaste— transforma respuestas genéricas en respuestas personalizadas. La diferencia entre Google y un colega experto es el contexto.
- Cada conversación nueva empieza de cero. El modelo no recuerda chats anteriores. Y en conversaciones muy largas, empieza a perder los mensajes del principio.
- Algunos modelos compactan automáticamente las conversaciones largas para liberar espacio en la ventana. En temas fiscales esto es un riesgo: el resumen puede perder matices jurídicos críticos. Si notas que las respuestas se vuelven más vagas, abre un chat nuevo y repite el contexto desde cero.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y hazle una pregunta fiscal sin contexto. Por ejemplo: "¿Cómo calculo el ISR de una persona física?" Observa la respuesta.
2. Ahora, en un chat nuevo, hazle la misma pregunta pero con contexto completo: "Soy contador en [tu ciudad]. Tengo un cliente persona física con actividad empresarial que tributa en el régimen de confianza. Sus ingresos anuales son de $2.8 millones. Tiene deducciones personales por $180,000 (gastos médicos y colegiaturas). Necesito calcular su ISR anual 2025 y verificar si le conviene permanecer en RESICO o cambiar al régimen general. Muestra el cálculo paso a paso."
3. Compara las dos respuestas. La primera será un artículo genérico. La segunda parecerá un memo de trabajo de tu despacho.

### Si quieres ir más lejos

Cada prompt del [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) ya incluye la estructura de contexto que necesitas: quién eres, qué necesitas, para qué tipo de cliente, y en qué situación fiscal. En lugar de construir ese contexto desde cero cada vez, lo tienes listo para las tareas más comunes del despacho.
