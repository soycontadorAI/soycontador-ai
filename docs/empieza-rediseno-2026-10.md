# /empieza: retoque de copy, UX y "wow" (2026-10-13)

Estado: **variante A elegida por Israel el 2026-10-13** (acorde con la home). Implementación ya empezada en la rama `feat/empieza-retoque` (sin commit); falta medir, QA, correos y revisión (sección 6).
Prototipos en `design/mockups/empieza/` (`a-hojas.html`, `b-sesion.html`,
`c-lema.html`). Se regeneran con `pnpm build && node design/mockups/empieza/armar.mjs`
y usan el CSS real del sitio, no una imitación.

## 1. Evaluación de las dos skills

### `landing-page-design` (elayadesign): instalada, acotada

Es un solo `SKILL.md` de 400 líneas, sin scripts ni dependencias. Se instaló
sin tocar en `.claude/skills/landing-page-design/`. Su descripción le ordena
a Claude consultarla "siempre" antes de elegir fuentes, espaciados y colores, y
su Parte B se declara ganadora sobre cualquier otra regla. Eso choca de frente
con nuestro DS, así que el guardarraíl quedó escrito en `AGENTS.md`.

| Parte | Veredicto | Por qué |
|---|---|---|
| A. Estrategia (intake, estructura, conversión, FAQ, riesgo) | Úsala | Es lo que le falta a una página que hoy se arma por intuición. Aporta la prueba social sobre el pliegue, el CTA final idéntico al de arriba y "un CTA, una oferta" |
| B1 tipografía (Geist/Manrope/Poppins, sin itálicas, sin serif) | No | Nuestra identidad es Instrument Serif 400 + Space Grotesk + JetBrains Mono, con itálica en la serif |
| B2/B3 espaciado y radios en px / Tailwind | No | Tenemos tokens en rem; romperlos fragmenta el DS |
| B4 paleta oscura fija | No | La noche sale de tokens terminal, sin hex nuevos |
| B4 "sin borde de un solo lado" | No | `.prueba` lo usa a propósito |
| B5 degradado en el H1 | No | Ahí va el plumón `.hl` |
| B7 nav en píldora de vidrio con hamburguesa | No | El menú es de cada página (decisión del 2026-09-20) |
| B7 revelados con IntersectionObserver, sin scroll crudo | Ya lo hacemos | Coincide con `data-reveal` y con el bucle único de `Hojas` |
| B9 estados, B10 ship checklist | Úsala | Se vuelve checklist de revisión |
| **B11 lema que se enciende palabra por palabra** | **Úsala** | Es el único "wow" suyo que cabe en nuestro DS. Va en la variante C y puede sumarse a cualquiera |
| A7 "noindex en ofertas con fecha" | No | `/empieza` es perenne: cambian las ediciones, no la página |

### `scroll-world` (oso95): no instalar, no usar en la home

Lo que hace: genera con IA un diorama isométrico por escena y los vuelos de
cámara entre ellas (Seedance), y un motor scrubea esos mp4 con el scroll.
Licencia MIT, 10 mil estrellas, último push 2026-07-29, el plugin solo trae
un skill (sin hooks). El riesgo no es de seguridad, es de ajuste:

1. **Cuesta dinero real y necesita cuentas externas.** Pide el CLI de Monid y
   el de Higgsfield con saldo. Su propio README calcula unos US$27 por una
   cadena de 6 escenas en 1080p solo de escritorio, y la versión móvil duplica
   los clips. Cada iteración de diseño es otra renderización.
2. **Peso incompatible con el sitio.** Un clip de 8 s pesa unos 8 MB; una
   cadena de 6 escenas son 11 clips, del orden de 90 MB. Hoy el sitio carga
   unos 3.5 KB de JavaScript. Performance de Lighthouse se hunde, y el LCP
   dependería de un póster.
