---
title: "Capítulo 6: La diferencia entre adivinar y razonar"
pubDate: 2026-03-13
description: "Cadena de pensamiento (Chain of Thought), modelos de razonamiento vs velocidad. Cuándo usar cada tipo."
chapter: 6
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-06.webp"
isFree: false
---

# Capítulo 6: La diferencia entre adivinar y razonar

<!--
Fuente: Newsletter #7
Concepto principal: Chain of Thought (Cadena de Pensamiento)
Términos para glosario: Chain of Thought, reasoning tokens, modelos de razonamiento, modelos rapidos
-->

La semana pasada tuve una entrevista de trabajo en una startup. Una empresa con una actividad que nunca he llevado en el despacho. Industria completamente nueva para mí. Operaciones que no había visto antes. El tipo de situación donde alguien que no tiene las bases contables bien establecidas se queda callado y reza para que no le pregunten nada técnico.

Pero cuando llegaron las preguntas de contabilidad, las pude responder. No porque conociera el giro. No porque hubiera estudiado esa industria la noche anterior. Sino porque tenía algo más básico y más poderoso: la lógica contable base. Dame los detalles de cualquier operación y puedo determinar si afecta al activo, al pasivo, al capital o a resultados. No importa si es una startup de criptomonedas, una constructora o una taquería. La estructura financiera funciona igual.

Lo que hice en esa entrevista fue razonar paso a paso. Primero entender la operación. Luego clasificarla. Luego aplicar el marco contable que ya conozco. Y finalmente llegar a la respuesta. No adiviné. Razoné. Y esa diferencia, que para ti como contador es obvia, es exactamente lo que separa a un modelo de IA bueno de uno excepcional.

## Pensar antes de hablar

Los primeros modelos de IA funcionaban como ese contador que te da el saldo directo sin mostrarte cómo llegó ahí. Le preguntabas algo y te escupía una respuesta de golpe. A veces acertaba. A veces no. Y cuando no acertaba, no tenías forma de saber en qué parte del proceso se había equivocado, porque no había proceso visible. Era un número final sin auxiliar.

Los modelos más recientes hacen algo distinto. Antes de darte la respuesta, razonan. Generan pasos intermedios, una secuencia lógica interna que se parece mucho a cómo tú piensas cuando resuelves un caso fiscal nuevo:

"El usuario me pregunta X. Para responder necesito considerar A. Si A es cierto, entonces B aplica. Pero B tiene una excepción cuando C. Verifico si C aplica en este caso. No aplica, entonces la respuesta es Z."

Eso es lo que los técnicos llaman cadena de pensamiento. Y no es un detalle menor. Es la diferencia entre un modelo que adivina y uno que razona.

> **Chain of Thought (Cadena de Pensamiento):** Es la capacidad de un modelo de IA para generar pasos intermedios de razonamiento antes de dar una respuesta final. En lugar de saltar directamente a la conclusión, el modelo "piensa en voz alta", lo que reduce errores y permite verificar su lógica.

¿Por qué importa esto? Porque ese proceso de razonamiento intermedio es lo que reduce las alucinaciones en preguntas complejas. Cuando el modelo se obliga a razonar paso a paso, se auto-verifica durante el camino. Si en el paso 3 se contradice con algo que estableció en el paso 1, tiene oportunidad de corregirse antes de darte la respuesta final.

Es como la diferencia entre el contador que te muestra el auxiliar completo y el que solo te da el total. Al segundo le preguntas cómo llegó ahí y te dice "ah, es que me confundí". Al primero le puedes seguir la pista, identificar exactamente dónde está el error si lo hay, y confiar en el resultado porque puedes verificar el proceso.

## Dos tipos de modelos, dos tipos de trabajo

Aquí es donde la cosa se pone práctica. No todos los modelos razonan igual, y entender la diferencia te va a ahorrar tiempo y dinero.

Existen lo que podemos llamar modelos rápidos y modelos de razonamiento. Los rápidos —como las versiones ligeras de cualquier familia de modelos— priorizan velocidad y bajo costo. Te dan una respuesta en un segundo, gastan pocos tokens, y para muchas tareas son más que suficientes. ¿Necesitas redactar un correo al cliente recordándole que envíe su constancia de situación fiscal? Un modelo rápido lo hace perfecto.

Los modelos de razonamiento son otra cosa. Estos se toman su tiempo. Generan internamente una cadena de pensamiento que puede ser extensa antes de darte la respuesta visible. Las tres familias grandes lo ofrecen (ChatGPT, Claude y Gemini) y algunas te dejan ver ese proceso; otras lo hacen por dentro y solo te muestran el resultado. Pero en todos los casos, el modelo está haciendo más trabajo bajo el capó.

