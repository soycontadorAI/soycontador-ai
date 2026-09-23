# Métricas para vender la serie

Un canal con 129 suscriptores no se vende por el conteo. Se vende por dos
cosas que sí se pueden demostrar: **quién** está del otro lado (calidad) y
**hacia dónde** va (tendencia). Cada número entra con fecha de foto; lo que
salga bajo entra igual, con su fecha, porque una propuesta sin números
incómodos se lee como propuesta sin números.

## Qué exportar, de dónde, y para qué sirve

### YouTube Studio (canal y por video)

Por video: los últimos 8 Jueves emitidos y los 4 de octubre conforme salgan,
live y corte por separado.

| Métrica | Dónde en Studio | Argumenta |
|---|---|---|
| Suscriptores: total, netos 28 d y 90 d | Panel, Audiencia | Tendencia |
| Vistas 28 d y 90 d, canal y por video | Contenido | Tendencia (90 vs 28) |
| Horas de visualización 28 d | Panel | **Calidad**: horas por suscriptor es el dato que más dice de este canal |
| Duración media de visualización, por video | Contenido, Participación | Calidad: un live de 60 min con 15 min de promedio es una audiencia que se queda |
| Retención en 0:30, 5:00, 15:00 y en el minuto donde iría el segmento del patrocinador | Contenido, Participación, gráfica de retención | Calidad, y es lo que el patrocinador va a preguntar primero |
| Impresiones y CTR | Contenido, Alcance | Tendencia (el algoritmo ya recomienda o todavía no) |
| Fuentes de tráfico (búsqueda, sugeridos, externo, directo) | Alcance | Tendencia: tráfico por búsqueda es audiencia que llega con intención |
| Espectadores nuevos vs recurrentes | Audiencia | Calidad: recurrentes es "programa", no "video suelto" |
| Demografía: edad, género, país (share de México) | Audiencia | Calidad: el 45-65 y el share MX son el avatar que se promete |
| Pico de concurrentes en vivo y mensajes de chat, por live | Contenido, Analytics del directo | Calidad: gente que se sienta a la hora, no que cae por sugeridos |

### Instagram (Insights)

Seguidores, alcance 28 d, guardados por pieza (los últimos 8 carruseles o
reels). Guardados es la métrica que importa: un contador guarda lo que piensa
usar.

### Sendy (las cinco listas)

Suscriptores activos por lista (`general`, `live`, `ebook`, `flujos`,
`recibos`) y, de las últimas 5 campañas a `general` y a `live`, destinatarios,
aperturas y clics. Sendy no expone aperturas por API; se copian del panel
(Reports) o de la tabla `campaigns` por SSH al VPS. Los tamaños sí salen por
API (`api/subscribers/active-subscriber-count.php`), pero la llave vive como
variable sensible en Vercel y no se descifra con `vercel env pull`: se
consultan desde el servidor o desde el panel.

**Foto del 2026-09-20 (consulta directa a la base de Sendy en el VPS):** las
listas de la marca nueva son chicas (`general` 16, `live` 1, `ebook` 3,
`flujos` 1, encuesta 74), pero el aviso del jueves **sale a las listas de
contadores de TodoConta**: el del 17-sep llegó a 3,384 correos con 1,372
aperturas aproximadas. La lista grande es "Newsletter Blog (contadores)",
2,901 activos; `substack` tiene 2,283 y puede traslaparse. Para el
patrocinador, el número honesto es el de destinatarios por envío (Sendy
dedupe dentro de cada campaña), no la suma de listas.

La consulta que saca esa foto (la corre Israel desde su terminal; Sendy vive
en Docker en el VPS y la base es el contenedor `sendy-db`):

