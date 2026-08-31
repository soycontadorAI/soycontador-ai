---
title: "Capítulo 10: Cuando la IA no sabe, enséñale tú"
pubDate: 2026-03-13
description: "RAG (Retrieval Augmented Generation) y embeddings en términos simples. Cómo darle a la IA tu propio conocimiento."
chapter: 10
bookSlug: "ia-para-contadores"
image: "/ebook/ia-para-contadores/cap-10.webp"
isFree: false
---

# Capítulo 10: Cuando la IA no sabe, enséñale tú

<!--
Fuente: Newsletter #3
Concepto principal: RAG (Retrieval Augmented Generation)
Términos para glosario: RAG, Retrieval Augmented Generation, Base de conocimiento, Embeddings
-->

Hace poco un colega me contó una historia que me pareció perfecta para explicar esto. Tenía un caso complicado: un cliente persona moral que quería deducir gastos de un vehículo que usaba tanto para la empresa como para uso personal. Mi colega sabía que había reglas específicas en la LISR, pero no se acordaba de los detalles exactos. Límites de deducción, porcentajes, requisitos de comprobación.

Hizo lo que muchos hacemos: le preguntó a la IA. "¿Cuáles son los requisitos para deducir un automóvil de uso mixto en una persona moral?" Y la respuesta que obtuvo sonaba perfecta. Artículos citados, porcentajes, requisitos de documentación. Todo muy profesional, muy bien estructurado. Solo que un par de datos estaban mal. No inventados de la nada, pero sí mezclados con disposiciones de otros países o versiones anteriores de la ley.

El modelo no estaba mintiendo a propósito. Estaba haciendo lo que sabe hacer: generar texto probable basado en todo lo que aprendió durante su entrenamiento. Pero "todo lo que aprendió" es un universo enorme de información donde la legislación mexicana es solo una gota. Y esa gota se mezcla con legislación de España, Argentina, Colombia y con versiones de la LISR que ya fueron reformadas.

La pregunta entonces no es si la IA sabe de contabilidad o leyes fiscales de México. La pregunta es: ¿cómo haces para que responda solo con la información que tú necesitas?

## Limitarle las fuentes, no la capacidad

Voy a retomar una analogía que usé en capítulos anteriores. Imagínate que contratas a un socio con quince años de experiencia en fiscalización. Sabe de todo: ISR, IVA, CFF, comercio exterior, precios de transferencia, seguridad social. Un monstruo en su área.

Pero para un caso específico le dices: "Oye, para esta consulta quiero que te bases únicamente en estos tres artículos del Código Fiscal de la Federación. Solo estos tres. No quiero tu opinión general, no quiero que traigas cosas de otras leyes. Solo lo que dicen estos artículos."

No le estás quitando conocimiento. Le estás limitando las fuentes para este caso en particular. Y eso hace que su respuesta sea mucho más precisa, verificable y útil.

Eso, en esencia, es lo que hace RAG.

> **RAG (Retrieval Augmented Generation / Generación Aumentada por Recuperación):** Es una técnica que limita las respuestas de la IA a documentos específicos que tú le proporcionas, en lugar de depender únicamente de su conocimiento general de entrenamiento. Le das la fuente, y el modelo responde solo con base en ella.

Es importante que entiendas la diferencia entre RAG y lo que vimos en capítulos anteriores. Los parámetros del modelo (su tamaño, su capacidad, lo que aprendió durante el entrenamiento) son como la formación académica de ese socio experto. Vienen de fábrica. Tú no los puedes cambiar. No puedes hacer que un modelo sepa más de lo que sabe.

RAG es otra cosa. RAG es decirle: "Independientemente de todo lo que sabes, para esta conversación quiero que solo uses estos documentos." Es una restricción de fuentes, no de capacidad.

## Cómo funciona por debajo (sin que te duela la cabeza)

Aquí viene la parte que a muchos les da miedo, pero que en realidad es más sencilla de lo que parece.

