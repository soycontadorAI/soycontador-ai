# @soycontador.ai como landing page

Aplica el lineamiento de `lineamiento-perfil-como-landing.md` (nombre con
SEO, bio en tres líneas, un solo enlace, destacados como menú) a esta marca.
Las stories "Empieza aquí" que salieron de la encuesta de agosto
(`../jueves/encuesta-2026-08.md`) viven aquí como destacado, no como posts:
un post se hunde en dos semanas; un destacado se queda en la puerta.

La ruta corta que se busca: alguien ve un corte de un jueves o un carrusel,
entra al perfil, el destacado de testimonios lo convence, y con un clic llega
al sitio con la guía de 5 prompts (lista `general`), que es donde se vende.

## El perfil (decidido el 2026-09-20)

**Nombre visible (campo de búsqueda de Instagram), 37 de 64 caracteres:**
`Israel Castro · IA para Contadores MX`

Con apellido, aunque sea más largo: "Israel Castro" es la entidad que el
sitio posiciona (JSON-LD, `sameAs`, `llms.txt`), y el cruce entre el sitio y
el perfil funciona porque el nombre coincide. "Israel" solo es nombre de país
y de pila común: como palabra clave vale cero. "MX" es el nicho que pide el
lineamiento y separa de los perfiles de España y Argentina que salen en la
misma búsqueda. Sin "Claude": la marca es agnóstica, lo específico vive en
las piezas.

**Bio, tres líneas, 148 de 150 caracteres:**

```
IA para contadores de carrera. Sin programar.
CP y desarrollador · 14 años de fiscal · En vivo, jueves 11 am
5 prompts para auditar XML con Claude 👇
```

Línea 1 para quién ("de carrera" nombra al avatar sin decirle la edad) y la
objeción de habilidad fuera desde el arranque. Línea 2 la prueba: identidad
honesta (sin "AI-native": es jerga, y la mezcla de idiomas es lo que hacía
que Instagram pusiera "See Translation" encima de la bio) más el live, que es
lo que dice que esto está vivo. Línea 3 la acción. Nada de metáforas: la
vuelta de la home comprimida se vuelve frase que hay que pensar, y en la bio
no hay tiempo de pensar.

**Un solo enlace:** `https://soycontador.ai/audita` (la guía, lista
`general`). Ya apunta ahí. No Linktree, no la home. Cuando corra una campaña
(curso, taller) se cambia el enlace ese periodo y se regresa.

**Estado al 2026-09-20:** el perfil ya tiene el enlace correcto, la foto con
el plumón verde y un destacado "Testimonios" con portada del DS. Faltan el
nombre y la bio nuevos (se cambian a mano en la app) y los otros destacados.

**Estado al 2026-09-28:** ya están el nombre y la bio nuevos, y tres destacados,
en este orden: «Tu camino», «Empieza aquí» y «Testimonios» (el de colegas se
llama así en el perfil). Dos cosas que ya costaron un cambio:
- **El nombre de un destacado cabe hasta ~12 caracteres** en el teléfono de
  Israel. «Elige tu camino» (15) salía «Elige tu ca…»; por eso quedó «Tu camino».
- **Instagram pone primero el último destacado que se editó.** Para regresar
  «Empieza aquí» al frente, se le vuelve a agregar una story desde el archivo.

## Los destacados, de izquierda a derecha

Son el menú. Portadas con el DS del sitio (fondo `#FBFAF7`, tipografía del
sitio, plumón `#3dd68c`), sin íconos de banco de imágenes. Formato `ig-story`
de social-studio (1080×1920).

