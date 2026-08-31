---
title: "Capítulo 7: Temperatura y creatividad"
pubDate: 2026-03-13
description: "Temperatura, Top-p y sampling explicados con analogías contables. Por qué la misma pregunta te da respuestas distintas, y por qué el parámetro existe en unos modelos y desapareció en otros."
chapter: 7
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-07.webp"
isFree: false
---

# Capítulo 7: Temperatura, creatividad y por qué a veces la IA te da respuestas diferentes

<!--
Fuente: NUEVO
Concepto principal: Temperature / Sampling
Términos para glosario: Temperatura, Sampling, Determinismo, Top-p
-->

La otra vez estaba preparando una respuesta a un requerimiento del SAT para un cliente. Le pedí a la IA que me ayudara a redactar el escrito. Lo revisé, le hice ajustes, y quedó bien. Formal, fundamentado, con los artículos del CFF correctos. Al día siguiente, otro cliente me llegó con un requerimiento casi idéntico. Pensé "perfecto, ya tengo la estructura". Abrí un chat nuevo, le di las mismas instrucciones al modelo, y la respuesta salió... diferente.

No mal. Diferente. Otro orden de argumentos, otra forma de citar los fundamentos legales, otro tono en el primer párrafo. El contenido era correcto, pero la forma había cambiado. Y me pregunté: si le estoy diciendo exactamente lo mismo, ¿por qué me da algo distinto?

Si te ha pasado algo parecido, no es un error. No es que la IA esté fallando ni que se le haya olvidado lo que sabe. Es que detrás de cada respuesta hay un mecanismo que introduce variabilidad a propósito. Se llama temperatura. Y entender cómo funciona te va a quitar mucha frustración.

## El termómetro invisible de la IA

Piensa en esto. Le haces la misma pregunta fiscal a cinco colegas diferentes.

Si los cinco estudiaron en la misma universidad, con el mismo maestro, usando el mismo libro, sus respuestas van a ser casi idénticas. Tal vez uno pone primero el fundamento y otro la conclusión, pero la sustancia es la misma. Eso es temperatura baja. El modelo se limita a elegir las palabras más probables, las más seguras, las que estadísticamente tienen más sentido en ese contexto. El resultado es predecible, consistente, casi mecánico.

Ahora imagina que les preguntas a cinco colegas de firmas diferentes, con especialidades diferentes, formados en ciudades diferentes. Uno te responde desde la perspectiva fiscal, otro desde la financiera, otro te menciona una tesis aislada que encontró hace tres años. Las respuestas varían más. Algunas te sorprenden. Alguna te parece rara. Pero una de ellas te abre una perspectiva que no habías considerado. Eso es temperatura alta. El modelo se permite considerar palabras menos probables, opciones menos obvias, caminos que no son los más seguros pero que pueden ser más interesantes.

> **Temperatura:** Es el parámetro que controla qué tan "creativa" o "predecible" es la respuesta de un modelo de IA. A temperatura baja, el modelo siempre elige la palabra más probable. A temperatura alta, se permite explorar opciones menos obvias. No cambia lo que el modelo sabe, solo cómo elige expresarlo.

La escala cambia según el modelo (en ChatGPT y en Gemini llega hasta 2, aunque el rango útil vive en la primera mitad), así que los números importan menos que las tres zonas. Tomando la escala de 0 a 1 para explicarlas:

**Temperatura 0 a 0.3** — piensa en un auditor rígido. De esos que siguen el manual de procedimientos al pie de la letra. No improvisa. No se sale del guion. Si le pides la misma revisión diez veces, te entrega el mismo papel de trabajo diez veces. Cero sorpresas. Cero creatividad. Todo bajo la misma línea. Para muchas tareas contables, eso es exactamente lo que quieres.

**Temperatura 0.4 a 0.7** — un punto medio. Como un contador experimentado que conoce la norma pero tiene criterio para adaptarla al caso específico. Sigue siendo riguroso, pero tiene cierta flexibilidad. Si le pides la misma opinión dos veces, la esencia será la misma pero la forma puede variar ligeramente.

**Temperatura 0.8 a 1.0** — el colega creativo. El que en una junta te dice "oye, ¿y si lo vemos desde otro ángulo?". A veces sus ideas son brillantes. A veces son impracticables. Pero te saca de la caja y te obliga a pensar diferente. También es el que más riesgo tiene de decir algo que no aplica.

## Cómo funciona por dentro (sin fórmulas, lo prometo)

