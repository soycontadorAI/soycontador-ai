---
title: "Capítulo 11: La IA aprende como tus hijos: con ejemplos, no con discursos"
pubDate: 2026-03-13
description: "Zero-shot, one-shot y few-shot learning. Cómo enseñarle a la IA con ejemplos en lugar de instrucciones largas."
chapter: 11
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-11.webp"
isFree: false
---

# Capítulo 11: La IA aprende como tus hijos: con ejemplos, no con discursos

<!--
Fuente: NUEVO
Concepto principal: Few-shot vs Zero-shot prompting
Términos para glosario: Zero-shot, Few-shot, One-shot, Ejemplo, In-context learning
-->

Cuando abrí el despacho y contraté a mi primera auxiliar contable, le pedí algo que parecía sencillo: clasificar los movimientos bancarios de un cliente. Le di el estado de cuenta y le dije "clasifica cada movimiento en la cuenta contable que le corresponda". Me fui a una junta y cuando regresé, la clasificación era un desastre. No porque ella fuera mala. Era lista y tenía buenas bases contables. Pero tenía un problema: no conocía MI sistema de clasificación.

En la universidad le enseñaron un catálogo de cuentas genérico. En el despacho anterior donde trabajó usaban otra estructura. Y en mi despacho, las cuentas se manejan de una forma particular: los gastos de representación van en una subcuenta específica, las comisiones bancarias se separan por tipo, los ingresos por cobranza se registran distinto a los ingresos por facturación directa. Nada de eso es estándar. Es como funciona mi despacho.

¿Qué hice la segunda vez? Le di tres movimientos ya clasificados por mí. "Mira, este depósito de $45,000 de Distribuidora Martínez va en Clientes - Cobranza. Este cargo de $1,200 del banco va en Gastos Financieros - Comisiones Bancarias. Este pago de $8,500 a Telmex va en Gastos de Operación - Teléfono e Internet." Con esos tres ejemplos, clasificó los demás 47 movimientos perfectamente. No porque hubiera aprendido algo nuevo. Sino porque ahora entendía el patrón que yo necesitaba.

Con la IA pasa exactamente lo mismo. Y la técnica tiene nombre.

## Tres formas de pedir lo mismo

Cuando le das una instrucción a un modelo de IA, la cantidad de ejemplos que incluyes cambia radicalmente la calidad y consistencia de la respuesta. No es un detalle menor. Es una de las técnicas más poderosas que existen en el uso práctico de estos modelos, y no requiere ningún conocimiento técnico para aplicarla.

Hay tres niveles, y vamos de menos a más.

**Zero-shot: sin ejemplos.** Le pides al modelo que haga algo sin mostrarle cómo quieres que lo haga. Solo das la instrucción y confías en que el modelo, con todo su entrenamiento general, figure lo que necesitas.

"Clasifica la siguiente operación contable: Pago de renta mensual de oficina por $12,000."

El modelo va a clasificarla. Probablemente bien. Pero va a usar su propio criterio para decidir el formato, el nivel de detalle y la estructura de la clasificación. Puede decirte "Gasto de operación" o "Gasto administrativo - Arrendamiento" o "Cuenta 6100 - Rentas" o cualquier otra variación. Todas correctas, ninguna necesariamente alineada con tu catálogo de cuentas.

**One-shot: un ejemplo.** Le das un ejemplo de cómo clasificaste una operación y luego le pides que clasifique otra.

"Clasifica la siguiente operación contable usando el formato del ejemplo.
Ejemplo: 'Compra de laptop por $18,000' → Activo Fijo / Equipo de Cómputo / $18,000.
Ahora clasifica: 'Pago de renta mensual de oficina por $12,000.'"

Con un solo ejemplo, el modelo ya entendió tres cosas: que quieres la categoría general, la subcategoría y el monto. La respuesta va a seguir ese patrón. Un ejemplo, y el formato ya está controlado.

**Few-shot: varios ejemplos.** Le das entre dos y cinco ejemplos que cubran diferentes tipos de operaciones, y luego le pides que clasifique nuevas.

"Clasifica las siguientes operaciones contables usando el formato de los ejemplos.

Ejemplos:

