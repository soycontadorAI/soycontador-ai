# LinkedIn: el playbook de esta marca

Aplica el lineamiento de [`lineamiento-daniela-luque.md`](lineamiento-daniela-luque.md)
(publicar antes de sentirse listo, pilares temáticos, el perfil como
escaparate, humanización, CTA en cada post) a soycontador.ai. El lineamiento
es consejo genérico de B2B; aquí se decide qué se toma, qué se adapta y qué se
tira.

**La premisa que ordena todo:** por
[`arquitectura-de-marca.md`](../arquitectura-de-marca.md), LinkedIn es la
superficie del **Avatar B** (dueño o socio de despacho de 5 a 50, que compra
por margen) y su función es autoridad y cierre B2B. La regla de un canal, un
avatar aplica aquí igual que en Instagram. El Avatar A vive en Instagram y en
YouTube, no acá.

**La ruta corta que se busca:** un socio de despacho ve un post que le pega,
entra al perfil, lo encuentra coherente, baja a `/despachos` o contesta el
cuestionario de `/diagnostico`, y esa llamada se cierra o no. Es la misma
cuenta de los 11 puntos de contacto de la arquitectura de marca, con LinkedIn
haciendo los pasos 1 y 2.

**La diferencia con Instagram, que cambia todo el tono:** para A, el sitio es
descubrimiento. Para B, es **verificación**. B casi no busca, pregunta: le pide
una recomendación a un colega del colegio o ve un post, y luego googlea el
nombre para confirmar que existe y que es serio. Por eso aquí pesa más la
prueba que la promesa, y por eso el contenido no puede ser solo tips.

---

## El perfil

Los campos concretos (titular, Acerca de, puesto actual, Destacados, aptitudes,
servicios, banner) están decididos y contados en el checklist de trabajo:
https://claude.ai/artifact/QBf62jCcfCQyzFKccB62sg

Lo que hay que saber aquí, porque condiciona el contenido:

- **URL:** `linkedin.com/in/soycontadorAI`, armonizada con Instagram, YouTube y
  GitHub desde el 2026-09-15. Es la que va en `src/lib/site.ts` (`sameAs`) y en
  el pie del sitio.
- **El banner, la foto, Destacados, aptitudes, recomendaciones y servicios son
  compartidos entre el perfil en español y el de inglés.** Solo se localizan
  titular, Acerca de y los títulos y descripciones de Experiencia y Educación.
  El avatar del perfil en inglés está sin definir.
- **Destacados es el menú**, igual que los destacados de Instagram: `/despachos`,
  el testimonio de Daniel Souza, el live de mayor alcance y la guía de
  `/audita`. Un post se hunde en dos semanas; un destacado se queda en la
  puerta.

---

## Los tres pilares

El lineamiento pide pilares para que te recuerden por algo. Estos salen de los
dolores documentados del Avatar B en [`avatar.md`](../avatar.md), no de lo que
sería cómodo publicar.

### Pilar 1. La cuenta que casi nadie saca

El dolor número uno de B dicho con sus palabras: *"trabajo más que nunca y gano
lo mismo que hace cinco años"*. Su despacho no da más de sí sin contratar.

Qué se publica: las horas que se van en captura y conciliación, lo que cuesta
la temporada en horas extra, la iguala que no sube mientras la nómina sí, la
rotación que se lleva a los juniors que capacitó, el despacho de al lado que
entrega más rápido y cobra más.

No es contenido de IA. Es contenido de **negocio de despacho**, y es el que
hace que B se sienta visto antes de que le vendas nada.

**CTA:** `/despachos`, o el cuestionario de `/diagnostico`.

### Pilar 2. Lo que la IA sí hace con trabajo fiscal real

La demostración, siempre sobre operación real: CFDI, descarga masiva,
conciliación, complementos de pago, DIOT, nómina timbrada. Nunca "la IA va a
cambiar la contaduría".

Dos guardarraíles que no se relajan:

- **Copiloto, no autopiloto.** Lo que se muestra señala y sugiere; el número
  final lo determina el contador. Esto no es prudencia de marca, es la línea
  que separa una herramienta de una responsabilidad profesional.
- **Una herramienta por pieza, a fondo.** Hoy el default es Claude. Nunca una
  pieza que hable de "la IA" en abstracto ni que compare tres herramientas.

