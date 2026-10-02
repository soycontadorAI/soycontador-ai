---
version: 2.1.0
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

**Logotipo "Contrapartida"** (desde el 2026-10-01; elegido entre tres en
`design/mockups/logos/`, ver `MUNDOS.md` §8). El nombre vive **dentro** de la
cuenta T, en un solo renglón: la raya de la T cubre todo el logotipo y el asta
lo parte en dos. Del lado del cargo, `soycontador` en Space Grotesk 700 con
tracking -0.035em, en tinta; del lado del abono, `.ai` en JetBrains Mono 700,
en verde. Ya no es un ícono al lado de un texto: es una sola figura, y dice la
tesis sin una palabra (la IA es la contrapartida que completa la partida
doble). Sustituye al de dos líneas (`soycontador` con el `.ai` colgando
debajo), que Israel sentía como "el nombre de la página tal cual".

- Vive en `Nav.astro` (`.logo-cuenta`). La raya y el asta tienen el grueso del
  trazo de la letra en 700 (`max(2px, 0.15em)`); la raya sobresale del texto
  por los dos lados y el asta baja más que las letras, como en el isotipo.
- Solo usa `--color-ink` y `--color-accent`: en un mundo de noche se vuelve
  claro con el abono en #3DD68C sin una regla más.
- Entra una vez por sesión (la raya se traza, el asta baja, el cargo sube y el
  abono llega al último; `html.logo-visto` lo apaga en la segunda página).
- **Al bajar se compacta en el isotipo** (idea de Israel, 2026-10-01): el nombre
  se asienta en la cuenta. `soycontador` se aplana, se recorre a su renglón y
  se funde en los renglones del cargo (tinta); `.ai`, en los del abono
  (verde); el segundo renglón de cada lado se traza de izquierda a derecha y la
  raya se recoge. Queda la T con sus cuatro asientos, y al subir se despliega
  otra vez. Se compacta pasando 72 px y regresa abajo de 24 (entre las dos no
  cambia, para no parpadear). Todo es transform y opacity, así que el ancho no
  cambia y el menú no se mueve; lo vertical y lo horizontal de cada palabra
  llevan tiempos distintos, porque juntos la palabra solo se encogía. Menos de
  600 ms. Con reducir movimiento no se compacta.
- Mide 160 px en la cabecera y 146 en un teléfono de 390, junto al botón.
- Los cuatro renglones de cargo y abono siguen en **el isotipo**, que es el
  favicon y el ícono. Pendiente: las plantillas de Open Graph y los banners
  todavía traen el logotipo de dos líneas.

El logotipo **no** usa la serif: es la marca, no un titular.

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
- **Las hojas** (`Hojas.astro`, desde el 2026-10-01): la home es una pila de
  mundos. Cada acto es una hoja que sube desde abajo y se asienta sobre la
  anterior, que se queda fija y se hunde sobre una mesa de noche; al final la
  última se levanta y debajo está el pie. Ver la sección "Mundos".
- **El catálogo de cuentas** (`.catalogo`, desde el 2026-10-01): las seis
  ofertas como seis renglones numerados, todo a la vista, y una regla de
  lectura que enciende el renglón que cruza la línea de lectura. Sustituyó a la
  galería de lado (`.pista`), que dejaba ver tres puertas y media en escritorio
  y una en celular: la 5 y la 6 casi nadie las veía. Se eligió entre tres
  formas (catálogo, puertas y plana, `MUNDOS.md` §9) por ser la más legible
  para el lector de 45 a 65. **No se fija**, por lo mismo que no se fijaba la
  galería: es un menú, y fijarlo obligaría a pasar por las seis.
- **El plumón** (`.hl`): el marcador verde se traza al entrar; en la home lo
  pasa el lector con el scroll (avanza mientras el renglón cruza la zona de
  lectura). Ver la sección de calibración más abajo, que es donde se equivoca
  uno.
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
`design/piezas/og-<nombre>.html` con puppeteer, y esas plantillas cargan las
fuentes del `node_modules` del proyecto, así que la imagen usa exactamente las
mismas que el sitio.

```bash
pnpm piezas              # todas las plantillas
pnpm piezas despachos    # solo og-despachos.html → public/og-despachos.png
```

El script (`design/piezas/render.mjs`) carga con `goto file://` y no con
`setContent`, porque las plantillas referencian fuentes y retratos por ruta
relativa. Trae el mismo guardarraíl que los generadores de guías: si el
contenido se sale de la caja, falla en vez de escribir un OG con el texto
amputado.

**El retrato dice de qué avatar es la página, no quién la comparte.** La
sudadera es el registro del **Avatar A** y el saco el del **B** (ver el
guardarropa `saco-marino` en el banco de poses de
`todoconta-apps/apps/social-templates`). `/audita` es la guía gratis del
contador individual, así que va de sudadera aunque se destaque en LinkedIn:
la tarjeta describe a quién sirve la página. Y dentro del saco la pose
tampoco es indistinta: `/despachos` usa `present-saco` y `/diagnostico` usa
`invita-saco`, porque esa página pide dar un paso y los brazos cruzados leen
como autoridad en vez de como invitación.