- 'Compra de laptop por $18,000' → Activo Fijo / Equipo de Cómputo / $18,000
- 'Pago de renta mensual de oficina por $12,000' → Gastos de Operación / Arrendamiento / $12,000
- 'Depósito de cliente Distribuidora Martínez por $45,000' → Clientes / Cobranza / $45,000
- 'Pago de nómina quincenal por $67,000' → Gastos de Operación / Sueldos y Salarios / $67,000

Ahora clasifica estas operaciones:

1. Pago de luz por $3,400
2. Compra de escritorio por $9,500
3. Depósito de cliente Comercial del Norte por $28,000
4. Pago de honorarios al abogado por $15,000"

Ahora el modelo no solo entiende el formato. Entiende la lógica de clasificación. Sabe que las compras de mobiliario van en Activo Fijo, que los pagos de servicios van en Gastos de Operación, que los depósitos de clientes van en Clientes. Y va a aplicar esa lógica de forma consistente a las nuevas operaciones.

> **In-context learning (Aprendizaje en contexto):** Es la capacidad de un modelo de IA para aprender un patrón o regla a partir de ejemplos incluidos directamente en el prompt, sin necesidad de modificar el modelo ni entrenarlo. Le muestras cómo quieres que trabaje, y adapta su comportamiento a esos ejemplos dentro de la misma conversación.

## La analogía del auxiliar contable (y por qué es perfecta)

Lo que acabo de describir no es nada nuevo para ti. Es literalmente cómo entrenas a cualquier persona nueva en tu despacho.

Si le dices a un auxiliar "clasifica los movimientos del estado de cuenta" sin darle ningún ejemplo, va a usar su criterio general. Quizá lo haga bien, quizá no. Pero casi seguro no va a coincidir con tu forma de trabajar. Eso es zero-shot.

Si le muestras una clasificación completada y le dices "hazlo así", ya tiene un punto de referencia. Va a tratar de replicar el patrón. Pero con un solo ejemplo, puede haber ambigüedad en los casos que no se parecen al ejemplo que le diste. Eso es one-shot.

Si le muestras cuatro o cinco clasificaciones de diferentes tipos de movimientos, ya entiende tu sistema completo. Sabe cómo manejas ingresos, gastos, activos y pasivos. Puede clasificar un movimiento que nunca ha visto porque entiende la lógica detrás. Eso es few-shot.

La diferencia entre explicarle a alguien cómo funciona algo con palabras y mostrarle ejemplos concretos es enorme. Con la IA es exactamente igual. Un párrafo explicando tu sistema de clasificación es menos efectivo que tres ejemplos bien elegidos.

## Cuándo usar cada uno

No siempre necesitas ejemplos. Y a veces, dar demasiados es contraproducente. La regla práctica es esta:

**Usa zero-shot cuando la tarea es clara y universal.** Si lo que necesitas es algo que cualquier profesional haría de la misma forma, no necesitas ejemplos. "Resume este artículo de la Ley del ISR en tres bullets." "Traduce este párrafo al inglés." "Explica qué es el coeficiente de utilidad." Estas tareas no requieren tu estilo personal ni tu sistema particular. El modelo sabe hacerlas con su entrenamiento general.

**Usa one-shot cuando necesitas establecer un formato específico.** Si quieres que la respuesta siga una estructura particular que no es obvia, un ejemplo basta. "Redacta un correo al cliente informándole de su saldo pendiente. Aquí tienes un ejemplo del tono que usamos en el despacho: [ejemplo]. Ahora redacta uno para el cliente García con un saldo de $23,000." Un ejemplo define el tono, la formalidad, la estructura. Suficiente para que el modelo replique el patrón.

**Usa few-shot cuando la tarea involucra clasificación, juicio o consistencia.** Aquí es donde los ejemplos brillan. Cada vez que necesites que el modelo tome decisiones que sigan tu criterio específico —clasificar operaciones según tu catálogo, categorizar CFDIs según el tipo de gasto, extraer datos de un formato particular— dale entre tres y cinco ejemplos. Esos ejemplos son los que le enseñarán tu lógica, no la lógica genérica del modelo.

**La regla de oro: tres a cinco ejemplos es el punto óptimo.** Menos de tres y puede haber ambigüedad. Más de cinco y empiezas a desperdiciar espacio en la ventana de contexto (Capítulo 5) y tokens (Capítulo 4) sin ganar precisión significativa. Hay excepciones, pero para el 90% de las tareas contables, tres a cinco ejemplos es lo que necesitas.

