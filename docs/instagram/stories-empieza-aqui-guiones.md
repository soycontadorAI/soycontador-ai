# "Empieza aquí": guiones para grabar las stories del destacado

Stories para fijar en el destacado "Empieza aquí" (el primero del perfil).
Se ven en orden y cuentan una sola cosa: **una consulta**. Un colega llega con
un problema, yo le contesto, y cada respuesta deja abierta la pregunta con la
que arranca la story siguiente. La consulta son siete stories; después vienen
tres salidas, una por forma de aprender (sola con la guía, viendo el live,
acompañada en el taller), y la última es el taller que se llama igual que el
destacado.

Estas stories no son episodios del jueves: no van en
`docs/jueves/episodios.csv`.

**El teleprompter ya existe** (2026-09-25):
`social-studio/decks/2026-09-25-empieza-aqui-stories.json`, que se abre con
`pnpm previo` en `/2026-09-25-empieza-aqui-stories`. Ahí vive lo que se dice,
y se corrige con su botón Editar al ensayar; aquí vive lo demás (el porqué, el
"Arriba" y el "Sigue" de la edición, los stickers). Si una corrección cambia
lo que se dice, se toca en los dos.

## El formato: una consulta grabada, tipo podcast

Decisión de Israel (2026-09-25), a partir del análisis de Julio Iero: los
videos tipo podcast funcionan bien. Se graba como si fuera el registro de una
consulta.

- **De lado y en vertical, con el micrófono en cuadro.** Miro a la persona,
  no a la cámara.
- **El guion va donde estaría la otra persona** (teleprompter o laptop a la
  altura de los ojos, del lado hacia el que miro). Leer se ve como platicar,
  que es justo lo que resuelve este formato.
- **Una sola toma, en orden y con la misma ropa.** La consulta completa dura
  unos siete minutos y se corta en once. Los puentes salen naturales porque de
  verdad van seguidos.
- **La otra persona no se oye.** Su pregunta abre la story sola, a pantalla
  completa, unos 2 segundos (una lámina de papel con la pregunta y el plumón
  en una frase), y después entro yo contestando. Sin folio ni contador: quien
  la ve no tiene que saber cuántas son (Israel, 2026-09-26). Abajo, captions
  en píldora con karaoke (`caption-pill-karaoke` con la marca) y el plumón
  #3dd68c en los remates. Todo fuera de las zonas muertas de IG (unos 250 px
  arriba y abajo), y en las salidas (8 a 11) se deja libre la banda donde va
  el sticker.
- **La ficción es el montaje, no el contenido.** Las preguntas son reales:
  salen de la encuesta de agosto y de lo que más me preguntan. Al colega no se
  le pone nombre ni se dice "mi cliente me dijo". Si alguien pregunta, es una
  consulta armada con preguntas de colegas, y eso se puede decir sin que se
  caiga nada.

## El patrón de cada story

1. **La pregunta del colega, a pantalla completa.** Es lo primero que se lee
   y es el gancho. El "Arriba" de cada story es el texto de esa lámina.
2. **La respuesta: una idea, una acción.** Arranco como se arranca a media
   plática ("Mira", "No", "Eso casi nunca es..."), nunca con "hola" ni
   presentándome: la consulta ya empezó.
3. **El puente.** Mi último renglón deja abierta la siguiente pregunta, y la
   story siguiente abre con ella en su lámina. **Sin tarjeta de "Sigue" en la
   edición**: la serie corre sola de una a la siguiente (Israel, 2026-09-26).
   El "Sigue" de cada guion de abajo es sólo la pregunta que viene.

**La consulta (1 a 7) no lleva CTA ni sticker.** En una consulta nadie dice
"link en el perfil" a los treinta segundos, y un sticker en cada story saca a
la gente antes de que llegue a las salidas. Si una story de la consulta se
republica suelta para llenar un día, el sticker se le pone en ese momento (va
en el editor de IG, no en el video).

**Las salidas (8 a 11) llevan un sticker cada una**, y cada una es un camino
distinto. Van de lo gratis a lo de paga, que es el tono de la casa: primero
se da, y el taller se ofrece al final y sin presión.