| Orden | Destacado | Qué contiene | Equivale a |
|---|---|---|---|
| 1 | **Empieza aquí** | Las 11 stories de abajo, fijas | Tips (y la puerta para el 70 % en nivel cero o aficionado) |
| 2 | **Colegas** | Testimonios: Daniel y los que vengan. Un story por colega: cita + cara + "cómo le fue" + liga al video | Testimonios y antes/después |
| 3 | **Jueves** | Qué es, cuándo (jueves 11:00), cómo llegar al canal, y el tema de esta semana (este sí se actualiza cada semana). La presentación fija del jueves ya vive en «Tu camino» | Servicios, parte 1 |
| 4 | **Tu camino** | Antes «Cursos» (y en el trabajo, «Productos»). La apertura con la escalera y 9 stories, una por puerta: el ebook, el taller de 2 horas, el de 8, la capacitación para despachos, soluciones, herramientas, el jueves, el Club y el bonus de Fiscalistas.AI (se quita si la alianza no sigue). Sin precio salvo el ebook. Guiones, stickers y UTM en `stories-productos-guiones.md`. El nombre sale de la home («Elige tu camino») | Servicios, parte 2 |
| 5 | **Preguntas** | Las 4 FAQ de la home, un story cada una, con la respuesta directa en las dos primeras frases (ya están escritas en `src/lib/faqs.ts`) | FAQs |
| 6 | **Platiquemos** | Cómo empezar: el formulario del sitio, qué pasa después (correo de acuse, llamada), y qué NO es (no es soporte del SAT) | Cómo comprar / pedir cita |

**Sin destacado de precios**, a propósito. El lineamiento lo recomienda, pero
la decisión del sitio (2026-09-08) es que el taller no publica precio y la
capacitación empresarial se cotiza. Publicar "desde" en Instagram sería
publicarlo. El ebook ($297 MXN) va con precio dentro de "Cursos".

## Las stories de "Empieza aquí"

Fijas en el destacado. Son **una sola consulta grabada tipo podcast**
(decisión de Israel, 2026-09-25): cada story contesta la pregunta de un
colega y deja abierta la siguiente. Siete de consulta, sin CTA ni sticker, y
después tres salidas con un sticker cada una, de lo gratis a lo de paga. Una
herramienta: Claude.

1. **Me contesta como blog.** La pregunta tiene cuatro partes.
2. **¿Qué contexto le doy?** Régimen, periodo y qué ya intentaste.
3. **Se tarda y termina donde empezó** (la #54 de la encuesta). La forma y dónde parar.
4. **¿Todo eso cada vez?** Un proyecto.
5. **¿Cómo sé que no se lo inventa?** (la #26). Pídele el fundamento.
6. **¿Le paso los papeles de mis clientes?** Las tres capas del jueves del 24.
7. **¿Esto no es para los jóvenes?** Daniel.
8. **¿Por dónde empiezo?** Salida por tu cuenta: la guía (`/audita`).
9. **Prefiero verlo hecho.** Salida en vivo: el jueves (`/jueves`).
10. **Quiero hacerlo con alguien al lado.** Salida acompañada: el taller (`/empieza`).
11. **¿Y si no tengo Claude?** Cómo sacar la cuenta (sticker a `/empieza`).

La 10 y la 11 viven mientras haya una edición abierta del taller; sin ella,
el destacado cierra en la 9. Ninguna salida dice fecha, precio ni tema de un
jueves, para que el video no caduque.

Los guiones, el formato de grabación y el patrón de cada story viven en
`stories-empieza-aqui-guiones.md`, y solo ahí: esta lista es el índice. Antes
también se describían aquí, pantalla por pantalla, y las dos versiones ya se
habían separado (la de aquí todavía nombraba a ChatGPT).

## Ritmo

- Los destacados 1, 2, 5 y 6 se arman una vez y se tocan cuando cambia algo.
- "Jueves" se actualiza cada semana con el tema (un story nuevo arriba, el
  viejo se quita).
- "Colegas" crece con cada testimonio.
- Las historias diarias del playbook (martes, jueves, sábado) siguen igual;
  esto es el menú fijo, no el día a día.

## Qué falta

- Grabar las 11 stories (guiones en `stories-empieza-aqui-guiones.md`). Las portadas ya existen en el canvas "Highlights con plumón" (https://claude.ai/artifact/AeoeSNjHtmtPmhSHsLvgZP), incluida la de Empieza aquí (bandera).
- Cambiar nombre y bio en la app (ya están contados: 37/64 y 148/150).