## Few-shot en tareas reales del despacho

Vamos a salir de la teoría y ver cómo esto funciona en tareas que haces todas las semanas.

**Clasificación de CFDIs por tipo de gasto.** Tienes 50 CFDIs de un cliente y necesitas clasificarlos para la declaración. En vez de clasificarlos uno por uno, le das al modelo tres ejemplos: "CFDI de Office Depot por $3,200 → Material de oficina. CFDI de Gasolinera Pemex por $1,500 → Combustible y lubricantes. CFDI de Restaurante La Parroquia por $890 → Gastos de representación." Le pasas los demás 47 y el modelo los clasifica siguiendo tu criterio. No el criterio genérico de un libro de texto, sino el tuyo.

**Extracción de datos de XMLs.** Tienes los archivos XML de los CFDIs de un cliente y necesitas extraer ciertos campos para tu conciliación. Le muestras al modelo dos ejemplos de lo que necesitas: "De este XML, extrae: RFC emisor, fecha, subtotal, IVA, total, y método de pago. Formato: una fila por CFDI, separado por comas." Le das los dos ejemplos resueltos y luego le pasas el lote. La extracción sale consistente porque el modelo vio exactamente qué campos y qué formato esperas.

**Redacción de respuestas a clientes.** Tienes un estilo de comunicación en tu despacho. Quizá más formal, quizá más directo, quizá con un formato específico de saludo y cierre. En vez de explicarle al modelo cómo quieres que escriba (lo cual es sorprendentemente difícil), le muestras dos correos reales que ya mandaste. "Aquí tienes dos ejemplos de cómo respondemos consultas de clientes. Ahora redacta una respuesta para el cliente González que pregunta sobre los requisitos para deducir gastos médicos." El modelo replica el tono, la estructura y el nivel de detalle de tus ejemplos.

**Generación de minutas consistentes.** Si llevas minutas de reuniones con clientes, le das un ejemplo de una minuta terminada y le pides que genere la siguiente con los puntos que le dictes. El formato, los encabezados, el nivel de detalle y hasta el tono se replican automáticamente.

## El truco está en elegir buenos ejemplos

No cualquier ejemplo sirve igual. Si los tres ejemplos que le das son tres gastos de operación muy parecidos entre sí, el modelo no va a saber qué hacer cuando le llegue un activo fijo o un ingreso. Los buenos ejemplos cubren la diversidad de casos que el modelo va a enfrentar.

Piensa en cómo le enseñas a un auditor junior. No le muestras tres veces la misma partida. Le muestras una partida de ingresos, una de gastos, una de activo, una de pasivo. Así entiende que hay diferentes categorías y aprende a distinguir entre ellas.

Lo mismo aplica aquí. Si vas a clasificar movimientos bancarios, tus ejemplos deberían incluir al menos: un ingreso, un gasto operativo, un gasto financiero y, si aplica, un movimiento de activo fijo. Con esos cuatro ejemplos, el modelo tiene suficiente diversidad para clasificar correctamente movimientos que nunca ha visto pero que caen en alguna de esas categorías.

Y un punto importante que conecta con capítulos anteriores: los ejemplos ocupan espacio en la ventana de contexto. Cada ejemplo que agregas consume tokens. Tres ejemplos bien elegidos son más efectivos que diez ejemplos redundantes. No es cuántos, es cuáles.

## En la práctica

La contadora Patricia tiene un despacho en Guadalajara y atiende 25 clientes, la mayoría personas físicas con actividad empresarial. Cada mes, una de sus tareas más tediosas es clasificar los movimientos bancarios de sus clientes para la contabilidad mensual. Un cliente promedio tiene entre 30 y 60 movimientos por mes.

Antes, Patricia clasificaba todo manualmente. Le tomaba entre 20 y 30 minutos por cliente. Multiplica eso por 25 clientes y tienes más de diez horas al mes solo en clasificación.

Un día probó pedirle al modelo que clasificara los movimientos sin darle ejemplos. Zero-shot. El resultado fue un desastre de inconsistencias: a veces usaba "Gastos Generales", a veces "Gastos de Administración", a veces "Gastos Operativos" para el mismo tipo de movimiento. Las categorías cambiaban de un cliente a otro. No servía.

