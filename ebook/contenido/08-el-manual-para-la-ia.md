---
title: "Capítulo 8: El manual de tu despacho, pero para la IA"
pubDate: 2026-03-13
description: "El System Prompt como manual interno de tu firma. Cómo personalizar la IA para que trabaje como tú quieres."
chapter: 8
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-08.webp"
isFree: false
---

# Capítulo 8: El manual de tu despacho, pero para la IA

<!--
Fuente: Newsletter #9
Concepto principal: System Prompt
Términos para glosario: System Prompt, Instrucciones del sistema, Personalizacion
-->

Hace unos meses contraté a alguien para que me ayudara con trabajo administrativo en el despacho. Llegó el primer día con toda la actitud del mundo. Puntual, con ganas, libreta en mano. La clásica energía de "ponme a hacer lo que sea".

Y yo, con tres declaraciones pendientes, dos clientes llamando y el SAT de malas, hice lo peor que podía hacer: lo senté frente a la computadora y le dije "ahí está todo, échenle ganas". Y me fui a resolver incendios.

¿Qué pasó? Exactamente lo que te imaginas. Atendió llamadas de clientes con su propio criterio. Organizó archivos con una lógica que solo él entendía. Respondió correos con un tono que no era el del despacho. Y al final del día, terminé rehaciendo la mitad del trabajo. No porque fuera malo. Era capaz, tenía conocimientos, le echaba ganas. Pero nadie le explicó cómo funcionaba mi despacho. No tenía un manual. No tenía contexto. No sabía que al cliente García siempre se le habla de usted, que los archivos van por RFC y no por nombre, ni que las dudas fiscales se consultan antes de responder.

Con la IA pasa exactamente lo mismo. Y la solución es la misma: darle el manual.

## El manual de operaciones que la IA necesita

Cuando abres cualquier modelo de IA y le escribes una pregunta, el modelo no sabe quién eres. No sabe que eres contador. No sabe que estás en México. No sabe si atiendes personas físicas o morales, si tu despacho tiene dos personas o veinte, ni si tus clientes son taqueros con RESICO o empresas de manufactura del régimen general.

Sin esa información, hace lo que puede. Te da una respuesta genérica que le serviría a cualquier persona en cualquier país. Correcta, quizá. Útil, apenas.

Pero existe un mecanismo para cambiar eso desde la raíz. Se llama system prompt, y es básicamente el manual de operaciones de tu despacho, pero para la IA.

> **System Prompt (Instrucciones del sistema):** Es el mensaje inicial que le dice al modelo cómo debe comportarse durante toda la conversación. Define su identidad, sus reglas, su formato de respuesta y sus límites. Es lo primero que el modelo "lee" antes de cualquier mensaje tuyo.

El system prompt no es parte de la conversación que tú ves. Es una capa de instrucciones que va por debajo, como los cimientos de una casa. Tú no los ves cuando entras a la sala, pero sostienen todo. Cada respuesta que el modelo te da está influenciada por ese system prompt, aunque tú no lo hayas escrito.

De hecho, todas las herramientas que usas ya tienen uno. Cuando abres cualquier modelo de IA comercial, alguien ya escribió un system prompt que le dice cosas como "sé amable", "no generes contenido violento", "responde en el idioma del usuario". Lo que tú puedes hacer es agregar el tuyo encima, personalizando al modelo para tus necesidades específicas.

## Anatomía de un buen system prompt

No se trata de escribir un párrafo largo y esperar que funcione. Un buen system prompt tiene componentes específicos, y cada uno cumple una función. Piensa en ello como los datos de identificación de una declaración anual para aprovechar un saldo a favor: si falta un campo, cuando quieras acreditarlo o compensarlo, no podrás llenar ese dato.

Estos son los cinco componentes que todo system prompt efectivo debe tener:

**1. Rol e identidad**

Le dices al modelo quién es. No quién eres tú, sino quién es él. Esto establece el marco desde el cual va a responder.

"Eres un contador público mexicano especializado en fiscalización de personas morales del régimen general de ley."

Con esa sola línea, el modelo ya cambia la forma en que responde. Deja de ser un asistente genérico y empieza a comportarse como un profesional con un perfil específico.

**2. Contexto**

Aquí le explicas el entorno en el que trabaja. El tipo de despacho, los clientes que atiende, las herramientas que usa, la normativa que aplica.

