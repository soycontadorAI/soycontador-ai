# Base de episodios de Jueves de ContadorIA

`episodios.csv` es la fuente única de qué se ha emitido y qué viene. Una fila
por pieza. Se edita a mano (o en Numbers/Excel y se guarda como CSV con UTF-8).

Vive aquí y no en el repo público `jueves-de-contadoria` porque trae temas
futuros, invitados por confirmar y vistas: nada de eso es para la audiencia.

## Columnas

| Columna | Qué va |
|---|---|
| `num` | Número de Jueves (el repo público ya usa esta numeración: live 07 = grafos). Vacío en piezas que no son Jueves. |
| `fecha` | Fecha de emisión, o tentativa si `estado` no es `emitido`. |
| `tipo` | `jueves` (live semanal), `ig` (carrusel o reel propio, no corte de un jueves), `taller`, `tutorial` (pieza para IG con entrega en el sitio), `sesion-externa` (en comunidad ajena). |
| `estado` | `idea` → `planeado` → `deck-listo` → `emitido`. Una idea sin fecha va con `fecha` vacía. |
| `serie` | Nombre de la serie, si la pieza es parte de una. Vacío si es suelta. |
| `titulo`, `subtitulo` | Los del deck. Si YouTube lo publica con otro título, se anota en `notas`. |
| `herramienta` | UNA por pieza (regla del sitio). Vacío si la pieza no es de herramienta. |
| `invitado` | Nombre completo, o vacío. |
| `live_url`, `live_vistas` | El live tal cual. Vistas al corte de la última actualización (ver abajo). |
| `corte_url`, `corte_vistas` | El corte editado que sale uno o dos días después. Suele tener más vistas que el live. |
| `deck` | Ruta al `.mdx` en presenter. |
| `cta` | A qué remata la pieza (curso, taller, lista). |
| `notas` | Lo que no cabe en las otras. Clips derivados, dudas, cambios de título. |

Las vistas son una foto del **2026-09-19**. Cuando se actualicen, cambiar esta
fecha y no mezclar fotos de días distintos en la misma columna.

## Encuesta

`encuesta-2026-08.md` lee la encuesta de agosto de 2026 al boletín (60 respuestas, crudos en `encuesta-2026-08-respuestas.csv`) y de ahí salen las ideas de octubre en adelante. Repetirla en enero con la misma estructura.

## Para agregar temas

Una fila con `estado = idea`, `titulo` y, si ya se sabe, `serie` y
`herramienta`. Lo demás vacío. Cuando se le pone fecha pasa a `planeado`.
