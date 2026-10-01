<!--
  Fuente única del regalo SITIO: la usan src/pages/sitio.astro y el PDF de
  guias/sitio-despacho/ (las dos leen esto con src/lib/sitio.mjs). Es copia
  textual de sicastro-video-antes-despues/prompt-y-tips.md, que es de donde
  salió el reel: si se toca uno, se vuelve a copiar al otro.

  El parser depende de tres cosas: los dos bloques ``` (el primero es el
  prompt principal y el segundo el de la firma) y los tips como lista
  numerada "N. **Título.** texto".
-->

## El prompt para pegar en Claude Code

Ábrelo dentro de la carpeta del proyecto de tu sitio (o en una carpeta vacía si vas a empezar de cero)
y pega esto, cambiando lo que va entre corchetes:

```
Quiero rediseñar el sitio de mi despacho contable, [NOMBRE], que hoy vive en [URL].
Antes de diseñar nada:

1. Revisa el sitio actual y el código de este proyecto. Dime qué sirve, qué está roto y qué está
   inventado (cifras, testimonios o fotos de plantilla).
2. Respalda el contenido del blog en Markdown, con autor, fecha y sus imágenes, en una carpeta aparte.
3. Hazme las preguntas que necesites sobre: a quién le hablo (mi cliente ideal), qué servicios
   quiero vender, si publico precios y si tengo fotografía profesional.

Reglas que no se negocian:
- Cero cifras, testimonios o logos inventados. Si un dato no está verificado, márcalo "por confirmar".
- Los clientes siempre anónimos: ni nombres, ni RFC, ni datos que los identifiquen.
- Nada de fotos de stock.
- Español de México, sin rayas largas (em-dash) en el texto.

Después escribe un brief con el contenido de la página y diseña TRES direcciones visuales distintas
como mockups en HTML con movimiento real, para compararlas lado a lado. Cada dirección debe salir de
algo propio de mi despacho o de mi oficio, no de una plantilla. Yo elijo una y luego la construimos.
```

### Y cuando elijas la dirección, para el efecto de la firma

```
Agrega un hilo de tinta que firme la página: un solo trazo SVG continuo, como una pluma que no se
levanta, que se dibuja conforme el visitante baja (stroke-dashoffset animado con GSAP ScrollTrigger,
suavizado con gsap.quickTo). Calcula el trazo con las posiciones reales de los elementos
(getBoundingClientRect) y reconstrúyelo cuando cambie el tamaño de la ventana. Que baje por el margen,
enmarque una tarjeta, haga un lazo cursivo y termine con un punto final al costado del último
formulario. Reglas: nunca pasa encima del texto, una punta de pluma marca dónde va, en móvil se
simplifica y con prefers-reduced-motion aparece ya dibujado.
```

---

## Los tips (agrega esto, haz esto, pídelo así)

1. **Antes de rediseñar, respalda.** Pídele que revise tu sitio y guarde tu blog. En nuestro caso el
   WordPress que alimentaba el blog ya estaba caído y nadie lo había notado: los 23 artículos solo
   seguían vivos en el HTML publicado.
2. **Prohíbe lo inventado.** Las plantillas traen "500+ clientes", "0 multas" y testimonios de gente
   que no existe. Un cliente serio lo nota. Pídele que todo dato sin verificar quede como
   "por confirmar".
3. **Pide tres direcciones, no una.** Ver tres propuestas lado a lado te deja elegir con criterio.
   Cuando pides una sola, te quedas con lo primero que sale.
4. **Dale un concepto que salga de tu historia.** S & I son Salomón e Israel, padre e hijo. De ahí salió
   el ampersand que se dibuja en tinta. Tu concepto está en tu despacho: dilo y pídele que lo vuelva
   diseño.
5. **Una sola animación protagonista.** El hilo que firma la página es el momento memorable; todo lo
   demás se queda quieto y sobrio. Pídelo así: "un solo momento de movimiento, nada de animaciones
   en cada sección".
6. **Dos tipografías, máximo.** Una serif editorial para títulos (aquí Newsreader) y una sans para leer
   (Instrument Sans). Pídele que te proponga el par y por qué.
7. **Un solo color de acento, con significado.** Aquí es el azul de la tinta de pluma, y solo aparece
   donde algo queda firmado o hecho.
8. **El movimiento, con nombre y apellido.** GSAP + ScrollTrigger para lo que se dibuja con el scroll,
   Lenis para el desplazamiento suave, y siempre respetando prefers-reduced-motion (la gente que pide
   menos movimiento en su teléfono ve todo ya dibujado).
9. **Cambia "Contáctanos" por un diagnóstico de dos minutos.** Preguntas cortas, una por pantalla. El
   precio nunca aparece en la web: el diagnóstico calcula un rango que solo te llega a ti y el precio
   se platica en la llamada.
10. **Pídele que se compare contra el mockup.** Que tome capturas del sitio construido y las compare
    con el diseño aprobado, en escritorio, en celular y con movimiento reducido. Así no se pierde el
    efecto en el camino.
11. **Revisa el contenido viejo antes de republicarlo.** Al rescatar el blog encontramos RFC reales de
    contribuyentes en unas capturas de 2025. Ese artículo no se publicó hasta rehacerlo.