Cuando subes un documento a una herramienta que usa RAG, el sistema no se lo "lee" de corrido como lo harías tú. Lo que hace es dividir el documento en fragmentos (párrafos, secciones, bloques de texto) y convierte cada fragmento en algo que se llama embedding.

> **Embedding:** Es una representación matemática de un fragmento de texto. Piensa en ello como coordenadas en un mapa: cada fragmento de texto tiene una ubicación, y los fragmentos que hablan de temas similares quedan cerca unos de otros en ese mapa.

No necesitas entender las matemáticas. Lo que necesitas saber es esto: cuando tú le haces una pregunta al modelo, el sistema convierte tu pregunta en las mismas coordenadas y busca los fragmentos del documento que están "más cerca" de tu pregunta en ese mapa. Luego le pasa esos fragmentos al modelo y le dice: "Responde basándote en esto."

El modelo no lee todo el documento de principio a fin cada vez que preguntas. Busca los pedazos más relevantes y trabaja con ellos. Es como tener un índice inteligente que sabe exactamente en qué página de la ley está la respuesta a tu duda.

Esto es una ventaja enorme, pero también tiene implicaciones que necesitas entender para usarlo bien.

## Herramientas que puedes usar hoy

La buena noticia es que en 2026 no necesitas ser programador para usar RAG. Existen plataformas diseñadas específicamente para "anclar" el conocimiento de la IA a tus documentos de forma profesional:

- **NotebookLM** (El investigador con "fuentes"): Es la herramienta estrella de Google para este propósito. A diferencia de un chat convencional, en NotebookLM tú creas "libretas" donde subes leyes o estados de cuenta, y el modelo solo responde basándose en eso. Lo más valioso para un contador es que te da citas a pie de página: si te dice un porcentaje de deducción, puedes hacer clic y ver exactamente el párrafo del PDF de donde lo sacó.
- **El contexto gigante** (la vía bruta): con los modelos de punta que ya manejan un millón de tokens o más, a veces ya no necesitas un RAG tradicional. Puedes simplemente "arrojarle" la Ley del ISR y su Reglamento completos en el mismo chat. La IA mantiene todo eso en su memoria de corto plazo, lo que elimina los errores de recuperación que a veces tiene el RAG. Sale más caro por consulta, pero para un análisis puntual vale la pena.
- **Claude Projects**: ideal para el despacho. Te permite crear un espacio de trabajo donde subes tus manuales de políticas contables o contratos tipo. Así, cualquier consulta que hagas en ese proyecto ya viene con el "filtro" de tu propia metodología de trabajo.

Esas son algunas de las herramientas que puedes usar hoy. Pero recuerda, lo importante no es la herramienta específica que uses. Lo importante es que entiendas que estás limitando la fuente de información del modelo. Le estás diciendo: "Para esto, solo usa lo que te di."

## El escalón siguiente: conectar la IA a tus datos, no subírselos

Todo lo anterior comparte una limitación: tú tienes que subir el documento. Sirve para leyes y manuales, que casi no cambian. No sirve para lo que se mueve todos los días, que es justamente donde vive el trabajo de un despacho: los CFDI del mes, el catálogo de clientes, los saldos.

Para eso existe el **MCP**, que en español se lee como "protocolo de contexto de modelo". Es un estándar que le permite a la IA consultar un sistema por su cuenta, en el momento de responder, en lugar de leer un archivo que le pegaste. Le preguntas "¿cuánto IVA acreditable tengo en agosto de este cliente?" y el modelo va, consulta la fuente y te contesta con datos de hoy, no con lo que estaba en el PDF que subiste hace tres semanas.

> **MCP (Model Context Protocol):** Un estándar abierto para conectar modelos de IA con sistemas externos: bases de datos, archivos, servicios. En lugar de pegarle información al chat, le das una vía por donde ir a buscarla cuando la necesite.

