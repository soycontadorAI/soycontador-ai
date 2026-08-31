---
title: "Capítulo 1: La IA no es lo que crees que es"
pubDate: 2026-03-13
description: "Los LLM no piensan ni entienden: predicen. Entender esto es la diferencia entre usar bien o mal cualquier herramienta de IA."
chapter: 1
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-01.webp"
isFree: true
---

# Capítulo 1: La IA no es lo que crees que es

<!--
Fuente: Newsletter #1
Concepto principal: LLM (Large Language Model) como máquina de predicción de palabras
Términos para glosario: LLM, token, predicción, modelo de lenguaje, parámetros
-->

Son las 11 de la noche de un martes. Estás revisando las últimas conciliaciones del mes y te llega un WhatsApp de un cliente. Abres el mensaje y lees las primeras palabras: "Contador, el SAT me mandó una carta de..."

No necesitas leer el resto. Tu cerebro ya completó la frase. Ya sabes que viene algo que no te va a gustar. Ya estás pensando en qué tipo de carta es, qué plazos tienes, qué información vas a necesitar pedirle. Todo eso antes de terminar de leer el mensaje.

Ahora imagina que pudieras hacer eso mismo, pero con miles de millones de textos leídos, a una velocidad absurda, y sobre cualquier tema. Eso, en esencia, es lo que hace la inteligencia artificial que usamos hoy. No es magia. No es un cerebro digital. Es predicción a una escala que ningún humano podría alcanzar.

## La máquina de predecir palabras

Cuando escuchas "inteligencia artificial", probablemente piensas en robots, en Skynet, o en esa caja mágica donde escribes algo y aparece una respuesta perfecta. Ninguna de las dos imágenes es correcta, y quedarte con cualquiera de ellas te va a hacer usar estas herramientas mal.

La realidad es más simple y, cuando la entiendes, mucho más útil.

Las herramientas de IA que usas hoy (ChatGPT, Claude, Gemini, Copilot, Grok y las que vengan mañana) son en realidad LLMs: **Large Language Models**, o Modelos de Lenguaje Grande. Y hacen una sola cosa fundamental: predecir la siguiente palabra.

Así es. Tú escribes algo en el chat, y el modelo calcula, con base en miles de millones de patrones que aprendió durante su entrenamiento, cuál es la palabra más probable que debería seguir. Luego calcula la siguiente. Y la siguiente. Y la siguiente. Hasta que tienes un párrafo completo que parece escrito por alguien que sabe de lo que habla.

No piensa. No entiende. No "sabe" nada en el sentido humano de la palabra.

Predice.

Regresemos al ejemplo del WhatsApp. Cuando leíste "el SAT me mandó una carta de...", tu cerebro hizo una predicción basada en tu experiencia: has visto cientos de cartas del SAT, sabes qué tipo de clientes te escriben a las 11 de la noche, conoces el tono de urgencia. Toda esa experiencia acumulada te permitió predecir el final antes de leerlo.

Un LLM hace exactamente lo mismo, pero su "experiencia" son billones de palabras de texto: libros, artículos, páginas web, documentos técnicos, foros, código. Todo eso comprimido en patrones estadísticos que le permiten generar texto coherente sobre prácticamente cualquier tema.

> **LLM (Large Language Model):** Un programa que genera texto prediciendo la siguiente palabra más probable, basándose en patrones aprendidos de enormes cantidades de texto. No piensa ni entiende; calcula probabilidades.

## Por qué la IA explotó justo ahora

Tal vez te preguntes: si la idea de predecir palabras suena tan simple, ¿por qué no teníamos esto hace diez o veinte años?

La respuesta corta es que necesitábamos tres cosas al mismo tiempo y las tres tardaron décadas en llegar: poder de cómputo absurdamente grande, cantidades obscenas de datos, y una arquitectura matemática que supiera qué hacer con ambas cosas.