**CTA:** la guía de `/audita`, o el live del jueves.

### Pilar 3. Contador que se volvió desarrollador

Es el pilar de humanización, y es el que hoy no existe. Ver la sección de
abajo, que es la parte más importante de este documento.

**CTA:** ninguno duro. Aquí se invita a seguir y a conversar, no a comprar.

---

## La humanización, que es el hueco real

La crítica más fuerte que recibe Bilbao en la charla es que hay muy poca
humanización en lo que publica, y admite que le resulta incómodo y que no
entiende por qué le importaría a su audiencia. **Ese es exactamente el estado
de este perfil hoy:** autoridad, herramientas, resultados, cero persona.

El argumento de por qué importa, y que aplica aquí con más fuerza que en el
caso de la charla: el Avatar B es un contador de carrera que llegó a dueño
porque era buen técnico, no administrador. Se identifica con alguien que se
equivocó y aprendió, no con un gurú que la tiene resuelta.

**El material ya existe y no hay que inventarlo:**

- Ciudad Altamirano, Guerrero. No es Ciudad de México, y eso es parte del
  punto: se puede construir esto desde un pueblo.
- Nueve años co-dirigiendo el despacho familiar, atendiendo personas físicas y
  morales. Conoce el cierre mensual porque lo hizo, no porque lo leyó.
- Meterse a programar de grande y entrar a una startup regulada, después de
  años de despacho. El costo real de eso, no la versión bonita.
- Hoy dirige el código con IA más de lo que teclea. Se cuenta como **evolución
  del oficio**, que es justo el modelo que este proyecto le propone al lector,
  jamás como confesión de carencia (ver la regla de posicionamiento en
  `CLAUDE.md`).
- Lo que no funcionó: herramientas que se construyeron y nadie usó, cosas que
  la IA hizo mal y se cacharon a tiempo.

**El límite, que el lineamiento también pone:** no es "qué desayuné". Es la
parte de tu historia que explica por qué haces lo que haces y que aterriza en
los otros dos pilares. Si un post humano no conecta con el despacho del lector,
sobra.

**Lo que NO se cuenta:** clientes identificables, cifras de terceros, nada que
toque el secreto profesional. Para B eso no es un detalle: es responsabilidad
frente a terceros, y es una de sus cinco objeciones.

---

## Toda pieza se hace en las dos direcciones

Decisión de Israel, 2026-09-22. Un tema se produce para A **y** para B, salvo
que genuinamente no le aplique a uno de los dos, y entonces se dice por qué.

No contradice la regla de un avatar por superficie: la refuerza. Lo que está
prohibido es publicar la pieza de A en la superficie de B, que es exactamente
lo que se evita teniendo las dos.

**El argumento es de costo.** Lo caro es la investigación, no el copy. El
carrusel "¿Qué hace la IA con tus datos?" pidió verificar la documentación de
Anthropic renglón por renglón; una vez hecho eso, el deck de B salió el mismo
día y usa la misma evidencia.

**Y no es traducir.** Del par que ya existe:

| | Avatar A (Instagram) | Avatar B (LinkedIn) |
|---|---|---|
| El gancho | ¿Qué hace la IA con tus datos? | Tu equipo ya usa IA. ¿Con la cuenta de quién? |
| El dolor | Me da miedo exponer a mis clientes | Mi gente mueve datos y yo respondo |
| El interruptor | Un dato que saber | La decisión de compra (cuenta de trabajo) |
| El cierre | Revisa tus contratos | Política escrita del despacho |
| El CTA | Comenta DATOS (ManyChat) | `soycontador.ai/diagnostico` |
| Piezas | 15 | 11 |

**El CTA nunca se porta.** "Comenta PALABRA" es mecánica de ManyChat y en
LinkedIn no existe. Aquí el cierre es el enlace, en el texto del post o en el
primer comentario.

**El formato tampoco.** LinkedIn sube un documento PDF, no piezas sueltas. En
`social-studio` eso es el formato `li-documento`: mismo lienzo de 1080×1350,
pero exporta el PDF y cambia la firma (`soycontador.ai`, no el handle de
Instagram) y el retrato (saco, no sudadera).

## Ritmo

Tres posts a la semana, que es el piso que recomienda el lineamiento. **No tres
al día:** esa cifra sale de dos cuentas con equipo dedicado, y el criterio que
la propia charla da es de sostenibilidad. Tres sostenidos le ganan a diez una
semana y cero las siguientes.