Luego probó con few-shot. Para cada cliente, antes de pasar el lote de movimientos, incluía cuatro movimientos ya clasificados por ella con su propio catálogo de cuentas. El resultado fue otro mundo. Las clasificaciones salían consistentes, alineadas con su catálogo, y en el formato que necesitaba para capturar directamente en su sistema contable.

Ahora Patricia dedica dos minutos por cliente eligiendo los cuatro ejemplos y revisando el resultado, en lugar de treinta minutos clasificando manualmente. Sigue revisando todo, porque como buena contadora sabe que la responsabilidad es suya. Pero el punto de partida es un 90% de la clasificación ya hecha correctamente.

El detalle que marcó la diferencia: los cuatro ejemplos que elige siempre son de categorías distintas. Un ingreso por cobranza, un gasto de operación, un gasto financiero y un pago a proveedor. Con esa diversidad, el modelo entiende su sistema completo.

## Mito vs. Realidad

- **Mito:** "Si le doy muchos ejemplos, la IA va a dar mejores respuestas."
- **Realidad:** Hay un punto de rendimientos decrecientes. Tres a cinco ejemplos bien elegidos suelen ser suficientes. Más allá de eso, estás gastando tokens y espacio de contexto sin mejorar significativamente la calidad. Es como explicarle algo a un auxiliar: si después de cuatro ejemplos no entendió el patrón, el quinto probablemente no va a cambiar nada. Mejor revisa si tus ejemplos son claros y diversos.

- **Mito:** "Few-shot solo sirve para tareas simples como clasificación."
- **Realidad:** Few-shot funciona para cualquier tarea donde necesites consistencia: redacción de correos, generación de reportes, extracción de datos, análisis comparativos, hasta generación de opiniones técnicas con un formato específico. Si puedes mostrar un ejemplo de lo que quieres, el modelo puede replicar el patrón. La complejidad de la tarea no limita la técnica, solo cambia la complejidad de los ejemplos que necesitas dar.

---

### Lo que te llevas

- Zero-shot es pedir sin ejemplos, one-shot es dar un ejemplo, few-shot es dar varios. La diferencia no es solo de cantidad: es de consistencia y alineación con tu forma de trabajar. Entre más necesites que el modelo siga tu criterio específico, más ejemplos necesitas darle.
- Tres a cinco ejemplos es el punto óptimo para la mayoría de las tareas contables. Menos puede generar ambigüedad, más desperdicia contexto. Lo importante no es cuántos ejemplos, sino que cubran la diversidad de casos que el modelo va a enfrentar.
- Few-shot se potencia cuando lo combinas con el framework ISCA del Capítulo 9. Dale al modelo una identidad, la situación, la consigna, el acabado y además incluye ejemplos. Esa combinación es lo que separa un resultado genérico de uno que parece hecho por alguien de tu equipo.

### Pruébalo tú mismo

1. Elige una tarea repetitiva que hagas regularmente en el despacho: clasificar movimientos bancarios, categorizar CFDIs, redactar correos a clientes, o extraer datos de documentos. Abre un chat con cualquier modelo de IA y pídele que haga esa tarea sin darle ningún ejemplo. Observa el resultado.
2. Ahora, en un chat nuevo, haz la misma solicitud pero antes incluye tres ejemplos resueltos por ti. Asegúrate de que los ejemplos cubran diferentes tipos de casos (no tres ejemplos iguales). Observa cómo la respuesta cambia en formato, consistencia y alineación con tu criterio.
3. Compara ambos resultados. Fíjate especialmente en la consistencia: ¿el modelo usó las mismas categorías? ¿El formato es uniforme? ¿Las decisiones de clasificación siguen tu lógica o la lógica genérica del modelo? Esa diferencia es lo que te da few-shot.

### Si quieres ir más lejos

La técnica de few-shot es especialmente poderosa para tareas que haces todas las semanas de la misma forma. El reto es que construir buenos ejemplos para cada tarea toma tiempo la primera vez. El [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) ya trae esa estructura resuelta: prompts con el framework ISCA del Capítulo 9 y con ejemplos integrados para las tareas más comunes del despacho, listos para que los adaptes con los datos de tus clientes.
