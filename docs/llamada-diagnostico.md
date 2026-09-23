# La llamada de diagnóstico: 15 minutos, precalificada

Cómo se llega a la llamada que agenda `/diagnostico`, y qué se hace en ella.
El objetivo no es "conocerse": es confirmar la ruta que el cuestionario ya
dio y cerrar ahí mismo cuando se pueda.

## Lo que ya sabes antes de entrar

El acuse del lead (copia oculta a Israel) trae, en `Lo que me contaste`:

| Campo | Qué te dice |
|---|---|
| **Perfil** y **Equipo** | A (independiente / solo) o B (despacho con equipo). Decide qué se vende. |
| **Uso de IA hoy** | El plan. Personal = hay tarea de cuenta; trabajo/API = ya está resuelto; "no sé" = alguien más decidió por él. |
| **Semáforo** | Rojo / ámbar / verde. Es el tono con el que abres. |
| **Sube** | Qué tan lejos ha llegado con datos reales. |
| **Tiempo** | Dónde le duele el cierre. Es el flujo que le enseñas. |
| **Ruta** | `taller Empieza aquí` o `programa de despacho`. Lo que el cuestionario ya le mostró como siguiente paso. |

Con eso, **no se pregunta nada de lo anterior en la llamada.** Repetirlo dice
que no leíste lo que mandó.

## El guion (15 minutos)

**0-2 · Abrir con su semáforo, no con tu presentación.**
"Vi tu diagnóstico: saliste en ámbar porque usan plan personal con resúmenes.
Eso tiene un arreglo de treinta segundos; el resto de la llamada va a lo que
sí te ahorra horas."

**2-8 · Dos preguntas puntuales según la ruta.** Solo dos. Son las que el
cuestionario no puede hacer porque piden un número o una decisión.

*Ruta taller (A):*
1. "¿Cuántas horas te lleva [el flujo de `Tiempo`] por cliente al mes, y con cuántos clientes?" (la cuenta se hace en voz alta: horas × clientes × 12)
2. "¿Lo quieres resolver tú, o quieres que alguien te lo deje corriendo?" (separa taller de soluciones a la medida)

*Ruta despacho (B):*
1. "¿Cuántas de esas horas son del equipo y cuántas tuyas?" (aritmética de `docs/avatar.md`: horas recortadas × contadores × costo hora × 12)
2. "¿Quién decide contigo?" (si hay socio o gerente, la propuesta se manda por escrito y reenviable; no se cierra en esta llamada)

**8-12 · Enseñar UNA cosa.** El flujo de `Tiempo`, con datos ficticios, dos
minutos. No un tour. Lo que se ve es lo que se compra.

**12-15 · La oferta, con el nombre puesto.**

| Ruta | Semáforo | Qué se ofrece | Cómo se cierra |
|---|---|---|---|
| Taller (A) | Cualquiera | Taller "Empieza aquí" ($697, precio público). Si en la pregunta 2 dijo "que me lo dejen corriendo": `/soluciones`, cotización. | Enlace a `/empieza` en el chat de la llamada. Se paga ahí. |
| Despacho (B) | Rojo | Primero la cuenta: es la urgencia. Luego el programa de despacho, cotizado por proyecto tras este diagnóstico. | "Te mando la propuesta hoy con tus números." Sin precio en la llamada: es high ticket (regla de CLAUDE.md). |
| Despacho (B) | Ámbar / verde | El programa de despacho, entrando por el flujo de `Tiempo`. | Igual: propuesta por escrito, reenviable al socio. |
| Cualquiera | Verde y "no la usamos" | Es el que menos prisa tiene. Taller si es A; si es B, la propuesta va con la cuenta anual de lo que hoy pierde sin IA. | Sin presión: la cuenta hace el trabajo. |

**Lo que no se hace:** decir precio del programa de despacho, prometer
resultados sin métrica, y alargar. Si a los 15 no cerró, se agenda la segunda
sesión ("agendemos 15 más y te enseño el flujo con tus datos") y se manda la
propuesta. Cinco minutos de colchón entre llamadas: si se empalma, segunda
sesión, no llamada de 40.

## La garantía (cuando exista la oferta recurrente)

Solo se puede prometer sobre lo que el diagnóstico dejó medido: **las horas
del flujo de `Tiempo` por contador**, hoy. La promesa se formula así:

> En 90 días (tres cierres: uno para implantar, dos para medir), el cierre
> de [flujo] baja de X a Y horas por contador. Si no, se devuelve.

90 y no 180: tres cierres alcanzan para medir y el comprador lo lee como
compromiso, no como "ya veremos". Aplica al acompañamiento recurrente (el
peldaño que `docs/avatar.md` marca como vacío), no al taller de 8 horas: un
evento no puede garantizar nada a 90 días porque tú ya no estás ahí.

## Agenda

Todas las llamadas de diagnóstico duran **15 minutos** (decisión de Israel,
2026-09-21), **con 15 de colchón** hasta la siguiente.

Ya está hecho: la cita de 15 existe en Google Calendar y `CALENDARIOS.default`
en `src/lib/site.ts` apunta a ella. De ahí se sirven `/diagnostico`, `LeadForm`
(home, contacto, soluciones, club), `FormCapacitacion` (capacitación,
despachos) y el correo de acuse de `/api/lead`: los seis lugares toman ese
único enlace. No hace falta una entrada `diagnostico` aparte mientras todas
duren lo mismo.

**Qué hace el colchón.** Una llamada que lo amerite se puede extender hasta
unos 30 minutos sin empalmar con la siguiente. Es holgura real, no una promesa:
**se acaba el día que la agenda se llene**. Cuando eso pase, lo que se agenda y
lo que dura tienen que volver a coincidir, y ahí es cuando conviene partir
`CALENDARIOS` por propósito.
