---
version: 1.0.0
name: Libro mayor × terminal
description: >
  Identidad de soycontador.ai. La retícula del libro mayor se encuentra con la
  terminal: el contador con traje de ingeniero, literal. Fondo claro frío y
  liso, verde registro como único acento, mono protagonista en cifras y folios,
  serif solo en citas en cursiva. Lo contable lo dice la columna de cifras, no
  una textura.
colors:
  bg: "#FAFBFD"
  surface: "#F1F4F9"
  surface-raised: "#FFFFFF"
  line: "#DFE6EF"
  line-strong: "#101828"
  ink: "#101828"
  ink-soft: "#3D4A5C"
  ink-dim: "#5F6B80"
  accent: "#0A7B45"
  accent-hover: "#066035"
  accent-contrast: "#FFFFFF"
  accent-soft: "#E4F4EB"
  terminal-bg: "#0D1420"
  terminal-chrome: "#141D2E"
  terminal-ink: "#9FB0C9"
  terminal-bright: "#E8EDF5"
  terminal-dim: "#5A6B85"
  terminal-ok: "#3DD68C"
typography:
  display: "Space Grotesk Variable (700, tracking -0.02/-0.03em)"
  body: "Space Grotesk Variable (400/500)"
  mono: "JetBrains Mono Variable (folios, cifras, chips, terminal)"
  serif-detail: "Source Serif 4 Variable itálica (SOLO citas)"
radius:
  sm: 4px
  md: 8px
container:
  narrow: 46rem
  default: 70rem
---

# Identidad "Libro mayor × terminal"

Elegida por Israel el 2026-08-29 entre 3 direcciones (ver `mockups/`). El
mockup de referencia es `mockups/b-libro-mayor-terminal.html`; ante cualquier
duda visual, ese archivo manda.

## La marca: "La contrapartida"

Diseñada en Claude Design el 2026-08-30 sobre esta identidad. El isotipo es la
**cuenta T del libro mayor**: el cargo asentado en tinta a la izquierda y, del
lado del abono, el mismo asiento en verde. La lectura es la tesis del proyecto:
**la IA no es un total al pie del registro, es la contrapartida que completa la
partida doble.** Sin ella el asiento queda cojo.

**Archivos** (en `public/`):

| Archivo | Uso |
|---|---|
| `favicon.svg` | Favicon principal: versión simplificada (un renglón de cargo, abono completo) sobre cuadro `#0D1420` redondeado |
| `favicon.ico` | Respaldo multi-tamaño 16/32/48; el de 16px usa barras más gruesas |
| `apple-touch-icon.png` | 180×180, isotipo claro sobre terminal |
| `icon-192.png` · `icon-512.png` | PWA / `site.webmanifest` |
| `assets/isotipo.svg` | Isotipo completo para fondo claro (tinta + `#0A7B45`) |
| `assets/isotipo-oscuro.svg` | Isotipo para fondo oscuro (`#E8EDF5` + `#3DD68C`) |
| `og-default.png` | Open Graph, con logotipo completo |

**Logotipo**: dos líneas, siempre. `soycontador` en Space Grotesk 700 con
tracking -0.035em, y `.ai` en JetBrains Mono 700 en verde: la única parte que
cambia de familia, el guiño al dominio y a la terminal. En el header va con el
isotipo a la izquierda (`BaseLayout.astro`, viewBox recortado a `5 18 86 60`
para que el asiento ocupe la caja sin aire muerto).

**Reglas de uso** (del documento de marca):

- Mínimo **24px** de alto para el isotipo completo. Abajo de eso, la versión
  simplificada del favicon: la T y la contrapartida sobreviven, el detalle no
  hace falta.
- Sobre fondo oscuro, variante clara con verde `#3DD68C`; el `#0A7B45` **no se
  lee** sobre `#0D1420`.
- El abono verde **nunca** cambia de lado ni de color: siempre a la derecha,
  siempre verde.
- Nunca: degradados, sombra difusa, rotación, contorno, ni un color que no sea
  tinta o verde.
- Sobre foto: solo dentro de un bloque sólido de papel o terminal, nunca directo
  encima.
- Espacio libre: un renglón del asiento (la altura de una barra de cargo) por
  los cuatro lados. Nada entra ahí, ni el propio logotipo.

## Elementos de firma

- **La póliza**: tarjeta con tabla contable (concepto/cargo), encabezado gris,
  sombra dura `6px 6px 0 var(--color-line)` y **doble raya de suma** bajo el
  total (utilidad `doble-raya`). Es el hero y el patrón para datos duros.
- **Folios**: toda sección abre con etiqueta mono en versalitas
  (`CUENTA 01 · QUIÉN SOY`); la parte resaltada va en accent.
- **Fondo liso**. Hubo un rayado horizontal cada 32px en el body y se retiró
  (decisión de Israel, 2026-08-31): unos renglones sueltos leen como libreta
  común, no como hoja tabular. Lo que diría "libro contable" es la tabulación
  de cantidades en columnas, y de eso ya se encargan la póliza y las tablas en
  mono. No reintroducir la textura.
- **Terminal**: bloques oscuros (#0D1420) con la conversación MCP; verde
  `terminal-ok` para resultados. Es el ÚNICO lugar oscuro de la página junto
  con la banda del lead magnet.

## Reglas

- El verde registro (`accent`) marca acción y momentos de IA/automatización;
  nunca es decorativo de relleno.
- La serif solo aparece en citas en cursiva (`--font-serif-detail`). Nada de
  titulares serif.
- Cifras y datos duros SIEMPRE en mono.
- Sombras: duras y desplazadas (offset sólido), no difusas.
- Los componentes consumen tokens semánticos de `src/styles/tokens.css`;
  prohibido el hex crudo en componentes.