Esa arquitectura llegó en 2017, cuando un equipo de investigadores de Google publicó un paper con un título que no le decía nada a nadie en ese momento: "Attention Is All You Need". Ahí describieron los Transformers, la estructura que hoy usan prácticamente todos los modelos de lenguaje. No necesitas entender los detalles técnicos. Lo que importa es que esa pieza fue la que faltaba.

En 2020, OpenAI lanzó GPT-3 y el mundo empezó a notar que algo había cambiado. Un modelo de lenguaje que podía escribir ensayos, traducir idiomas, generar código y mantener conversaciones coherentes. Era impresionante, pero todavía era cosa de investigadores y programadores.

El punto de quiebre real fue noviembre de 2022, con el lanzamiento de ChatGPT. De pronto, cualquier persona con acceso a internet podía conversar con un LLM. Y todo cambió. En dos meses tenía más de 100 millones de usuarios. Ninguna tecnología en la historia había crecido tan rápido.

Desde entonces, la curva ha sido vertical. Lo que hace un año era el modelo más avanzado del mundo, hoy es superado por modelos que se ejecutan en tu teléfono. Es como si en 2015 te hubieran dado una supercomputadora del año 2000 y te dijeran "esto ahora cabe en tu bolsillo". Eso es literalmente lo que está pasando.

Y esto importa para ti como contador porque significa que la IA que conoces hoy no es la IA que vas a usar en seis meses. Los conceptos que aprendas ahora van a seguir siendo válidos; las herramientas específicas, no necesariamente. Por eso este libro se enfoca en conceptos y no en botones o herramientas específicas.

## El paisaje actual: quién es quién

Hoy hay varios jugadores importantes en el mundo de los LLMs, y vale la pena que los conozcas al menos de nombre, no porque debas casarte con alguno, sino porque vas a escucharlos constantemente y necesitas contexto.

**OpenAI** es la empresa detrás de ChatGPT y los modelos GPT. Fueron los primeros en llevar esta tecnología al público general y siguen siendo los más conocidos. Sus modelos más recientes —la familia GPT-5 y la serie "o"— compiten directamente por los primeros lugares con los de Google y Anthropic, dependiendo de la tarea.

**Anthropic** creó Claude. Se ha posicionado como referencia en razonamiento, código y trabajo con textos largos. Si alguna vez sientes que un modelo "te entiende mejor" cuando le das instrucciones largas y detalladas, probablemente estás usando Claude.

**Google** tiene Gemini, que integra directamente en su ecosistema: búsqueda, correo, documentos. Sus modelos más recientes han alcanzado los primeros lugares en pruebas de lógica y razonamiento, y su ventaja adicional es que puede conectarse con toda la información que ya tienes en sus servicios.

**Meta** (la empresa detrás de Facebook) tomó un camino diferente: sus modelos Llama son de código abierto. Esto significa que cualquier empresa o desarrollador puede tomarlos, modificarlos y usarlos libremente. Esto ha democratizado el acceso a la tecnología de maneras que nadie anticipó.

**DeepSeek**, desde China, se ha ganado un lugar ofreciendo modelos con la mejor relación rendimiento-precio del mercado.

Y hay más: Mistral desde Francia, y docenas de modelos especializados que aparecen cada semana. El punto no es que memorices esta lista —como veremos en el Capítulo 2, los modelos cambian constantemente—. El punto es que entiendas que no existe "la IA" como una sola cosa. Existen muchos modelos, de muchas empresas, con diferentes capacidades. Elegir cuál usar es una decisión que importa.

## Por qué entender esto es más valioso que aprender cualquier herramienta

Aquí está la trampa en la que caen muchos: se obsesionan con aprender a usar una herramienta específica. Memorizan dónde están los menús, qué botones presionar, cómo se ve la pantalla. Y cuando esa herramienta cambia su interfaz (que lo hace cada pocas semanas) o aparece una mejor, tienen que empezar de cero.

Es como si en lugar de aprender contabilidad hubieras aprendido a usar un software específico. El día que el SAT cambia su plataforma, el que aprendió conceptos se adapta en una tarde. El que solo aprendió a darle clic a los botones correctos entra en crisis.

