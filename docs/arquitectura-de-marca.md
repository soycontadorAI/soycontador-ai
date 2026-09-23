# Arquitectura de marca: qué propiedad sirve a qué avatar

**Fecha:** 2026-09-07 · Complementa [`avatar.md`](avatar.md).

---

## El problema que este documento resuelve

Hay dos marcas hermanas hablándole al contador mexicano sobre IA, con la misma
cara al frente:

- **TodoConta**, el software, con un canal institucional de YouTube por
  recrear (ver "El canal de YouTube cambió de dueño", abajo).
- **soycontador.ai**, con `@soycontador.ai` en Instagram (empezado de cero) y
  el canal de YouTube `@soycontadorAI` (nuevo, no heredó audiencia: ver abajo).

Mismo tema, misma cara, mismo avatar de descubrimiento. **Si nadie escribe quién
es dueño de qué, el contenido se va a producir dos veces y las dos propiedades
van a competir entre sí**, que es exactamente la lección que ya se pagó con las
redirecciones de Substack (documentada en
`todoconta-apps/docs/infra/redirecciones-substack.md`).

La regla de Wolf de "un canal, un avatar" existe para esto. Aquí se aplica.

---

## La división

> **TodoConta vende software. soycontador.ai vende a Israel.**

Es la línea más corta que separa las dos, y aguanta casi todos los casos:

| Si la pieza dice... | Es de |
|---|---|
| "aquí está la herramienta y así se usa" | TodoConta |
| "aquí está el método y quién te lo enseña" | soycontador.ai |
| Descarga masiva, CSF, 32-D, listas negras, el MCP | TodoConta |
| Capacitación, el Club, soluciones a la medida, el ebook | soycontador.ai |
| Jueves de ContadorIA (el programa) | Vive en el canal de la marca personal, con Israel de cara |
| Quién es Israel, su trayectoria, cómo trabaja | soycontador.ai |

**El caso que se sale:** Jueves de ContadorIA aparece en los dos lados. Es
correcto y no hay que arreglarlo: el programa es de TodoConta, y soycontador.ai
lo **enlaza** como prueba de que Israel hace esto cada semana. Lo que no puede
pasar es que soycontador.ai republique el contenido del programa, porque eso es
duplicación entre dominios, que es la regla que ya está en `CLAUDE.md`.

---

## Qué hace cada superficie

Aplicando las 4 S de Wolf (Searching, Streaming, Scrolling, Shopping) a esta
propiedad, y respetando que la conversión B2B ya está documentada en LinkedIn:

| Superficie | Avatar | Función | Cómo se mide |
|---|---|---|---|
| `@soycontador.ai` (Instagram) | **A** | Scrolling: audiencia fría, ruteo | Alcance, guardados, altas a la lista. **No leads de despacho.** |
| soycontador.ai (el sitio) | A en la home, **B** en su página | Searching para A, **verificación** para B | Altas a Sendy (A), formularios de cotización (B) |
| LinkedIn (`in/soycontadorAI`) | **B** | Autoridad y cierre B2B | Conversaciones iniciadas, llamadas agendadas |
| YouTube (`@soycontadorAI`) | A | Streaming: horas de contacto | Retención, subs. **De la marca personal desde 2026-09-15** |
| La lista de Sendy | A y B | Nutrición. El único canal propio | Aperturas, respuestas |

### La trampa de medir Instagram con la vara equivocada

`@soycontador.ai` es una cuenta nueva, y la tentación va a ser juzgarla por si
trajo un despacho. **No va a traer despachos**, y eso no significa que esté
fallando. Wolf es explícito: el Scrolling es descubrimiento e impulso, no
ticket alto. Instagram llena la parte de arriba; el socio de despacho se cierra
en LinkedIn, en el sitio y en una llamada.

Si se mide IG por leads B2B, la conclusión va a ser "no funciona" y se va a
apagar el canal que estaba haciendo bien su trabajo.

---

## El canal de YouTube cambió de dueño (decisión de Israel, 2026-09-15)

**Corregido el 2026-09-23 por Israel.** Esta sección decía que el canal de
`@todoconta` "pasó a la marca personal, heredado con su audiencia". No fue
eso, y la diferencia importa: el canal de la marca personal **no heredó
nada**, empieza casi de cero.

La historia real, en tres canales:

| Canal | Qué es | Audiencia |
|---|---|---|
| **Cuentas Claras** | El canal original de `@todoconta`, **renombrado**. Su avatar, el que le asignó el algoritmo de YouTube, resultó ser gente que busca trámites y burocracia, no contadores | **+4,000 subs** |
| **`@soycontadorAI`** | Canal **nuevo**, abierto para el programa de contadores. Nació con el handle `@TodoConta` y se le cambió para liberarlo | **129 subs**, 111 videos |
| **TodoConta** | **Todavía no existe.** Se crea cuando esté definido lo demás, y será solo del software: features, novedades, demos | 0 |

