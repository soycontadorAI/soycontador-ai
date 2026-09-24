# Playbook de venta: de la lista al contrato, y de ahí a la renovación

Para la serie de noviembre ("Cálculos que se fundamentan solos") y para las
que sigan. El producto ya está definido en la hoja ejecutiva; esto es cómo se
vende, en el orden en que pasa. Escrito para que lo ejecute Israel solo, en
las horas que le sobran entre el despacho y el programa.

Principio que gobierna todo: **se vende la serie, no menciones.** Cuando la
marca pida "dos reels y tres stories", la respuesta es que eso no existe en
este canal; existe la serie, y los reels son cortes de ella.

## 1. Calendario hacia atrás

Hoy es domingo 20 de septiembre de 2026. El primer episodio es el jueves 29
de octubre. Son cinco semanas y media, y eso incluye el alta de proveedor y
el visto bueno legal de la marca. Es justo, no imposible: el primer cierre
realista es con una empresa donde la persona de alianzas o growth aprueba
sola. Los corporativos se contactan ahora pero para enero.

| Semana | Fechas | Qué pasa |
|---|---|---|
| S0 | 21 al 27 de septiembre | Docs listos. Israel exporta métricas. Búsqueda de prospectos verificada. Israel aprueba la primera ola. Jueves 24: primer live como marca personal. |
| S1 | 28 de septiembre al 4 de octubre | **Sale la primera ola** (10 marcas: LinkedIn, y correo donde haya dirección pública). Jueves 1: arranca octubre, encuesta 1 en el live. |
| S2 | 5 al 11 de octubre | Seguimientos 2 y 3. Llamadas de descubrimiento. Jueves 8: encuesta 2. |
| S3 | 12 al 18 de octubre | Propuestas (compartible + fee dicho en la llamada y confirmado por correo). Negociación. Sábado 17: taller "Empieza aquí", así que las llamadas van de lunes a miércoles. |
| S4 | 19 al 25 de octubre | **Go/no-go A, jueves 22**: contrato firmado y anticipo facturado = serie completa. El fin de semana entra la slide del patrocinador al deck del 29. |
| S5 | 26 de octubre al 1 de noviembre | Jueves 29: episodio 1. **Go/no-go B, viernes 30**: último día para cerrar la versión de 3 episodios (5, 12 y 19 de noviembre) a 3/4 del fee. |
| Después | | Noviembre sale sin patrocinio y se mide. La conversación pasa a la serie de enero (temporada de declaración anual, el calendario más fuerte del año) con octubre y noviembre como dos casos medidos. |

Regla de tiempo de Israel: máximo 4 horas a la semana de venta en S1 a S3.
Si una marca necesita más que eso para decidir, es de enero.

## 2. Prospección

La lista viene de `prospectos.csv`, ya verificada (programa de alianzas,
persona correcta, evidencia de que invierten en contadores). No se contacta a
nadie con `estado = por-verificar`.

**Canal**: LinkedIn primero, porque ahí están las marcas; en Instagram están
las agencias. Correo corporativo directo si la dirección de la persona o del
área de alianzas es pública. Nunca ventas@ ni soporte@.

**Persona**: quien lleva alianzas, partnerships, growth o marketing en
México. Si solo se localiza al director general de una empresa chica, se le
escribe a él.

### Secuencia de LinkedIn (14 días)

**Día 0, nota de conexión (300 caracteres):**

> Hola, [nombre]. Soy contador y desarrollador, hago el live Jueves de ContadorIA. En noviembre lanzo una serie sobre cálculos fiscales fundamentados y creo que [marca] es la marca que debería presentarla. Te cuento en 3 líneas si aceptas.

**Día 0 o al aceptar, mensaje 1:**

> Gracias por aceptar, [nombre].
>
> Cada jueves a las 11 hago un live para contadores de carrera (45 a 65 años, con despacho propio) sobre cómo usar IA en trabajo fiscal de México. En noviembre van cuatro episodios con una regla: cada cálculo tiene que citar el artículo que lo sustenta. [Tema que posee la marca: por ejemplo, "dos de los cuatro son de nómina e IMSS" o "el tema de la serie es el fundamento legal, que es lo que ustedes venden"].
>
> Busco un solo patrocinador para la serie, con exclusividad de categoría. ¿Te va una llamada de 15 minutos esta semana o la próxima? Aquí mi agenda: [enlace].