3. **Identidad.** Dioramas 3D generados por IA no son "Editorial cinético". Y
   la home acaba de estrenar Hojas (PR #43, 2026-10-01), que Israel eligió
   entre tres direcciones. Rehacerla ahora tira esa decisión.
4. **Honestidad.** El oficio que se vende es real (XML, SAT, despacho). Un
   mundo inventado dice menos que una captura real.

Lo que sí vale la pena robarle es la **técnica**: tiempo controlado por
scroll con un solo `requestAnimationFrame`. La variante B la implementa sin
video, con DOM y CSS, en ~1 KB de JS. Si algún día Israel quiere un scrub
"de verdad", la versión honesta sería una grabación de pantalla real del taller
(XML a tabla), no un diorama.

Recomendación: **home se queda como está.**

## 2. Las tres variantes

Las tres comparten el copy nuevo (sección 3), el recorte sin fondo
(`israel-saco-invita.webp`, 59 KB) en "Quién lo da", y la tarjeta de apartar
a todo el ancho partida en dos (lo que se incluye / precio y botón en panel
oscuro). "Quién lo da" va antes de "Apartar" (confianza, luego compra).

| | A · Hojas | B · Sesión en vivo | C · Video + lema |
|---|---|---|---|
| Wow | La pila de hojas de la home: día, noche, día, noche. Misma mecánica | "Las dos horas" se vuelve una pantalla fija: al bajar, cinco bloques encienden líneas en una sesión de Claude (ficticia) | Hero con video grande; después una frase de 5 rem que se enciende palabra por palabra; los 3 entregables se palomean |
| Coherencia con la marca | Máxima (es la home) | Alta (terminal + plumón) | Alta, la más sobria |
| JS nuevo | 0 (reusa `Hojas.astro`) | ~1 KB | ~0.5 KB |
| Riesgo Lighthouse | Bajo: ya está medido en la home | Medio: tramo sticky de 430vh, hay que cuidar contraste y reduced-motion | El más bajo |
| Riesgo de UX | Ninguno nuevo | En móvil el terminal compite con la lista; resuelto apilando | El video es el 100 % del hero: si no se graba a tiempo, queda hueco |
| Esfuerzo | Bajo | Medio | Bajo |

Mi recomendación: **B para esta página**, con el lema de C como remate entre
hero y "para quién". B es el único que le enseña a alguien que nunca ha usado
Claude cómo se ve una sesión antes de pagar, y es justo el miedo del avatar.
A es la apuesta segura si el sábado no da tiempo.

## 3. Copy propuesto (para validar)

- **H1:** "Empieza aquí: tu primer día con Claude". Ya no promete "Claude para
  contadores en 2 horas" (que se confundía con las 8 h). Las "2 horas" quedan
  en el folio y en el precio.
- **Gancho:** "¿Ni la has abierto, o la probaste y te contestó como blog? En
  dos horas, en vivo y con tus propios casos, dejas de mirarla desde afuera."
  Ya no menciona el curso grande.
- **Las dos horas:** sin minutos. Cinco bloques numerados, con "Sales con".
  Intro: "El orden es este; los tiempos se ajustan al grupo."
- **Lo que necesitas:** Claude Pro se RECOMIENDA, no se exige (decisión del 2026-10-12, ya en `main`). "US$20 al mes (aprox. $400 MXN)". Verificado en
  claude.com/pricing el 2026-10-13: Pro US$20/mes (US$17 con plan anual).
  Dato de proveedor: va con fecha de verificación.
- **Video** en la tarjeta de entregables, atemporal: sin fecha ni precio.
  `VideoFacade` ya existe (cero JS de YouTube hasta el clic).
- **Foto:** recorte sin fondo en lugar del círculo azul de `israel-castro.jpg`.
- **"Y para quién no":** el enlace al curso sale (era el segundo lugar donde se
  nombraba). Queda en la FAQ, donde quien pregunta ya lo conoce.

### Escalera de valor: va fuera de la página

Cierre del taller + 1 o 2 correos (o WhatsApp) posteriores, con el bono de unos
$500 si toman el curso completo en los primeros 30 días. **El bono no se
menciona en ningún lugar público** (decisión de Israel, 2026-10-13): es la
recompensa por haber tomado el taller. Pendiente de Israel antes de
redactar: el bono es sobre un curso alojado en Fiscalistas.AI, así que hace
falta confirmar cómo se canjea (cupón de ellos o descuento tuyo) y si lo
cubren. No se publica precio del curso en esta página.

## 4. Lugares que cambian al renombrar (no solo la página)

`EMPIEZA.titulo` y `nombreCompleto` en `src/lib/empieza.ts` alimentan: el
`<title>` y la descripción, el JSON-LD (`empiezaCourse()` en `schema.ts`, con
su `teaches` y el `Offer`), el breadcrumb, `llms.txt` y `llms-full.txt`, el
menú del pie ("Taller: Empieza aquí" ya está bien) y cualquier correo o story
que cite el nombre largo. Revisar con `grep -rn "Claude para contadores en 2 horas"`.

## 5. Lighthouse: cómo se cuida

Invariante: **100 de accesibilidad, buenas prácticas y SEO** en `/empieza`
(móvil y escritorio). Rendimiento: no bajar de la línea base medida antes de
tocar nada, con LCP ≤ 2.5 s, CLS ≤ 0.1 y TBT ≤ 200 ms. Trampas ya conocidas
(AGENTS.md): no apagar texto con `opacity` (el lema de C se apaga por
**color**, con contraste ≥ 4.5 medido sobre el estado apagado), el nombre
accesible del botón del video debe contener el texto visible, y `.hl` o
`<b>` inline van en el mismo renglón que la palabra anterior.

---

## 6. Prompt para el goal (ajustado: la implementación ya existe)

Se hizo ya, sin commit, en `feat/empieza-retoque` (sobre `origin/main`):
copy y datos (`empieza.ts`, `llms-full.txt.ts`), la página en mundos
(`empieza.astro`), la pausa de lectura opt-in en `Hojas.astro`
(`<main data-pausa="0.3">`) y la skill acotada en `AGENTS.md`. Se verificó solo
a ojo, en escritorio, que la hoja alta se queda fija antes de que entre la
siguiente. Esto es lo que falta. Pegar tal cual (cabe en el límite de 4000 caracteres de /goal):

```
/goal Cerrar el retoque de /empieza (variante A, mundos de la home) en la rama
feat/empieza-retoque, que ya trae la implementación sin commitear. Terminado
cuando: (1) pnpm build pasa; (2) Lighthouse de /empieza, móvil y escritorio:
100 en accesibilidad, buenas prácticas y SEO, y rendimiento sin bajar de la
línea base de origin/main (LCP ≤ 2.5 s, CLS ≤ 0.1, TBT ≤ 200 ms); (3) con
prefers-reduced-motion la página queda estática y legible, y en móvil (390 px)
cada hoja se lee completa antes de que entre la siguiente; (4) el QA de copy de
AGENTS.md pasa (sin raya, MX, nombre correcto, ningún precio de high ticket,
Claude Pro recomendado y no obligatorio, NINGUNA mención del bono ni de
descuentos del curso en nada publicable); (5) grep de "Claude para contadores
en 2 horas" no encuentra nada publicable; (6) hay un PR abierto, sin mergear.

NO se vuelve a decidir: variante A; Claude Pro se recomienda (2026-10-12); el
curso grande no va en el hero ni en "para quién no" (queda en FAQ y bio); sin
minutos en los bloques; el bono NUNCA se menciona en público (página, FAQ,
JSON-LD, llms.txt, llms-full.txt, redes): va solo por correo o WhatsApp a quien
ya tomó el taller; el ID del video es null hasta que Israel lo grabe, no se
pinta hueco. Lee docs/empieza-rediseno-2026-10.md antes de empezar.

Reglas: respeta AGENTS.md (DS por tokens, Instrument Serif siempre 400, un
avatar por página); la skill landing-page-design solo en lo que AGENTS.md
permite. No instales scroll-world ni librerías de animación. No toques la home:
la pausa de Hojas es opt-in y se queda así. Sin deploy por terminal. Commits y
PR a nombre de Israel, SIN Co-Authored-By ni pie "Generated with Claude Code"
(el harness los agrega, quítalos). Stagea SOLO: AGENTS.md,
.claude/skills/landing-page-design, design/mockups/empieza,
docs/empieza-rediseno-2026-10.md, docs/video-empieza-guion.md,
src/components/Hojas.astro, src/lib/empieza.ts, src/pages/empieza.astro,
src/pages/llms-full.txt.ts (y lo que el QA obligue a tocar). Todo lo demás del
árbol (.gitignore, package.json, docs/jueves, docs/patrocinios,
docs/invitados, docs/lib, docs/correos/2026-10-01-*, design/piezas,
design/salidas) es de otro trabajo.

Pasos (cambiar con /model entre pasos):
0. [Sonnet 5.5, bajo] Línea base: worktree temporal de origin/main (pnpm
   install --frozen-lockfile + build), Lighthouse de /empieza móvil y
   escritorio, 3 corridas, mediana. Guarda la tabla en el documento y borra el
   worktree.
1. [Sonnet 5.5, medio] En el árbol actual: pnpm build; mismo Lighthouse;
   capturas móvil (390 px) y escritorio de cada sección, recorriendo las
   transiciones de hoja. Revisa llms.txt, llms-full.txt y JSON-LD: nombre
   nuevo, sin "Min", Claude Pro recomendado.
2. [Opus 5.5, alto] Corrige lo del paso 1 con dato exacto, nunca a ojo:
   contraste en la noche (.nota-fecha, .compra-der), CLS de foto y recorte,
   altura de hoja en móvil y con teclado/zoom, comportamiento sin Hojas vivo
   (sin JS o reduced-motion), ancla #faq de "para quién no". Si la pausa
   estorba en móvil, bájala con un valor por media query, no la quites.
3. [Sonnet 5.5, bajo] Vuelve a medir; si algo no cumple, regresa al 2 con el
   número.
4. [Opus 5.5, alto, contexto limpio] Revisión independiente: /code-review del
   diff, nombre accesible de botones, orden de foco con hojas fijas, QA de
   copy. Aplica lo confirmado.
5. [Sonnet 5.5, medio] Commit(s) y PR solo con los archivos listados. Aparte,
   en docs/correos/ y en su propio commit: guion de cierre del taller y 2
   correos de seguimiento, más versión corta de cada uno para WhatsApp, con el
   bono (30 días tras el taller): monto y canje como [POR CONFIRMAR], voz de
   Israel, sin raya. El bono solo vive ahí; nada se envía ni se publica.

Al terminar: lista lo pendiente (video e ID de YouTube, bono) y pega las
medidas de Lighthouse tal cual, sin inventar cifras.
```

### Por qué esa mezcla de modelos

- **Sonnet 5.5 en medir, capturar y redactar correos:** trabajo mecánico con
  criterio de verificación claro; Opus ahí solo sube el costo.
- **Opus 5.5 en alto en el paso 2 y el 4:** es donde está el riesgo (movimiento
  sin romper accesibilidad ni LCP) y donde conviene un segundo par de ojos con
  contexto limpio.
- **Esfuerzo bajo** en las mediciones: es repetir un comando y comparar.

### Guion del video (atemporal, para grabar aparte)

45 a 90 segundos, a cámara, sin fechas ni precio ni "este sábado". Tres
golpes: (1) "Si la probaste y te contestó como blog, el problema no fue la
herramienta: fue cómo se le pidió". (2) Muestra la pantalla: un prompt malo y
el mismo con rol, contexto, instrucción y formato, citando el artículo.
(3) "En dos horas sales con un proyecto, un prompt y tu primera tarea hecha,
y sin saber nada antes". Cierre: "El enlace está aquí abajo". Misma toma
sirve para cualquier edición.

---

## 7. Medición (2026-10-13)

Lighthouse 12, Chrome headless, `/empieza/` servido desde el build estático
(`.vercel/output/static`), 3 corridas por factor, mediana. Línea base =
`origin/main` (4731aee) en un worktree temporal, ya borrado.

| | Móvil base | Móvil rama | Escritorio base | Escritorio rama |
|---|---|---|---|---|
| Rendimiento (3 corridas) | 91, 95, 95 | 96, 95, 95 | 100, 100, 100 | 100, 100, 100 |
| Accesibilidad / Buenas prácticas / SEO | 100 / 100 / 100 | 100 / 100 / 100 | 100 / 100 / 100 | 100 / 100 / 100 |
| LCP (mediana) | 2.42 s | 2.41 s | 0.57 s | 0.52 s |
| CLS (mediana) | 0.049 | 0 | 0.034 | 0.049 |
| TBT (mediana) | 0 ms | 0 ms | 0 ms | 0 ms |

Comprobado con Puppeteer (390 px, 1440 px y 390x500 como teclado/zoom): cada
hoja se lee completa antes de que la siguiente la tape (con `data-pausa="0.3"`
quedan 140 a 280 px de scroll de pausa); con `prefers-reduced-motion` no se
activa `hojas-vivo` y la página es estática y legible; sin desborde
horizontal; `#faq` deja el título visible bajo la cabecera en móvil y
escritorio; `color-contrast` en 1 en todas las corridas; ningún `aria-label`
omite su texto visible; todas las imágenes traen ancho y alto.

Medidas de la última corrida, tras el último cambio de código. El CLS de
escritorio varía entre corridas (0.006 y 0.049 en dos pasadas del mismo
build); ambas bajo el límite de 0.1.
