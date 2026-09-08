---
version: 0.1.0
name: Ronda 2 · movimiento
description: >
  Tres direcciones alternativas para soycontador.ai centradas en animación e
  interacción, no en cambiar la promesa. Las tres conservan los dos verdes de
  la marca. Sin decisión tomada: esto es para elegir.
fecha: 2026-09-07
estado: F elegida por Israel el 2026-09-07, nada aplicado al sitio todavía
---

# Ronda 2: hacer que el sitio se sienta vivo

La ronda 1 (agosto) decidió la IDENTIDAD: `design/DESIGN.md`, dirección B,
"Libro mayor × terminal". Esa decisión no está en discusión aquí.

Lo que esta ronda pone sobre la mesa es el RITMO: cómo se siente el sitio al
pasar el mouse y al bajar. Hoy el único movimiento es un `data-reveal` que
sube el contenido 18px al entrar en pantalla, y ya. El sitio se ve serio y se
siente estático.

Los tres mockups viven en `design/mockups/` y se comparan lado a lado en
`design/mockups/index.html`.

## Lo que NO cambia en ninguna de las tres

- **Los dos verdes.** `#0A7B45` sigue siendo el verde de acción (botones y
  llamados) y `#3DD68C` sigue siendo el de resultado y marcador. En la
  dirección E se invierte quién manda, porque sobre fondo oscuro el `#0A7B45`
  no se lee (regla que ya está en `DESIGN.md`), pero los dos verdes siguen
  siendo los mismos dos verdes.
- **El copy.** Las tres montan el texto real del sitio, no relleno. Así la
  comparación es de forma, no de contenido.
- **La accesibilidad.** Las tres respetan `prefers-reduced-motion`: con el
  sistema en "reducir movimiento" se ve el estado final, sin animación, y sin
  contenido escondido. Esto no es opcional y no se negocia al implementar.

## D · Asiento vivo

**La apuesta:** el movimiento ES la contabilidad. Nada se desliza porque sí:
las tarjetas se ASIENTAN, los sellos se ESTAMPAN, las cifras se SUMAN, el
marcador verde se PINTA como quien subraya con plumón, y la raya del
encabezado se DIBUJA de izquierda a derecha.

**Qué se toca:** solo CSS y un poco de JS. Cero cambios de paleta, de
tipografía y de estructura. Los componentes actuales (`Pila.astro`,
`Terminal.astro`, `Poliza.astro`) siguen sirviendo tal cual.

**A favor:** es la evolución honesta de lo que ya se decidió, no un borrón y
cuenta nueva. Riesgo bajo, se puede hacer por partes y cada parte se puede
revertir sola.

**En contra:** es la que menos se nota en una captura de pantalla. Su efecto
solo existe en movimiento, así que "se ve igual" es una crítica que va a
aparecer y hay que saber contestarla.

## E · Consola nocturna

**La apuesta:** el bloque de terminal, que hoy es un detalle, se vuelve toda
la página. Fondo `#0B111B`, retícula con un foco de luz que sigue al cursor,
tarjetas cuyo borde se enciende por donde pasa el mouse, marquesina de
trámites, consola que se teclea sola con barra de avance, e inclinación suave
en 3D de la consola del hero.

**Qué se toca:** todo. Es otra paleta y otro chrome; el sitio pasa a modo
oscuro completo. Habría que revisar de nuevo los contrastes de cada página,
las capturas de Open Graph y el favicon claro.

**A favor:** es, de lejos, la que se siente más viva y la que más se parece a
lo que un desarrollador reconoce como "producto moderno". Refuerza sin decir
una palabra el lado de "desarrollador de software".

**En contra:** dos cosas. Una, el modo oscuro completo aleja al lector
contable de 45 años que llega desde el buscador y no está en ese código
visual. Dos, es la más cara de mantener: cada página nueva nace con la deuda
de que hay que probarla en oscuro.

## F · Editorial cinético

