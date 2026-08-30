---
version: 1.0.0
name: Libro mayor × terminal
description: >
  Identidad de soycontador.ai. La retícula del libro mayor se encuentra con la
  terminal: el contador con traje de ingeniero, literal. Fondo claro frío con
  rayado de papel contable, verde registro como único acento, mono protagonista
  en cifras y folios, serif solo en citas en cursiva.
colors:
  bg: "#FAFBFD"
  surface: "#F1F4F9"
  surface-raised: "#FFFFFF"
  line: "#DFE6EF"
  line-strong: "#101828"
  ink: "#101828"
  ink-soft: "#3D4A5C"
  ink-dim: "#77839A"
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

## Elementos de firma

- **La póliza**: tarjeta con tabla contable (concepto/cargo), encabezado gris,
  sombra dura `6px 6px 0 var(--color-line)` y **doble raya de suma** bajo el
  total (utilidad `doble-raya`). Es el hero y el patrón para datos duros.
- **Folios**: toda sección abre con etiqueta mono en versalitas
  (`CUENTA 01 · QUIÉN SOY`); la parte resaltada va en accent.
- **Rayado de libro mayor**: fondo del body con línea horizontal cada 32px
  (casi imperceptible) + línea de margen vertical en el gutter izquierdo en
  secciones anchas.
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
