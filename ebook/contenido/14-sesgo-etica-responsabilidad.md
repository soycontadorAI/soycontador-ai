---
title: "Capítulo 14: Sesgo, ética y responsabilidad profesional"
pubDate: 2026-03-13
description: "Bias en IA, uso ético, transparencia con clientes y responsabilidad del contador como profesionista."
chapter: 14
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-14.webp"
isFree: false
---

# Capítulo 14: Sesgo, ética y responsabilidad profesional

<!--
Fuente: NUEVO
Concepto principal: AI Bias, Ética, Responsabilidad profesional
Términos para glosario: Sesgo, Bias, Datos de entrenamiento, Ética profesional
-->

El otro día un colega me contó algo que le pasó con un cliente nuevo. El cliente, una persona moral con operaciones de comercio exterior, le pidió que le ayudara a determinar si ciertos gastos de importación eran deducibles. Mi colega, que ya llevaba meses usando IA como herramienta de trabajo, le preguntó al modelo.

La respuesta fue impecable. Bien estructurada, con citas a artículos, con requisitos claros de documentación comprobatoria, con porcentajes específicos. ¿El problema? La mitad de la respuesta estaba basada en el Internal Revenue Code de Estados Unidos. No en la LISR. No en el CFF. No en las Reglas Generales de Comercio Exterior. En la legislación gringa.

Y lo peor no fue que la IA se equivocara. Lo peor fue que la respuesta sonaba perfectamente lógica. Los conceptos eran similares. La estructura era la misma. Si no conoces la diferencia entre la legislación mexicana y la estadounidense en materia de comercio exterior, te la compras completa. Mi colega la detectó porque lleva quince años en esto. Un recién egresado, probablemente no.

## La calculadora que ya tiene números adentro

Vamos a usar una analogía que te va a quedar clara. Imagínate que te dan una calculadora nueva, pero no está vacía. Ya tiene números precargados. Cada vez que escribes una operación, la calculadora mezcla tus números con los que ya tenía adentro. A veces el resultado es correcto porque los números precargados coinciden con los tuyos. Otras veces te da un resultado que parece razonable pero está contaminado por datos que no aplican a tu caso.

La IA funciona exactamente así. Viene precargada con datos, y esos datos no son neutrales. Tienen un sesgo inherente que viene de donde salieron.

La mayoría de los modelos de IA fueron entrenados predominantemente con texto en inglés. Datos de Estados Unidos. Legislación estadounidense. Prácticas contables bajo US GAAP. Criterios del IRS. Cuando le preguntas algo sobre contabilidad o de impuestos, el modelo tiene mucho más material de referencia gringo que mexicano. No porque alguien haya decidido que la legislación mexicana no importa, sino porque simplemente hay más contenido en inglés sobre estos temas en internet.

Y eso tiene consecuencias muy concretas para tu trabajo diario.

> **Sesgo (Bias):** En el contexto de la IA, el sesgo es la tendencia del modelo a favorecer ciertos tipos de información sobre otros, basado en la composición de sus datos de entrenamiento. Si el modelo aprendió de más textos en inglés que en español, de más legislación estadounidense que mexicana, sus respuestas van a inclinarse hacia lo que más conoce. No es un error. Es una consecuencia matemática de con qué datos fue entrenado.

Pregúntale a la IA sobre "depreciación" sin especificar el contexto mexicano y es probable que te dé tasas y métodos bajo US GAAP en lugar de las NIF mexicanas. Pregúntale sobre "deducciones fiscales" y puede darte criterios del IRS en lugar del SAT. Pregúntale sobre "obligaciones de retención" y quizá te hable de withholding taxes bajo reglas estadounidenses en lugar de las retenciones que marca la LISR.

No es que el modelo esté mal. Es que sabe más de un contexto que de otro. Y cuando no le especificas cuál quieres, se va por el que mejor conoce.

## El sesgo que no ves

Hay otro tipo de sesgo más sutil y que a veces es más peligroso. Los términos financieros y contables que suenan igual en México y en Estados Unidos pero significan cosas diferentes.

"Revenue recognition" suena como si fuera lo mismo que reconocimiento de ingresos bajo NIF. Y en muchos aspectos lo es. Pero los criterios específicos, los momentos de reconocimiento, las excepciones — ahí hay diferencias que importan. Si el modelo te da una respuesta sobre reconocimiento de ingresos y mezcla criterios de IFRS, US GAAP y NIF sin avisarte, tienes un problema.

Lo mismo pasa con conceptos como "related party transactions", "transfer pricing" o "tax consolidation". Cada jurisdicción tiene sus propias reglas, y el modelo no siempre distingue cuando está cruzando de una jurisdicción a otra.

