# Regalo SITIO: lista y autoresponder de Sendy

Circuito (igual que RECIBOS): reel en IG → comenta SITIO → el DM pide el correo → entra a la lista
`sitio` (doble opt-in) → la confirmación lleva a soycontador.ai/sitio (la entrega abierta) y el
autoresponder manda el PDF adjunto.

Modelo: la lista 42 (3 Flujos Híbridos) y su autoresponder "Bienvenida" (correo 53, PDF adjunto).

## La lista (app 5, soycontador.ai)

| Campo | Valor |
|---|---|
| Nombre | `soycontador.ai - Sitio del despacho (prompt + 11 tips)` |
| Doble opt-in | Sí |
| `confirm_url` | `https://soycontador.ai/sitio` |
| `subscribed_url` | `https://soycontador.ai/sitio` |
| Campos personalizados | Ninguno |
| Asunto de confirmación | `Confirma tu correo y te mando el prompt` |

Cuidado: el redirect que importa es `confirm_url`, no `subscribed_url` (ver CLAUDE.md). En el panel
las dos casillas se ven igual.

### Correo de confirmación

Va sin acentos, igual que el de las otras listas de la marca.

```html
<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<title></title>
</head>
<body>
<p>Hola [Name,fallback=que tal],</p>

<p>Falta un paso. Confirma que este correo es tuyo y te mando en PDF el prompt para redisenar el sitio de tu despacho, con los 11 tips.</p>

<p><a href="[confirmation_link]">Confirmar mi correo</a>.</p>

<p>Es el mismo proceso con el que rehice la pagina de mi despacho con Claude Code: revisar lo que hay, respaldar el blog, pedir tres propuestas de diseno y quedarte con la que cuenta tu historia.</p>

<p>Si no fuiste tu, ignora este correo y listo.</p>

<p>Israel Castro<br/>soycontador.ai</p>
</body>
</html>
```

## El autoresponder

- Nombre `Bienvenida`, tipo drip, colgado de la lista `sitio`.
- Un correo, envío `immediately`, de `Israel Castro <israel@soycontador.ai>`, reply-to igual.
- Adjunto: el PDF que genera `pnpm guia:sitio` (en el panel: Attachments al editar el correo; por
  servidor: `/docker/sendy/app/uploads/5/attachments/a<id del correo>/`).
- Asunto: `Aquí está el prompt (y los 11 tips)`

```html
<html>
<head>
	<title></title>
</head>
<body style="box-sizing: border-box; margin: 0;">
<p>Listo. El PDF va adjunto a este correo.</p>

<p>Adentro está el prompt exacto con el que rehice la página de mi despacho en Claude Code, el prompt del efecto de la firma y los 11 tips. Todo vive también en <a href="https://soycontador.ai/sitio">soycontador.ai/sitio</a>, por si prefieres copiarlo desde el navegador.</p>

<p>Una sugerencia para que no se quede en descargas: <strong>empieza por el primer paso</strong>, el que revisa tu sitio actual y respalda tu blog. Aunque todavía no rediseñes nada, vas a saber qué tienes y qué está roto. A mí me salió un WordPress caído que nadie había notado.</p>

<p>Y la regla que no se negocia: nada de cifras ni testimonios inventados. Un cliente serio lo nota.</p>

<p>¿Prefieres que lo haga yo? Agenda 15 minutos y revisamos tu sitio juntos: <a href="https://calendar.app.google/LoP7NXbqineYAJNd6">elige tu horario aquí</a>.</p>

<p>¿Qué sigue?</p>

<ul>
	<li>Cada semana te mando algo relacionado con IA y contabilidad o fiscal. Cosas que probamos en mis <a href="https://soycontador.ai/capacitacion">talleres</a> con clientes o situaciones reales, no teoría.</li>
	<li>Tengo un <a href="https://soycontador.ai/ebook">ebook</a>, donde explico las bases de la IA, con conceptos contables.</li>
	<li>Los jueves a las 11 de la mañana, hora del centro, tenemos una cita en mi canal de <a href="https://www.youtube.com/@soycontadorAI">YouTube</a>. Sin cortes y sin que me salga a la primera.</li>
</ul>

<p>– Isca<br />
soycontador.ai</p>

<p></p>

<p><strong>PD.</strong> Si lo corres, contéstame este correo con el antes y el después de tu sitio. Me encantaría verlo.</p>

<p style="box-sizing: border-box;"></p>

<p style="box-sizing: border-box;"><span style="box-sizing: border-box; font-size: 12px;">Si deseas darte de baja, </span> <unsubscribe style="box-sizing: border-box;"><span style="box-sizing: border-box; font-size: 12px;">clic aquí</span></unsubscribe><span style="box-sizing: border-box; font-size: 12px;">.</span></p>
</body>
</html>
```

## Después de crear la lista

1. Copiar su ID público (en el panel: View all lists → la lista → el ID que aparece junto al nombre)
   a la variable `SENDY_SITIO_LIST_ID` del proyecto `soycontador-ai` en Vercel (Production y Preview).
2. En el DM de Instagram: palabra clave `SITIO`, pedir el correo y darlo de alta en la lista
   `sitio`. El endpoint del sitio ya la acepta: `POST https://soycontador.ai/api/newsletter` con
   `{ "email": "...", "lista": "sitio" }`. Ojo: al 2026-10-01 la lista de RECIBOS (43) no existe en
   Sendy, así que su automatización no sirve de plantilla hasta revisarla.
3. Probar el circuito completo con un correo propio: DM o formulario de /sitio → confirmación →
   aterriza en /sitio → llega la bienvenida con el PDF.