Es la diferencia entre darle a un pasante una carpeta con copias y darle acceso de consulta al sistema. Y es también donde hay que poner atención al secreto profesional: una conexión así no vuelve mágicamente privado el asunto, lo que hace es cambiar un canal descontrolado (copiar y pegar datos de clientes en un chat público) por uno acotado, donde tú decides a qué se conecta, qué puede consultar y qué no. De la privacidad hablamos a fondo en el Capítulo 12.

## El ejemplo que lo explica todo

Vamos a hacerlo concreto. Imagina que subes el texto completo de la Ley del ISR como PDF a una herramienta con capacidad de RAG. Luego le preguntas:

"Según este documento, ¿cuáles son los requisitos para deducir gastos de viaje?"

¿Qué pasa por debajo? El sistema convierte tu pregunta en coordenadas, busca en el documento los fragmentos que hablan de deducciones de gastos de viaje, encuentra el artículo 28 fracción V y las disposiciones relacionadas, y le pasa esos fragmentos al modelo. El modelo genera una respuesta basada únicamente en esos fragmentos.

El resultado es una respuesta que cita directamente lo que dice la ley que tú subiste. No lo que el modelo "cree recordar" de su entrenamiento. No una mezcla con legislación de otros países. Lo que dice tu documento.

¿Elimina esto los errores por completo? No. Como veremos en el Capítulo 12, los modelos de IA pueden generar información incorrecta incluso cuando tienen la fuente correcta enfrente. Pero la probabilidad de error baja drásticamente. Y lo más importante: tú puedes verificar la respuesta contra el mismo documento que subiste. La fuente está ahí, no perdida en los miles de millones de textos con los que se entrenó el modelo.

## Cuando RAG no funciona tan bien

Sería irresponsable de mi parte decirte que RAG resuelve todo. No lo hace. Hay situaciones donde funciona peor de lo que esperarías, y conocerlas te va a ahorrar frustración.

**Preguntas ambiguas.** Si tu pregunta no es específica, el sistema no sabe qué fragmentos del documento recuperar. "¿Qué dice la ley sobre impuestos?" es tan vaga que el sistema podría traerte fragmentos de cualquier parte del documento, y la respuesta sería un revoltijo.

**Documentos que se contradicen.** Si subes la LISR y también una resolución miscelánea que modifica un artículo de la LISR, el modelo puede no saber cuál tiene prioridad. No entiende jerarquía normativa de la forma en que tú la entiendes. Tú sabes que la miscelánea fiscal vigente puede matizar lo que dice la ley. El modelo ve dos textos que dicen cosas diferentes y no siempre sabe cuál pesa más.

**Información enterrada en documentos muy largos.** ¿Recuerdas el concepto de "lost in the middle" del Capítulo 5? Aquí aplica algo similar. Si el dato que necesitas está en una cláusula pequeña dentro de un documento de 200 páginas, el sistema de recuperación podría no encontrarlo porque no es lo suficientemente "prominente" en el mapa de coordenadas. La solución es la misma que daría un buen auxiliar contable: sé específico con tu pregunta.

**El principio de menos es más.** Y aquí vale la pena rescatar algo que un colega, Christopher López, señaló en una conversación sobre este tema: mientras menos fuentes le des al RAG, más exacta es la respuesta. Si subes diez leyes completas y preguntas algo específico, el sistema tiene demasiado terreno donde buscar. Si subes solo los artículos relevantes, la precisión se dispara. Esto aplica para todo: contexto preciso, respuesta precisa.

## En la práctica

La contadora Mariana tiene un despacho en Puebla y está preparando la declaración anual de una persona moral que manufactura productos de plástico. Necesita verificar si ciertos gastos de capacitación son deducibles y bajo qué condiciones.

Antes de RAG, Mariana habría hecho una de dos cosas: buscar manualmente en la LISR (lo cual le tomaba veinte minutos cada vez) o preguntarle a la IA y arriesgarse a que mezclara la respuesta con información de otras jurisdicciones.

Ahora, Mariana sube el PDF de la LISR vigente a una herramienta con capacidad de RAG y pregunta: "Según este documento, ¿cuáles son los requisitos de deducibilidad para gastos de capacitación de empleados en una persona moral del régimen general?"

