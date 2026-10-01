---
version: 0.1.0
name: Ronda 3 · mundos
description: >
  Auditoría del diseño en producción (2026-10-01) y tres direcciones de
  movimiento en las que cada cambio de acto de la home es un cambio de mundo
  (día y noche). Mismo sistema de diseño, mismo copy: solo UX/UI.
fecha: 2026-10-01
estado: >
  Israel eligió G · Hojas, el logotipo A · Contrapartida y el Catálogo para
  "Qué encuentras aquí" el 2026-10-01. Implementado en la rama
  feat/mundos-hojas (sección 10).
---

# Ronda 3: mundos

La ronda 1 decidió la identidad y la ronda 2 el ritmo (F, "Editorial
cinético", en producción desde el 2026-09-07). Esta ronda no toca ninguna de
las dos: **mismos tokens, mismas fuentes, mismo copy**. Lo que explora es cómo
se pasa de una sección a otra, con una idea central que pidió Israel: que al
cruzar de sección el visitante sienta que entra a otro mundo, de claro a
oscuro y de regreso, y que eso se note hecho por un desarrollador con buen
gusto.

Los prototipos están en `design/mockups/` (G, H, I) y se comparan en
`design/mockups/index.html`. No son maquetas escritas a mano: se arman sobre
el HTML que Astro compila para `/` (ver "Cómo se arman"), así que el copy, el
CSS y el comportamiento son los del sitio, más una capa encima.

## 1. Auditoría del sitio en producción

Se revisó el render, no el código: capturas de https://soycontador.ai a 1440 y
a 390 px recorriendo la página completa, más una lectura del HTML y de los
pesos servidos.

### Lo que está muy bien, y no se toca

- **La portada.** Tipografía y aire, la serif grande, y los renglones que
  suben al montar sin costar LCP. Es la decisión más fuerte del sitio.
- **La escena fija** como narración con remate (tres renglones de la máquina,
  el cuarto tuyo). El estado en espera va por color y no por opacidad, y con
  reducir movimiento se vuelve una sección normal.
- **El peso.** La home sirve unos 13 KB de CSS y 3.5 KB de JavaScript
  (comprimidos), sin librerías, y el video no carga nada de YouTube hasta el
  clic. Eso ya es una declaración de desarrollador, y cualquier propuesta de
  movimiento tiene que respetarla.
- **La accesibilidad**: 100 en Lighthouse, contrastes calculados, el
  acordeón con la respuesta en el HTML.
- **El sistema**: folios mono, la cuenta T, los dos verdes con reglas claras.

### Lo que hay que resolver

| # | Hallazgo | Evidencia | Qué hace la ronda 3 |
|---|---|---|---|
| 1 | **Monotonía de superficie.** 10 de las 12 secciones viven sobre el mismo papel #FBFAF7. Las únicas fronteras son la banda de la vuelta (#F3F1EB, a 3% del papel: casi no se lee) y la banda de la guía. En 11,300 px de página (12,500 en celular) el lector no sabe en qué parte va, y todo pesa igual. | `capturas/auditoria-2026-10/00-recorrido-escritorio.png` y `06-recorrido-movil.png` | Es el motivo de los mundos: cuatro actos, y cada cambio de acto se siente. |
| 2 | **Cortes duros y aire muerto.** Al soltarse la escena fija quedan unos 250 px de papel vacío antes de la vuelta (la capa fija se despega con su contenido centrado). Hay otro hueco de unos 130 px entre preguntas y la partida doble. | `capturas/auditoria-2026-10/01-aire-muerto-tras-la-escena.png` | Las fronteras de mundo absorben esos huecos: lo que se ve ahí es la transición. |
| 3 | **La escena cuesta 320vh** (2,880 px en escritorio) para cuatro renglones: unos 650 px de scroll por renglón. Quien baja con prisa siente que la página no avanza. Ya lo había advertido `MOVIMIENTO.md`. | Escena de 2,880 px medida | No se cambió en los prototipos, para comparar igual. Recomendación aparte: 240 a 260vh. |
| 4 | **Dos negros.** La banda de la guía usa #14161A (tinta neutra) y la terminal y el video usan #0D1420 (azul terminal); los campos de la guía son azules sobre el negro neutro. La guía además trae seis hex crudos que `DESIGN.md` ya marca como deuda. | `capturas/auditoria-2026-10/03-dos-negros-y-viuda-en-la-guia.png`; `index.astro` (`.guia`), `NewsletterForm.astro` | Una sola noche: la de la terminal. La guía toma el fondo del mundo. |
| 5 | **La cabecera es una banda blanca fría** (#FFF) sobre papel cálido, opaca y siempre clara, aunque pase sobre la banda oscura. | Todas las capturas | Papel translúcido con desenfoque que toma el mundo de lo que tiene debajo. |
| 6 | **El color del navegador es azul marino** (`theme-color` #0D1420) en una página de papel: en Android la barra del sistema queda oscura sobre un sitio claro. | `BaseLayout.astro` | El color del navegador sigue al mundo. |
| 7 | **La galería se corta en seco** a 128 px de la orilla derecha en 1440, por los márgenes simétricos del contenedor. Se lee como recorte accidental, no como carrusel. | `capturas/auditoria-2026-10/02-galeria-cortada-en-seco.png` | Sangra hasta el borde derecho y arranca alineada al texto. |
| 8 | **Viuda en el titular de la guía**: "Claude" cae solo en el segundo renglón. | `capturas/auditoria-2026-10/03-dos-negros-y-viuda-en-la-guia.png` | `text-wrap: balance`. |
| 9 | **El plumón en texto corrido se lee como subrayado grueso** ("Tu experiencia contable"): con `--hl-abajo: 0` la banda queda bajo la línea base. Es la trampa que `DESIGN.md` documenta para la serif, ahora del lado de la sans. | `capturas/auditoria-2026-10/04-plumon-como-subrayado.png` | Fuera del alcance (es calibración del sistema). Sugerencia: medir un `--hl-abajo` pequeño para Space Grotesk. |
| 10 | **En celular la cara de Israel no aparece en toda la home**: el retrato de la vuelta se esconde bajo 900 px. Para una marca personal, la única cara que ve quien llega del celular es la de Daniel. | `capturas/auditoria-2026-10/06-recorrido-movil.png` | Decisión de Israel (el código dice que fue a propósito). Se anota, no se cambia. |
| 11 | **Comentarios internos en el HTML publicado.** Siete bloques `<!-- -->` de `index.astro` (notas de diseño y estrategia) viajan a producción y se ven en "ver código fuente", incluidos los rastreadores de LLM. | `curl https://soycontador.ai/` | Pasarlos a `{/* */}`, que Astro no emite. Menor, pero es de desarrollador. |
| 12 | **El botón y el campo de la guía son rectángulos** (radio de 6 px) en un sitio donde todos los botones son píldoras (`DESIGN.md`: "los botones son píldoras"). Es el único que se sale. | `capturas/auditoria-2026-10/03-dos-negros-y-viuda-en-la-guia.png` | Fuera del alcance de la ronda; anotado para cuando se migren los hex de la guía. |
| 13 | **"Baja" se queda a la vista** arriba a la derecha cuando la escena ya empezó. | `capturas/auditoria-2026-10/05-indicador-baja-visible.png` | Menor. En las tres direcciones lo tapa la transición de mundo. |
| 14 | **El movimiento de hoy es casi todo "aparecer"**: subir 16 px con opacidad, bloque por bloque. Es correcto pero genérico, y no hay continuidad: cada bloque aparece solo. | `global.css` (`[data-reveal]`) | Los mundos dan la continuidad que falta. |

## 2. La idea: cuatro actos, dos mundos

**Día** es el papel, con los tokens tal cual. **Noche** es la terminal (la
misma paleta de `Terminal.astro` y de la banda de la guía) extendida a una
sección completa. No hay tokens nuevos: donde la familia terminal no traía un
valor, se deriva de sus propios tokens con `color-mix` y se mide.

| Acto | Secciones | Mundo | Por qué |
|---|---|---|---|
| 1 · La promesa | portada | día | La tesis se dice a plena luz. |
| La máquina | escena ("Lo que pasó antes de tu primer café") | noche | Pasó de madrugada. El cuarto renglón, el tuyo, es de papel: tu criterio es de día. |
| 2 · La persona | vuelta, quién soy, testimonios | día | La voz de Israel y la de los colegas. |
| 3 · El escaparate | las seis puertas, la cita, la guía | noche | Las puertas como vitrinas encendidas; la cita, en escena. |
| 4 · La decisión | preguntas, partida doble, cierre | día | Se decide con claridad. |
| Pie | | noche | Cierre de la jornada. |

El mapa es el mismo en las tres direcciones, para que la comparación sea del
mecanismo y no de dónde cae la noche.

### La noche, medida

| Papel | Valor | Contraste |
|---|---|---|
| Fondo | `terminal-bg` #0D1420 | |
| Superficie | `terminal-chrome` #141D2E | |
| Tarjeta | `terminal-ink` al 8% sobre chrome (≈ #1D2739) | tinta 12.75:1 |
| Tinta | `terminal-bright` #E8EDF5 | 15.7:1 sobre fondo |
| Tinta suave | `terminal-ink` #9FB0C9 | 8.37:1 sobre fondo, 7.65:1 sobre chrome |
| Tinta tenue | `terminal-ink` al 60% con `terminal-dim` (≈ #8394AD) | 5.98:1 fondo, 5.47:1 chrome, 4.86:1 tarjeta |
| Filete | `terminal-ink` al 22% sobre fondo (≈ #293241) | (el mismo valor que la guía trae hoy en crudo) |
| Acción | `terminal-ok` #3DD68C, texto del botón en `terminal-bg` | 9.84:1 sobre fondo; botón 9.84:1 |
| Plumón | `terminal-ok` al 40% sobre fondo (≈ #235A4A) | 6.78:1 con la tinta encima |

`terminal-dim` sola (3.41:1) **no** pasa AA para texto, y el verde de acción
del día (#0A7B45) sobre la noche da 3.46:1. Por eso en la noche la acción se
lee en `terminal-ok`, que es lo que la banda de la guía ya hace hoy.

### Lo que comparten las tres

- **La cabecera** se vuelve papel translúcido con desenfoque y toma el mundo de
  lo que tiene debajo (sus colores se interpolan en 0.5 s). En la noche el
  isotipo pasa a su variante clara con el abono en #3DD68C, como manda
  `DESIGN.md`.
- **El color del navegador** (`theme-color`) sigue al mundo.
- **Una sola noche**: la guía deja su negro propio y toma el del mundo.
- **La galería sangra** al borde derecho y **el titular de la guía se
  balancea** (hallazgos 7 y 8).
- **Los colores semánticos se registran con `@property`**, lo que los vuelve
  interpolables: cambiar `--color-bg` en un contenedor recolorea todo lo que
  hay adentro sin tocar un componente.
- **`prefers-reduced-motion`**: cero animación. Los mundos se quedan pintados
  por sección, estáticos, y todo el contenido está visible desde el inicio
  (verificado: ningún texto con opacidad menor a 1 ni oculto).

## 3. Las tres direcciones

### G · Hojas: "cada mundo es una hoja que se asienta sobre la anterior"

El libro mayor se hojea. La hoja nueva sube desde abajo (regla 2 de
`DESIGN.md`) con las esquinas de arriba redondas, y al asentarse se aplanan.
La de abajo no se va: se queda fija y se hunde (escala 0.945, esquinas a 26
px, y un velo que entra tarde para que el papel no se vea gris sucio a medio
gesto). Lo que asoma alrededor de la hoja hundida es **la mesa, y la mesa es
de noche**: así, cuando el papel se hunde, la noche ya está ahí.

Momentos:

1. **La portada se hunde** y la noche de la escena sube encima.
2. **El día sube sobre la madrugada**: con los cuatro renglones encendidos, la
   hoja de la vuelta llega con su retrato.
3. **El escaparate**: el papel de los testimonios se hunde en la mesa y la
   noche de las seis puertas lo cubre.
4. **Las preguntas** suben en papel sobre la cita y la guía.
5. **La última hoja se levanta**: al final, el formulario no se hunde, se
   despega hacia arriba con las esquinas de abajo redondeadas y su sombra cae
   sobre el pie, que estaba debajo de toda la pila.
6. **El plumón lo pasas tú**: los marcadores verdes (menos el del titular, que
   sigue pintándose al cargar) avanzan con el scroll mientras el renglón cruza
   la zona de lectura, y se despintan si subes.
7. El contenido de la hoja que llega se queda 32 px atrás del papel, como si
   el papel lo arrastrara: lo justo para sentir peso.

Técnica: `position: sticky` con un tope calculado por hoja (las hojas más
altas que la ventana se fijan cuando su borde de abajo toca el de la ventana,
así se leen completas antes de que la siguiente empiece a taparlas),
`overflow: clip` (no `hidden`, que apagaría las capas fijas de adentro), y un
solo bucle de scroll que escribe tres variables por hoja solo cuando cambian.
Las hojas tapadas por completo dejan de pintarse.

Peso: **unos 3.4 KB comprimidos en total** (motor 0.8, hojas 0.9, mundos 1.1,
estilos de hojas 0.6). GSAP con ScrollTrigger, que es lo que suele usarse para
esto, ronda los 40 KB.

A favor: es la más física y la más fácil de entender sin explicarla; funciona
igual en celular (probada a 390 px); el final con la hoja que se levanta
cierra la página como se cierra un libro.

En contra: todas las hojas quedan fijas una sobre otra, así que la página se
recorre "dentro" de la pila; quien usa la rueda muy rápido ve menos el gesto.
Es la que más toca el layout (el pie pasa a ser fijo, `main` gana un margen).

### H · Portal: "cada mundo se abre por una ventana"

Se entra a la noche por una abertura y al salir la abertura se cierra. Mientras
la abertura crece, el contenido no se mueve: **se revela**. El motivo es la
ventana de la terminal, que ya es de la marca, y cada abertura nace de algo que
significa.

Momentos:

1. **El punto final se abre.** El círculo de noche nace exactamente sobre la
   tinta del punto de "las cobras tú." (la caja del carácter se mide con un
   Range y la tinta del punto con canvas). Primero el punto se ve hincharse,
   luego se traga la página, y adentro la escena ya está quieta en su lugar.
   Es la frase más importante del sitio, y su punto final es la puerta.
2. **Tu criterio abre el día.** Con los cuatro renglones encendidos, la tarjeta
   de papel del cuarto ("14 diferencias resueltas · tu criterio") crece desde
   su lugar hasta llenar la pantalla, y adentro está la vuelta: al 40% del
   gesto aparece el texto con su coreografía de siempre y al 50% sube el
   retrato. Lo humano se vuelve el mundo.
3. **Entrar a la terminal.** El escaparate llega como una ventana redondeada
   metida en el papel, con su barra y el semáforo de `Terminal.astro`, y se
   abre a pantalla completa al llegar arriba.
4. **Salir de la terminal.** Se vuelve a cerrar en ventana, con las esquinas de
   abajo redondas, y se va. El pie repite el gesto, en chico.
5. **Titulares que suben por renglones** cuando su abertura termina ("Lo que
   pasó antes de tu primer café", "Seis puertas…"): 0.62 s, escalonados 80 ms,
   conservando la cursiva. Al terminar se devuelve el marcado original.

Técnica: la escena sube con margen negativo para quedar encima de la portada,
y su capa fija lleva el recorte circular; la vuelta queda fija dentro de una
pista del largo del gesto, con un recorte que arranca en el rect de la
tarjeta, y se suelta en el mismo píxel que la escena. Una sola tarea por
cuadro, primero lecturas y luego escrituras. Peso: unos 3.6 KB comprimidos la
capa propia (5.5 KB con el motor y los mundos).

A favor: la más cinematográfica y la que más se nota como trabajo de
desarrollador. **Ninguna transición es un efecto genérico**: el punto final,
tu criterio y la ventana de la terminal son el mensaje del sitio hecho puerta.

En contra: la más compleja de llevar al sitio y de mantener (reacomoda la
geometría de la escena y de la vuelta). El recorte se repinta en cada cuadro:
fue fluido en la prueba (cero cuadros largos), pero hay que probarlo en un
teléfono real de gama media antes de publicar. La página queda unos 270 px más
corta en escritorio, porque la escena empieza a abrirse desde el primer píxel.

Decisiones que tomó el prototipo y que puede revisar Israel:

- **La curva.** Lo amarrado al scroll no usa `--ease-f`: con una curva de
  salida rápida, el punto saltaba a 140 px de ancho con 35 px de scroll. El
  círculo crece con una curva de entrada lenta y las ventanas con una que
  acelera y frena; lo disparado por tiempo sí sigue usando `--ease-f`. (Hojas
  hace lo mismo con el plumón, que avanza lineal.) Ver la regla 6 de abajo.
- **La galería deja su `data-reveal`**: el titular sube con la ventana.

### I · Jornada: "cambia la luz, no el lugar"

La página es un día de trabajo. No hay costuras ni aberturas: **todo el lienzo
cambia de mundo a la vez** (fondo, tinta, tarjetas, filetes, cabecera y el
color del navegador), como cuando se apagan o se prenden las luces del
despacho. Se siente como pasar a otro cuarto.

Momentos:

1. **El cambio de luz.** Una zona toma la página cuando su borde de arriba
   cruza el 60% de la ventana al bajar, y la devuelve hasta que ese borde baja
   del 74% al subir. Entre las dos líneas no pasa nada: esa franja es la que
   evita el parpadeo si el lector se detiene justo en la frontera. El fondo y
   las superficies se funden en 0.5 s con `--ease-f`, y la tinta **brinca de
   golpe** en el instante en que las dos tintas leen igual, para que la página
   nunca se vuelva niebla (medido con las transiciones congeladas cuadro por
   cuadro: a los 70 ms al apagarse y a los 55 ms al prenderse, porque el
   fundido no avanza igual en los dos sentidos).
2. **Madrugada y amanecer.** La escena llega todavía de día y la luz se apaga
   cuando ya se está fijando ("primero se ve llegar el cuarto, luego se apaga
   la luz"). Con el segundo renglón la noche se levanta un poco, con el tercero
   llega la hora azul, y **cuando se enciende el cuarto, el tuyo, amanece la
   página entera**. Es la tesis dicha con luz: la máquina trabaja de noche, tu
   criterio es de día. Cada paso tiene su histéresis y pasa AA (la tinta tenue
   también se levanta: peor caso 4.8:1).
3. **La cabeza de página.** En pantallas de 1280 px o más, el folio de la
   sección en la que vas corre en vertical por el margen izquierdo, como el
   lomo de un libro. Es el folio que ya existe en cada sección (repetido, por
   eso va `aria-hidden`), entra desde abajo en 420 ms y se esconde donde no hay
   folio (la portada y la vuelta). En una página de 11,000 px, orienta.
4. **Una sola cifra que cuenta**: "3,412" sube de 0 en 600 ms cuando se
   enciende el primer renglón, una sola vez. El texto final es idéntico y el
   título conserva su nombre accesible completo.

Técnica: el mundo es un atributo del `body` y los colores registrados se
interpolan solos; cambiar de mundo es UNA escritura. Durante ese medio segundo
se apagan las transiciones de color propias de los componentes (los renglones,
las preguntas): heredando colores que ya se están interpolando, se quedaban
medio paso atrás como tarjetas grises fantasma. Peso: unos 2.7 KB comprimidos
la capa propia (4.6 KB con el motor y los mundos).

A favor: la más limpia y la más "producto"; **no cambia el layout** (nada se
fija ni se mueve que no se moviera ya), así que es la más barata de llevar al
sitio y de mantener. La cabeza de página resuelve además la orientación.

En contra: no hay gesto espacial; se siente como luz, no como cruzar una
puerta, y es la que menos se luce en una captura. Mientras dura el fundido hay
unos tres cuadros en los que el texto tenue baja a 2.2:1: es inherente a
cualquier fundido entre papel y noche, y lo mínimo posible con esas dos
tintas.

Decisiones que tomó el prototipo y que puede revisar Israel:

- **El pie no apaga la página al final.** Es una banda fija de noche: apagar la
  luz justo cuando alguien está llenando el formulario sería el peor momento
  para un efecto.
- **La banda de la guía usa la noche fija de la terminal**: de noche se funde
  con la página y de día queda como banda azul (hoy es negro neutro).
- **La cifra va en Space Grotesk con números tabulares**, no en mono, para no
  cambiar la letra del renglón. Antes de que llegue la escena, ese renglón dice
  "0 XML descargados".

## 4. Comparación y recomendación

| | G · Hojas | H · Portal | I · Jornada |
|---|---|---|---|
| Cómo se entra a otro mundo | La hoja nueva sube y tapa a la anterior | Una abertura crece y revela | Cambia la luz de toda la pantalla |
| Tipo de gesto | Espacial: profundidad | Espacial: revelado | Ambiental: luz |
| Momentos firma | La mesa de noche; la última hoja que se levanta; el plumón que pasas tú | El punto de "tú." que se abre; tu criterio que se vuelve el día; la ventana de la terminal | El amanecer con tu renglón; la cabeza de página; los 3,412 que cuentan |
| ¿Cambia el layout? | Sí: hojas fijas y pie fijo | Sí: reacomoda la escena y la vuelta | No |
| Peso propio, comprimido | 1.5 KB | 3.6 KB | 2.7 KB |
| Total con motor y mundos | 3.4 KB | 5.5 KB | 4.6 KB |
| Lighthouse (accesibilidad / buenas prácticas) | 100 / 100 | 100 / 100 | 100 / 100 |
| Cuadros largos al recorrerla (escritorio / celular) | 0 / 0 | 0 / 0 | 0 / 0 |
| Riesgo en un celular real | Bajo | Medio (el recorte se repinta) | Bajo |
| Costo de llevarla al sitio | Medio | Alto | Bajo |
| Qué tanto se lee como trabajo de desarrollador | Alto | Muy alto | Medio |

Las tres respetan `prefers-reduced-motion` (verificado: página completa,
mundos pintados, nada oculto) y ninguna usa librerías. Como referencia, GSAP
con ScrollTrigger, que es lo que se suele usar para esto, ronda los 40 KB.

**Recomendación: H · Portal**, porque es la única en la que las transiciones
dicen el mensaje del sitio en vez de decorarlo: la frase "las cobras tú." abre
la noche de la máquina, y "tu criterio" abre el día de la persona. Eso es lo
que posiciona a un desarrollador con gusto: no que se mueva, sino que cada
movimiento tenga una razón. Y el primer momento lo ve casi todo visitante,
porque ocurre en el primer scroll.

Llevarla por partes, midiendo entre una y otra:

1. **El acto 1** (el punto y la tarjeta), que es lo que ve todo el mundo.
   Probarlo con el pulgar en un Android de gama media y en un iPhone antes de
   seguir.
2. **La ventana de la terminal** del acto 3.
3. Si la prueba en teléfono real no aguanta el repintado del recorte, **G ·
   Hojas es el respaldo**: misma sensación de "entrar a otro lugar", movida
   con transformaciones, que es lo más barato que hay (durante el gesto solo se
   repintan las esquinas).

Independiente de cuál se elija, **la cabeza de página de I** (el folio de la
sección corriendo por el margen) se puede sumar a cualquiera: resuelve la
orientación en una página de 11,000 px y no compite con ningún gesto.

## 5. Cómo se arman los prototipos

```bash
pnpm build                                  # una vez, para tener dist/
node design/mockups/mundos/armar.mjs        # escribe g-, h- e i-*.html
node design/mockups/mundos/armar.mjs hojas  # solo uno
node design/mockups/mundos/servir.mjs       # para verlos en Safari o Firefox
```

**Ojo: el generador está hecho para la home de ANTES de implementar** (la del
commit `cbf85b7`, con el carrusel y sin mundos). Sus guardarraíles esperan esa
estructura y fallan contra la de ahora; los prototipos de `design/mockups/`
quedan como registro de la ronda. Para regenerarlos, compilar ese commit.

`armar.mjs` toma `dist/client/index.html` y: mete el CSS del sitio en línea
con las fuentes apuntando a `node_modules` (como las plantillas de
`design/piezas/`), quita la medición y el prefetch (un prototipo no le manda
datos a GA4), desarma los formularios (nada llega a `/api/lead` ni a Sendy),
quita los comentarios internos y agrupa las secciones en mundos. Trae el
guardarraíl de los demás generadores: si un patrón no aparece exactamente las
veces que espera, falla en vez de escribir un prototipo a medias.

En Chrome abren con doble clic. Safari y Firefox no cargan fuentes desde una
carpeta "de arriba" con `file://`; para ellos está `servir.mjs`, que solo
sirve `design/`, `public/` y las fuentes (el repo tiene `.env.local` con
llaves y no se expone, ni en localhost).

La capa de cada dirección vive aparte (`mundos/<clave>.css` y `.js`), junto
con lo común (`motor.js`, `comun.css`). Es exactamente lo que se portaría al
sitio.

## 6. Si se elige una: cómo se lleva al sitio

En orden, y cada paso se puede revertir solo:

1. **Marcado.** En `index.astro`, envolver las secciones en cinco
   `<div class="mundo" data-mundo="...">` según el mapa de actos. El copy no
   se toca. Pasar de paso los comentarios `<!-- -->` a `{/* */}` (hallazgo 11).
2. **Los mundos en `global.css`.** Registrar los colores semánticos con
   `@property` y declarar `[data-mundo="dia"]` y `[data-mundo="noche"]`. La
   noche se puede quedar derivada con `color-mix` (como en el prototipo) o
   formalizarse en `tokens.css` con tres tokens de la familia terminal que hoy
   no existen: filete, tinta tenue y tarjeta. Formalizarlos paga la deuda de
   los hex crudos de la guía. Decisión de Israel.
3. **La cabecera** (`Nav.astro`): papel translúcido que toma el mundo, y el
   `theme-color` que lo sigue (`BaseLayout.astro`).
4. **La capa de movimiento** como componente (`Mundos.astro`): el motor más la
   dirección elegida, empaquetados por Astro. Unos 3 KB. En producción, lo que
   se pueda pasar a CSS nativo amarrado al scroll (`animation-timeline`, que ya
   corre en Chrome, Edge y Safari 26) se pasa, y el JavaScript queda de
   respaldo para Firefox.
5. **Medir antes de publicar**: Lighthouse en la home (el prototipo de Hojas ya
   dio 100 en accesibilidad y en buenas prácticas), probar con el pulgar en un
   iPhone real, y revisar los saltos del menú (`#quien`, `#testimonios`,
   `#ofertas`, `#faq`) en cada mundo.
6. **De paso, tres arreglos que no dependen de la ronda**: el largo de la
   escena (240 a 260vh), la calibración del plumón en texto corrido y el botón
   de la guía como píldora.

Solo la home cambia. Las demás páginas siguen en día; si los mundos funcionan,
`/despachos` es la siguiente candidata (tiene el mismo arco de actos).

## 7. Reglas que entrarían a `DESIGN.md`

1. **Hay dos mundos y no más**: día (papel) y noche (la terminal). Un tercero
   (un verde a pantalla completa, por ejemplo) rompería la regla de que el
   verde de acción nunca es relleno.
2. **Un cambio de mundo es un cambio de acto, no de sección.** Cuatro o cinco
   por página como máximo. Si cada sección cambia de mundo, ninguno se siente.
3. **En la noche, la acción se lee en `terminal-ok`** con el texto del botón
   en `terminal-bg`. El #0A7B45 no va sobre la noche (3.46:1).
4. **La cabecera y el color del navegador siguen al mundo** que tienen debajo.
5. **Con reducir movimiento, los mundos se pintan estáticos** por sección. El
   color no es movimiento; la transición sí.
6. **Lo amarrado al scroll no tiene duración ni usa `--ease-f`**: sigue al
   dedo (lineal) o a una curva propia del gesto. Lo disparado por tiempo sigue
   las reglas 1 y 7 de siempre (620 ms por tramo, una sola curva).

## 8. Logotipo: tres alternativas

Pedido aparte de Israel, el mismo día: la T con cargo y abono se queda, pero
no le gusta que el logotipo sea el nombre de la página tal cual, con el `.ai`
colgando debajo de `soycontador`. Las tres alternativas viven en
`design/mockups/logos/index.html` (cabecera de día y de noche, celular a 390
px, escalera de 80 a 24 px, íconos, tarjeta para redes, movimiento de entrada,
a favor, en contra y qué cambia en `DESIGN.md`). Una por cada pilar del
posicionamiento, y lejos entre sí a propósito:

| | A · Contrapartida | B · Firma | C · Prompt |
|---|---|---|---|
| Pilar | Contador | Persona | Desarrollador |
| Qué dice | `soycontador` del lado del cargo y `.ai` del lado del abono, bajo la raya de la T: el nombre vive DENTRO de la cuenta T, en un renglón | "Israel Castro" en la serif, con la T como sello y el dominio de descriptor | El dominio como comando de terminal, con la T de prompt y un cursor |
| Los renglones de cargo y abono | El nombre ocupa su lugar; los cuatro renglones quedan en el ícono | En el sello | En la T del prompt |
| Ancho en cabecera / celular | 160 / 146 px | 255 / 141 px (sin descriptor bajo 1024 px) | 189 / 150 px |
| Lo que cambia en `DESIGN.md` | Poco: sigue sin serif | Se deroga "el logotipo no usa la serif" | Poco |
| Riesgo | El más bajo | El dominio (que es también tu usuario de Instagram) sale de la cabecera | Puede leerse "para programadores" ante el Avatar A |

**Recomendación: A · Contrapartida.** Resuelve las dos quejas (un solo renglón,
y el `.ai` deja de colgar porque ahora tiene su lado de la cuenta), no rompe
ninguna regla, y es la tesis de la marca dicha sin una palabra: la IA es la
contrapartida que completa la partida doble. B es la alternativa estratégica
si se quiere que la cabecera empuje la entidad "Israel Castro" en buscadores.

En los prototipos de la ronda 3, la barrita de revisión deja probar las tres
en la cabecera real, de día y de noche.

## 9. Decisión y segunda vuelta (2026-10-01)

**Israel eligió G · Hojas y el logotipo A · Contrapartida.** El prototipo
`g-hojas.html` ya monta el logotipo en la cabecera (sale de `logos/logos.js`,
la misma fuente que su página de comparación) y trae dos ajustes que pidió.

### El asiento de cierre pasa al papel

Sobre la noche, el plumón de "no se regatea" se pintaba al 40% para que la
tinta clara siguiera leyéndose encima (6.78:1), y a ese porcentaje el verde
pierde su brillo: no se lucía. En papel vuelve a ser el #3DD68C pleno.

Con eso el mapa de Hojas cambia en un solo punto: **la noche del acto 3 se
queda solo con las seis puertas**, y el acto 4 abre con la cita, en papel:

| Hoja | Mundo | Secciones |
|---|---|---|
| 1 | día | portada |
| 2 | noche | escena |
| 3 | día | vuelta, quién soy, testimonios |
| 4 | noche | las seis puertas |
| 5 | día | **asiento de cierre**, guía (isla de noche), preguntas, partida doble, cierre |

Siguen siendo cuatro cambios de mundo. La guía **no** se volvió hoja: dos hojas
seguidas de 480 px cada una se sentían como parpadeo. Es una **isla** de
terminal dentro del día, como la figura de la terminal en la bio, y por fin con
el azul de la terminal y no con el negro neutro (hallazgo 4). La cabecera
cambia a noche sobre ella y regresa al día al salir. Las direcciones H e I se
quedan con el mapa original, como registro.

### "Qué encuentras aquí": tres formas

El carrusel de hoy esconde el problema que la auditoría no alcanzó a nombrar:
en escritorio se ven tres puertas y media, y en celular una. **La 5 (Jueves) y
la 6 (el Club) casi nadie las ve**, y la 6 es la oferta más cara. Las tres
alternativas ponen las seis a la vista sin gesto lateral. Usan el mismo
marcado de hoy (`a.puerta` con `.num`, `h3`, `p`, `.go`), así que **el copy no
cambia y la medición `clic_puerta` tampoco**. Desaparece solo lo que existía
para el carrusel: la barra, el contador, la flecha y el "(ARRASTRA)"; "ELIGE TU
CAMINO" se queda porque sigue siendo cierto. Se ven en
`g-hojas.html?ofertas=catalogo|puertas|plana` o con la barrita de revisión.

**1 · Catálogo: el catálogo de cuentas.** Seis renglones numerados (número,
nombre, texto, acción), todo a la vista, con filetes de libro mayor. Al bajar,
una **regla de lectura** enciende el renglón que cruza la línea de lectura,
como quien recorre el libro con una regla: es el gesto de la escena
(renglones que se encienden) sin fijar nada. El número pasa de la tinta tenue
al verde de acción. Alto: 1,361 px en escritorio y 2,001 en celular.

**2 · Puertas: seis puertas de verdad.** El titular ya dice "puertas": aquí se
ven seis, una junto a otra, con el nombre en el canto (de abajo hacia arriba,
como el lomo de un libro) y su ícono como placa. **La que señalas se abre con
luz**, como una puerta abierta en un pasillo de noche; el texto entra desde
abajo cuando ya casi abrió, y el párrafo ya viene armado (no se vuelve a partir
mientras la puerta crece). Con teclado, el foco abre y las flechas pasan de
puerta en puerta. En celular se apilan como el acordeón de preguntas: el primer
toque abre, el segundo entra. Alto: 924 px en escritorio y 969 en celular, la
más compacta.

**3 · Plana: la plana de revista.** El índice de secciones de una revista:
tres por dos, sin tarjetas, con filetes finos, y cada puerta con su ícono a la
vista (hoy es una marca de agua que solo aparece al pasar el mouse). Al entrar,
las celdas suben en cascada amarradas al scroll. Alto: 1,222 px en escritorio
y 2,165 en celular.

| | 1 · Catálogo | 2 · Puertas | 3 · Plana |
|---|---|---|---|
| ¿Se ven las seis? | Todo, texto incluido | Los seis nombres; el texto, de una en una | Todo, texto incluido |
| Gesto que pide | Ninguno | Señalar o tocar | Ninguno |
| Alto escritorio / celular | 1,361 / 2,001 px | 924 / 969 px | 1,222 / 2,165 px |
| Lighthouse (accesibilidad / buenas prácticas) | 100 / 100 | 100 / 100 | 100 / 100 |
| Cuadros largos al recorrerla | 0 | 0 | 0 |
| Con reducir movimiento | Todo visible, sin regla | Acordeón quieto (como preguntas) | Todo visible, sin cascada |
| Lo que dice de la marca | El contador: el libro mayor | El desarrollador: la interacción | El editor: la revista |

**Recomendación: 1 · Catálogo.** Es la más legible para el lector de 45 a 65
años (todo a la vista, sin tener que descubrir un gesto), es la que mejor
rima con Hojas (las hojas del libro mayor y su catálogo de cuentas), y la regla
de lectura le da vida sin esconder nada. Si en celular preocupa el largo, el
catálogo se puede plegar ahí como acordeón, que es exactamente el celular de
Puertas: en escritorio todo a la vista, en el teléfono compacto. **Puertas** es
la opción si se quiere el momento más vistoso de la página; su costo es que el
texto de cinco puertas espera a que lo señales.

Al llevar cualquiera al sitio: va como CSS de la sección (no como variante
elegida por JavaScript), y en Puertas la apertura en escritorio se resuelve con
`:hover` y `:focus-within` para que no dependa de JavaScript; el script queda
solo para el toque en celular.

## 10. Lo que se llevó al sitio (2026-10-01)

Israel eligió **el Catálogo** ("aunque me gustó más la de Puertas, vamos a
probar la opción más legible para mi avatar"). Quedó implementado en la rama
`feat/mundos-hojas`:

| Pieza | Dónde |
|---|---|
| Los dos mundos (tokens registrados, día y noche derivados) | `src/styles/tokens.css` |
| El pintado de un contenedor con mundo | `src/styles/global.css` |
| La pila de hojas, la cabecera y el navegador que siguen al mundo, el plumón por scroll | `src/components/Hojas.astro` |
| El logotipo Contrapartida y la cabecera translúcida (en todo el sitio) | `src/components/Nav.astro` |
| El pie de noche de la home | `src/components/Pie.astro`, `BaseLayout.astro` (`mundoPie`) |
| Las cinco hojas, el Catálogo, la escena de noche, la guía como isla sin hex crudos | `src/pages/index.astro` |
| Las reglas | `design/DESIGN.md` (secciones del logotipo, Mundos y movimiento) |

Medido sobre el build antes de abrir el PR: **las 16 páginas indexables en 100
de accesibilidad, buenas prácticas y SEO**; cero cuadros largos al recorrer la
home a 1440 y a 390 px; con reducir movimiento, ningún texto oculto y el pie en
su lugar; los saltos del menú caen bajo la cabecera; y el selector de la
medición `clic_puerta` sigue encontrando el nombre y el número de cada puerta.
El costo: unos 1.8 KB comprimidos más en la home.

Quedan fuera, a propósito: las plantillas de Open Graph y los banners con el
logotipo nuevo, el largo de la escena, la calibración del plumón en texto
corrido y el botón de la guía como píldora.