**Día 4, mensaje 2 (si no contestó):**

> [Nombre], te dejo la hoja de la serie por si sirve para verla con alguien más de tu equipo: [PDF o enlace]. Son cuatro episodios, del 29 de octubre al 19 de noviembre, y el patrocinador se decide antes del 22 de octubre.

**Día 9, mensaje 3 (un dato de octubre):**

> Arrancó la serie de octubre, que corre sin patrocinador y la estoy midiendo para enseñársela al de noviembre. El primer episodio: [un dato concreto y fechado, por ejemplo "X personas en vivo y Y horas vistas en 48 horas"]. Si noviembre no cae en su calendario, en enero viene la serie de anual y esa sí la planeamos con tiempo.

**Día 14, cierre:**

> Lo dejo aquí para no insistir. Si en enero tiene sentido, te busco con los números de las dos series. Gracias, [nombre].

### Correo (misma secuencia, tres envíos)

Asuntos, uno por envío:

1. `Patrocinio de serie: cálculos fiscales fundamentados, noviembre`
2. `La hoja de la serie (4 episodios, 29-oct a 19-nov)`
3. `Un dato de la serie de octubre`

Cuerpo del primero (bajo 120 palabras, un solo enlace):

> Hola, [nombre].
>
> Soy Israel Castro, contador público y desarrollador de software. Hago Jueves de ContadorIA, un live semanal para contadores de carrera sobre IA aplicada al trabajo fiscal de México.
>
> En noviembre lanzo "Cálculos que se fundamentan solos": cuatro episodios donde cada cálculo (declaración mensual, ajuste anual, cuotas IMSS) tiene que citar el artículo que lo sustenta. [Una línea del tema que posee la marca].
>
> Busco un solo patrocinador para la serie, con exclusividad de categoría. ¿Me das 15 minutos esta semana o la próxima? Agenda: [enlace].
>
> Israel Castro
> Contador público y desarrollador de software

Voz: párrafos cortos, tuteo, un solo pedido, sin adjetivos sobre la audiencia
("cualificada", "premium"). Los números van en la hoja, no en el mensaje.

### Registro

Cada contacto se anota en `prospectos.csv`: `estado`, `fecha_ultimo_contacto`
y `siguiente_paso` con fecha. Si no hay siguiente paso con fecha, el prospecto
está muerto y se marca `descartado` con el motivo en `notas`.

## 3. Llamada de descubrimiento (30 minutos de guion, 15 de cita)

Objetivo: saber si hay presupuesto, quién lo aprueba y en cuánto tiempo.
Israel habla el 30 %; la marca, el 70 %.

**Ojo con el reloj.** El guion de abajo suma 30 minutos (3 + 15 + 7 + 5), pero
la hoja compartible ofrece una llamada de 15 y el enlace agenda 15, que es la
cita única de `CALENDARIOS.default`. Encaja hoy porque hay 15 minutos de
colchón hasta la siguiente, así que la llamada puede correr a 30 sin empalmar.

Dos cosas que eso obliga:

- **Pedir la extensión, no tomarla.** El prospecto apartó 15 minutos y puede
  tener algo después. Cerca del minuto 12: "esto da para quince más, ¿los
  tienes o lo seguimos por correo?".
- **Deja de funcionar cuando la agenda se llene.** Ese día el patrocinio
  necesita su propia entrada de 30 minutos en `CALENDARIOS`, y el mapa ya lo
  soporta sin refactor: `calendarioDe("cotizacion")` la tomaría sola.

1. **Contexto (3 min).** Quién soy, qué es el programa, por qué esta serie y
   por qué esta marca. Sin vender todavía.
2. **Ellos (15 min).** En este orden:
   - ¿Cómo llegan hoy a contadores? ¿Qué han hecho que funcionó y qué no?
   - ¿Tienen programa de aliados o de contadores? ¿Cuánto les vale un
     despacho que llega por ahí? (Que digan ellos el número. Nunca se les
     sugiere uno.)
   - ¿Han patrocinado contenido o eventos? ¿Congresos, webinars, creadores?
     ¿Qué esperaban y qué recibieron?
   - ¿Quién aprueba un patrocinio de este tamaño y cuánto tarda? ¿Hay alta de
     proveedor u orden de compra?
   - ¿Qué sería "resultado" para ustedes a 30 y a 90 días?
   - ¿Hay alguna marca con la que no puedan compartir pantalla? (Para definir
     la categoría exclusiva.)
   - ¿Quién de su lado verificaría que lo que digo de su producto es exacto?