Con la IA pasa exactamente lo mismo. Si entiendes que un LLM es una máquina de predicción que necesita contexto para darte buenas respuestas, ese conocimiento te sirve hoy con ChatGPT, mañana con Claude, pasado con el que sea. El concepto no caduca. La interfaz sí.

## En la práctica

Piensa en Laura, contadora de un despacho mediano en Guadalajara. Laura necesita redactar una respuesta a un requerimiento del SAT por diferencias en la declaración anual de ISR de un cliente persona moral.

Si Laura cree que la IA "sabe" lo que necesita, abre el chat y escribe algo como: "_Hazme una respuesta para el SAT_". El modelo predice las palabras más probables que siguen a esa instrucción tan vaga, y le genera una respuesta genérica, probablemente correcta en forma pero inútil en fondo. Sin el RFC, sin el ejercicio fiscal, sin el tipo de diferencia, sin el fundamento legal específico. Laura se frustra y concluye que "la IA no sirve para cosas fiscales".

Pero si Laura entiende que el modelo es una máquina de predicción, cambia su enfoque. Le da contexto: el tipo de requerimiento, el artículo del CFF que lo fundamenta, la situación específica del cliente, el resultado que espera. Con ese contexto, el modelo puede predecir palabras que se alinean con lo que Laura realmente necesita. La respuesta no será perfecta. Laura todavía tiene que revisarla, porque ella es la que firma y la que responde ante el SAT; pero será un borrador útil que le ahorra una hora de redacción.

La diferencia no fue la herramienta. Fue entender cómo funciona.

## Mito vs. Realidad

**Mito:** La IA entiende lo que le pides y piensa su respuesta como lo haría un colega contador.

**Realidad:** La IA calcula la secuencia de palabras más probable dada tu instrucción. No entiende, no razona en el sentido humano, y no tiene experiencia profesional. Por eso la calidad de lo que le das determina la calidad de lo que recibes.

**Mito:** Si la IA me da una respuesta incorrecta, es porque la tecnología todavía no está lista.

**Realidad:** En la mayoría de los casos, una respuesta mediocre es resultado de una instrucción mediocre. Como veremos a lo largo de este libro, aprender a dar instrucciones precisas (lo que se conoce como prompting, tema que profundizamos a partir del Capítulo 8) marca toda la diferencia.

---

### Lo que te llevas

- **La IA que usas hoy no piensa ni entiende**: predice la siguiente palabra más probable con base en patrones aprendidos. Eso la hace poderosa, pero también predecible si sabes cómo funciona.
- **Entender el concepto de cómo funciona un LLM** te da una ventaja que no caduca, a diferencia de aprender a usar una herramienta específica que cambia su interfaz cada mes.
- **La calidad de lo que recibes de la IA** depende directamente de la calidad del contexto que le das. Si le das instrucciones vagas, obtienes respuestas vagas. Esto no es un defecto de la tecnología, es una característica que puedes aprender a usar a tu favor.

### Pruébalo tú mismo

1. Abre cualquier modelo de lenguaje (ChatGPT, Claude, Gemini, el que tengas a la mano) y escríbele algo vago relacionado con tu trabajo. Por ejemplo: "Explícame el ISR". Lee la respuesta y nota qué tan genérica es.
2. Ahora escríbele lo mismo pero con contexto: "Explícame cómo se calcula el ISR mensual de un trabajador en México que gana $25,000 pesos brutos, usando las tablas del Anexo 8 de la Resolución Miscelánea Fiscal vigente. Dame el procedimiento paso a paso." Compara ambas respuestas.
3. Reflexiona: la diferencia entre las dos respuestas no fue que el modelo "se esforzó más" la segunda vez. Fue que le diste mejor contexto para predecir las palabras correctas.

### Si quieres ir más lejos

Este concepto de darle el contexto correcto al modelo es exactamente lo que convierte una instrucción mediocre en una que te ahorra horas de trabajo. En el [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd), cada uno de los 25 prompts está diseñado con el contexto fiscal mexicano ya incorporado, para que no tengas que construirlo desde cero cada vez.
