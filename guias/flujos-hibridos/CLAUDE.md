# Guía: 3 flujos híbridos que te ahorrarán horas

Lead magnet gratuito. Es lo que promete `/flujos` y lo que entrega el
autoresponder de la lista `flujos` (42) de Sendy, como archivo adjunto.

```
pnpm guia:flujos
```

## Cómo está armado

| Archivo | Qué es |
|---|---|
| `contenido.html` | Solo el cuerpo, sin estilos. Nueve `.page`, una por sección |
| `generar.mjs` | Ensambla, verifica que nada se recorte, e imprime el PDF |

**La hoja de estilo no vive aquí: se importa de `../prompts-xml/estilos.mjs`.**
Las dos guías comparten geometría de página (cada sección es una carta exacta,
`.page` de 11in con `overflow: hidden`) y tokens, que a su vez salen de
`ebook/lib/tema.mjs`. Duplicar 300 líneas de CSS habría garantizado que las dos
guías se separaran visualmente en el primer ajuste.

Si algún día una guía necesita geometría propia, ahí sí se saca la hoja a un
módulo compartido con parámetros. Mientras las dos usen el mismo formato, la
importación directa dice la verdad: es el mismo diseño.

## De dónde viene

Vivía en `todoconta-apps/apps/landing` con la identidad de TodoConta (Inter,
azul `#0B5FFF`) y el pie de "Creador de TodoConta". Se rehizo aquí por lo mismo
que la guía de los 5 prompts: el imán es de la marca personal, así que el PDF
tiene que salir con la identidad de soycontador.ai.

El contenido de los tres flujos se conservó (los prompts son los mismos), pero
el copy se reescribió: la versión vieja mandaba a `todoconta.com/entra` y
firmaba como creador de TodoConta.

## El guardarraíl del recorte

Con `overflow: hidden`, el contenido que no cabe **desaparece en silencio**.
`generar.mjs` compara el alto real de cada página contra su caja antes de
imprimir y falla con la lista de páginas y cuántos píxeles se salen.

## Antes de regenerar

- Cero raya larga (`grep -c '—' contenido.html`) y cero comillas angulares.
- Verificar el **render**, no el HTML: `pdftoppm -png -r 60 <pdf> pagina`. En el
  editor un título se ve bien y en la página deja una palabra sola en el segundo
  renglón, que fue justo lo que pasó con la portada.
- El handle de YouTube es `@todoconta`: es el canal real y no cambia. Lo que
  cambió es la marca del documento.

## Al cambiar el PDF hay que resubir el adjunto

El autoresponder no apunta a una URL: el PDF va **adjunto**, y Sendy lo guarda
en el disco del servidor, por marca y por correo:

```
/docker/sendy/app/uploads/5/attachments/a53/3-flujos-hibridos.pdf
```

El `5` es la marca (soycontador.ai) y el `53` es el id del correo en
`ares_emails`. Regenerar el PDF aquí **no** actualiza lo que reciben los
suscriptores: hay que copiarlo a esa ruta (o resubirlo desde el panel de Sendy)
y dejarlo como `www-data` con permisos 644.
