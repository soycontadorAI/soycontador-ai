---
title: "Apéndice A: Glosario de términos"
pubDate: 2026-03-13
description: "Todos los términos técnicos del libro explicados en español con analogías contables. Tu referencia rápida."
chapter: 18
bookSlug: "ia-para-contadores"
isFree: false
---

# Apéndice A: Glosario de términos

<!--
Fuente: NUEVO
-->

Este glosario incluye todos los términos técnicos que aparecen a lo largo del libro. Están ordenados alfabéticamente. Si en algún capítulo encuentras una palabra que no te suena, ven aquí.

---

**Agente de IA**: Un sistema de inteligencia artificial que puede tomar decisiones, ejecutar acciones y usar herramientas de forma autónoma para completar una tarea, no solo responder preguntas sino hacer cosas por ti.

**Alucinación (Hallucination)**: Cuando un modelo de IA genera información que suena convincente pero es falsa, inventada o no tiene sustento en datos reales. No es que "mienta" a propósito; es que produce texto que estadísticamente parece correcto aunque no lo sea.

**API (Application Programming Interface)**: Una forma estandarizada para que un programa de software se comunique con otro. En el contexto de IA, es lo que permite que una aplicación le envíe preguntas a un modelo como GPT o Claude y reciba respuestas, sin necesidad de abrir un chat manualmente.

**Artifact**: Una salida del modelo que se abre como documento aparte en lugar de quedarse dentro del chat: un reporte, una tabla, una hoja de cálculo, una pequeña aplicación. Sirve para el trabajo que quieres conservar y editar, no solo leer.

**Bias (Sesgo)**: Tendencias o prejuicios que un modelo de IA hereda de los datos con los que fue entrenado. Si los datos reflejan estereotipos o perspectivas incompletas, el modelo va a reproducirlos en sus respuestas.

**Cadena de pensamiento (Chain of Thought)**: Una técnica de prompting donde le pides al modelo que razone paso a paso antes de dar su respuesta final. Esto suele mejorar la calidad de las respuestas, especialmente en problemas que requieren lógica o cálculo.

**Contexto**: Toda la información que el modelo tiene disponible al momento de generar una respuesta, incluyendo tu pregunta, las instrucciones del sistema y el historial de la conversación.

**Datos de entrenamiento (Training Data)**: El enorme conjunto de textos, libros, páginas web y documentos que se usaron para enseñarle al modelo a generar lenguaje. El modelo no "recuerda" estos datos como tú recuerdas un libro; los usó para aprender patrones estadísticos del lenguaje.

**Determinismo**: La propiedad de un sistema de producir siempre el mismo resultado ante la misma entrada. Los modelos de IA no son deterministas por defecto: puedes hacerles la misma pregunta dos veces y obtener respuestas diferentes.

**Embeddings**: Una representación numérica de un texto (palabras, oraciones o documentos) en forma de lista de números. Sirven para que la computadora pueda medir qué tan parecidos o diferentes son dos textos, algo fundamental para búsquedas semánticas y sistemas RAG.

**Esfuerzo (effort)**: El control que sustituyó, en varios modelos de frontera, a la vieja pregunta de "¿uso el modelo rápido o el listo?". En lugar de cambiar de modelo, le dices al mismo cuánto detenerse a razonar antes de contestar. Más esfuerzo cuesta más y tarda más, pero acierta más en lo que requiere análisis.

**Few-shot**: Una técnica de prompting donde le das al modelo algunos ejemplos de lo que esperas antes de hacerle tu pregunta real. "Aquí tienes tres ejemplos de cómo quiero que clasifiques estas facturas; ahora clasifica esta."

**Fine-tuning**: El proceso de tomar un modelo ya entrenado y volverlo a entrenar con datos específicos para que se especialice en una tarea particular. Es como si un contador generalista tomara un diplomado en precios de transferencia.

**Formato de salida**: La estructura en la que le pides al modelo que entregue su respuesta: texto plano, lista con viñetas, tabla, JSON, XML, etc. Especificar el formato mejora enormemente la utilidad de las respuestas.

**Groundedness**: La cualidad de que una respuesta de IA esté basada en información verificable y proporcionada, en lugar de ser inventada. Una respuesta "grounded" se apoya en datos concretos; una que no lo es, probablemente es una alucinación.

**Human-in-the-loop**: Un enfoque donde un humano revisa, valida o aprueba las salidas de la IA antes de que se usen o se actúe sobre ellas. En contabilidad, esto significa que tú siempre revisas lo que la IA produce antes de enviarlo al cliente o al SAT.

**In-context learning**: La capacidad de un modelo para aprender a hacer algo nuevo basándose únicamente en las instrucciones y ejemplos que le das dentro del prompt, sin necesidad de reentrenarlo.

**Instrucción**: La parte de tu prompt donde le dices al modelo exactamente qué quieres que haga. "Resume este texto", "Clasifica estas partidas", "Redacta un correo". Entre más clara sea la instrucción, mejor será el resultado.

**Jailbreak**: Un intento de manipular a un modelo de IA para que ignore sus restricciones de seguridad y genere contenido que normalmente rechazaría. Los proveedores de IA trabajan constantemente para prevenir esto.

**LLM (Large Language Model)**: Un modelo de inteligencia artificial entrenado con enormes cantidades de texto que puede entender y generar lenguaje humano. ChatGPT, Claude y Gemini son interfaces construidas sobre LLMs.

