# Ebook "IA para Contadores"

El libro que se vende en `/ebook`. Vive aquí desde 2026-08-31; antes estaba en
`newsletter-blog`, que es donde se publicaba el newsletter, no donde se vende el
libro.

**Esta carpeta es la fuente de verdad del libro.** El borrador de marzo que
sigue en `monetize-projects/ebook-ia-contadores/chapters/` está obsoleto (sin
frontmatter, con acentos crudos); solo se conserva por su preproducción
(`outline.md`, `style-guide.md`, `marketing/`).

## Estructura

| Ruta | Qué es |
|---|---|
| `contenido/` | Los 21 archivos markdown: introducción, 17 capítulos y 3 apéndices |
| `imagenes/` | Las ilustraciones de capítulo (`cap-NN.webp`), embebidas en el PDF |
| `lib/tema.mjs` | **Todo el diseño**: tokens, tipografía embebida, componentes y el render a PDF |
| `lib/contenido.mjs` | Lectura del markdown y conversión a HTML |
| `generar-libro.mjs` · `generar-muestra.mjs` | Arman cada documento |
| `salida/` | Los PDF generados (fuera de git: se rehacen con un comando) |
| `CHANGELOG.md` | Qué cambió en cada edición y por qué |

```
pnpm ebook           # los dos
pnpm ebook:libro     # solo el completo
pnpm ebook:muestra   # solo la muestra gratuita
```

## Reglas

- **Fuera de `public/` y de `src/` a propósito.** El PDF es el entregable de
  pago: si vive en `public/` queda descargable desde el sitio. Los capítulos
  estuvieron públicos en columna13.club con solo `noindex` y eso es justo lo que
  se cerró; no lo reabras.
- **El diseño se toca en `lib/tema.mjs` y en ningún otro lado.** Sus tokens
  replican `src/styles/tokens.css`; si allá cambia un color, aquí también.
- **La muestra se genera del MISMO markdown** que la edición completa (antes
  tenía el texto copiado a mano y se quedaba atrás en cada corrección). Lo único
  que cambia es qué capítulos entran: la constante `ABIERTOS` de
  `generar-muestra.mjs`.
- **Fuentes estáticas, no variables.** Chrome exporta cada instancia de una
  fuente variable como un Type 3 distinto por página (244 subconjuntos en la
  primera prueba). Con pesos estáticos son 28 subconjuntos TrueType.
- **`puppeteer` y `marked` van fijos** (24.40.0 y 17.0.5): son los que
  produjeron la edición vigente y subirlos cambia la salida.

## Convención antienvejecimiento

Los datos que dependen del proveedor o del momento se escriben así y el
generador los pinta como bloque aparte:

```markdown
**Verificado en agosto de 2026.** Lo que se está afirmando aquí.
```

Actualizar el libro es barrer esos bloques, no hacer arqueología.

## Estructura fija de cada capítulo

El generador convierte estas secciones en componentes de la marca, así que los
títulos son contrato:

| En el markdown | En el PDF |
|---|---|
| `## Mito vs. Realidad` (párrafos o lista) | Cuenta T: mito en el cargo, realidad en el abono verde |
| `### Lo que te llevas` | La póliza, con doble raya de suma |
| `### Pruébalo tú mismo` | Bloque de terminal oscuro con pasos numerados |
| `### Si quieres ir más lejos` | Nota con filete verde |

## Relación con la página de venta

`src/lib/ebook.ts` tiene el temario que se publica en `/ebook`. Es **copy de
venta**, deliberadamente distinto de las `description` del frontmatter (que son
notas internas del libro). Si cambia un título de capítulo aquí, hay que
reflejarlo allá a mano.