**La apuesta:** el sitio como reportaje de revista. Tipografía display grande
(Instrument Serif), mucho aire, y el movimiento amarrado al SCROLL en vez de a
un temporizador. La sección "una mañana cualquiera" se queda fija en pantalla
y el usuario enciende los cuatro renglones al bajar, así que la animación no
le pasa por encima: la ejecuta él. Las seis puertas se recorren de lado, con
arrastre, y eso de una vez resuelve el móvil.

**Qué se toca:** la tipografía de titulares (entra una serif de display, que
hoy `DESIGN.md` prohíbe fuera de citas) y el ritmo de las secciones. La
paleta queda casi igual, con el papel un poco más cálido.

**A favor:** es la más "bonita" de las tres y la que mejor separa a este sitio
de cualquier landing de SaaS. La escena fija es el mejor formato que existe
para contar la tesis del proyecto (la máquina cierra tres renglones, el cuarto
es tuyo) sin escribir un párrafo más.

**En contra:** rompe una regla vigente de la identidad (serif solo en citas) y
la escena fija ocupa tres pantallas de scroll para decir una sola idea. Si el
lector viene con prisa, eso se paga.

## Decisión

**Israel eligió F el 2026-09-07.** D y E quedan como registro.

Con la dirección elegida, el mockup `f-editorial-cinetico.html` se completó
con las cinco secciones que faltaban (estaban fuera solo por economía de
comparador, para que las tres direcciones montaran el mismo subconjunto):

| Sección | Tratamiento en F |
|---|---|
| La vuelta | La objeción se APAGA (baja a tono tenue) y el giro "De hecho, es al revés" se ENCIENDE detrás. Se descartó tachar la cita: una raya se rompe al saltar de renglón y además grita. |
| La terminal | Deja de flotar y se vuelve figura de revista, encajada y con pie de foto ("FIG. 1 · Así se pide"). Eso justifica que el único bloque oscuro no rompa el papel. |
| Preguntas | Acordeón con la pregunta en display serif y una cruz que gira. Va con botones y no con `<details>`: el contenido de un details no existe mientras está cerrado, así que no hay de dónde animar la apertura. |
| La partida doble | La cuenta T del isotipo a tamaño de página: la raya de arriba se dibuja de lado a lado, la del centro baja, el cargo va apagado y el abono en tinta plena. |
| El cierre | El formulario de contacto en tarjeta blanca sobre papel cálido, con la casilla del boletín sin premarcar, como manda la regla de consentimiento. |

## Pendiente antes de implementar

- **Reabrir la regla de la serif.** `DESIGN.md` dice "nada de titulares serif".
  F la rompe a propósito: Instrument Serif es su voz. Hay que decidir si la
  regla se deroga o se acota a la identidad vieja.
- **El retrato.** En el mockup es un recuadro vacío. Va el
  `israel-cruzado.webp` que ya usa la vuelta hoy.
- **La escena fija en móvil.** Ocupa 280vh. Hay que probarla con el pulgar,
  no con el mouse.

## Recomendación original (antes de la decisión)

**D como piso, F como techo.** D se puede implementar esta semana sin riesgo y
ya sube el sitio dos escalones. F es el salto de verdad, pero requiere que
Israel acepte reabrir la regla de la serif y el costo de la escena fija.

E es la más impresionante y la que peor le queda al lector objetivo. Vale la
pena tenerla como referencia para una página suelta (`/herramientas` o el
Club, donde el que llega ya es técnico), no como el sitio entero.

Nada de esto se aplica hasta que Israel elija.

## Si se elige alguna: las reglas de movimiento que entrarían a DESIGN.md

1. **Nada dura más de 620ms.** Un asiento se registra, no se pasea.
2. **Todo entra desde abajo**, nunca de lado, salvo el barrido del renglón
   bajo el cursor (que entra por la izquierda, por donde se lee).
3. **El verde `#3DD68C` solo aparece cuando algo QUEDÓ HECHO.** Si se anima
   algo que no terminó, va en tinta.
4. **Una sola animación de cifra por pantalla.** Un número que sube dice "esto
   lo contó la máquina"; tres números subiendo a la vez no dicen nada.