**MCP (Model Context Protocol)**: Un estándar abierto para conectar un modelo de IA con sistemas externos (bases de datos, archivos, servicios) para que consulte la información por su cuenta en el momento de responder. La diferencia con el RAG clásico es de dónde sale el dato: en el RAG le subes documentos, con MCP le das una vía para ir a buscarlo a la fuente viva.

**Modelo de frontera**: El modelo más avanzado y capaz disponible en un momento dado. El nombre concreto cambia cada pocos meses, y por eso el término se define por posición y no por versión: "de frontera" significa que está en la punta de lo que la tecnología puede hacer hoy. Cada familia grande tiene el suyo.

**Modelo open source / closed source**: Un modelo open source es aquel cuyo código y pesos están disponibles públicamente para que cualquiera los use y modifique (como Llama de Meta). Uno closed source es propiedad de una empresa y solo puedes usarlo a través de sus servicios (como GPT de OpenAI).

**One-shot**: Una técnica de prompting donde le das al modelo un solo ejemplo de lo que esperas antes de hacerle tu pregunta. Es el punto medio entre zero-shot (sin ejemplos) y few-shot (varios ejemplos).

**Parámetros**: Los millones o miles de millones de valores numéricos internos que definen el comportamiento de un modelo. Cuantos más parámetros tiene, más capacidad tiene para capturar patrones complejos del lenguaje. No confundir con los "parámetros de configuración" como temperatura o top-p.

**Pre-entrenamiento**: La primera fase del entrenamiento de un modelo, donde aprende los patrones generales del lenguaje procesando enormes cantidades de texto. Después del pre-entrenamiento vienen fases adicionales como el ajuste con instrucciones y RLHF.

**Prompt**: Todo lo que le escribes a un modelo de IA: tu pregunta, tus instrucciones, el contexto que le proporcionas, los ejemplos que incluyes. Es tu herramienta principal de comunicación con la IA.

**Prompt Engineering**: La habilidad de diseñar y estructurar prompts de forma que obtengas los mejores resultados posibles del modelo. No es magia ni arte oscuro; es una combinación de claridad, estructura y conocimiento de cómo funcionan estos modelos.

**Prompt Injection**: Un tipo de ataque donde alguien inserta instrucciones maliciosas dentro de un texto que será procesado por la IA, intentando que el modelo ignore sus instrucciones originales y haga algo diferente.

**RAG (Retrieval Augmented Generation)**: Una técnica donde el modelo consulta documentos o bases de datos externos antes de generar su respuesta, en lugar de depender solo de lo que "aprendió" durante su entrenamiento. Esto reduce las alucinaciones y permite trabajar con información actualizada o privada.

**Reasoning tokens**: Tokens que el modelo genera internamente como parte de su proceso de razonamiento pero que no siempre se muestran al usuario. Algunos modelos usan estos tokens para "pensar" paso a paso antes de darte su respuesta final.

**RLHF (Reinforcement Learning from Human Feedback)**: Una técnica de entrenamiento donde humanos evalúan las respuestas del modelo y esa retroalimentación se usa para mejorar su comportamiento. Es lo que hace que los modelos sean útiles y seguros en lugar de solo predecir la siguiente palabra.

**Rol**: La identidad o perspectiva que le asignas al modelo en tu prompt. "Actúa como un auditor fiscal con 20 años de experiencia" le da al modelo un marco de referencia para ajustar el tono, la profundidad y el enfoque de sus respuestas.

**Sampling**: El proceso mediante el cual el modelo selecciona la siguiente palabra de entre todas las opciones posibles. Los parámetros como temperatura y top-p controlan cómo se hace esta selección, haciéndola más predecible o más creativa.

**System Prompt**: Instrucciones especiales que se le dan al modelo antes de que el usuario empiece a interactuar con él. Define el comportamiento general, las reglas y el contexto base. En muchas herramientas, tú no ves el system prompt, pero está ahí trabajando.

**Temperatura**: Un parámetro que controla qué tan creativas o predecibles son las respuestas del modelo. Temperatura baja (cercana a 0) da respuestas más consistentes y seguras. Temperatura alta da respuestas más variadas y sorprendentes, pero con mayor riesgo de errores. Ojo: no todos los modelos lo exponen, y los de frontera de Anthropic dejaron de aceptarlo (ver Capítulo 7).

**Token**: La unidad básica en la que un modelo divide el texto para procesarlo. No es exactamente una palabra: puede ser una palabra completa, parte de una palabra o incluso un signo de puntuación. En español, una palabra común suele equivaler a 1 o 2 tokens.

**Top-p**: Un parámetro que controla la diversidad de las respuestas limitando el conjunto de palabras que el modelo considera. Un top-p de 0.1 significa que solo considera las palabras más probables; un top-p de 1.0 considera todas las opciones.

**Training data cutoff**: La fecha hasta la cual el modelo tiene información de sus datos de entrenamiento. Si el cutoff es abril de 2024, el modelo no "sabe" nada de lo que pasó después de esa fecha a menos que le proporciones esa información en el prompt.

**Ventana de contexto (Context Window)**: La cantidad máxima de texto (medida en tokens) que un modelo puede procesar en una sola conversación, incluyendo tanto lo que tú escribes como lo que el modelo responde. Si la conversación excede la ventana de contexto, el modelo empieza a "olvidar" lo del principio.

**Zero-shot**: Cuando le pides al modelo que haga algo sin darle ningún ejemplo previo. Simplemente le das la instrucción y confías en que su entrenamiento le permite entender qué hacer. Es lo que la mayoría de la gente hace cuando usa ChatGPT por primera vez.