Cuando un modelo de IA genera texto, no escribe toda la respuesta de golpe. La construye palabra por palabra. En cada paso, el modelo tiene una lista interna de posibles palabras siguientes, cada una con una probabilidad. Como vimos en el Capítulo 1, el modelo aprendió patrones estadísticos durante su entrenamiento. Esos patrones le dicen que después de "el contribuyente debe presentar su declaración" la siguiente palabra más probable es "anual" o "mensual", no "mariposa".

La temperatura decide cómo el modelo elige de esa lista.

Con temperatura 0, siempre elige la palabra con mayor probabilidad. Punto. No hay aleatoriedad, no hay variación. Si la palabra más probable es "anual", siempre va a decir "anual". Por eso, con temperatura 0, puedes hacer la misma pregunta cien veces y obtienes la misma respuesta cien veces. A esto se le llama comportamiento determinista.

Conforme subes la temperatura, el modelo empieza a considerar opciones menos probables. Con temperatura 0.5, tal vez "anual" sigue ganando la mayoría de las veces, pero de vez en cuando elige "mensual" o "complementaria". Con temperatura 1.0, la distribución se aplana tanto que palabras con probabilidad media empiezan a tener chances reales de ser elegidas.

> **Determinismo:** Un sistema determinista siempre produce el mismo resultado ante la misma entrada. Con temperatura 0, la IA es determinista: misma pregunta, misma respuesta. Conforme sube la temperatura, se introduce aleatoriedad y las respuestas empiezan a variar.

Hay otro parámetro que trabaja junto con la temperatura y vale la pena conocer: el Top-p, también llamado muestreo nuclear. En lugar de controlar qué tan "aplanada" está la distribución de probabilidades, Top-p limita cuántas opciones considera el modelo. Si le pones un Top-p de 0.9, el modelo solo considera las palabras que juntas sumen el 90% de probabilidad, descartando el 10% menos probable. Es otra forma de decirle "sé creativo, pero no tanto".

> **Top-p (muestreo nuclear):** Un parámetro que limita el grupo de palabras que el modelo puede elegir. Un Top-p de 0.9 significa que solo considera opciones dentro del 90% superior de probabilidad. Funciona como complemento de la temperatura para controlar la variabilidad de las respuestas.

No necesitas memorizar las diferencias entre temperatura y Top-p. Lo importante es que entiendas el concepto general: hay perillas que controlan cuánta variación hay en las respuestas, y la mayoría de los usuarios no saben que existen.

## El parámetro que desapareció

Hasta aquí todo esto suena a ley de la física. No lo es. La temperatura es una decisión de diseño de cada fabricante, y los fabricantes no están de acuerdo entre ellos.

El caso más claro es Anthropic. Sus modelos de frontera, los Claude que van a la cabeza en cada momento, dejaron de aceptar el parámetro: si le mandas una temperatura, no obtienes una respuesta más rígida, obtienes un error. El argumento es que el modelo ajusta ese balance mejor que tú, tarea por tarea, y que dejar la perilla abierta producía más resultados malos que buenos. Lo que sí se controla ahí es cuánto esfuerzo dedica el modelo a pensar antes de contestar, que es de lo que hablamos en el Capítulo 6. Mientras tanto, ChatGPT y Gemini siguen exponiendo temperatura y Top-p como siempre.

Esa divergencia vale más que cualquier tabla de valores, porque es la lección de fondo: **los conceptos de la IA generativa son universales, los controles no.** Que el modelo predice, que hay variabilidad, que la puedes empujar desde el prompt: eso aplica a todos y no va a caducar. Las perillas concretas cambian de un proveedor a otro y de una versión a la siguiente. Por eso, cada vez que leas una receta con números exactos, la primera pregunta es "¿para qué modelo, y de cuándo?".

**Verificado en agosto de 2026.** Este es justo el tipo de dato que caduca: antes de darlo por bueno, revisa la documentación del modelo que estés usando.

## Por qué importa para tu trabajo

Aquí es donde esto deja de ser teoría y se vuelve práctico.

La mayoría de las herramientas de IA que usas traen una temperatura predeterminada. Generalmente está entre 0.7 y 1.0, que es un rango "conversacional". Eso significa que cada vez que abres un chat nuevo y haces la misma pregunta, la respuesta puede salir diferente. No porque el modelo sea inconsistente o poco confiable. Sino porque está diseñado para no repetirse como loro.

Para muchas tareas de la vida diaria, eso está bien. Si le pides ayuda para redactar un correo, no quieres que todos tus correos suenen idénticos. Pero en el contexto contable, hay tareas donde la variabilidad no es una virtud. Es un problema.