5. **`prefers-reduced-motion` apaga todo y deja el estado final visible.** El
   contenido nunca depende de JS para existir.
6. **Nada que siga al cursor en pantallas táctiles.** Ahí no hay cursor y el
   listener solo gasta batería.

## Sobre impeccable (https://impeccable.style)

Se revisó antes de instalar nada. **No está instalado.**

Qué es: un paquete de npm (`impeccable`, v4.0.4, actualizado ayer) que instala
skills y comandos de diseño en el agente, entre ellos Claude Code. No es una
librería de componentes ni de animaciones: no trae nada que se pueda pegar al
sitio. Lo que trae son comandos de CRÍTICA y REFINAMIENTO (`/impeccable
polish`, `audit`, `typeset`, `distill`, `live`) más detección de
antipatrones, y espera dos archivos de contexto: `PRODUCT.md` y un `DESIGN.md`
en formato de Google Stitch.

Veredicto: **sirve, pero después, no ahora.**

- **Ahora no**, porque su fuerte es afinar una dirección que ya existe, y lo
  que falta en este momento es justamente escoger dirección. Para eso no hay
  herramienta que sustituya a Israel mirando los tres mockups.
- **Después sí**, cuando ya haya dirección elegida y esté implementada:
  `audit` y `polish` sobre el sitio real es exactamente el tipo de pasada que
  hoy no se hace.
- **Cuidado al instalar:** pide un `DESIGN.md` en formato Stitch, y este
  proyecto ya tiene un `design/DESIGN.md` propio, curado a mano, con las
  decisiones y el porqué de cada una. Si se instala, hay que verificar que no
  lo pise. Lo sano es dejarlo escribir en la raíz y no en `design/`.


## Bitácora de arreglos del mockup F

Se revisó el render con capturas, no leyendo el código, y salieron tres cosas
que en el editor se veían bien:

1. **El plumón se leía como tachado.** La banda verde iba del 55% al 88% de la
   caja de línea, o sea la mitad de abajo de la letra. Con la display serif a
   tamaño grande eso cruza la palabra por el centro. Ahora va del 34% al 93% y
   con tinta translúcida, que es como pinta un plumón de verdad.
2. **El giro de la vuelta tardaba 1.65 segundos en llegar.** Es la frase que
   carga el argumento y aparecía cuando el lector ya iba en el párrafo
   siguiente. Bajó a 1.1 segundos en dos tiempos.
3. **La galería arrancaba 26px a la izquierda del margen del texto.** No era
   el padding: `scroll-snap-type` alinea la primera tarjeta con la orilla del
   contenedor y se come el padding. Se arregla con
   `scroll-padding-inline-start`, no tocando el padding.

### Botones: la misma clase se veía distinta según la etiqueta (2026-09-07)

Israel lo cachó en el mockup: el botón del formulario de cierre no se parecía
al del hero ni al del lead magnet. Medidos, los tres daban **53, 48 y 49 px**
de alto, con dos paddings y dos tamaños de letra. Dos causas:

1. `.btn` no reseteaba lo que el navegador le pone a un `<button>`: borde
   `2px outset`, `cursor: default` y `line-height: normal`. Un `<a>` con la
   misma clase no traía nada de eso. El mockup no usa Tailwind, así que no
   había preflight que lo tapara.
2. El botón del lead magnet tenía **su propia definición** (`.form button`),
   paralela a `.btn`, con otros números. Dos fuentes de verdad para lo mismo.

Arreglado: `.btn` resetea `border`, `cursor`, `appearance` y fija
`line-height`, y `.form button` se borró (ese botón ahora usa `.btn`). Los
cuatro miden 51px. El `.btn-ghost` compensa en el padding los 1.5px de su
borde, para no quedar más alto que el sólido.

**En el sitio real** el borde ya lo resetea el preflight de Tailwind, pero
quedaba la diferencia de 2px por el `line-height`. Se le fijó `1.6` explícito
al `@utility btn` de `global.css`, más `cursor: pointer` y `text-align: center`.