"Trabajas en un despacho contable en Guadalajara que atiende principalmente personas físicas con actividad empresarial en RESICO y personas morales del régimen general. Los clientes facturan entre 500 mil y 20 millones anuales."

Este contexto es lo que transforma respuestas de manual en respuestas de colega. Como vimos en el Capítulo 5, la ventana de contexto determina cuánta información puede ver el modelo. El system prompt ocupa parte de esa ventana, pero es espacio bien invertido porque moldea todas las respuestas que vienen después.

**3. Reglas**

Las reglas son los límites y criterios que el modelo debe seguir. Son el equivalente a las políticas internas de tu despacho.

"Siempre cita el artículo de ley correspondiente cuando hagas una afirmación fiscal. Nunca inventes datos, cifras ni porcentajes. Si una disposición cambió recientemente y no tienes certeza de la versión vigente, dilo explícitamente. Siempre distingue entre obligaciones federales y estatales."

Sin reglas, el modelo improvisa. Con reglas, trabaja dentro de un marco definido. Igual que ese empleado nuevo: no es que no pueda hacerlo bien, es que necesita saber que en tu despacho las cosas se hacen de cierta manera.

**4. Formato**

Le indicas cómo quieres que te entregue las respuestas. Esto parece menor, pero ahorra un tiempo enorme.

"Responde en bullets cuando sea una lista de requisitos. Usa tablas cuando compares opciones fiscales. Incluye al final de cada respuesta un apartado de 'Fundamento legal' con los artículos citados."

Si no le dices el formato, el modelo elige uno por ti. A veces te da un párrafo interminable cuando necesitabas una tabla. Otras veces te da bullets cuando necesitabas una explicación detallada.

**5. Límites**

Los límites son lo que el modelo NO debe hacer. Son tan importantes como las instrucciones positivas.

"Si no tienes certeza sobre un dato, dilo claramente en lugar de inventar una respuesta. No des consejos legales sobre áreas fuera de lo fiscal y contable. Si el usuario pregunta algo que requiere la opinión de un abogado o un actuario, sugiérelo explícitamente."

Este componente conecta directamente con lo que veremos en el Capítulo 13 sobre seguridad y las limitaciones inherentes de estos modelos. Los límites no hacen que la IA sea más tonta. La hacen más confiable.

## Un system prompt completo en acción

Para que veas cómo se ve todo junto, aquí tienes un ejemplo realista de un system prompt para un asistente contable. No es perfecto ni definitivo. Es un punto de partida que puedes adaptar:

---

_"Eres un asistente fiscal especializado en contabilidad mexicana. Tu función es apoyar a un contador público en su trabajo diario dentro de un despacho que atiende personas físicas en RESICO, personas físicas con actividad empresarial y profesional, y personas morales del régimen general de ley._

_Tu base normativa principal es la Ley del ISR, la Ley del IVA, el Código Fiscal de la Federación, la Resolución Miscelánea Fiscal vigente y las NIF aplicables. Cuando respondas preguntas fiscales, siempre cita el artículo o regla específica que sustenta tu respuesta._

_Responde de forma directa y concisa. Usa bullets para listas de requisitos u obligaciones. Usa tablas cuando compares regímenes, tasas o alternativas. Incluye al final un apartado de fundamento legal._

_Si no tienes certeza sobre una disposición, dilo explícitamente. No inventes datos, porcentajes ni plazos. Si algo cambió recientemente y tu información podría estar desactualizada, menciónalo. Si la pregunta cae fuera del ámbito fiscal o contable, indica que se requiere un especialista diferente._

_Cuando analices un caso específico, siempre pregunta por los datos que necesitas antes de dar una conclusión: régimen fiscal, monto de ingresos, tipo de operación, período fiscal."_

---

¿Ves la diferencia? Con este system prompt, el modelo ya no es un asistente genérico. Es un auxiliar que conoce tu contexto, sigue tus reglas y responde en tu formato. No va a saber todo. Pero va a equivocarse mucho menos que si lo dejas improvisar.

## Dónde vive el system prompt

Aquí hay un punto práctico que genera confusión. No todas las herramientas te dejan configurar un system prompt de la misma manera.

Algunas plataformas te permiten establecerlo de forma permanente. Lo escribes una vez y aplica a todas las conversaciones dentro de ese espacio. No tienes que repetirlo cada vez que abres un chat nuevo. Piensa en ello como configurar las preferencias de tu software contable: lo haces una vez y ya.