Si le pides a la IA que te ayude a calcular la base gravable de un contribuyente, no quieres creatividad. Quieres precisión. Quieres que aplique la ley exactamente como está escrita. Quieres la misma respuesta hoy, mañana y en seis meses.

Y al revés: si le pides ideas para reestructurar la estrategia fiscal de un cliente dentro del marco legal, quieres que explore opciones. Que te presente ángulos que no habías considerado. Ahí la temperatura alta es tu aliada.

La clave es saber cuándo necesitas cada modo.

## En la práctica

Diana es contadora en un despacho mediano en la Ciudad de México. Tiene dos tareas pendientes esta semana.

La primera: redactar la respuesta a un requerimiento del SAT. A su cliente le están pidiendo documentación soporte de una deducción que el SAT consideró improcedente. Esto necesita precisión quirúrgica. Cada palabra importa. Los fundamentos legales deben ser exactos. El tono debe ser formal y técnico. Diana necesita que la IA le dé una respuesta consistente, y si la tiene que regenerar porque quiere ajustar un párrafo, no quiere que el modelo le cambie toda la estructura.

Para esto, Diana necesita temperatura baja. De hecho, Diana ya no usa el chat normal para este tipo de tareas; abre Google AI Studio, selecciona el modelo, baja la temperatura a 0.1 y se asegura de que la fundamentación legal sea sólida y constante en cada intento. Si no tuviera acceso a ese control, al menos sabría que si la respuesta le sale diferente cada vez, no es que algo esté mal; es simplemente la temperatura predefinida del chat haciendo su trabajo.

La segunda tarea: una de sus clientas, una persona moral que fabrica muebles, quiere explorar opciones para optimizar su carga fiscal del siguiente ejercicio. Quiere saber qué incentivos fiscales puede aprovechar, si le conviene algún régimen específico, qué deducciones no está utilizando. Aquí Diana sí quiere que la IA sea creativa. Quiere que le presente opciones que ella después va a filtrar con su criterio profesional.

Para esto, temperatura más alta. No le molesta que la respuesta varíe entre intentos. De hecho, le conviene. Cada variación puede traer una idea diferente que vale la pena explorar.

Lo que Diana hace en ambos casos, como vimos en el Capítulo 6, es pedirle al modelo que razone paso a paso. Pero ahora sabe que la cadena de pensamiento trabaja junto con la temperatura. Un modelo con temperatura baja y razonamiento paso a paso te da análisis riguroso y reproducible. Un modelo con temperatura alta y razonamiento te da exploración creativa pero fundamentada.

## Cuando no tienes el control

Seamos honestos: la mayoría de las veces no vas a poder ajustar la temperatura directamente. Las interfaces más populares no te exponen ese parámetro, o lo esconden en configuración avanzada que poca gente toca.

Pero saber que existe te da tres ventajas enormes.

Primero, dejas de frustrarte cuando la IA te da respuestas diferentes a la misma pregunta. Ya sabes por qué pasa. No es un bug, es un feature.

Segundo, puedes compensar con el prompt. Si necesitas respuestas consistentes y no puedes bajar la temperatura, le dices al modelo algo como: "Dame una respuesta formal y técnica. No improvises. Cíñete estrictamente a lo que establece la ley." Esas instrucciones empujan al modelo hacia palabras más predecibles, imitando el efecto de una temperatura baja.

Si necesitas creatividad, le dices: "Dame cinco enfoques diferentes para resolver este caso. No te limites al más obvio. Incluye opciones poco convencionales." Eso empuja al modelo a explorar opciones menos probables, como si subieras la temperatura desde el prompt.

Tercero, si algún día usas la IA a través de una API, como vimos en el Capítulo 4, ya vas a saber qué buscar en la documentación. Si ese modelo expone temperatura, sabes para qué sirve cada rango. Y si no la expone, sabes que no es una carencia de la herramienta: es una decisión de diseño del fabricante.

### La excepción: El "laboratorio" de Google

Aunque es cierto que en el chat convencional de Gemini, Claude o ChatGPT no ves estas opciones, existe una puerta trasera que Google ha dejado abierta para todo el público: Google AI Studio (aistudio.google.com).

No te dejes intimidar por el nombre. Aunque es una herramienta diseñada para desarrolladores, su interfaz es lo suficientemente limpia para que cualquier contador la use. Al entrar, verás un panel a la derecha con un control deslizante llamado "**Temperature**".

Ahí es donde ocurre la magia:

- **Si vas a auditar un estado de cuenta**: Desliza la barra hacia el 0. Notarás que Gemini se vuelve más "seco", directo y extremadamente consistente. Es el modo "Auditor Rígido" activado al máximo.
- **Si vas a redactar un artículo para tu blog o buscar estrategias**: Desliza la barra hacia el 1 o más. Verás cómo el modelo empieza a usar un vocabulario más rico y a proponer ángulos que en el chat normal no aparecerían.

Es gratuito, usas tu misma cuenta de Google y te permite elegir entre las distintas versiones de Gemini (la potente y la ligera, que ahí aparecen como Pro y Flash). Para un profesional que busca resultados repetibles en materia fiscal, AI Studio es el verdadero escritorio de trabajo, mientras que el chat convencional es solo para consultas rápidas.

## Mito vs. Realidad

- **Mito:** "Si la IA me da respuestas diferentes cada vez, es porque no es confiable y no sabe la respuesta."
- **Realidad:** La variación entre respuestas se debe a la temperatura, un parámetro de diseño que introduce aleatoriedad controlada. El modelo puede saber perfectamente la respuesta y aun así expresarla de formas diferentes cada vez. Es como pedirle a cinco contadores buenos la misma opinión: todos aciertan, pero cada uno la redacta diferente.

- **Mito:** "Siempre conviene poner la temperatura al mínimo para que la IA sea más precisa."
- **Realidad:** Temperatura baja da consistencia, no necesariamente precisión. Un modelo puede ser consistentemente incorrecto con temperatura 0. Lo que la temperatura controla es la variabilidad de la forma, no la calidad del conocimiento. Para tareas creativas o de exploración de ideas, una temperatura más alta te da mejores resultados.

- **Mito**: "Configurar la temperatura es solo para programadores o expertos en sistemas."
- **Realidad**: Herramientas como Google AI Studio han democratizado este control. Cualquier contador puede aprender a usar el deslizador de temperatura en menos de dos minutos para obtener resultados profesionales.

- **Mito**: "La temperatura funciona igual en todos los modelos; basta con aprenderse los números una vez."
- **Realidad**: Cada fabricante decide qué perillas expone. Gemini y ChatGPT te dejan mover la temperatura; los Claude de frontera dejaron de aceptar el parámetro y ajustan ese balance por dentro. Lo que no cambia entre modelos es el concepto: si dos respuestas a la misma pregunta salen distintas, es variabilidad de diseño, no una falla.

---

### Lo que te llevas

- La temperatura es el parámetro que controla cuánta variación hay en las respuestas de la IA. Baja significa predecible y consistente; alta significa variada y creativa. Ninguna es mejor que la otra: depende de la tarea.
- Para trabajo fiscal preciso (respuestas al SAT, cálculos de ISR, análisis de artículos) necesitas el equivalente a temperatura baja. Para exploración de ideas, estrategia y redacción, te conviene más variación. Si no puedes ajustar el parámetro directamente, puedes compensar con la forma en que escribes tu prompt.
- **El concepto es universal; la perilla no.** Unos modelos te dejan mover la temperatura y otros la retiraron a propósito. Antes de seguir cualquier receta con números exactos, pregunta para qué modelo es y de cuándo.
- Cuando la IA te da respuestas diferentes a la misma pregunta, no está fallando. Está funcionando exactamente como fue diseñada. Ahora sabes por qué.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y escríbele exactamente esto: "Redacta un párrafo de 3 oraciones explicando por qué una persona moral debe presentar su declaración anual de ISR." Copia la respuesta.
2. Abre un chat nuevo con el mismo modelo y pega exactamente la misma instrucción. Compara las dos respuestas. Si son diferentes (y probablemente lo serán), ya estás viendo el efecto de la temperatura.
3. Ahora prueba a agregar esta instrucción al inicio: "Responde de forma estrictamente técnica y formal. No parafrasees, usa los términos exactos de la ley." Nota cómo la respuesta se vuelve más predecible y "rígida", como si hubieras bajado la temperatura desde el prompt.
4. Entra a aistudio.google.com, pega la misma instrucción del punto 1 y mueve la barra de temperatura de un extremo al otro. Observa cómo, con la misma instrucción, el 'humor' y la inventiva de la IA cambian drásticamente ante tus ojos.

### Si quieres ir más lejos

En el [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd), cada prompt ya tiene recomendaciones de cuánta rigidez o flexibilidad pedirle al modelo según el tipo de tarea. Los prompts fiscales están diseñados para producir respuestas consistentes y verificables, mientras que los de estrategia y comunicación le dan espacio al modelo para explorar opciones. Así no tienes que recordar esta configuración cada vez que abres un chat.