```
ssh vps-openclaw 'c=/docker/sendy/app/includes/config.php; u=$(grep -oP "dbUser\s*=\s*\x27\K[^\x27]+" $c); p=$(grep -oP "dbPass\s*=\s*\x27\K[^\x27]+" $c); d=$(grep -oP "dbName\s*=\s*\x27\K[^\x27]+" $c); docker exec sendy-db mariadb -u"$u" -p"$p" "$d" -e "SELECT l.id, l.name, SUM(s.confirmed=1 AND s.unsubscribed=0 AND s.bounced=0 AND s.complaint=0) AS activos, COUNT(s.id) AS total FROM lists l LEFT JOIN subscribers s ON s.list=l.id GROUP BY l.id, l.name ORDER BY l.id; SELECT id, title, recipients, FROM_UNIXTIME(sent) AS enviada, (LENGTH(opens)-LENGTH(REPLACE(opens,\",\",\"\"))+1) AS aperturas_aprox FROM campaigns ORDER BY id DESC LIMIT 5;" 2>&1'
```

Las aperturas son un conteo de IDs en la columna `opens`, así que son
aproximadas; el número exacto está en Reports del panel.

### GA4 (`G-TR03XNSEKC`)

Visitas a `/jueves` en 28 d, y los eventos `alta_newsletter` (por lista) y
`clic_puerta`. Sirve para mostrar que el programa tiene una página que
convierte, no solo un canal.

### Encuestas en vivo (octubre)

Dos preguntas en el live del 1-oct y dos en el del 8-oct, con la encuesta de
YouTube. Son el único dato que hoy no existe y que el patrocinador va a
querer:

1. ¿Tú eliges o recomiendas el software que usan tus clientes? (sí / a veces / no)
2. ¿Cuántos RFC administras? (1-10 / 11-30 / 31-100 / más de 100)
3. ¿Qué sistema contable usas hoy? (CONTPAQi / Aspel / nube / Excel / otro)
4. ¿Cuántos años llevas en el oficio? (menos de 5 / 5-15 / 15-25 / más de 25)

Mientras no exista ese dato, la hoja ejecutiva **no** afirma que la audiencia
"prescribe software". Se puede decir que es contador independiente que decide
su propio stack (eso sí sale del avatar y de la encuesta de agosto).

## Cómo se guarda: `metricas.csv`

Formato largo, una fila por dato, para que una métrica nueva nunca pida una
columna nueva:

| Columna | Qué va |
|---|---|
| `fecha_foto` | El día de la exportación. Una sesión de exportación = una fecha. Nunca se mezclan fotos de días distintos en el mismo bloque. |
| `fuente` | `youtube`, `instagram`, `sendy`, `ga4`, `encuesta`. |
| `ambito` | `canal`, `video:<id de YouTube>`, `lista:<nombre>`, `pagina:/jueves`, `live:<num de jueves>`, `cuenta` (Instagram). |
| `metrica` | Nombre corto en snake_case: `suscriptores`, `vistas`, `horas_visualizacion`, `duracion_media_min`, `retencion_pct`, `impresiones`, `ctr_pct`, `activos`, `aperturas_pct`, etc. |
| `periodo` | `28d`, `90d`, `total`, `live`, o el punto de retención (`0:30`, `5:00`). |
| `valor` | Número, sin unidades ni comas de miles. |
| `nota` | Lo que haga falta para leer el dato después (por ejemplo, "corte del 27-ago, el más visto"). |

Las vistas por video ya viven en `docs/jueves/episodios.csv` con su propia
fecha de foto; no se duplican aquí. Aquí van las métricas de canal, de lista y
de retención.

## Cómo se presentan en la hoja ejecutiva

Dos bloques, nunca uno solo:

- **Quién está del otro lado.** Duración media, retención, recurrentes,
  demografía, share MX, tamaño y apertura de `live`, chat, y los resultados
  de las encuestas de octubre. Más los porcentajes de la encuesta de agosto,
  presentados como lo que son: una muestra de 60 de la lista.
- **Hacia dónde va.** Suscriptores netos, 90 d contra 28 d, impresiones y
  CTR, el corte de 668 vistas del 27-ago, tráfico por búsqueda, horas de
  visualización por mes.

Regla: cada línea con número lleva "dato al [fecha]". Y la cifra que más
conviene que vea un patrocinador es horas de visualización por suscriptor,
porque es la que separa un canal chico con audiencia real de uno grande con
audiencia de paso.