Otras plataformas no tienen esa opción. En esos casos, la única alternativa es pegar tu system prompt al inicio de cada conversación nueva. Es más trabajo, pero funciona igual. El modelo lee esas instrucciones primero y las aplica durante toda la conversación.

Lo importante es que entiendas el concepto, no la interfaz de una herramienta específica. Las plataformas cambian cada semana. El concepto de darle instrucciones base al modelo va a seguir siendo relevante por mucho tiempo.

## En la práctica

El despacho de Roberto en Monterrey atiende 40 clientes: personas físicas con actividad empresarial, algunos en RESICO, otros en el régimen general. Cada mes, Roberto y sus dos auxiliares preparan declaraciones provisionales, revisan CFDIs y responden consultas fiscales de los clientes.

Antes de configurar un system prompt, Roberto usaba la IA de forma esporádica. Abría un chat, preguntaba algo, obtenía una respuesta genérica y terminaba verificando todo manualmente de todas formas. "Para lo que me sirve, mejor busco directo en la ley", decía.

Un día se tomó treinta minutos para escribir un system prompt con el perfil de su despacho: tipos de clientes, regímenes que maneja, formato en que necesita las respuestas, las leyes que aplica a su trabajo diario. Lo guardó en un documento de texto y empezó a pegarlo al inicio de cada conversación nueva.

La diferencia fue inmediata. Las respuestas dejaron de ser artículos de Wikipedia y empezaron a parecer memos internos del despacho. Cuando preguntaba sobre requisitos de deducción, el modelo ya sabía que estaba hablando de clientes mexicanos en regímenes específicos. Cuando pedía apoyo con un cálculo, el formato ya venía en tabla, como él lo necesitaba.

Roberto no se volvió dependiente de la IA. Sigue verificando todo. Pero ahora la verificación le toma cinco minutos en lugar de veinticinco, porque el punto de partida ya está estructurado y contextualizado.

## Mito vs. Realidad

- **Mito:** "Un buen prompt es suficiente. No necesito system prompt."
- **Realidad:** Un buen prompt resuelve una pregunta. Un buen system prompt mejora todas las preguntas de esa conversación. Son complementarios, no excluyentes. El prompt es lo que preguntas; el system prompt es cómo el modelo entiende tu mundo antes de que preguntes.

- **Mito:** "Configurar un system prompt es para programadores."
- **Realidad:** Es escribir instrucciones en español. Si puedes redactar un correo a un cliente explicándole cómo funciona tu despacho, puedes escribir un system prompt. No hay código, no hay configuración técnica. Es lenguaje natural, el mismo que usas todos los días.

---

### Lo que te llevas

- El system prompt es el manual de operaciones de tu despacho para la IA. Sin él, obtienes respuestas genéricas. Con él, obtienes un asistente que entiende tu contexto, sigue tus reglas y responde en tu formato.
- Un buen system prompt tiene cinco componentes: rol, contexto, reglas, formato y límites. No necesitas los cinco siempre, pero entre más completo, mejores las respuestas.
- Lo escribes una vez y lo reutilizas. Algunas herramientas te dejan guardarlo de forma permanente. En las demás, pégalo al inicio de cada conversación. Treinta minutos de configuración te ahorran horas de retrabajo.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y pregúntale: "¿Cuáles son las obligaciones fiscales de una persona física en RESICO?" Lee la respuesta. Será correcta pero genérica.
2. Ahora, en un chat nuevo, antes de preguntar nada, pega este system prompt: "Eres un asistente fiscal mexicano. Trabajo en un despacho que atiende personas físicas en RESICO con ingresos menores a 3.5 millones anuales. Responde de forma concisa, en bullets, citando siempre el artículo de ley. Si no tienes certeza, dilo." Luego haz la misma pregunta.
3. Compara las dos respuestas. Nota cómo la segunda es más específica, más estructurada y más útil para tu trabajo real. Esa diferencia la hizo el system prompt.

### Si quieres ir más lejos

El concepto de system prompt es la base sobre la que se construyen los prompts especializados. Si quieres ver cómo se aplica esto a tareas concretas del despacho —desde revisar CFDIs hasta preparar papeles de trabajo— el [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) ya trae esa capa de contexto integrada para que no tengas que construirla desde cero cada vez.
