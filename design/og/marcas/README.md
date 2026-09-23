# Logotipos de terceros para las miniaturas

Vacío a propósito. Aquí van los SVG oficiales de las marcas que una miniatura
nombra (Anthropic, OpenAI, Google), y la plantilla los pinta al 7-8% de
opacidad como contexto de fondo.

**Por qué no están ya.** Un logotipo dibujado de memoria sale mal, y un logo
mal dibujado es peor que ninguno: el reference que originó esta miniatura
traía el logotipo de OpenAI pegado a la palabra "CLAUDE", que es de Anthropic.
Ese error, publicado, se lee como que no sabes de qué hablas.

**De dónde bajarlos.** Las dos empresas publican sus recursos de marca:

- Anthropic: https://www.anthropic.com/ (pie de página, "Brand")
- OpenAI: https://openai.com/brand/

Se guardan aquí con el nombre de la marca en minúsculas:
`anthropic.svg`, `openai.svg`.

**Cómo se conectan.** En `miniatura-jueves-10-alta.html`, cada marca es hoy un
`<span class="marca-ia">` con la palabra. Al haber SVG, se antepone dentro del
mismo span y hereda la opacidad:

```html
<span class="marca-ia m-claude">
  <img src="marcas/anthropic.svg" alt=""> Claude
</span>
```

**Lo que no se hace:** deformarlos, recolorearlos al verde de la marca ni
montarlos sobre el retrato. Al 8% son contexto; al 100% parecen patrocinio.