**Ninguna salida dice fecha, precio ni el tema de un jueves.** Eso vive en la
página a la que apunta el sticker; así el video no caduca y no hay que
regrabar cuando cambia la edición del taller o el caso de la semana.

Reglas de voz: primera persona, tuteo, español de México, sin raya. Una
herramienta: Claude. Nada de "la IA" en abstracto. De 25 a 50 segundos cada
una (una story corta a los 60; si una se pasa, se parte en dos y se sube
seguida). Portadas en el canvas "Highlights con plumón"
(https://claude.ai/artifact/AeoeSNjHtmtPmhSHsLvgZP).

## La conversación, de un vistazo

| # | Arriba (pregunta del colega) | Lo que contesto | Sigue |
|---|---|---|---|
| 1 | Le pregunto a la IA y me contesta como blog. | La pregunta tiene cuatro partes | ¿Y qué contexto le doy? |
| 2 | ¿Y qué contexto le doy? | Régimen, periodo y qué ya intentaste | Le doy contexto y aun así se tarda y termina donde empezó. |
| 3 | Le doy contexto y aun así se tarda y termina donde empezó. | Dile la forma y dónde parar | ¿Y todo eso se lo escribo cada vez? |
| 4 | ¿Y todo eso se lo escribo cada vez? | Un proyecto: se escribe una vez | ¿Y cómo sé que no se lo inventa? |
| 5 | ¿Y cómo sé que no se lo inventa? | Pídele el artículo y verifica | ¿Y le puedo pasar los papeles de mis clientes? |
| 6 | ¿Y le puedo pasar los papeles de mis clientes? | Tu cuenta, lo mínimo, un proyecto por cliente | ¿Esto no es más para los jóvenes? Yo ni programo. |
| 7 | ¿Esto no es más para los jóvenes? Yo ni programo. | Daniel | Va. ¿Por dónde empiezo? |
| 8 | Va. ¿Por dónde empiezo? | Salida 1, por tu cuenta: la guía de 5 prompts | Prefiero verlo hecho primero. |
| 9 | Prefiero verlo hecho primero. | Salida 2, en vivo: Jueves de ContadorIA | Quiero hacerlo yo, con alguien al lado. |
| 10 | Quiero hacerlo yo, con alguien al lado. | Salida 3, acompañado: el taller "Empieza aquí" | ¿Y si todavía no tengo Claude? |
| 11 | ¿Y si todavía no tengo Claude? | Cómo sacar la cuenta, en pantalla | (fin) |

El arco: del síntoma que todos reconocen (1), a preguntar bien (1 a 3), a no
repetirlo (4), a poder confiar en la respuesta y en dónde pones los datos (5
y 6), a creer que esto es para uno (7), a elegir por dónde seguir (8 a 10), y
a quitar el último trámite (11).

---

## 1. Te contesta como blog porque le preguntas como a Google

**Arriba:** "Le pregunto a la IA y me contesta como blog."

**Guion (40 s):**

> Eso casi nunca es la herramienta. Es la pregunta. Déjame adivinar: le preguntas como a Google, tres palabras y enter. Y te contesta como Google: genérico, sin tu caso, sin artículo.
>
> Una pregunta completa tiene cuatro partes. Quién eres: contador, con un cliente en RESICO. El contexto: qué pasó y en qué periodo. Qué quieres: no "explícame", sino "dime si aplica y por qué". Y en qué forma: una tabla, tres renglones, lo que sea.
>
> Rol, contexto, instrucción, formato. La misma duda, otra respuesta.
>
> Y de las cuatro, la que casi nadie le da es la que más pesa: el contexto.

**Sigue:** "¿Y qué contexto le doy?"

---

## 2. Claude no sabe de tu despacho

**Arriba:** "¿Y qué contexto le doy?"

**Guion (40 s):**

> Mira. Claude te resume el Quijote sin que se lo pases, porque el Quijote aparece miles de veces en todo lo que leyó. Tu cliente no aparece nunca. No sabe que es RESICO, que cierra en marzo, ni que el contador anterior le dejó un desastre.
>
> Y todo lo que no le das, lo generaliza o lo inventa.
>
> Antes de preguntar, dale tres cosas: el régimen, el periodo y qué ya intentaste. Con eso deja de contestarle al mundo y te contesta a ti.
>
> Eso le dice de quién hablas. Lo que todavía no le dice es dónde parar.

**Sigue:** "Le doy contexto y aun así se tarda y termina donde empezó."

(El Quijote empata con el carrusel del 22 y con el live del 24. Si se cambia
el ejemplo, se cambia en los tres.)

---

## 3. Dile dónde parar

Sale de la encuesta (#54).

**Arriba:** "Le doy contexto y aun así se tarda y termina donde empezó."

**Guion (45 s):**

> No eres el único. En la encuesta me escribieron casi eso: "le haces una pregunta, se tarda mucho, y al final termina con la sugerencia inicial". Y sí pasa, pero tiene arreglo.
>
> Pasa por tres cosas: la pregunta es abierta, no le pediste una forma de entrega y nadie le dijo cuándo terminar. Entonces da vueltas.
>
> El arreglo es un renglón al final: "responde en una tabla de tres columnas, y para cuando la tengas". Le das la forma y el punto final.
>
> No es que desvaríe. Es que nadie le dijo dónde parar. Y con eso ya tienes la pregunta completa: quién eres, el caso, la forma y dónde parar.

**Sigue:** "¿Y todo eso se lo escribo cada vez?"

---

## 4. Qué es un proyecto de Claude

**Arriba:** "¿Y todo eso se lo escribo cada vez?"

**Guion (35 s):**

> No. Para eso existe un proyecto.
>
> Un proyecto es una carpeta con memoria. Le pones instrucciones una sola vez: soy contador en México, atiendo estos regímenes, contéstame en tabla. Y cada chat que abres adentro ya arranca con eso puesto.
>
> Ahí van tus instrucciones, tus formatos, cómo te gusta la entrega. Una vez configurado, cada pregunta empieza a la mitad del camino.
>
> Y hay una instrucción que yo nunca le quito: "cita el fundamento de todo lo que digas".

**Sigue:** "¿Y cómo sé que no se lo inventa?"

(Qué datos de clientes entran a un proyecto se contesta en la 6, no aquí: la
regla vieja de "nunca datos de clientes en el proyecto" chocaba con "un
proyecto por cliente", que es lo que se dijo en el live del 24.)

---

## 5. Pídele el fundamento y ve agarrando confianza

Sale de la encuesta (#26).

**Arriba:** "¿Y cómo sé que no se lo inventa?"

**Guion (50 s):**

> No le creas. Pídele el artículo.
>
> En la encuesta me lo escribieron mejor de lo que yo lo diría: que me dé los fundamentos legales, "así iré teniendo confianza en las respuestas que me está dando". Es exactamente lo correcto.
>
> Es el renglón que te decía: "cita el fundamento legal de cada afirmación, y dime cuando no lo tengas". En el proyecto, o al final de la pregunta.
>
> Con eso pasan dos cosas. Te da el artículo y tú lo verificas, como con cualquier practicante. Y le das permiso de decir "no lo tengo", en vez de rellenar.
>
> La confianza con esta herramienta se construye verificando. Si no cita, no vale.
>
> Y ya que le vas a dar trabajo de verdad, viene la que más me preguntan.

**Sigue:** "¿Y le puedo pasar los papeles de mis clientes?"

---

## 6. Datos de clientes: por qué puerta entras

Sale del jueves del 24 de septiembre y usa sus tres capas, tal cual (datos
del proveedor verificados en la documentación de Anthropic el 2026-09-16; si
esa documentación cambia, se toca aquí también).

**Arriba:** "¿Y le puedo pasar los papeles de mis clientes?"

**Guion (50 s):**

> El riesgo no es el que te imaginas, que Claude le cuente a otro de tu cliente. Es por qué puerta entraste.
>
> Tres cosas, en este orden. Una: tu cuenta. En el plan personal hay un interruptor que decide si tus chats entrenan al modelo; encendido, los guarda hasta cinco años. Apágalo. En una cuenta de trabajo, el contrato ya lo prohíbe.
>
> Dos: dale lo mínimo. Del estado de cuenta, fecha, concepto y monto. Del CFDI, el resumen, no el XML entero. Y tachar el nombre no sirve: el RFC solo ya lo identifica.
>
> Tres: un proyecto por cliente, nunca revuelto.
>
> El secreto profesional no se rompe por usar IA. Se rompe por dónde la usas.
>
> Y te veo la cara: ya son muchas cosas.

**Sigue:** "¿Esto no es más para los jóvenes? Yo ni programo."

---

## 7. No hay que saber programar

**Arriba:** "¿Esto no es más para los jóvenes? Yo ni programo."

**Guion (50 s):**

> Te cuento de Daniel. Tiene su despacho en Mexicali, él solo, y me dijo lo mismo que tú: "creía que eso era cosa de jóvenes". Y se describe así: "de los que somos analfabetos en el sentido de programación".
>
> Hoy la diferencia entre su auxiliar de bancos y el estado de cuenta, que le podía tomar horas, la encuentra en minutos. Sus boletines salen en HTML y viven en su página. Y le hizo a su nieto un juego para adivinar banderas.
>
> Él no escribió una línea de código. Lo que tenía eran años de criterio, y eso tú ya lo tienes.
>
> Él lo dice mejor que yo: "el primero es animarse. La limitación ya no está dada, es nada más las ganas de querer."

**En pantalla, chico, antes del puente:** "Su video, en el destacado «Testimonios»." (el destacado se llama Testimonios, no Colegas; Israel, 2026-09-26)

**Sigue:** "Va. ¿Por dónde empiezo?"

(Las citas de Daniel son textuales de su testimonio, `src/lib/testimonios.ts`.
No se les pule nada más.)

---

## 8. Salida 1, por tu cuenta: 5 prompts para auditar tus XML

**Arriba:** "Va. ¿Por dónde empiezo?"

**Guion (35 s):**

> Depende de cómo aprendes, así que te dejo tres caminos.
>
> Si eres de los que se sientan solos con un documento, empieza por tus XML. Te regalo los cinco prompts con los que reviso un lote: validación contra el Anexo 20, materialidad, riesgo, 69-B y REPSE, y el reporte para tu cliente.
>
> Y trae lo de los datos, aterrizado: qué nunca se sube y cómo cuidar los de tus clientes.
>
> Te llegan en PDF al correo, desde soycontador.ai/audita.
>
> Ahora, si prefieres verlo hecho antes de hacerlo...

**Sigue:** "Prefiero verlo hecho primero."

**CTA:** sticker de enlace a soycontador.ai/audita (lista `general`: la misma
promesa que la bio).

(La guía reemplaza nombre y RFC del receptor por un seudónimo, así que no
choca con el "tachar el nombre no sirve" de la 6.)

---

## 9. Salida 2, en vivo: Jueves de ContadorIA

**Arriba:** "Prefiero verlo hecho primero."

**Guion (35 s):**

> Entonces nos vemos el jueves. Cada jueves a las once, hora del centro, estoy en vivo en YouTube: Jueves de ContadorIA. Agarro un problema real de un despacho y lo resuelvo con Claude en pantalla, de principio a fin.
>
> Y al final contesto preguntas. Es esta misma plática, pero con tu caso.
>
> Déjame tu correo en soycontador.ai/jueves y te aviso cada semana qué caso toca.
>
> Y si lo que quieres es hacerlo tú, con alguien al lado...

**Sigue:** "Quiero hacerlo yo, con alguien al lado."

**CTA:** sticker de enlace a soycontador.ai/jueves (lista `live`).

(Sin tema ni fecha de ningún episodio: el caso de la semana vive en el
destacado "Jueves", que sí se actualiza cada semana.)

---

## 10. Salida 3, acompañado: el taller "Empieza aquí"

**Arriba:** "Quiero hacerlo yo, con alguien al lado."

**Guion (45 s):**

> Para eso armé el taller "Empieza aquí". Dos horas en vivo, en grupo de veinticinco, y es todo lo que platicamos hoy, pero con tus manos en el teclado.
>
> Sales con tres cosas: tu proyecto de Claude configurado para tu despacho, un prompt que cita el fundamento, probado con una duda tuya, y tu primer lote de XML en tabla y revisado. Con XML de práctica, no los de tus clientes.
>
> No necesitas saber nada antes. Empezamos en cero.
>
> La próxima fecha y los lugares están en soycontador.ai/empieza. Por algo se llama así.
>
> Lo único que sí necesitas es tu cuenta de Claude.

**Sigue:** "¿Y si todavía no tengo Claude?"

**CTA:** sticker de enlace a soycontador.ai/empieza.

(Los tres entregables son los de `src/lib/empieza.ts`, dichos como allá. Si
la página cambia la promesa, se regraba esta story. El cupón de lanzamiento
no se menciona: es solo para el segmento de la encuesta.)

---

## 11. Cómo sacar tu cuenta de Claude

Es el tercer apoyo del taller (`docs/taller-empieza-aqui.md`) y el único
video en pantalla del destacado. Arranca a cámara, en la consulta, y pasa a
la pantalla grabada del celular o la computadora. Sin el primer renglón, el
mismo video sirve para el correo de confirmación del taller y para el
destacado "Cursos".

**Arriba:** "¿Y si todavía no tengo Claude?"

**Guion (40 s, más lo que dure la pantalla):**

> Te enseño. Son cinco minutos.
>
> [Pasa a la pantalla.]
>
> Entras a claude punto ai y creas tu cuenta con el correo del despacho. En configuración eliges el plan Pro; se paga con tarjeta, en dólares, unos cuatrocientos pesos al mes.
>
> Y de una vez, en privacidad, apaga el interruptor que platicamos, el de entrenar con tus chats.
>
> Listo: es la misma cuenta que vas a usar en el taller y el lunes siguiente.

**CTA:** sticker de enlace a soycontador.ai/empieza otra vez: es lo último
que se ve del destacado.

---

## Aparte (fuera del destacado): tu primera app, del XML de nómina al PDF

Salió del destacado el 2026-09-25, cuando entraron las tres salidas: con
esta, /audita y el lote del taller eran tres caminos de XML seguidos. Su
entrada natural es el DM de la palabra RECIBOS, y se puede republicar suelta
como story cuando haga falta llenar un día. Va en el mismo formato de
consulta.

**Arriba:** "¿Hay algo que pueda hacer hoy con mis XML?"

**Guion (35 s):**

> Sí: una app que convierte tus XML de nómina en PDF. Ya no hace falta buscar un convertidor. Le pegas un prompt a Claude y te construye la app en tu computadora.
>
> [Mostrar el GIF de /recibos o la pantalla.]
>
> Y tus datos no se exponen: Claude nunca ve tus recibos. Para construirla le das la norma del SAT, que no trae el RFC de nadie. Tus XML entran hasta el final, y se procesan en tu navegador.
>
> El prompt y los pasos están abiertos, sin registro, en soycontador.ai/recibos. La primera prueba, con dos o tres recibos.

**CTA:** sticker de enlace a soycontador.ai/recibos.

(La versión anterior prometía "del XML al Excel" y decía "le das los archivos
a Claude". Las dos cosas contradecían a /recibos, que es XML de nómina a PDF
y donde Claude nunca ve un recibo. Si /recibos cambia, se revisa esta story.)

---

## Después de grabar

- Cortar en los puentes: cada story termina justo después de su último
  renglón. El "Sigue" ya no se pone en la edición (2026-09-26).
- La pregunta de la lámina sale del título de cada pieza en el deck de
  social-studio (`decks/2026-09-25-empieza-aqui-stories.json`); si se corrige
  aquí, se corrige allá.
- Subirlas en orden, del 1 al 11, el mismo día, y fijarlas en el destacado
  "Empieza aquí" con la portada de la bandera.
- **La 10 y la 11 viven mientras haya una edición abierta en /empieza**
  (octubre, según el calendario de venta del taller). Sin edición, salen del
  destacado y la 9 se sube sin su último renglón, para que no deje una puerta
  que no lleva a nada. Cuando se abra otra edición, vuelven tal cual: no
  dicen fecha.
- Cuando el destacado exista, cada story nueva del día a día puede terminar
  con "si estás empezando, arriba en Empieza aquí está lo básico".
- Grabadas así ya sirven de reels (vertical, formato podcast). Como reel
  suelto, el "Sigue" funciona como pregunta abierta para los comentarios; eso
  es una decisión aparte.
