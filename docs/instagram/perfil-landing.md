# @soycontador.ai como landing page

Aplica el lineamiento de `lineamiento-perfil-como-landing.md` (nombre con
SEO, bio en tres líneas, un solo enlace, destacados como menú) a esta marca.
Las stories "Empieza aquí" que salieron de la encuesta de agosto
(`../jueves/encuesta-2026-08.md`) viven aquí como destacado, no como posts:
un post se hunde en dos semanas; un destacado se queda en la puerta.

La ruta corta que se busca: alguien ve un corte de un jueves o un carrusel,
entra al perfil, el destacado de testimonios lo convence, y con un clic llega
al sitio con la guía de 5 prompts (lista `general`), que es donde se vende.

## El perfil

**Nombre visible (campo de búsqueda de Instagram):**
`Israel Castro · IA para Contadores`

No "soycontador.ai" ni "Isca": el campo de nombre es lo que Instagram indexa
y nadie busca la marca todavía; buscan "IA contadores".

**Bio, tres líneas:**

```
Contador público y desarrollador de software. IA para contadores en México.
14 años de fiscal · Jueves de ContadorIA en YouTube, en vivo a las 11
5 prompts para auditar tus XML con Claude, gratis 👇
```

Línea 1 qué hago y para quién; línea 2 prueba; línea 3 la acción. Sin
metáforas y sin "transformo despachos". La palabra "gratis" va en el imán,
que es la excepción explícita de la regla de público de paga.

**Un solo enlace:** `https://soycontador.ai/audita` (la guía, lista
`general`). No Linktree, no la home. Cuando corra una campaña (curso, taller)
se cambia el enlace ese periodo y se regresa.

## Los destacados, de izquierda a derecha

Son el menú. Portadas con el DS del sitio (fondo `#FBFAF7`, tipografía del
sitio, plumón `#3dd68c`), sin íconos de banco de imágenes. Formato `ig-story`
de social-studio (1080×1920).

| Orden | Destacado | Qué contiene | Equivale a |
|---|---|---|---|
| 1 | **Empieza aquí** | Las 8 stories de abajo, fijas | Tips (y la puerta para el 70 % en nivel cero o aficionado) |
| 2 | **Colegas** | Testimonios: Daniel y los que vengan. Un story por colega: cita + cara + "cómo le fue" + liga al video | Testimonios y antes/después |
| 3 | **Jueves** | Qué es, cuándo (jueves 11:00), cómo llegar al canal, y el tema de esta semana (este sí se actualiza cada semana) | Servicios, parte 1 |
| 4 | **Cursos** | Claude para Contadores (con Fiscalistas.AI), el taller, el ebook. Un story por producto, sin precio salvo el ebook | Servicios, parte 2 |
| 5 | **Preguntas** | Las 4 FAQ de la home, un story cada una, con la respuesta directa en las dos primeras frases (ya están escritas en `src/lib/faqs.ts`) | FAQs |
| 6 | **Platiquemos** | Cómo empezar: el formulario del sitio, qué pasa después (correo de acuse, llamada), y qué NO es (no es soporte del SAT) | Cómo comprar / pedir cita |

**Sin destacado de precios**, a propósito. El lineamiento lo recomienda, pero
la decisión del sitio (2026-09-08) es que el taller no publica precio y la
capacitación empresarial se cotiza. Publicar "desde" en Instagram sería
publicarlo. El ebook ($297 MXN) va con precio dentro de "Cursos".

## Las 8 stories de "Empieza aquí"

Fijas en el destacado, en este orden: van del síntoma que todos reconocen
(respuestas de blog) a la objeción más dura (datos de clientes), y cierran
con la puerta al sitio. Cada story son 1 a 3 pantallas de texto grande, una
idea por pantalla, en la voz de Israel. Una herramienta: Claude. Se pueden
republicar como stories normales cuando haga falta llenar un día.

**1. Te contesta como blog porque le preguntas como a Google.**
Pantalla 1: "¿ChatGPT te da respuestas genéricas? No es la herramienta. Es
la pregunta." Pantalla 2: RCIF en cuatro renglones: rol, contexto,
instrucción, formato. Pantalla 3: la misma pregunta fiscal, mal y bien
hecha (una línea cada una). CTA: "Los 5 prompts completos, en el enlace del
perfil".

**2. La IA no sabe de tu despacho.**
Pantalla 1: "Resume una novela entera, pero no sabe que tu cliente es
RESICO." Pantalla 2: qué le tienes que dar antes de preguntar: régimen,
periodo, qué ya intentaste, qué esperas de vuelta. CTA igual.

**3. Pídele el fundamento y ve agarrando confianza.**
Sale casi textual de la encuesta (#26). Pantalla 1: "No le creas. Pídele el
artículo." Pantalla 2: el renglón que se agrega al prompt: "cita el
fundamento legal de cada afirmación y di cuando no lo tengas". Pantalla 3:
"Si no cita, no vale. Así se construye la confianza: verificando."

**4. Qué es un proyecto de Claude.**
Pantalla 1: "¿Escribes el mismo contexto cada vez? Para eso existe un
proyecto." Pantalla 2: qué se guarda ahí (instrucciones, el régimen del
cliente, tus formatos) y qué no (datos que no quieres que vivan en un chat).
Pantalla 3: "Una vez configurado, cada pregunta empieza a la mitad."

**5. No hay que saber programar.**
Pantalla 1: la cita de Daniel: "Para los que somos analfabetos en
programación…" Pantalla 2: lo que construyó: conciliación de bancos en
minutos, boletines en HTML, un juego para su nieto. Pantalla 3: "Tiene
despacho en Mexicali y tomó el reto en enero. Su video, en el destacado de
Colegas."

**6. Datos de clientes: qué sí y qué nunca.**
Sale del jueves del 24 de septiembre. Pantalla 1: "Sí: una pregunta con el
caso descrito. Nunca: el XML con RFC y nombre pegado en un chat público."
Pantalla 2: los tres niveles (chat público, proyecto con datos anonimizados,
canal controlado). Pantalla 3: "El secreto profesional no se rompe por usar
IA. Se rompe por dónde la usas."

**7. Del XML al Excel con un prompt.**
Lo pidieron tres veces y ya existe. Pantalla 1: el GIF de /recibos.
Pantalla 2: "El prompt completo y los pasos, sin muro:
soycontador.ai/recibos" (link sticker).

**8. Prompts que no desvaríen.**
Sale de la encuesta (#54). Pantalla 1: "Le preguntas, se tarda, y termina
donde empezó." Pantalla 2: por qué pasa (pregunta abierta, sin formato de
salida, sin criterio de terminado). Pantalla 3: el arreglo en un renglón:
"Responde en una tabla de tres columnas y para cuando la tengas." CTA: la
guía.

## Ritmo

- Los destacados 1, 2, 5 y 6 se arman una vez y se tocan cuando cambia algo.
- "Jueves" se actualiza cada semana con el tema (un story nuevo arriba, el
  viejo se quita).
- "Colegas" crece con cada testimonio.
- Las historias diarias del playbook (martes, jueves, sábado) siguen igual;
  esto es el menú fijo, no el día a día.

## Qué falta

- Producir las 8 stories y las 6 portadas en social-studio (`ig-story`).
- Confirmar que el nombre visible y la bio caben en los límites de
  Instagram (150 caracteres de bio).
- Cambiar el enlace del perfil al de la guía si hoy apunta a otro lado.
