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
- Posicionamiento: "contador que ENTIENDE el código". NUNCA "yo sí programo" (hoy Israel
  casi no escribe código: lo lee, lo entiende y se lo pide a la IA en los términos correctos;
  además "yo sí programo" señala al que no). La habilidad que se vende: saber nombrar el
  problema en términos técnicos para que la IA lo resuelva a la primera.
- HONESTIDAD TÉCNICA (correcciones de Israel 2026-08-30):
  - TodoConta nació en 2012 como proyecto/blog; como SOFTWARE es de 2026. No afirmar
    "construyo software desde 2012". El arco real: 2012 blog WordPress, 2019 estudia
    programación, 2021-2023 desarrollador en startup mexicana, hoy automatiza su despacho.
  - El MCP trabaja vía la cuenta de TodoConta (app online + servidor): NO prometer "ningún
    dato sale de tu computadora" para el MCP. Eso solo aplica a la app de ESCRITORIO.
    El contraste honesto: canal controlado vs pegar datos de clientes en chats públicos.
- Ángulo Avatar A: la experiencia es la VENTAJA ("con todo lo que sé + IA supero a cualquier
  recién egresado"); nunca tratar la edad como carencia.

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