3. **La serie (7 min).** Los cuatro episodios, qué recibe la marca, qué no
   recibe, y la independencia editorial dicha en voz alta. El fee se dice
   aquí, con la fecha límite: "son [fee] más IVA por la serie completa, y el
   patrocinador se decide antes del 22 de octubre".
4. **Cierre (5 min).** Siguiente paso con fecha: "te mando la propuesta por
   correo hoy; ¿cuándo me dices si va o no?". Si la respuesta es "lo veo con
   mi jefe", pedir la llamada con el jefe.

Señales de que es enero y no noviembre: comité, procurement, "presupuesto del
año que entra", más de dos personas que tienen que aprobar.

## 4. Propuesta

Se manda el mismo día de la llamada. Es un correo de una página con la
compartible adjunta (PDF). El correo trae lo que la hoja no trae:

- Fee, más IVA, precio único.
- Términos: 50 % a la firma, 50 % antes del 12 de noviembre. CFDI de
  servicios profesionales.
- Categoría exclusiva, definida por escrito con sus palabras.
- Fechas de los cuatro episodios y qué necesito de ellos y cuándo (logo en
  vectores, el nombre exacto de la marca, la persona que verifica el
  segmento).
- La cláusula de independencia editorial, tal cual está en la hoja.
- Vigencia: hasta el 22 de octubre.

Nada de tiers. Un precio para una serie. Si piden algo más chico, lo más
chico que existe es la versión de tres episodios, y solo a partir del 23 de
octubre.

## 5. Objeciones

**"El canal es chico."** Sí, y los números van con fecha para que lo vean
ustedes mismos. Lo que compran no es alcance, es a quién le llega: contador
con despacho propio que decide su stack, que se sienta una hora los jueves y
se lleva un papel de trabajo que va a usar. Octubre corre sin patrocinador
justo para que noviembre no sea una promesa sino un caso con números.

**"Con dos reels y tres stories nos basta."** Eso no lo hago. Los reels de
este canal son cortes de la serie; sin serie no hay reel. Y un reel suelto de
marca se lo salta la audiencia porque sabe que es pagado; una serie de un mes
con el nombre de la marca en el tema que domina, no.

**"Queremos revisar el guion."** Verifican lo factual del segmento sobre su
producto, y eso sí lo mando 48 horas antes. El resto no pasa por aprobación,
y eso también los protege a ustedes: mi audiencia me cree porque sabe que
nadie me dicta lo que digo. Un patrocinador que edita el guion se nota, y se
nota en contra de la marca.

**"Queremos los leads o los correos."** No comparto suscriptores, ni los
míos ni los de nadie. Lo que sí: enlace con UTM en los ocho videos,
comentario fijado, mención en los correos, y un informe con todo lo que se
pueda medir. Los contadores que quieran hablar con ustedes van a llegar por
su enlace, no por mi lista.

**"Solo hacemos performance."** Entonces no es esto, y prefiero decirlo hoy.
Esto es una serie con nombre de marca en un tema que les pertenece; se mide,
pero no se compra por clic. Si en enero cambian de idea, la serie de anual
está planeada con más tiempo.

**"Queremos una demo de nuestro software en el episodio."** Cada episodio
enseña una sola herramienta a fondo, y en esta serie es Claude. La demo va en
su canal, y yo la puedo enlazar desde el segmento. Meterla en el episodio le
quita valor a lo suyo y a lo mío.

**"¿Y si lo pagamos con licencias?"** No. Las licencias las pago yo cuando
las necesito. El patrocinio es en dinero porque es lo que financia la serie.

**"Está caro" o "no tenemos ese presupuesto."** El precio es el precio. Lo
que sí se puede mover es el alcance: sin stories, sin correo al boletín
general, sin la mención de cierre. Menos superficies, nunca menos pesos. Si
ni así, noviembre sale sin patrocinador y en enero volvemos a hablar.

## 6. Contrato: lo esencial, en una carta convenio de dos páginas

No hace falta un contrato de veinte páginas. Hace falta que los dos sepamos
qué pasa si algo sale mal.

