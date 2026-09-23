---
version: 2.0.0
name: Editorial cinético
description: >
  Identidad de soycontador.ai desde el 2026-09-07. El sitio como reportaje de
  revista: papel cálido, una serif de display grande con mucho aire, y el
  movimiento amarrado al scroll en vez de a temporizadores. Los dos verdes de
  la marca se conservan intactos (registro para la acción, plumón para lo que
  ya quedó hecho), y también la terminal oscura y el mono en cifras y folios.
colors:
  bg: "#FBFAF7"
  surface: "#F3F1EB"
  surface-raised: "#FFFFFF"
  line: "#E3E0D8"
  line-strong: "#14161A"
  ink: "#14161A"
  ink-soft: "#454A54"
  ink-dim: "#666B75"
  accent: "#0A7B45"
  accent-hover: "#066035"
  accent-contrast: "#FFFFFF"
  accent-soft: "#E4F4EB"
  marker: "#3DD68C"
  terminal-bg: "#0D1420"
  terminal-chrome: "#141D2E"
  terminal-ink: "#9FB0C9"
  terminal-bright: "#E8EDF5"
  terminal-dim: "#5A6B85"
  terminal-ok: "#3DD68C"
typography:
  display: "Instrument Serif 400 (titulares, ledes y remates; NUNCA 700)"
  body: "Space Grotesk Variable (400/500/700)"
  mono: "JetBrains Mono Variable (folios, cifras, chips, terminal)"
  serif-detail: "Instrument Serif itálica (citas)"
radius:
  sm: 6px
  md: 12px
  lg: 16px
  pill: 999px
container:
  narrow: 44rem
  default: 74rem
---

# Identidad "Editorial cinético"

Elegida por Israel el 2026-09-07 entre tres direcciones de movimiento (D, E y
F; ver `mockups/` y `MOVIMIENTO.md`). El mockup de referencia es
`mockups/f-editorial-cinetico.html`; ante cualquier duda visual, ese archivo
manda. Sustituye a la dirección B "Libro mayor × terminal", que estuvo en
producción del 2026-08-29 al 2026-09-07.

## Qué se conservó de B (y por qué)

No fue un borrón y cuenta nueva. Sobrevivió lo que estaba funcionando:

- **Los dos verdes**, sin tocar un dígito. `accent` (#0A7B45) marca acción y
  momentos de IA; `marker` (#3DD68C) subraya lo que ya quedó hecho.
- **La terminal oscura** y toda su paleta. Es el único lugar oscuro del sitio
  junto con la banda del lead magnet.
- **El mono en cifras, folios y chips.** Los datos duros siguen tabulando.
- **Space Grotesk en el texto corrido** y en el logotipo.
- **La cuenta T** de la partida doble, que ya era el isotipo hecho sección.

## Qué cambió

- **El papel se entibia.** De un blanco frío azulado (#FAFBFD) a un papel
  cálido (#FBFAF7). Los filetes dejan de ser azules.
- **La display pasa a una serif de revista.** Instrument Serif, grande, con
  aire. Es el cambio que más se nota y el que da el registro editorial.
- **Las formas se redondean.** Los botones son píldoras y las tarjetas suben
  a 12-16px de radio. Se fue la sombra dura desplazada, que era de B.
- **El movimiento se amarra al scroll**, no a temporizadores.

## LA REGLA DE LA SERIF, DEROGADA

B decía: *"la serif solo aparece en citas en cursiva. Nada de titulares
serif."* **Esa regla queda sin efecto desde el 2026-09-07, por decisión de
Israel.** En F la serif no es un recurso guardado para un momento: es **la voz
de los titulares**, y guardarla la desperdiciaría.

Lo que la sustituye:

- **La display es serif y va SIEMPRE en peso 400.** Instrument Serif no tiene
  bold. Pedir 700 hace que el navegador finja la negrita y deforma la letra.
  El contraste con el cuerpo no lo da el peso: lo dan el tamaño y el cambio de
  familia.
- **La itálica distingue la cita del titular.** Es la misma familia. Meter una
  segunda serif para las citas sería ruido, y por eso `--font-serif-detail`
  apunta a Instrument Serif y ya no a Source Serif 4.
- **El cuerpo sigue en Space Grotesk.** La serif no baja al texto corrido.

## La marca: "La contrapartida"

Sin cambios. El isotipo es la **cuenta T del libro mayor**: el cargo asentado
en tinta a la izquierda y, del lado del abono, el mismo asiento en verde. La
lectura es la tesis del proyecto: **la IA no es un total al pie del registro,
es la contrapartida que completa la partida doble.**

**Archivos** (en `public/`):

| Archivo | Uso |
|---|---|
| `favicon.svg` | Favicon principal: versión simplificada sobre cuadro `#0D1420` redondeado |
| `favicon.ico` | Respaldo multi-tamaño 16/32/48 |
| `apple-touch-icon.png` | 180×180, isotipo claro sobre terminal |
| `icon-192.png` · `icon-512.png` | PWA / `site.webmanifest` |
| `assets/isotipo.svg` | Isotipo completo para fondo claro (tinta + `#0A7B45`) |
| `assets/isotipo-oscuro.svg` | Isotipo para fondo oscuro (`#E8EDF5` + `#3DD68C`) |
| `og-default.png` | Open Graph, con logotipo completo |

**Logotipo**: dos líneas, siempre. `soycontador` en Space Grotesk 700 con
tracking -0.035em, y `.ai` en JetBrains Mono 700 en verde. El logotipo **no**
usa la serif: es la marca, no un titular.

**Reglas de uso**: mínimo 24px de alto para el isotipo completo; sobre fondo
oscuro va la variante clara con verde `#3DD68C`; el abono verde nunca cambia
de lado ni de color; nunca degradados, sombra difusa, rotación ni contorno;
sobre foto solo dentro de un bloque sólido; espacio libre de un renglón del
asiento por los cuatro lados.

## Elementos de firma

- **La portada** (`index.astro`, `.portada`): solo tipografía y aire, a
  pantalla completa. Los renglones del titular suben detrás de su propia
  máscara (`.reng`), como un renglón que se escribe. Suben **al montar** y no
  al entrar en pantalla: están sobre el pliegue y el H1 es el candidato a LCP.
- **La escena fija** (`.escena`): la sección se queda pegada y el scroll
  enciende los cuatro renglones de la mañana, uno por uno. Es la evolución de
  **la pila** de B: la misma mañana, ahora recorrida en vez de mirada. Aquí sí
  se justifica fijar porque es una narración con orden y remate (tres los
  cierra la máquina, el cuarto no). El contraste verde/tinta de la marca de
  cerrado es el argumento del bloque y no se toca.
  `Pila.astro` quedó sin montar; se conserva en el repositorio por si algún
  día se necesita el patrón apilado.
- **La galería de las puertas** (`.pista`): las seis ofertas se recorren de
  lado, con arrastre, snap, teclado y un empujón de 22px la primera vez que
  entra en pantalla. **No se fija**, y la razón es de contenido: la escena es
  una narración y esto es un menú. Fijarlo obligaría a pasar por las seis, que
  es lo contrario de lo que dice su propio titular.
- **El plumón** (`.hl`): el marcador verde se traza al entrar. Ver la sección
  de calibración más abajo, que es donde se equivoca uno.
- **La figura** (`.figura` + `.pie-figura`): la terminal no flota, va encajada
  con pie de foto, como una captura dentro de un reportaje.
- **La cuenta T** (`.bandos-par`): la raya de arriba se dibuja de lado a lado
  y la del centro baja. El cargo apagado, el abono en tinta plena.
- **El acordeón de preguntas** (`FaqBlock.astro`): la primera entra abierta y
  la respuesta SIEMPRE está en el HTML, oculta con CSS y no montada con JS.
  Media estrategia del proyecto es que un buscador o un LLM la pueda leer.
- **Folios**: toda sección abre con etiqueta mono en versalitas
  (`CUENTA 01 · QUIÉN SOY`); la parte resaltada va en accent.
- **La póliza** (`Poliza.astro`): sigue siendo el patrón para datos duros. La
  monta `/despachos` para la aritmética del costo anual.

## La imagen de Open Graph

Los OG (1200×630) NO se editan a mano: se generan desde las plantillas
`design/og/og-<nombre>.html` con puppeteer, y esas plantillas cargan las
fuentes del `node_modules` del proyecto, así que la imagen usa exactamente las
mismas que el sitio.

```bash
pnpm og              # todas las plantillas
pnpm og despachos    # solo og-despachos.html → public/og-despachos.png
```

El script (`design/og/render.mjs`) carga con `goto file://` y no con
`setContent`, porque las plantillas referencian fuentes y retratos por ruta
relativa. Trae el mismo guardarraíl que los generadores de guías: si el
contenido se sale de la caja, falla en vez de escribir un OG con el texto
amputado.

**Un OG por avatar, no uno por sitio.** `og-default.html` le habla al
**Avatar A** (la objeción de "esto es para los más jóvenes"), así que sirve
para la home y las páginas de A. Las páginas del **Avatar B** necesitan el
suyo: `/despachos` estuvo semanas sirviendo el default, o sea mostrándole al
socio de despacho un mensaje que no era para él. Una página de B que no pase
`image` a `BaseLayout` repite el error en silencio.

| Plantilla | Avatar | La usa |
|---|---|---|
| `og-default.html` | A | Todo lo que no pase `image` |
| `og-despachos.html` | B | `/despachos` |

La composición es la de la sección de la vuelta: **el retrato recortado
(`public/assets/israel-cruzado.webp`, con transparencia) aterriza en el canto
inferior de la tarjeta**, y ese borde es el suelo. Sin ese apoyo la figura
flota. Por eso NO se usa un retrato circular sobre el papel y por eso la
esquina superior derecha va vacía: ahí entra la cabeza.

Tres cosas que ya costaron una iteración:

- **Los cortes del titular van fijos con `<br>`.** Dejados al flujo, "tú."
  caía solo en un cuarto renglón y el plumón quedaba reducido a una manchita
  verde suelta.
- **El plumón necesita la misma calibración que en el sitio** (`0.22em` de
  despegue), por la misma razón: Instrument Serif deja hueco bajo la línea
  base.
- **El texto NO es el titular de la home.** Es la objeción de la vuelta y su
  respuesta ("Esto de la IA es para los más jóvenes..." / "De hecho, es al
  revés"), porque esa es la frase que le habla de frente al Avatar A, que es
  quien comparte el enlace. El titular del hero baja al pie, y ahí sustituye a
  la firma: el nombre ya lo lleva el logotipo, y en una tarjeta que se comparte
  pesa más una tesis que una credencial (decisión de Israel, 2026-09-07).
- **El plumón cubre la frase completa**, que es más de lo que hace en el sitio,
  donde marca fragmentos de dos o tres palabras. Es una excepción consciente y
  solo aplica aquí: la tarjeta necesita UN punto focal y la frase entera es el
  remate. No tomarlo como precedente para el sitio.

**Al reemplazarla, las redes cachean por URL.** Como el archivo conserva el
nombre, Facebook, LinkedIn y X van a seguir sirviendo la vieja hasta que se
les pida releer la página en sus depuradores de enlaces.

## Calibración del plumón (`--hl-alto` y `--hl-abajo`)

El marcador es un degradado anclado al **fondo de la caja de línea**, no a la
letra. Por eso hay dos variables:

- `--hl-alto`: el grosor de la banda.
- `--hl-abajo`: cuánto se despega del fondo de la caja.

`--hl-abajo` nació con la serif. **Instrument Serif deja cerca de 0.3em de
hueco bajo la línea base**, así que una banda anclada al fondo sale flotando
DEBAJO de la palabra en vez de encima. Los valores que funcionan:

| Contexto | `--hl-abajo` | `--hl-alto` |
|---|---|---|
| Texto corrido (Space Grotesk) | 0 (default) | 0.42em (default) |
| Frase de remate en sans, ~19px | 0 | 0.55em |
| Cualquier cosa en la display serif | 0.22em | 0.5em |

`global.css` ya aplica el par de la serif a `.titulo-xl`, `.titulo-lg` y
`blockquote`. Un `.hl` dentro de un titular con clase propia lo tiene que
declarar él. **Al tocar un `.hl`, mirar el render y no el código**: el
síntoma de una mala calibración es que la banda se lee como tachado o como
subrayado, y en el editor se ve idéntico.

## Reglas de movimiento

1. **Nada dura más de 620ms.** Un asiento se registra, no se pasea. Una
   secuencia de dos tiempos puede llegar a 1.1s, pero ningún tramo suelto pasa
   de 620ms.
2. **Todo entra desde abajo**, nunca de lado.
3. **El verde `marker` solo aparece cuando algo QUEDÓ HECHO.** Si se anima
   algo que no terminó, va en tinta.
4. **Una sola animación de cifra por pantalla.** Un número que sube dice "esto
   lo contó la máquina"; tres a la vez no dicen nada.
5. **`prefers-reduced-motion` apaga todo y deja el estado final visible.** El
   contenido nunca depende de JS para existir: por eso el escondite cuelga de
   `html.js-reveal` y la escena fija se vuelve una sección normal.
6. **Nada que siga al cursor en pantallas táctiles.**
7. **Una sola curva**: `--ease-f`, `cubic-bezier(0.16, 0.84, 0.28, 1)`.

## Botones

Un botón es un botón, lo escriba `<a>` o `<button>`. `@utility btn` resetea
`border`, `cursor` y fija `line-height`, porque el navegador le pone al
`<button>` cosas que al `<a>` no. Y `btn-ghost` lleva su contorno como
**anillo interior** (`box-shadow: inset`) y no como borde: un borde suma alto
y dejaba al ghost más alto que el sólido, lo que se veía donde conviven en
una fila flex. Descontarlo del padding no sirve, porque el navegador dibuja
1.5px como 1px y la cuenta se pasa.

## Reglas del sistema

- El verde registro (`accent`) marca acción y momentos de IA/automatización;
  nunca es decorativo de relleno.
- Cifras y datos duros SIEMPRE en mono.
- Los componentes consumen tokens semánticos de `src/styles/tokens.css`;
  prohibido el hex crudo en componentes. (Quedan algunos en las bandas
  oscuras, heredados; son colores de la familia terminal y deben migrar a sus
  tokens cuando se toque esa sección.)
- **Fondo liso.** Hubo un rayado horizontal cada 32px en B y se retiró
  (decisión de Israel, 2026-08-31). No reintroducir la textura.
- El ancho de lectura manda sobre la retícula: con el contenedor en 74rem, una
  columna de texto a dos columnas pasa de 90 caracteres por renglón. Por eso
  la bio de la home y el cuerpo de las páginas viven en `container-narrow`.

## Sombra desplazada: gris, siempre

La sombra dura (`Npx Npx 0`) que llevan las tarjetas, la portada del ebook
y el video es **gris**: `var(--color-line)`. Nunca `--color-accent-soft`.
Lo señaló Israel el 2026-09-20 al ver la imagen del taller con sombra verde:
el verde tenue venía de `.compra` en `/ebook`, que es el único sitio que
todavía la trae y queda pendiente de unificar junto con los demás
componentes repetidos (tarjeta con borde + sombra, lista numerada, ficha de
compra).