Aquí va un matiz que llegó después y que cambia cómo se elige: **la frontera dejó de ser "dos tipos de modelo" para volverse un dial dentro del mismo modelo.** Los modelos actuales deciden solos cuánto pensar según lo difícil que se vea la pregunta, y donde hay control lo que se ajusta es el nivel de esfuerzo, no cuál modelo llamas. Elegir "rápido o listo" hoy se parece menos a escoger empleado y más a decirle a uno solo cuánto tiempo le dedique al asunto.

**Verificado en agosto de 2026.** Los nombres comerciales de los modelos cambian cada pocos meses; la distinción entre contestar de inmediato y razonar antes de contestar es la que se queda.

¿Cuándo usar cada uno? La regla es simple:

Si la tarea es rutinaria, repetitiva o no requiere análisis profundo, usa un modelo rápido. Redactar correos, resumir documentos, formatear información, traducir textos. No necesitas que el modelo "piense" veinte segundos para escribirte un recordatorio de pago.

Si la tarea requiere análisis, lógica o precisión fiscal, usa un modelo de razonamiento. Analizar si un gasto es deducible bajo las fracciones del artículo 27 de la LISR, determinar el tratamiento contable de una operación compleja, revisar si una estrategia fiscal tiene riesgo ante el SAT. Ahí quieres que el modelo se tome su tiempo y razone.

La diferencia de costo es real, como vimos en el Capítulo 4. Un modelo de razonamiento puede costar 5 o 10 veces más que uno rápido para la misma pregunta. Pero si esa pregunta vale una opinión fiscal de $15,000, el costo adicional de unos pesos en tokens es irrelevante.

## Los tokens invisibles

Hay un concepto que conecta este capítulo con lo que aprendiste en el Capítulo 4 sobre costos: los tokens de razonamiento.

Cuando un modelo de razonamiento "piensa", genera texto interno. A veces lo puedes ver (como una sección de "pensamiento" antes de la respuesta). A veces no lo ves, pero el modelo lo generó internamente de todos modos. Ese texto interno consume tokens. Y esos tokens cuestan dinero.

Es por eso que los modelos de razonamiento son más caros. No es que te cobren un premium por ser mejores. Es que literalmente están generando más texto —más trabajo computacional— para llegar a la respuesta. Si un modelo rápido genera 200 tokens para responderte, un modelo de razonamiento puede generar 200 tokens de respuesta visible más 800 tokens de razonamiento interno. Estás pagando por 1,000 tokens en lugar de 200.

Piénsalo así: es la diferencia entre el despacho que te cobra $3,000 por "darte el número" y el que te cobra $15,000 pero te entrega el número con todo el papel de trabajo detrás. Los dos te dan un resultado. Pero el segundo hizo más trabajo, y ese trabajo tiene valor porque puedes verificarlo.

## El truco que cambia todo

Ahora viene la parte que más me gusta, porque es algo que puedes usar hoy mismo sin gastar un peso extra.

Aunque estés usando un modelo rápido —de esos que no razonan por defecto— puedes forzar la cadena de pensamiento con una instrucción simple. Basta con agregar a tu prompt algo como:

"Piensa paso a paso antes de darme la respuesta final."

O: "Explica tu razonamiento antes de dar la conclusión."

O: "Analiza esto como si fueras un contador revisando un caso: primero identifica los hechos, luego la norma aplicable, luego la conclusión."

Esta técnica, conocida como "prompting de cadena de pensamiento", obliga al modelo a generar los pasos intermedios como parte de su respuesta visible. Y los estudios muestran que mejora la precisión de forma significativa, incluso en modelos que no fueron diseñados específicamente para razonar.

¿Por qué funciona? Porque al obligar al modelo a "mostrar su trabajo", le estás dando la oportunidad de auto-corregirse. Si en el paso 2 dice algo que contradice el paso 1, al escribirlo se da cuenta y ajusta. Sin esa instrucción, el modelo salta directo a la conclusión y no tiene ese mecanismo de verificación.

Es como cuando le pides a un becario que no solo te dé el resultado de la conciliación bancaria, sino que te muestre cada partida. El simple hecho de tener que mostrar el proceso hace que lo haga con más cuidado.

## En la práctica

El contador Roberto tiene un caso fiscal complicado. Su cliente, una persona moral del régimen general, hizo una venta de un inmueble que había sido su oficina corporativa durante 12 años. Roberto necesita determinar el tratamiento fiscal: la ganancia en la enajenación, la actualización del costo de adquisición, la deducción por inversiones pendiente, y si hay alguna implicación en materia de IVA.

Si Roberto le pregunta al modelo "¿cómo calculo el ISR por venta de un inmueble de una persona moral?", va a obtener una respuesta genérica que menciona los artículos aplicables pero no le resuelve el caso.