El motor ya existe y es el live. Cada Jueves de ContadorIA produce material
para los tres pilares sin trabajo extra de ideación:

| Día | Pilar | De dónde sale |
|---|---|---|
| Lunes | 1. La cuenta que casi nadie saca | Del trabajo con clientes reales y del backlog de ideas |
| Miércoles | 2. Lo que la IA sí hace | Adelanto del tema del jueves. Además empuja el registro |
| Viernes | 3. Detrás de cámara | Lo que pasó en el live: lo que falló, lo que preguntaron, lo que no supe contestar |

Los temas de los miércoles ya están calendarizados en
[`../jueves/episodios.csv`](../jueves/episodios.csv), que es la fuente única.

**El evento de LinkedIn de cada live se crea siempre.** Es el único formato
donde la plataforma regala distribución, y ya hay evidencia propia: el live del
XML fue el post de mayor alcance por mucho.

---

## Conversación

El lineamiento es tajante en dos cosas que no cuestan producción y que hoy no
se están haciendo:

**Responder siempre, todo.** Es la red donde se espera respuesta, y no
responder se lee como poco serio. Con este volumen de comentarios es media hora
a la semana.

**Comentar antes de escribir.** Antes de un mensaje directo a un socio de
despacho, aparecer en sus comentarios con algo que aporte. El mensaje frío sin
punto de contacto previo es lo que la charla describe como lo que no funciona.

**Se le puede escribir a cualquiera.** El ejemplo de la charla es haberle
escrito al director jurídico de una corporación global siendo un desconocido, y
que contestara. Aplicado aquí: socios de despachos, colegios de contadores,
proveedores de software fiscal. El acercamiento se apoya en algo concreto (un
post suyo, un dato del sector), nunca en un pitch.

**Sales Navigator queda parqueado.** El lineamiento lo recomienda para
prospección filtrada, pero es de pago y el cuello de botella hoy no es encontrar
prospectos, es publicar con consistencia. Se revisa cuando los tres posts
semanales lleven tres meses corriendo.

---

## Polémica: dónde sí y dónde no

La charla defiende la polémica porque divide la audiencia, filtra a quien no te
va a comprar y refuerza a quien sí. Es cierto, y aquí hay que partirlo en dos
porque Israel firma como contador público.

**Sí se opina fuerte** sobre el oficio y su transformación: despachos que
siguen capturando a mano, la iguala que no sube, cursos que no dejan nada,
vender horas en vez de criterio, el miedo a capacitar al equipo. Ahí la postura
incómoda es un activo y ya está escrita en `/despachos`.

**No se opina fuerte sobre criterio fiscal.** Una posición agresiva sobre una
deducción o una interpretación no es marca personal, es responsabilidad
profesional, y además contradice el guardarraíl de copiloto y no autopiloto.

**Ante la crítica**, el criterio de la charla sirve tal cual: si trae
argumentos, se aprende y se contesta. Si es insulto, el argumento ya perdió su
valor y no es contigo.

---

## Qué NO se toma del lineamiento

| Del lineamiento | Por qué no |
|---|---|
| Tres posts al día | Sale de cuentas con equipo dedicado. Aquí rompe la consistencia, que es lo único que de verdad importa |
| Sales Navigator | De pago, y el cuello de botella hoy es publicar, no prospectar |
| Polémica sin límite | Se acota a oficio y negocio, nunca a criterio fiscal |
| Hot seats públicos | Buena idea, pero el diagnóstico ya está productizado en `/diagnostico` y regalarlo en público devalúa la llamada. Se revisa después |

---

## Qué falta

- Ejecutar los 12 puntos del checklist del perfil (titular, Acerca de, puesto
  actual, Destacados, banner, aptitudes, servicios, proyectos).
- Definir el avatar del perfil en inglés. Mientras tanto, el arreglo provisional
  es pegar ahí el titular y el Acerca de en español, para no mostrar copy viejo.
- Producir el banner. Concepto "El asiento" decidido, hermano de
  `design/og/og-default.html`, a 1584 × 396.
- Pedir tres recomendaciones (un colega que usó las herramientas, alguien de
  Sofía, y José de Jesús Pérez Lara).
- Abrir el newsletter de LinkedIn con el boletín que ya se escribe.