Por eso se liberó el handle `@TodoConta`: para que lo tome el canal del
software cuando se cree, y no se quede pegado al de la marca personal.

El estilo del canal (colores, fuentes, plantillas) se alinea a la identidad
de soycontador.ai a partir de las siguientes ediciones; el nombre y los
enlaces están en [`../youtube/canal.md`](../youtube/canal.md).

**Consecuencia práctica:** el canal de la marca personal se mide como lo que
es, un canal nuevo. Compararlo contra los 4,000 de Cuentas Claras es la misma
trampa que medir Instagram con leads de despacho. Y renombrarlo es gratis:
con 129 suscriptores no hay equidad de marca que perder.

**Cuentas Claras no tiene dueño en este documento.** Son 4,000 personas
reunidas alrededor de trámites y burocracia, que no es el avatar de ninguna
de las dos marcas de aquí. Mientras no se decida qué hace con él, es un
activo parado, no una tercera propiedad de esta arquitectura.

Sobre el handle: Israel quería `@soycontador.ai`, idéntico al de Instagram,
pero está tomado (posiblemente en el periodo de liberación de ~14 días). Si se
libera, el handle cambia y hay que actualizar `src/lib/site.ts`, que es la
única fuente de esa URL en el código.

El mismo movimiento aplicó a **LinkedIn** (`in/soycontadorAI`) y a **GitHub**
(`github.com/soycontadorAI`, rename de la cuenta) el mismo día. Con
Instagram, YouTube, LinkedIn y GitHub bajo el mismo nombre, la marca se busca
y se reconoce igual en las cuatro. Ojo con GitHub: los repos redirigen
mientras nadie reclame `soyisracastro`, así que los enlaces publicados se
actualizan y no se confía en el redirect. (La reserva del handle
`@soyisracastro` para un track de IA no fiscal, más abajo, queda como estaba
y ese track sigue parqueado.)

**TodoConta va a tener canal propio otra vez**, recreado desde cero y
meramente institucional: features del software, novedades y cómo sacarle
provecho. Nada de método ni de marca personal ahí. Con eso la división de
este documento queda intacta: TodoConta vende software (ahora también en su
canal), soycontador.ai vende a Israel (ahora con YouTube incluido).

---

## Los 11 puntos de contacto para cerrar un despacho

La regla 7-11-4 (unas 7 horas de contenido consumido, 11 puntos de contacto, 4
plataformas antes de una compra de ticket alto) es la justificación de por qué
esto no se cierra con un anuncio. Con los activos que **ya existen**, así se
arma la cuenta para un socio de despacho:

1. Un post de LinkedIn que le pega
2. Ve el perfil de Israel
3. Googlea el nombre y cae en soycontador.ai
4. Lee `/sobre-mi`
5. Lee la página de despachos
6. Baja la guía o el ebook
7. Recibe uno o dos correos de la lista
8. Ve un pedazo de un Jueves de ContadorIA (ya en el canal de la marca)
9. Le pregunta a un colega si lo conoce
10. Manda el formulario
11. La llamada de diagnóstico

Nueve de esos once ya existen. Los dos que faltan son **la página de despachos**
y **el caso con números del piloto**. No falta un canal nuevo, faltan dos piezas.

**Implicación para el rediseño en curso:** la página de despachos tiene que ser
larga y reenviable. El socio no decide solo: la manda a su gerente o a su socio
antes de contestar. Una landing corta de conversión rápida es el formato
equivocado para este avatar.

---

## El tercer track, y por qué conviene no abrirlo

`lineamientos-marca-personal.md` reservó `@soyisracastro` para una marca
personal de **IA aplicada no fiscal** (productividad, finanzas personales,
construir con IA), explícitamente separada de lo contable.

Ese track hoy **no existe** y no conviene abrirlo. Con TodoConta, soycontador.ai
y un Instagram nuevo ya hay tres propiedades pidiendo contenido semanal para un
solo Israel. Un cuarto avatar sin relación con el negocio es la forma más rápida
de que las tres primeras se queden a medias.

Queda parqueado, como ya estaba. Se anota aquí solo para que la siguiente
persona que lea los dos documentos no crea que se olvidó.

---

## Guardarraíles

- **La alianza con Fiscalistas.AI ya es pública** (derogado el 2026-09-08 lo de
  "cero menciones"). Se nombra cuando aporta claridad al lector, como en el
  curso que Israel imparte con ellos, y no como respaldo de marca. Lo que no
  cambia: soycontador.ai vende a Israel, y un curso alojado en otra plataforma
  se anuncia diciendo de quién es y dónde se paga.
- **Nada de republicar** contenido de todoconta.com en soycontador.ai. Se
  describe y se enlaza, con copy propio.
- **El ancla por hora no se publica** en ninguna superficie, ni siquiera "desde".
- **Un avatar por página.** Si una página del sitio le habla a A y a B a la vez,
  está mal y hay que partirla.