Pero si Roberto le dice: "Analiza paso a paso el siguiente caso. Una persona moral del régimen general vende un inmueble que fue su oficina corporativa. Lo adquirió en marzo 2014 por $3.8 millones. Lo vende en noviembre 2026 por $7.2 millones. Ha deducido inversiones con la tasa del 5% anual conforme al artículo 34 fracción I de la LISR. Necesito que razones: 1) el costo actualizado de adquisición usando INPC, 2) la deducción por inversiones acumulada, 3) la ganancia fiscal, 4) el tratamiento para IVA, y 5) la documentación que necesito para soportar la operación. Muestra tu razonamiento completo antes de la conclusión."

Con esa instrucción, el modelo va a generar un análisis paso a paso que Roberto puede seguir, verificar contra la ley y su criterio profesional, y ajustar donde sea necesario. No es que el modelo haga el trabajo de Roberto. Es que le da un primer borrador razonado que Roberto puede auditar.

Y esa es la palabra clave: auditar. Como contador, tu trabajo es verificar. Si el modelo te muestra su razonamiento, puedes leerlo y detectar si en algún paso se equivocó. "Aquí usaste la tasa del 10% pero el artículo 34 fracción I dice 5%." Sin el razonamiento visible, solo tienes un número final y ninguna forma de saber si el camino fue correcto.

Como veremos en el Capítulo 12, la IA no tiene RFC ni responde ante el SAT. Tú sí. Por eso poder leer el razonamiento no es un lujo, es una necesidad profesional.

## Mito vs. Realidad

- **Mito**: "El razonamiento profundo solo está disponible en los modelos más caros y lentos."
- **Realidad**: Las versiones ligeras de cada familia (las que llevan apellidos como "Flash", "Mini" o "Haiku") ya integran razonamiento lógico a una velocidad casi instantánea y por una fracción del costo. Ya no tienes que elegir entre "inteligente" o "rápido"; para la mayoría de las tareas contables, los modelos intermedios son más que suficientes.

- **Mito**: "Si la IA me muestra su razonamiento, el resultado es 100% infalible."
- **Realidad**: El razonamiento reduce las alucinaciones, pero **no las elimina**. La IA puede razonar con una lógica perfecta... partiendo de una premisa falsa (como una ley que ya fue derogada). Ver el razonamiento es para que tú puedas _auditar el proceso_, no para que confíes ciegamente en él.

- **Mito**: "Si el modelo no tiene activada la función de 'Pensamiento', no sirve para analizar impuestos."
- **Realidad**: Como vimos en este capítulo, puedes "inyectar" capacidad de razonamiento a cualquier modelo, incluso a los más básicos, usando la instrucción "**piensa paso a paso**". El razonamiento no es solo una función del software, es una forma de redactar tus instrucciones (prompts).

- **Mito**: "La IA va a reemplazar el juicio profesional del contador porque ya puede razonar."
- **Realidad**: La IA razona sobre datos, pero tú razonas sobre **contexto y responsabilidad**. El modelo puede decirte qué dice la norma, pero solo tú puedes decidir si una estrategia es adecuada para la tolerancia al riesgo de un cliente específico o cómo manejar una auditoría frente a una autoridad humana.

---

### Lo que te llevas

- La cadena de pensamiento es lo que separa a un modelo que adivina de uno que razona. Los modelos que generan pasos intermedios antes de la respuesta final cometen menos errores y te permiten verificar su lógica.
- Existen modelos rápidos (baratos, para tareas simples) y modelos de razonamiento (más caros, para análisis complejos). Saber cuándo usar cada uno te ahorra dinero y te da mejores resultados.
- Puedes forzar el razonamiento en cualquier modelo con una instrucción tan simple como "piensa paso a paso". Ese truco mejora la precisión de forma significativa y no cuesta nada extra.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y pregunta: "Una persona moral del régimen general tiene un ingreso por arrendamiento de un inmueble y también lo usa parcialmente como oficina. ¿Puede deducir el 100% de los gastos de mantenimiento?" Observa la respuesta directa.
2. Ahora, en un chat nuevo, haz la misma pregunta pero agrega al final: "Antes de darme tu conclusión, razona paso a paso: identifica los artículos aplicables de la LISR y la LIVA, analiza si hay proporción de uso, y luego dame tu conclusión fundamentada."
3. Compara ambas respuestas. La primera te dará una respuesta plana. La segunda te mostrará el razonamiento, y podrás verificar si cada paso es correcto conforme a tu criterio profesional.

### Si quieres ir más lejos

Los prompts del [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) ya incluyen instrucciones de razonamiento paso a paso en las tareas fiscales complejas. En lugar de recordar agregar "piensa paso a paso" cada vez, esa estructura ya viene integrada para que el modelo te muestre su trabajo y tú puedas auditarlo como harías con cualquier papel de trabajo de tu equipo.
