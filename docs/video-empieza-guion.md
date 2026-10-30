# Video del hero de /empieza: guion (para grabar el 2026-10-14)

Va en la tarjeta de "Con qué sales" (`VIDEO_EMPIEZA` en `src/lib/empieza.ts`).
**Atemporal**: tiene que servir para esta edición y para las que siguen.

## Reglas del video

- **Dura 80 a 90 segundos.** Más largo y nadie llega a "apartar".
- **A cámara, plano medio, 16:9, 1080p.** El contenedor de la página es 16:9.
- **Un solo mensaje:** si la IA te contestó como blog, el problema es cómo se
  le pide, y eso se aprende haciéndolo con alguien al lado.
- **Una sola herramienta: Claude.** Nada de "la IA" en abstracto ni de comparar
  con ChatGPT.
- **El avatar es el contador con años de oficio** (45 a 65). La experiencia es
  la ventaja, nunca la carencia. Ni una frase que lo haga sentir atrasado.

### Qué NO decir (porque lo vuelve caducable o rompe una regla)

- Fechas, días ni horas: "este sábado", "el 17", "mañana". "Dos horas" sí.
- Precio, descuentos, cupos con número ni "últimos lugares".
- Ofertas posteriores al taller, el curso grande ni Fiscalistas.AI.
- "Gratis", "en dos horas dominas Claude", ni cifras de ahorro de tiempo sin
  dato real.
- "Yo sí programo", "escribo código todos los días" (ver AGENTS.md).

## Guion

Lo que dices va en la columna de la izquierda; lo que se ve, en la derecha.
Son ~210 palabras, a ritmo natural salen unos 85 segundos.

| Tiempo | Lo que dices | Lo que se ve |
|---|---|---|
| 0:00 a 0:08 **Gancho** | "¿Ya probaste la inteligencia artificial y te contestó como blog? Respuestas genéricas, que no sirven para un caso real. Y de ahí concluiste que no es para ti." | A cámara, directo. Sin intro ni logotipo animado: el primer segundo ya es el gancho |
| 0:08 a 0:20 **Giro** | "Pues no fue la herramienta, y tampoco fue cosa tuya. Es cómo se le pide. Y tú, con años de oficio, tienes justo lo que ella no tiene: criterio. Solo falta decírselo en su idioma." | A cámara. Subtítulo en pantalla: "No fue la herramienta" |
| 0:20 a 0:45 **Demo** | "Mira. Esta es la pregunta como casi todos la hacemos. [pausa corta] Y esta es la misma, con rol, contexto, instrucción y formato, y con una línea que le exige citar el artículo. Misma herramienta, otra respuesta: ahora te dice en qué se basa. Y si no lo sabe, lo dice." | **Captura de pantalla** de Claude con los dos prompts de abajo, uno tras otro. Tu voz encima, sin cámara. Que se alcance a leer la respuesta con el artículo citado |
| 0:45 a 1:10 **Qué es** | "Por eso hice este taller. Es en vivo, en grupo chico, y no es para escuchar: cada bloque termina con algo hecho en tu pantalla. Sales con tres cosas. Un proyecto de Claude configurado para tu despacho. Un prompt que cita el fundamento. Y tu primera tarea resuelta: un lote de XML convertido en tabla y revisado." | De vuelta a cámara. Aquí entran **tres tarjetas** (una por cosa) que yo agrego en la edición |
| 1:10 a 1:25 **Cierre** | "No necesitas saber programar ni haber usado IA antes. Empezamos en cero. Si quieres dejar de mirarla desde afuera, el botón de esta página es para apartar tu lugar." | A cámara. Termina mirando al lente medio segundo después de la última palabra (el corte lo hago yo) |

### Los dos prompts para la demo (datos ficticios)

Córrelos antes de grabar y **confirma que la respuesta que sale en pantalla es
correcta**: lo que se ve ahí es lo que firmas. Mi expectativa es que apunte a
la retención de ISR del 1.25 % del régimen RESICO (LISR, art. 113-J), pero no la
doy por buena: revísala tú.

**El de siempre (el que contesta como blog):**

```
¿A mi cliente RESICO le tienen que retener ISR?
```

**El bien pedido:**

```
Rol: eres contador público en México.
Contexto: mi cliente es persona física en RESICO y le factura a una persona moral.
Instrucción: dime si le corresponde retención de ISR. Cita el artículo y la
fracción de la LISR en que te basas. Si no lo tienes con certeza, dilo y no
inventes.
Formato: tres renglones y, al final, el artículo.
```

## Teleprompter

En social-studio: `decks/2026-10-14-empieza-video-hero.json` (formato
`ig-story-grabada`). Se abre con `pnpm previo` en ese proyecto, en
`http://localhost:4326/2026-10-14-empieza-video-hero`, o con doble clic en
`dist/2026-10-14-empieza-video-hero/guion.html`. Flechas para pasar de pieza,
`T` para auto-scroll, `,` y `.` para la velocidad, `E` para corregir el texto.
Si cambias una frase aquí, cámbiala allá.

## Grabación

- Luz de frente (ventana de lado, nunca atrás), micrófono cerca. El audio vale
  más que la imagen: si tienes que elegir, cuida el audio.
- Graba la demo **aparte**, como captura de pantalla con tu voz, y la cámara
  también aparte. Es más fácil de editar que una toma corrida.
- Haz **tres tomas** de cada bloque. En la edición elijo la mejor.
- Si te equivocas, repite la frase completa desde el principio de la oración,
  no desde la palabra.

## Qué me pasas y qué hago yo

Me pasas: los archivos en bruto (cámara y captura) o el MP4 corrido, más un
texto con lo que dijiste si cambiaste algo del guion.

Yo hago: cortes de pausas y muletillas, subtítulos (mucha gente lo ve sin
audio), las tres tarjetas del minuto 0:45 con los tres entregables (texto de
`ENTREGABLES`), y la carátula 1280x720 de menos de 100 KB en
`public/assets/empieza-video.jpg`.

Tú haces: subirlo a YouTube y pasarme el ID. Se pega en `VIDEO_EMPIEZA.id` y el
video aparece solo en la página (hasta entonces no se pinta nada).