El modelo le responde citando directamente los artículos aplicables. Le indica los requisitos de comprobación, las limitaciones y las condiciones. Mariana usa específicamente **NotebookLM** para esta tarea. Cuando la IA le indica los requisitos de comprobación, Mariana simplemente hace clic en la cita que aparece al final de la respuesta y la herramienta la lleva directo al artículo 28 de la LISR en el PDF original. Ya no solo confía en la IA; la audita en tiempo real.

¿Podría el modelo equivocarse aun así? Sí. Por eso Mariana debe verificar siempre. Pero el punto de partida es mil veces mejor que una respuesta genérica construida desde la memoria general del modelo.

Un detalle práctico que Mariana descubrió con el tiempo: cuando sube todo el texto de la LISR (más de 300 páginas), las respuestas son buenas pero no perfectas. Cuando sube solo el Título II de la ley (personas morales), la precisión mejora notablemente. Menos fuente, más foco. Menos ruido, más señal.

## Mito vs. Realidad

- **Mito:** "Si uso RAG, la IA nunca se va a equivocar porque tiene el documento enfrente."
- **Realidad:** RAG reduce drásticamente las respuestas inventadas, pero no las elimina por completo. El modelo sigue interpretando el texto, y esa interpretación puede tener errores. Siempre verifica contra la fuente original. RAG te da un mejor punto de partida, no un sustituto de tu criterio profesional.

- **Mito:** "RAG es lo mismo que entrenar un modelo con mis datos."
- **Realidad:** Entrenar un modelo significa modificar sus parámetros internos, lo que viene de fábrica. Es caro, complejo y fuera del alcance de un despacho contable. RAG no modifica nada del modelo. Solo le da documentos de referencia para una conversación específica. Es la diferencia entre mandar a alguien a la universidad (entrenamiento) y darle un libro para que consulte (RAG).

---

### Lo que te llevas

- RAG es una técnica que limita las respuestas de la IA a documentos específicos que tú le proporcionas. No modifica al modelo; le da fuentes concretas para trabajar. Es como decirle a un experto: "Para este caso, solo usa estas referencias."
- No necesitas ser programador para usar RAG. Hay herramientas disponibles hoy que te permiten subir PDFs, leyes, reglamentos o cualquier documento y hacer preguntas sobre ellos. Lo importante es el concepto, no la plataforma.
- Menos es más. Mientras más acotadas sean tus fuentes y más específicas tus preguntas, mejores serán las respuestas. Subir toda la legislación fiscal mexicana es menos efectivo que subir solo los artículos que aplican a tu caso.

### Pruébalo tú mismo

1. Entra a notebooklm.google.com (es gratuito) y crea tu primera libreta. Sube un documento que conozcas bien, como un criterio normativo del SAT o un contrato de un cliente.
2. Hazle una pregunta específica sobre algo que tú ya sabes que dice el documento. Por ejemplo: "Según este documento, ¿cuáles son los plazos para presentar el aviso de compensación?" Compara la respuesta con lo que tú sabes que dice el texto.
3. Ahora hazle la misma pregunta en un chat nuevo, sin subir el documento. Nota la diferencia: la primera respuesta cita tu fuente directamente; la segunda es una respuesta general que podría o no ser precisa.

### Si quieres ir más lejos

RAG es particularmente poderoso cuando se combina con los system prompts que vimos en el Capítulo 8. Si además de darle documentos de referencia le das instrucciones claras de cómo responder, tienes un asistente que conoce tu contexto y trabaja con tus fuentes. El [Pack de Prompts para Contadores](https://nas.io/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.io%2Fes-mx%2Fportal%2Fdigital-files%2Fmanage%3Fid%3D69a160e22f4e636bd0d1becd&sourceInfoType=folder&sourceInfoOrigin=69a160e22f4e636bd0d1becd) está diseñado para funcionar en ese esquema: prompts que ya incluyen la estructura de contexto para las tareas más comunes del despacho.