1. **Objeto.** Patrocinio de la serie "Cálculos que se fundamentan solos",
   cuatro episodios en vivo en YouTube los días 29 de octubre, 5, 12 y 19 de
   noviembre de 2026, con sus cortes editados.
2. **Contraprestación.** [Fee] más IVA. 50 % a la firma, 50 % antes del 12
   de noviembre. CFDI de servicios profesionales; el pagador aplica las
   retenciones que le correspondan por ley.
3. **Exclusividad.** Ninguna otra marca de la categoría [categoría, con sus
   palabras] durante la serie.
4. **Independencia editorial.** El texto de la hoja, tal cual. Más una
   línea: el patrocinador verifica la exactitud de lo que se dice de su
   producto, y su respuesta llega en 48 horas o se entiende aprobado.
5. **Entregables.** La tabla de "qué recibe", copiada.
6. **Derechos de uso.** El patrocinador puede compartir y embeber los ocho
   videos y citar el informe. Whitelisting o pauta sobre las publicaciones
   de Israel: solo por anexo aparte. El logo del patrocinador se usa solo
   dentro de la serie y se retira cuando termine, salvo en los videos ya
   publicados.
7. **Cancelación.** Si la marca cancela después de la firma, el anticipo no
   se devuelve. Si Israel no emite un episodio, lo repone en la fecha
   siguiente disponible o reembolsa la parte proporcional.
8. **Fuerza mayor.** Si un live se cae (plataforma, luz, salud), se
   reprograma; no se reembolsa.
9. **Datos personales.** No se comparten suscriptores ni datos de la
   audiencia. Aplica el aviso de privacidad de soycontador.ai.
10. **Vigencia.** Del día de la firma al día de entrega del informe.

## 7. Entrega por episodio (checklist)

Antes del jueves:

- [ ] Slide del patrocinador en la portada y el cierre del deck.
- [ ] Líneas de apertura y cierre escritas.
- [ ] Segmento de hasta 60 segundos redactado, y verificado por la marca 48
      horas antes.
- [ ] Miniatura con logo.
- [ ] Descripción con enlace UTM. Comentario fijado listo para pegar.
- [ ] Aviso a la lista `live` con la mención.
- [ ] Story en Instagram con mención y enlace.
- [ ] Portada del entregable con la línea de patrocinio.

Después del live:

- [ ] Corte con tarjetas de apertura y cierre. Reel con "presentado por".
- [ ] Comentario fijado en el live y en el corte.
- [ ] Foto de métricas a las 48 horas en `metricas.csv`.
- [ ] Fila del episodio actualizada en `docs/jueves/episodios.csv`.

## 8. Informe post-serie

Se entrega dentro de los 10 días siguientes al último episodio. Una página
de números y dos párrafos de lectura.

Por episodio, live y corte por separado, cada número con su fecha de foto:

- Pico de concurrentes en vivo y mensajes de chat.
- Vistas a +7 y +28 días.
- Duración media y retención en el minuto del segmento del patrocinador.
- Clics en el enlace UTM (de mi GA4 si aterriza en soycontador.ai; si
  aterriza en su sitio, el número lo tienen ellos y lo pido).
- Comentario fijado: likes y respuestas.
- Story: alcance y clics.
- Correos: destinatarios, aperturas y clics de los cinco envíos.
- Descargas del entregable, si está alojado en el sitio.
- Resultados de las encuestas en vivo.

Los dos párrafos: qué funcionó y qué cambiaría en la siguiente serie. Sin
adjetivos; lo que diga el informe tiene que poder verificarse en los enlaces.

## 9. Renovación

- La siguiente serie se le ofrece al patrocinador **30 días antes** de que
  arranque, con el informe adjunto y derecho de primera opción sobre su
  categoría.
- El precio de renovación nunca baja del primer trato. Si el canal creció, sube.
- Si no renueva, la categoría se abre y se le avisa antes de ofrecerla a
  otro.

## Lo que no se hace

- No se manda la compartible con placeholders.
- No se cita ninguna cifra de mercado (CAC, LTV, "horas de exposición") que
  no tenga fuente propia.
- No se promete lo que no se ha probado, ni de Claude ni del producto del
  patrocinador.
- No se negocia el precio hacia abajo. Se negocia el alcance.
- No se contacta a nadie de la lista sin `fecha_verificacion`.
