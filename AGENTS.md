# soycontador.ai

Sitio de marca personal de Israel Castro: contador público + desarrollador de software.
Objetivo: posicionar la entidad "Israel Castro" para búsquedas (Google y LLMs) de "contador" + "IA / inteligencia artificial" en México, y servir de tarjeta de presentación (talleres, herramientas, Jueves de ContadorIA, Club de Automatización Fiscal).

Stack: Astro 7 estático + adapter Vercel (solo `/api/newsletter` es serverless) + Tailwind v4 + MDX. Gestor: pnpm.

## Reglas de copy (QA obligatorio antes de commit)

- Español de México, tuteo, primera persona (habla Israel).
- SIN raya «—» en ningún texto publicable (se lee como señal de IA). Usar punto o paréntesis.
- Nombre: "Israel Castro" (formal) o "Isca" (informal). NUNCA "Isca Castro".
- Contexto siempre MX: SAT, CFDI, ISR, pesos MXN. Nunca IRS/AEAT/euros.
- CERO menciones públicas de Fiscalistas.AI o Pepe Lara (la alianza no se anuncia).
- PRECIOS (decisión Israel 2026-08-30): la sesión mensual abierta SÍ publica precio
  ($4,999 MXN) y el ebook también ($297 MXN). NO publicar: el ancla de organizaciones
  ($3,500-4,000/hora, referencia interna de cotización), la capacitación empresarial
  (solo cotización por llamada tras formulario) ni el Club (cierre por aplicación).
- POSICIONAMIENTO, en tres niveles (corrección de Israel 2026-08-30):
  - SÍ, es identidad y diferenciador: "contador público y desarrollador de software".
    Israel ES developer (estudió programación y trabajó como desarrollador en una startup).
    Además es lo que la gente busca ("contador programador") y lo que los LLM ya asocian
    a su nombre, así que se dice sin rodeos.
  - NUNCA el comparativo: "yo sí programo (para que tú no tengas que hacerlo)". Señala al
    colega que apenas empieza; esa es la parte cruel y era la queja original.
  - NUNCA el presente factualmente falso: "escribo código todos los días". Hoy Israel
    dirige el código con IA: lo lee, lo revisa y lo pide en los términos correctos.
  El matiz honesto ("hoy dirijo más de lo que tecleo") se cuenta como evolución del oficio,
  jamás como confesión de carencia: un desarrollador que dirige con IA sigue siendo
  desarrollador, y ese es justo el modelo que el sitio le propone al lector. La habilidad
  que se vende: saber nombrar el problema en términos técnicos para que la IA lo resuelva
  a la primera.
- HONESTIDAD TÉCNICA (correcciones de Israel 2026-08-30):
  - TodoConta nació en 2012 como proyecto/blog; como SOFTWARE es de 2026. No afirmar
    "construyo software desde 2012". El arco real: 2012 blog WordPress, 2019 estudia
    programación, 2021-2023 desarrollador en startup mexicana, hoy automatiza su despacho.
  - El MCP trabaja vía la cuenta de TodoConta (app online + servidor): NO prometer "ningún
    dato sale de tu computadora" para el MCP. Eso solo aplica a la app de ESCRITORIO.
    El contraste honesto: canal controlado vs pegar datos de clientes en chats públicos.
