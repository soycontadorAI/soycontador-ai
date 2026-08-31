# Changelog · IA para Contadores

Registro de qué cambia en cada edición del ebook y por qué. Sirve para dos
cosas: dejar rastro interno y armar el aviso a quienes ya compraron.

La regla editorial que ordena todo esto son las tres capas del libro:

1. **Fundamentos** (tokens, contexto, prompting, alucinación, RAG, privacidad):
   universales a cualquier LLM. No caducan y no se atan a un proveedor.
2. **Particularidades por modelo**: se nombran como tales y se fechan.
3. **Autoridad en Claude**: aquí sí exhaustivo y al día.

---

## v2.0 · Segunda edición · Agosto 2026

162 páginas (antes 157 con el diseño anterior). Se regeneraron el PDF completo
y la muestra gratuita.

### Diseño: identidad nueva

El libro pasó a la identidad de **soycontador.ai** ("libro mayor × terminal").
No es un retoque de color: cambió el sistema completo.

| Antes | Ahora |
|---|---|
| Source Serif 4 en todo, `SF Mono` para código | Space Grotesk (texto y títulos), JetBrains Mono (folios, cifras, prompts), Source Serif 4 itálica solo en citas y descripciones |
| Escala de grises neutra (`#262626`, `#737373`, `#a3a3a3`) | Tokens de la marca: tinta `#101828`, `ink-soft` `#3D4A5C`, `ink-dim` `#5F6B80`, línea `#DFE6EF`, verde registro `#0A7B45` |
| Portada de texto centrado | Portada a sangre con rayado de libro mayor, isotipo de la cuenta T, doble raya de suma y franja de terminal al pie |
| Sin colofón | Página de registro de la edición: versión, fecha, alcance y nota de uso |
| Sin números de página | Folio al pie en toda la obra (la portada y el colofón van sin foliar) |
| Índice a secas | Índice con la descripción de cada pieza, en dos bloques (capítulos y apéndices) |
| Márgenes de 0.69 in, renglón de ~95 caracteres | Márgenes de 1.25 in, renglón de ~75 caracteres |
| Fuentes cargadas de Google Fonts | Fuentes embebidas en el archivo: se ve igual en cualquier lector, sin internet |

**Componentes nuevos**, que antes eran texto corrido:

- **Mito vs. Realidad** se dibuja como **cuenta T**: el mito del lado del cargo
  en tinta apagada, la realidad del lado del abono en verde. Es el isotipo del
  proyecto convertido en componente de lectura.
- **Lo que te llevas** se volvió una **póliza**: recuadro con encabezado, sombra
  dura y doble raya de suma al cierre.
- **Pruébalo tú mismo** se volvió un **bloque de terminal** oscuro, con los pasos
  numerados en verde.
- **Si quieres ir más lejos** es ahora una nota discreta con filete verde.
- Bloques de prompt y código en terminal oscuro; tablas con el filete doble del
  libro mayor.

**Bajo el capó** (sin efecto visible, pero importa para el mantenimiento):

- El diseño vive entero en `ebook/lib/tema.mjs` y la lectura del contenido en
  `ebook/lib/contenido.mjs`: los dos generadores comparten fuente y no pueden
  divergir.
- El libro salió de `newsletter-blog` y ahora vive en `soycontador-ai/ebook/`,
  junto a la página que lo vende. Los 21 capítulos dejaron de estar públicos en
  columna13.club (estaban con solo `noindex`, o sea gratis para quien tuviera la
  URL) y esas URLs redirigen a soycontador.ai/ebook.
- La **muestra gratuita ahora se genera del mismo markdown** que la edición
  completa. Antes tenía el texto copiado a mano dentro del script, lo que la
  dejaba atrás en cada corrección.
- Se usan pesos estáticos de las fuentes en lugar de las variables: Chrome
  exportaba cada instancia variable como un Type 3 por página (244 subconjuntos
  de fuente, con avisos de bounding box). Ahora son 28 subconjuntos TrueType y
  el archivo bajó de 9.9 MB a 8.5 MB (la muestra, de 2.0 MB a 1.4 MB).

### Contenido: lo que caducó

El libro se escribió con una regla de agnosticismo que se respetó, así que
envejeció bien: no hubo cifras de ventana de contexto que corregir ni funciones
muertas que retirar, y los capítulos 8, 9, 11, 12, 13, 14 y 17 se republican tal
cual. Lo que sí se movió:

| Dónde | Qué cambió | Por qué |
|---|---|---|
| **Cap. 7 · Temperatura** | Sección nueva, "El parámetro que desapareció". Se retiró la afirmación de que en la API "sí tendrás control directo sobre la temperatura". La escala numérica dejó de presentarse como universal. Un mito/realidad nuevo y un punto nuevo en "Lo que te llevas" | Era falso para los Claude de frontera, que dejaron de aceptar el parámetro y devuelven error. Sigue vigente en ChatGPT y Gemini. La divergencia se volvió la lección: los conceptos son universales, los controles no |
| **Cap. 2 · Modelos** | Se quitaron los números de versión de las cuatro familias y se describe el carácter de cada una. Entrada de Claude ampliada (adaptive thinking, y la escala Opus/Sonnet/Haiku). Nota fechada al cierre | El carácter de una familia dura; el número de versión caduca en semanas |
| **Cap. 3 · Cómo aprende** | Se quitó la lista de versiones concretas | Igual que arriba |
| **Cap. 4 · Costos** | Se retiró la conversión a pesos "al tipo de cambio actual" y los nombres de modelo en el comparativo de costo | Un tipo de cambio sin fecha envejece mal; el precio en dólares y la proporción entre modelos, no |
| **Cap. 5 · Contexto** | Reescrita la sección de memoria. Ahora distingue lo que el modelo no recuerda (nada) de lo que sí hace el producto (guardar notas y volvértelas a pegar), con la advertencia práctica para trabajo fiscal | La memoria persistente pasó de excepción a estándar en las tres herramientas grandes |
| **Cap. 6 · Razonar** | Párrafo nuevo: la frontera dejó de ser "dos tipos de modelo" para volverse un dial de esfuerzo dentro del mismo modelo. Nota fechada | Los modelos actuales deciden solos cuánto pensar; elegir "rápido o listo" ya no es elegir modelo |
| **Cap. 10 · RAG** | Sección nueva: "El escalón siguiente: conectar la IA a tus datos, no subírselos", con la definición de MCP y la advertencia honesta sobre secreto profesional | El libro no le daba al lector el vocabulario de lo que hoy se usa a diario |
| **Cap. 15 · Automatización** | La línea de tiempo dejó de estar anclada a años (2026/2027/2028) y ahora va por horizontes | El "ahora mismo (2026)" se vence solo |
| **Cap. 16 · Casos de uso** | Sección nueva de cierre: MCP y Artifacts como la versión sin fricción de los diez casos anteriores | Faltaba el puente entre "copio y pego" y "la IA consulta la fuente" |
| **Apéndice A · Glosario** | Entradas nuevas: MCP, Artifact, Esfuerzo (effort). "Modelo de frontera" se redefinió por posición y no por versión. "Temperatura" ahora advierte que no todos los modelos lo exponen | Terminología que el libro ya usa y que el lector necesita para entender la oferta actual |
| **Apéndice B · Recursos** | Refechado a agosto de 2026. Se retiró el taller vencido y el newsletter viejo; entraron soycontador.ai, Jueves de ContadorIA, la capacitación vigente, TodoConta y Google AI Studio | Recursos podridos y llamadas a una casa que ya no es la casa |
| **Introducción** | Dos correcciones de dedo: un plural y un enlace roto a todoconta.com | |

### Convención nueva contra el envejecimiento

Los datos que dependen del proveedor o del momento van marcados con
**"Verificado en \<mes\> de \<año\>"** y se renderizan como un bloque aparte. La
próxima actualización es un barrido de esos bloques, no arqueología.

### Puntuación: fuera la raya larga

Las 121 rayas «—» del libro se retiraron (decisión de Israel, 2026-08-31). La
regla de marca las prohíbe en contenido publicable porque se leen como señal de
IA, y la convención es el paréntesis. No fue un reemplazo mecánico:

- **Incisos entre rayas** (la mayoría): pasan a paréntesis.
- **Fichas del apéndice B**: la raya separaba nombre, liga y descripción; ahora
  la liga va con "en" y la descripción tras dos puntos.
- **Bandas de temperatura del capítulo 7** y remates del tipo "…profesional —
  eso es usar la IA": dos puntos, que es lo que la raya estaba haciendo ahí.
- **Contrastes** ("no es una limitación técnica — es la filosofía correcta"):
  coma.

Queda en cero en todo el contenido publicable, libro y sitio.

### Pendientes conocidos

- El Pack de Prompts se cita como **25 prompts** en tres lugares y como 24 en
  otro. Falta confirmar el número y unificar.
- Las secciones "Si quieres ir más lejos" de 16 capítulos, más el apéndice B,
  mandan al Pack de Prompts en nas.io. Si el Pack pasa a ser parte del Club,
  esas ligas hay que reencaminarlas.

---

## v1.0 · Primera edición · Marzo 2026

Publicación original: 17 capítulos y 3 apéndices, con la identidad del sitio
anterior.