La solución no es dejar de usar la IA. Es darle contexto mexicano siempre. "Según la legislación fiscal mexicana vigente...", "bajo las NIF mexicanas...", "conforme al CFF y la LISR...". Cada vez que le especificas el marco legal, reduces la probabilidad de que el modelo se vaya por el lado gringo. No la eliminas, pero la reduces significativamente.

## Y esto nos lleva a la ética

Ahora, imaginemos que conoces el sesgo. Sabes que la IA tiende hacia lo gringo. Sabes que alucina. Sabes que no verifica. Y aun así, copias la respuesta del modelo, la pegas en un correo y se la mandas a tu cliente como si fuera tu análisis profesional.

Eso no es usar IA. Eso es ser un intermediario que cobra por copiar y pegar.

La pregunta ética central es esta: cuando usas IA para tu trabajo profesional, ¿dónde está la línea entre asistencia y negligencia?

La línea está en tu juicio profesional.

Cuando la IA te da un primer borrador de un análisis fiscal y tú lo lees, lo verificas, lo ajustas al caso específico del cliente, le agregas tu interpretación basada en tu experiencia, y le das forma con tu criterio profesional — eso es usar la IA como herramienta. Tu cliente está recibiendo tu trabajo, asistido por tecnología.

Cuando copias la respuesta del modelo, le cambias el formato para que se vea bonito y se la mandas al cliente sin verificar nada — eso no es trabajo profesional. Es un servicio de relay. Y tu cliente está pagando honorarios profesionales por algo que pudo haber obtenido gratis abriéndose su propia cuenta.

Las NIF siguen requiriendo juicio profesional. El Código de Ética del Contador Público sigue aplicando. Tu responsabilidad profesional no se delega a una herramienta, igual que no se delega a una hoja de cálculo. Si Excel te da un resultado incorrecto porque metiste una fórmula mal, la culpa no es de Microsoft. Es tuya. Con la IA es exactamente igual, solo que la IA es más convincente cuando se equivoca.

> **Ética profesional en el uso de IA:** El uso de inteligencia artificial no modifica las obligaciones éticas del contador público. La IA es una herramienta que asiste el juicio profesional, no lo sustituye. El profesional sigue siendo responsable de verificar, interpretar y aplicar correctamente la información, independientemente de la fuente que la genere.

## La pregunta de la transparencia

Hay una pregunta que me hacen seguido: ¿debería decirle a mis clientes que uso IA?

Mi respuesta pragmática: depende del contexto, pero en general, no necesitas hacer un disclaimer cada vez que usas una herramienta.

Nadie le dice a su cliente "este análisis fue realizado con apoyo de Microsoft Excel, Google Chrome y un lápiz marca BIC". Las herramientas que usas para hacer tu trabajo son decisiones operativas tuyas. Lo que el cliente espera es un resultado profesional, verificado y confiable. Cómo llegaste a ese resultado es tu proceso interno.

Dicho esto, hay dos situaciones donde sí creo que vale la pena ser transparente. La primera es cuando el cliente te pregunta directamente. Si te pregunta si usas IA, sé honesto. No hay nada de qué avergonzarse. Usar herramientas modernas para ser más eficiente es una fortaleza, no una debilidad.

La segunda es cuando el uso de la IA es el servicio en sí. Si un cliente te contrata para que le implementes un sistema basado en IA, o para que le automatices un proceso, obviamente tiene que saber que hay IA de por medio. Eso no es transparencia opcional, es parte del servicio.

Pero para tu trabajo cotidiano —análisis fiscal, redacción de correos, investigación de criterios, preparación de declaraciones— la IA es una herramienta más en tu caja. Igual que tu software contable, tu base de datos de legislación o tu calculadora financiera.

## La responsabilidad que no se mueve

Aquí llegamos al punto más importante de este capítulo. Y es algo que ya tocamos en el Capítulo 12 pero que necesita su propio espacio porque es la base de todo lo demás.

Si la IA genera un análisis fiscal incorrecto y tú lo usas sin verificar, el responsable eres tú. No Anthropic. No OpenAI. No Google. Tú.

Si la IA clasifica mal un gasto y eso resulta en una deducción improcedente, el SAT no le va a mandar el requerimiento al modelo de IA. Te lo va a mandar a ti (bueno, en este caso a tu cliente). Porque su nombre está en la declaración. Tu firma está en el trabajo (aunque no esté físicamente, lleva tu sello). Tu cédula profesional respalda el servicio.

Esto no es diferente de lo que ya vives todos los días. Si un auxiliar de tu despacho comete un error en una conciliación y tú no lo detectas al revisar, el responsable sigues siendo tú. Si un software contable calcula mal un impuesto porque los parámetros estaban desactualizados y tú presentas la declaración así, el responsable eres tú.