- Ángulo Avatar A: la experiencia es la VENTAJA ("con todo lo que sé + IA supero a cualquier
  recién egresado"); nunca tratar la edad como carencia.

## El ebook

El libro "IA para Contadores" vive en `ebook/` (contenido, diseño y generadores
de PDF); se genera con `pnpm ebook`. Está **fuera de `src/` y de `public/` a
propósito**: es el entregable de pago y en `public/` quedaría descargable.
Ver `ebook/CLAUDE.md`. La página que lo vende es `/ebook`, y su copy sale de
`src/lib/ebook.ts`.

## Formularios, consentimiento y listas

Dos flujos que NO se mezclan:

- **Lead** (`/api/lead`, desde LeadForm y FormCapacitacion): manda SIEMPRE un
  correo de acuse por SES al visitante, con copia oculta a Israel. Ese correo
  ES el registro del lead; no hay base de datos y a este volumen no hace falta.
  Solo entra a Sendy si marcó la casilla del boletín, que nunca va premarcada.
- **Newsletter** (`/api/newsletter`, desde NewsletterForm): la suscripción es
  la transacción (das tu correo, recibes la guía), así que no lleva casilla.
  No manda acuse: el correo de doble opt-in de Sendy hace de acuse.

**Una lista de Sendy por promesa**, porque los autoresponders se cuelgan de la
lista y no del origen. Dos promesas en una lista obligan a una bienvenida que
le queda a medias a las dos:

| Lista | Promesa | Origen |
|---|---|---|
| `general` (39) | La guía de 5 prompts | home, y leads que marcan la casilla |
| `live` (41) | El aviso del Jueves de ContadorIA | `/jueves` |
| `ebook` (40) | La muestra del libro | `/ebook` |
| `flujos` (42) | La guía de los 3 flujos híbridos | `/flujos` |

El endpoint valida contra una lista blanca de nombres: el navegador nunca manda
un ID de Sendy.

**El redirect de la confirmación es `confirm_url`, no `subscribed_url`.** Son
dos campos distintos de la lista y se parecen lo suficiente para confundirse:
`confirm.php` redirige con el primero, y el segundo aplica al alta directa. Las
cuatro listas de la marca tenían `confirm_url` vacío, así que quien confirmaba
su correo aterrizaba en la página por defecto de Sendy, con el dominio de la
marca vieja a la vista. Se detectó hasta que se probó el flujo completo, no
leyendo la configuración: en el panel las dos casillas se ven igual de llenas.

**Cómo se prueba el consentimiento** (hacerlo cada vez que se toque este flujo,
porque es lo que separa "creo que respeta el consentimiento" de saberlo):
mandar DOS leads, uno con la casilla y otro sin ella, y que alguien con acceso
a Sendy confirme que **solo llegó uno**. Un solo lado no lo demuestra: de este
lado sabes qué mandaste pero no qué recibió Sendy, y del otro sabes qué hay en
Sendy pero no cuántos salieron. La prueba vive en el cruce.

## Trampa de Astro: el espacio antes de un `<span>` inline

Astro recorta el salto de línea + sangría que preceden a una etiqueta inline,
así que esto renderiza pegado:

```astro
<!-- MAL: sale "cambiofue una decisión" -->
<p>
  Lo que cambió fue
  <span class="hl">una decisión</span>.
</p>
```

La etiqueta inline va en el MISMO renglón que la palabra anterior:

```astro
<!-- BIEN -->
<p>
  Lo que cambió fue <span class="hl">una decisión</span>.
</p>
```

Ha mordido dos veces con marcadores `.hl` (2026-09-01 y 2026-09-02). Al tocar
cualquier `.hl`, `<b>` o `<strong>` inline, revisar el render, no el código:
en el editor se ve bien.

## Regla anti-duplicación (SEO)

Este sitio NUNCA re-publica contenido que exista en todoconta.com (lección documentada en
todoconta-apps/docs/infra/redirecciones-substack.md: duplicar contenido entre dominios hace
que el dominio nuevo compita contra su propia copia). `/herramientas` describe y ENLAZA con
copy propio; jamás copiar párrafos del blog o landing de TodoConta.

## Sistema de diseño

- `src/styles/tokens.css` es el ÚNICO punto de inyección de la identidad visual (vocabulario
  semántico: `--color-bg/surface/ink/accent...`, `--font-display/body/mono`). Los componentes
  jamás usan valores crudos ni nombres de color literales.
- La identidad elegida está documentada en `design/DESIGN.md`; los 3 mockups originales viven
  en `design/mockups/`.
- Es una marca hermana de TodoConta pero NO comparte su identidad (nada de Inter + azul
  #0B5FFF + cian #06B6D4), ni la de sicastro-v2 (Geist + Fraunces).

## Entidad (SEO/AEO)

- `src/lib/site.ts` es la fuente única de la entidad (nombre, claim, sameAs, URLs, handles).
  JSON-LD, llms.txt dinámico y footer se generan de ahí; no duplicar esos datos a mano.
- FAQs en `src/lib/faqs.ts`: el mismo dato renderiza la UI (FaqBlock) y el schema FAQPage.
- Respuestas answer-first: la respuesta directa va en las 2 primeras frases.

## Development

Dev server en background:

```
astro dev --background
```

Manage con `astro dev stop`, `astro dev status`, `astro dev logs`.

## Despliegue: la configuración de pnpm vive en `pnpm-workspace.yaml`

El 2026-09-02 Vercel subió a **pnpm 11** y tumbó dos deploys seguidos con
`ERR_PNPM_IGNORED_BUILDS`, sin llegar siquiera al build. La causa, textual en
el log: *"The 'pnpm' field in package.json is no longer read by pnpm"*.

En pnpm 11 la llave es **`allowBuilds`**, un mapa de paquete a booleano, y
vive en `pnpm-workspace.yaml`. Reemplaza a `onlyBuiltDependencies`,
`onlyBuiltDependenciesFile`, `neverBuiltDependencies` e
`ignoredBuiltDependencies`, que en esa versión ya no se leen. Ese fue el error
de los dos primeros intentos de arreglo: mudar el archivo estuvo bien, pero
con nombres de llave que pnpm 11 ya no reconoce. La respuesta salió de la
documentación de pnpm vía Context7, no de adivinar.

Estado actual:

- `pnpm-workspace.yaml` declara `allowBuilds: { esbuild: true, puppeteer: false }`.
  esbuild sí construye (Vite lo usa en el build); puppeteer no, porque su
  postinstall descarga Chromium (~150 MB) y solo lo usan los generadores de
  PDF del ebook, que corren en local.
- Lleva `packages: ["."]` porque el pnpm **local** todavía es 9.x y aborta con
  "packages field missing" sin esa llave. No vuelve monorepo al proyecto.
- La llave `pnpm` de `package.json` se queda: pnpm 9 la lee y no lee este
  archivo. Cuando local suba a 10+, se puede borrar.

**Antes de tocar esto**, correr `pnpm install --frozen-lockfile` y `pnpm build`
en local, y después verificar el deploy de verdad (`vercel ls`), no solo el
push. Los dos primeros intentos se veían bien en local y fallaban en Vercel.