**Sin folio en la esquina derecha.** Las tarjetas lo traían (`Capacitación in
company`, `Guía gratis · PDF`) y se quitó el 2026-09-23: repetía lo que ya dice
el titular y obligaba a bajar el retrato de 434 a 404px para no chocar con él.
Sin folio, el retrato vuelve al tamaño de `og-default`.

**Una pose por tarjeta, aunque compartan prenda.** `/despachos` y
`/diagnostico` viven juntas en Destacados de LinkedIn: con la misma pose se
leen como la misma tarjeta repetida. `/despachos` usa `present-saco` (explica
el programa) y `/diagnostico` usa `arms-saco`, porque su H1 es una pregunta
que interpela y los brazos cruzados acompañan eso mejor.

**La pose "apoyado" necesita una mesa, y su altura se mide.** En `/audita` el
retrato tiene las manos plantadas sobre una superficie que el recorte no trae,
así que descansan sobre el aire. La plantilla dibuja `.mesa`: una banda del
`surface` de la marca con su filete, **detrás** de la figura. No es un mueble,
es geometría.

Y por ir detrás, su altura no se elige, se mide. Con ese retrato a 434px de
ancho, las piernas terminan a 39px del borde inferior y los dedos llegan a 4px.
Con una banda de 48px las piernas asomaban **debajo** del tablero y la figura
flotaba sobre la mesa en vez de estar detrás de ella. A 38px el pantalón
termina justo sobre el filete y las manos quedan apoyadas encima. **Al cambiar
el retrato hay que volver a medir**, porque el número depende del recorte:

```python
# el último píxel opaco de las manos (los tercios) y de las piernas (el centro)
a = Image.open("public/assets/<retrato>").convert("RGBA").split()[3]
```

**Un OG por avatar, no uno por sitio.** `og-default.html` le habla al
**Avatar A** (la objeción de "esto es para los más jóvenes"), así que sirve
para la home y las páginas de A. Las páginas del **Avatar B** necesitan el
suyo: `/despachos` estuvo semanas sirviendo el default, o sea mostrándole al
socio de despacho un mensaje que no era para él. Una página de B que no pase
`image` a `BaseLayout` repite el error en silencio.

| Plantilla | Lienzo | Avatar | La usa |
|---|---|---|---|
| `og-default.html` | 1200×630 | A | Todo lo que no pase `image` |
| `og-despachos.html` | 1200×630 | B | `/despachos` |
| `og-audita.html` | 1200×630 | A | `/audita` |
| `og-diagnostico.html` | 1200×630 | B | `/diagnostico` |
| `banner-linkedin.html` | 1584×396 | B | El perfil de LinkedIn (se sube a mano) |
| `banner-youtube.html` | 2560×1440 | A | El canal de YouTube (se sube a mano) |
| `miniatura-jueves-10-alta.html` | 1280×720 | A | La miniatura del live #10 (se sube a mano) |

### La nomenclatura

El **prefijo** dice qué es la pieza y el meta `salida` dice a dónde va:

| Prefijo | Ejemplo | Sale a |
|---|---|---|
| `og-<pagina>` | `og-despachos.html` | `public/`, lo sirve el sitio |
| `banner-<superficie>` | `banner-linkedin.html` | `design/salidas/`, se sube a mano |
| `miniatura-<serie>-<n>` | `miniatura-jueves-10-alta.html` | `design/salidas/`, se sube a mano |

Lo que el sitio sirve sale a `public/`. Lo que se sube a mano a una plataforma
sale a `design/salidas/`, que no se publica.

La carpeta se llamaba `design/og/` y guardaba las tres cosas, así que el
nombre mentía. Es `design/piezas/` desde el 2026-09-24, y el comando es
`pnpm piezas`.

### Cuándo NO usar esto

**Las miniaturas semanales se hacen en Canva**, y está bien. Cambian cada
episodio y ahí la iteración rápida vale más que la exactitud al píxel.

Este sistema rinde en lo que se hace **una vez** y tiene que ser exacto al
sistema de diseño: las tarjetas de Open Graph y los banners de perfil, que se
ponen y no se vuelven a tocar en meses. `miniatura-jueves-10-alta.html` queda
como ejemplo trabajado y como plantilla de arranque si algún día conviene
automatizarlas, no como obligación semanal.

**Cada plantilla declara su lienzo y su destino**, porque no todas son Open
Graph:

```html
<meta name="lienzo" content="1584x396">
<meta name="salida" content="design/salidas/banner-linkedin.png">
```

Lo que no sirve el sitio no sale a `public/`: el banner de LinkedIn se sube a
mano al perfil, así que su destino es `design/salidas/`.

### Las miniaturas del Jueves

