# Guía: 5 prompts para auditar tus XMLs con Claude

Lead magnet gratuito. Es lo que promete el formulario de la home y lo que
entrega el autoresponder de la lista `general` (39) de Sendy.

```
pnpm guia:prompts
```

## Cómo está armado

| Archivo | Qué es |
|---|---|
| `contenido.html` | Solo el cuerpo, sin estilos. Nueve `.page`, una por sección |
| `estilos.mjs` | La hoja de estilo. Importa tokens y fuentes de `ebook/lib/tema.mjs` |
| `generar.mjs` | Ensambla, verifica que nada se recorte, e imprime el PDF |

**Los tokens y las fuentes NO se copian: se importan del ebook.** Ese es el
punto. Antes esta guía vivía en `monetize-projects/` con el design system de
TodoConta (Inter, azul `#0B5FFF`), y la home la ofrecía con la identidad de
soycontador.ai. Ahora las dos piezas en PDF comparten un solo punto de
inyección, así que no pueden divergir.

Lo que sí vive aquí es la geometría de página, porque la guía usa un modelo
distinto al del libro: cada sección es una carta exacta (`.page` de 11in con
`overflow: hidden`) en vez de texto que fluye.

## El guardarraíl del recorte

Con `overflow: hidden`, el contenido que no cabe **desaparece en silencio**.
Por eso `generar.mjs` compara el alto real de cada página contra su caja antes
de imprimir y falla con la lista de páginas y cuántos píxeles se salen.

No es teórico: al cambiar de Inter a Space Grotesk (que es más ancha) las
páginas 5 y 6 se recortaron 19 y 8 píxeles. Se resolvió apretando el
interlineado del cuerpo a 1.46 y el de los bloques de prompt a 1.38, sin
encoger la letra.

## Publicación

El PDF se sube al bucket de Cloudflare R2 (prefijo `guias/`), que es de donde
lo sirve el autoresponder. El procedimiento y las credenciales están en
`monetize-projects/prompts-auditar-xml/README.md`, que se queda como registro
del origen del contenido.

## Antes de regenerar

- Cero raya larga «—» (`grep -c '—' contenido.html`).
- El handle de YouTube **sí** es `@todoconta`: es el canal real y no cambia.
  Lo que cambió es la marca del documento, que ahora es soycontador.ai.
- Verificar el render, no el HTML: `pdftoppm -png -r 80 <pdf> pagina`.
