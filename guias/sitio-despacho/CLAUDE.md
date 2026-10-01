# Guía: rediseña el sitio de tu despacho con IA

Regalo gratuito del reel del antes y el después de sicastro.com. Lo entrega el
autoresponder de la lista `sitio` de Sendy, como archivo adjunto; la página
abierta es `/sitio`.

```
pnpm guia:sitio
```

Sale `redisena-tu-sitio-con-ia.pdf` en esta carpeta (ignorado por git, como
todos los PDF de `guias/`). El nombre va sin eñe a propósito: viaja como
adjunto de correo y no todos los clientes decodifican bien un nombre con
acentos.

## Cómo está armado

| Archivo | Qué es |
|---|---|
| `contenido.html` | Solo el cuerpo, sin estilos. Siete `.page`, una por sección |
| `generar.mjs` | Llena los marcadores, verifica que nada se recorte e imprime el PDF |

**El prompt, el de la firma y los 11 tips no viven aquí.** Salen de
`src/lib/sitio-prompt.md` con el parser de `src/lib/sitio.mjs`, el mismo que usa
la página `/sitio`. `contenido.html` trae marcadores (`PROMPT`, `FIRMA` y
`TIPS:1-6` / `TIPS:7-11`, como comentarios HTML) que `generar.mjs` reemplaza;
si alguno queda sin llenar, el generador truena. Así el PDF y la página no
pueden decir cosas distintas.

La hoja de estilo se importa de `../prompts-xml/estilos.mjs`, como en
`flujos-hibridos`. Lo único propio está en `CSS_PROPIO` de `generar.mjs`: la
lista de tips y que el `<pre>` del prompt envuelva. Este segundo punto importa:
los prompts de esta guía llegan en párrafos (el parser los desenvuelve), no con
saltos a mano como en flujos, y sin `white-space: pre-wrap` el texto se sale de
la caja por la derecha sin que el guardarraíl lo note (solo mide lo vertical).

## Antes de regenerar

- Cero raya larga y cero comillas angulares (en `contenido.html` y en
  `src/lib/sitio-prompt.md`).
- Verificar el **render**, no el HTML: `pdftoppm -png -r 70 <pdf> pagina`.

## Al cambiar el PDF hay que resubir el adjunto

Igual que en flujos: el autoresponder no apunta a una URL, el PDF va adjunto y
Sendy lo guarda en el disco del servidor, por marca y por correo
(`/docker/sendy/app/uploads/5/attachments/a<id del correo>/`). Regenerar aquí
**no** actualiza lo que reciben los suscriptores: hay que copiarlo a esa ruta
(o resubirlo desde el panel de Sendy) y dejarlo como `www-data` con permisos
644.