Dos reglas que deciden si funcionan, y las dos se olvidan:

- **El gancho NO repite el título.** El título dice de qué va el video; la
  miniatura da el dato que abre la curiosidad. En el #10 el título pregunta
  "¿Qué hace la IA con tus datos?" y la miniatura contesta con otra cosa:
  "5 años o 30 días". Repetir el título desperdicia la mitad del espacio.
- **Se verifica a 210px**, que es el ancho real en el feed. Por eso el gancho
  son dos renglones de cifras enormes: lo que a tamaño completo parece grande,
  a 210px desaparece. El remate y el folio no se leen ahí, y está bien; sirven
  a quien sí se detuvo.

```python
Image.open("design/salidas/<miniatura>.png").resize((210, 118))
```

### El banner de YouTube

La caja segura es **1546×423 centrada** en los 2560×1440 del archivo: YouTube
recorta distinto en TV, escritorio, tableta y teléfono, y ese rectángulo es lo
único que se ve en todos. Fuera de ahí no va nada. En la plantilla es
`.seguro`, con 44px de respiro interno, porque a ras del borde el primer
render cortaba la J de "Jueves".

Aquí "ContadorIA" sí va en caja alta y baja, así que el juego de palabras
sobrevive y lleva el plumón encima. En los folios del banner de LinkedIn no
cabe, por lo de abajo.

### El banner de LinkedIn

Dos cosas que no son evidentes y que hay que respetar al editarlo:

- **El cuarto izquierdo se queda vacío.** Ahí cae la foto de perfil, y el
  recorte cambia entre escritorio y móvil. La columna está declarada en el
  grid (`.hueco-foto`) justamente para que nadie la rellene "porque se ve
  vacía". Revisar en el teléfono antes de darlo por bueno: la columna de
  folios de la derecha es lo primero que se pierde.
- **Los folios van en versalitas por CSS, así que "Jueves de ContadorIA" no
  cabe ahí**: en mayúsculas sale "CONTADORIA", que mata el juego de palabras
  y se lee como "contaduría" mal escrita. Por eso ese renglón nombra la clase
  y no el programa.

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

## Mundos: día y noche (2026-10-01)

La home se lee en actos, y **cada cambio de acto es un cambio de mundo**. El
porqué, la auditoría y las direcciones descartadas están en `MUNDOS.md`.

- **Hay dos mundos y no más.** El día es el papel, con los tokens de siempre.
  La noche es la terminal extendida a una sección completa: sin hex nuevos, y
  lo que la familia terminal no traía (tarjeta, filete y tinta tenue sobre
  oscuro) se deriva de sus tokens con `color-mix` en `tokens.css`, con el
  contraste medido. Un tercer mundo (un verde a pantalla completa, por
  ejemplo) rompería la regla de que el verde de acción nunca es relleno.
- **Se pide con `data-mundo="dia|noche"`** en cualquier contenedor, y todo lo
  de adentro se recolorea sin tocar un componente. Los colores semánticos están
  registrados con `@property`, así que un cambio de mundo se puede interpolar.
- **Un cambio de mundo por acto, no por sección**: cuatro o cinco por página
  como máximo. El mapa de la home es día (portada), noche (escena), día (la
  vuelta, quién soy, testimonios), noche (las seis puertas) y día (asiento de
  cierre, preguntas, partida doble y cierre). Si cada sección cambiara, ningún
  cambio se sentiría.
- **Una isla no es una hoja.** La banda de la guía es noche dentro del día
  (`data-mundo` en la sección): dos hojas seguidas de 480 px se sentían como
  parpadeo. La terminal y el video son islas igual.
- **En la noche, la acción se lee en `terminal-ok`** con el texto del botón en
  `terminal-bg`. El #0A7B45 no va sobre la noche (3.46:1).
- **El plumón se luce en papel.** Sobre la noche tiene que ir al 40% para que
  la tinta clara se lea encima, y pierde el brillo. Por eso el asiento de
  cierre pasó al día (decisión de Israel, 2026-10-01).
- **La cabecera y el color del navegador siguen al mundo** que tienen debajo.
- **Con reducir movimiento, los mundos se pintan estáticos** por sección: el
  color no es movimiento, la transición sí.

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
8. **Lo amarrado al scroll no tiene duración ni usa `--ease-f`**: sigue al
   dedo, lineal (el plumón, la regla de lectura) o con la curva de su gesto
   (la escala de la hoja que se hunde). La curva de salida rápida, puesta
   sobre un gesto de scroll, hace que todo pase en los primeros píxeles. Lo
   disparado por tiempo sigue las reglas 1 y 7.

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
  prohibido el hex crudo en componentes. (La banda de la guía ya migró al
  volverse isla de noche, 2026-10-01. Quedan algunos en `NewsletterForm.astro`,
  heredados de cuando esa banda era el único oscuro; son colores de la familia
  terminal y deben migrar cuando se toque ese componente.)
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