La IA es igual. Más poderosa que un auxiliar, más rápida que un software, pero con la misma condición: el profesional que firma es el profesional que responde.

Y eso, lejos de ser una carga, es exactamente lo que te hace valioso. Cualquiera puede abrir un chat de IA y hacerle una pregunta fiscal. Pero no cualquiera puede evaluar si la respuesta es correcta, si aplica al caso específico, si hay matices que el modelo no consideró, si hay un criterio del SAT que contradice lo que el modelo sugiere. Eso lo puedes hacer tú porque eres contador. Y eso es lo que tu cliente está pagando.

## En la práctica

El despacho del contador Alejandro usa IA para agilizar la preparación de DIOTs. El proceso es así: exportan los CFDIs recibidos del período, le dan al modelo la información resumida de cada proveedor, y la IA genera un borrador de la clasificación de operaciones de terceros.

Un mes, la IA clasifica a un proveedor extranjero como "operaciones con nacionales" en lugar de "operaciones con extranjeros". El monto es significativo. El DIOT se presenta con esa clasificación incorrecta.

Tres meses después, el SAT envía un requerimiento de información. La clasificación no coincide con los CFDIs de comercio exterior registrados. El SAT quiere una explicación.

¿Quién responde el requerimiento? No es Claude. No es ChatGPT. Es el contador Alejandro, con su nombre, su cédula y su firma. Porque él firmó. Él presentó. Él era responsable de verificar que la información fuera correcta antes de enviarla.

El error no fue usar IA. El error fue no verificar el resultado. Si Alejandro hubiera revisado la clasificación antes de presentar —cosa que le habría tomado diez minutos— habría detectado el error inmediatamente. La IA le ahorró dos horas de trabajo manual. Esos diez minutos de revisión eran parte del proceso, no un paso opcional.

## Mito vs. Realidad

- **Mito:** "Si uso IA para mi trabajo profesional, estoy haciendo trampa o siendo deshonesto con mis clientes."
- **Realidad:** Usar herramientas tecnológicas para ser más eficiente es parte natural de la evolución profesional. Nadie cuestiona si es ético usar Excel, un software contable o una base de datos de legislación. La IA es otra herramienta. Lo que importa es que el resultado final sea correcto, verificado y respaldado por tu juicio profesional.

- **Mito:** "La IA no tiene sesgos porque es una máquina y las máquinas son objetivas."
- **Realidad:** Los modelos de IA reflejan los sesgos de los datos con los que fueron entrenados. Si hay más contenido en inglés y más legislación estadounidense en sus datos de entrenamiento, sus respuestas van a inclinarse hacia ese contexto. Siempre especifica el marco legal mexicano cuando hagas consultas fiscales o contables.

---

### Lo que te llevas

- Los modelos de IA tienen un sesgo inherente hacia la legislación y las prácticas contables estadounidenses porque fueron entrenados con más contenido en inglés. Siempre especifica el contexto mexicano en tus consultas: NIF, LISR, CFF, SAT. No asumas que el modelo sabe que estás hablando de México.
- La IA es una herramienta que asiste tu juicio profesional, no lo sustituye. La línea entre uso ético y negligencia está en la verificación: si revisas, verificas y aplicas tu criterio, estás usando la herramienta correctamente. Si copias y pegas sin verificar, estás delegando tu responsabilidad profesional a un algoritmo.
- La responsabilidad legal siempre es del contador que firma. Si la IA genera información incorrecta y tú la usas sin verificar, el SAT no le va a mandar el requerimiento al modelo de IA. Te lo va a mandar a ti. Eso no cambia con la tecnología que uses.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y hazle esta pregunta en español pero sin especificar el país: "¿Cuáles son los métodos de depreciación permitidos para activos fijos y cuáles son las tasas aplicables?" Observa la respuesta. ¿Cuántos criterios son mexicanos y cuántos son de otra jurisdicción?
2. Ahora hazle la misma pregunta pero agrega: "Responde exclusivamente bajo el marco de las NIF mexicanas y la LISR vigente en México. No incluyas criterios de US GAAP, IFRS ni de ninguna otra jurisdicción." Compara ambas respuestas y nota la diferencia.
3. Reflexiona: en tu trabajo diario, ¿cuántas veces le has hecho preguntas a la IA sin especificar el contexto mexicano? Ese simple ajuste puede cambiar radicalmente la calidad de las respuestas que recibes.

### Si quieres ir más lejos

Cada prompt del [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) incluye el contexto fiscal mexicano integrado desde la primera línea. No tienes que acordarte de especificar "bajo legislación mexicana" cada vez porque los prompts ya lo hacen por ti. Es como tener un asistente que ya sabe que trabaja en México y no necesita que se lo repitas en cada instrucción.
