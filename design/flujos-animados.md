# Flujos animados: dónde sí, dónde no, y con qué

Definición acordada con Israel el 2026-08-30. **Nada de esto está implementado
todavía**: este documento existe para decidir antes de escribir código.

## La regla

Este sitio se vende a contadores y a corporativos con ticket alto. La seriedad
es parte de la oferta, así que **el default es no animar**. Una animación solo
se gana su lugar cuando cumple las cuatro condiciones:

1. **Hay un antes y un después medibles.** No "se ve dinámico": se ve que 7
   horas se volvieron segundos, o que 31 hojas se volvieron 1 archivo.
2. **Algo se mueve o se transforma.** Datos, documentos, pasos de un proceso.
   Si nada viaja, no hay nada que animar.
3. **Sustituye una explicación cara.** Si para entenderlo harían falta tres
   párrafos o un video, la animación se paga sola. Si se entiende leyendo una
   línea, sobra.
4. **El resultado es lo que se ve.** La animación termina en el número, el
   archivo o el reporte. No en un adorno.

Si una animación no cumple las cuatro, no va. Esto descarta de entrada:
micro-interacciones de botones y tarjetas, loaders (el sitio carga en ~1.2 s),
fondos animados, iconos que se mueven al pasar el cursor, y animar el isotipo.

## Con qué: SVG + CSS, no Lottie

Para diagramas de flujo la decisión es **SVG animado con CSS** (disparado por
el mismo `IntersectionObserver` de `data-reveal` que ya existe). Razones, en
orden de peso:

1. **El texto sigue siendo texto.** En SVG los nombres de los pasos y las
   cifras son texto real: seleccionable, accesible y **indexable por buscadores
   y LLMs**. En Lottie el texto viaja como paths o como capa no seleccionable.
   Para un sitio cuyo objetivo número uno es que los LLMs lo citen, esto solo
   decide.
2. **Peso.** Un diagrama SVG pesa entre 2 y 5 KB. Lottie cuesta ~250 KB de
   runtime más el JSON de cada animación, y hoy el sitio entero rinde 100 en
   performance.
3. **Hereda los tokens.** `currentColor` y las variables de `tokens.css` hacen
   que el diagrama respete la identidad sin exportar de nuevo.
4. **Estos diagramas son geométricos, no ilustrados.** Cajas, líneas, un dato
   que viaja. Lottie brilla en ilustración con decenas de capas y morphing;
   aquí no hay nada de eso.

**Lottie queda reservado al pipeline de video** (HyperFrames ya lo soporta):
lower-thirds, transiciones y sellos que se reutilizan en cada episodio. Ahí sí
paga su costo de producción.

## Los cuatro flujos, en orden de prioridad

### 1. El concentrado que se comprime · `/soluciones`

El más vendedor y el que mejor cumple la regla. Hoy el caso se cuenta con una
póliza estática de antes/después.

- **Qué se ve:** una fila de hojas mensuales (hasta 31 por sucursal) que entra
  por la izquierda, atraviesa el script y sale como un solo archivo de 4 hojas.
- **El remate:** el contador de tiempo cae de "6-7 horas" a "segundos", y la
  cifra de horas al año queda en pantalla.
- **Por qué se gana el lugar:** es exactamente el "de X pasos a los mínimos
  posibles". Ver la compresión convence más que leerla.

### 2. El flujo MCP · `/herramientas`

El concepto más difícil de explicar con palabras y el que desactiva la objeción
de privacidad, que es la principal del Avatar A.

- **Qué se ve:** tus CFDI de un lado, tu asistente del otro, y la consulta
  viajando por un canal marcado. El dato va y vuelve como reporte; nunca se
  desvía hacia un "chat público" que aparece apagado a un costado.
- **El remate:** la respuesta aterriza como reporte, no como texto suelto.
- **Cuidado obligatorio:** el diagrama debe ser fiel a la arquitectura real. El
  MCP trabaja contra la cuenta de TodoConta; la promesa de "nada sale de tu
  equipo" aplica solo a la app de escritorio. Si el diagrama insinúa lo
  contrario, se convierte en una promesa falsa. Puede resolverse con dos
  carriles: escritorio (local) y web (canal controlado).

### 3. El expediente que se vuelve hallazgos · `/capacitacion`

El caso del auditor con poderes ya tiene su póliza de volumen; el flujo
mostraría el trabajo, no solo el resultado.

- **Qué se ve:** el expediente entrando (257 páginas, 513 cuentas, el
  testimonio de 84 hojas), pasando por la lectura asistida, y saliendo como
  hallazgos con su fuente pegada.
- **El remate:** las 90 cifras trazadas. Es la prueba visual de que el método
  no es "confiar en la máquina".
- **Nota:** aquí la trazabilidad es el punto, no la velocidad.

### 4. El ciclo mensual del Club · `/club`

El más flojo de los cuatro y el único que podría no hacerse.

- **Qué se ve:** software, bootcamp y soporte como un ciclo que se repite mes
  con mes, dejando un proceso automatizado en cada vuelta.
- **Por qué es débil:** es un ciclo conceptual, no datos moviéndose. Roza la
  condición 2. Solo vale la pena si al construir los tres primeros queda claro
  que el lenguaje visual se sostiene.

## Cómo se construirían

- Un componente `FlujoAnimado.astro` con la estructura común (SVG inline,
  reveal por pasos, respeto a `prefers-reduced-motion`), y un archivo de datos
  por flujo. Mismo patrón que `Poliza.astro` y `Terminal.astro`.
- El disparo, con el `IntersectionObserver` que ya existe: la secuencia corre
  una vez al entrar en viewport, nunca en bucle (un bucle en segundo plano es
  ruido visual en una página que quiere leerse seria).
- Sin JS de terceros y sin dependencias nuevas.
- Con `prefers-reduced-motion`, el diagrama se muestra en su estado final: el
  contenido nunca depende de la animación para entenderse.

## Siguiente paso

Prototipar **solo el número 1** (`/soluciones`) como prueba de concepto,
revisarlo en el sitio real, y decidir con eso si los otros tres se construyen
con el mismo lenguaje.
