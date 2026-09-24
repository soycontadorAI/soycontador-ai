# Altas, indexación y cuándo revisar resultados

**Fecha:** 2026-09-24 · Un mes de vida del sitio (primer commit: 2026-08-29).

Este documento existe porque "¿ya estamos saliendo en Google?" es una pregunta
que se va a repetir, y la respuesta depende de en qué mes estemos. Aquí queda
qué está dado de alta, qué falta, y **en qué fecha tiene sentido volver a
mirar** para no confundir "no funciona" con "todavía no toca".

---

## Qué ya está

| Alta | Estado | Dónde se ve |
|---|---|---|
| Google Search Console | **Hecha** el 2026-09-24 por Israel | search.google.com/search-console |
| `sitemap-index.xml` en línea, 16 URLs | **Sirviendo** (verificado 2026-09-24) | `https://soycontador.ai/sitemap-index.xml` |
| `robots.txt` abierto, incluidos los crawlers de IA | **Hecho** | `public/robots.txt` |
| `llms.txt` y `llms-full.txt` | **Sirviendo** | `src/pages/llms.txt.ts` |
| JSON-LD de la entidad (Person, sameAs, knowsAbout) | **Hecho** | `src/lib/site.ts` → `schema.ts` |
| GA4 (`G-TR03XNSEKC`), solo en producción | **Hecho** | `components/Analytics.astro` |

`/gracias` y `/dentro` quedan fuera del sitemap y bloqueadas en `robots.txt`,
que es lo correcto: son páginas de agradecimiento, no de descubrimiento.

## Qué falta, en orden de qué tanto mueve la aguja

1. **Bing Webmaster Tools.** Importa la propiedad desde Search Console en dos
   clics. No es por el tráfico de Bing: **ChatGPT y Copilot buscan sobre el
   índice de Bing**, así que esta alta pega directo al objetivo de aparecer
   cuando alguien le pregunta a un LLM por un contador que sabe de IA.
2. **Los enlaces de vuelta.** El JSON-LD dice que `soycontador.ai` es la misma
   entidad que el LinkedIn, el Instagram, el YouTube y el GitHub (`sameAs` en
   `site.ts`). Eso solo consolida la entidad si los perfiles **también**
   apuntan al sitio: el campo de sitio web en LinkedIn, el enlace de la bio de
   IG, los enlaces del canal (`youtube/canal.md`). Confirmar uno por uno.
3. **Pixel de Meta.** `MEDICION.metaPixel` sigue en `null` y el bloque ya
   existe en `Analytics.astro`: solo falta el ID. Al ponerlo, actualizar el
   aviso de privacidad en el mismo commit.

## Cuándo revisar, y qué se espera ver

El sitio es un dominio **nuevo**. Un dominio nuevo no compite el primer mes por
palabras de cabeza, sin importar qué tan bien esté hecho: Google necesita
historial para confiar. El orden en que llegan las cosas es siempre el mismo,
y se lee en Search Console, no en la posición que uno ve al buscarse a sí mismo
(esa está contaminada por tu propio historial).

| Cuándo | Qué se revisa | Qué es señal de que va bien |
|---|---|---|
| **Ya** (finales de sep) | Indexación → Páginas | Que las 16 URLs estén indexadas, no solo "descubiertas". Si alguna se queda fuera, ahí dice por qué. |
| **Finales de oct** (mes 2) | Rendimiento → Consultas | Primeras **impresiones**, casi todas de marca: "Israel Castro contador", "soycontador". Clics todavía pocos. Que haya impresiones es el hito. |
| **Dic-ene** (meses 4-5) | Consultas de cola larga | Empiezan a aparecer frases específicas: "descargar XML del SAT con IA", "Claude para contadores". Posiciones 20-50 que suben solas. |
| **Feb-mar 2027** (meses 6-7) | Las palabras que importan | "contador IA México", "IA para contadores". Aquí sí se juzga si la estrategia de contenido funcionó. |

**La búsqueda de marca es el primer termómetro y el más honesto.** Si en
noviembre alguien que te oyó en el live busca "Israel Castro contador" y el
sitio sale primero, la entidad quedó bien construida y lo demás es cuestión de
volumen y tiempo.

**Los LLMs van aparte y son más lentos.** Que Claude o ChatGPT *busquen* y
encuentren el sitio funciona desde ya (para eso están `robots.txt` abierto y
`llms.txt`). Que el nombre esté **dentro** del modelo, sin buscar, depende de
un ciclo de entrenamiento: eso se mide en muchos meses y no se puede apurar
desde el sitio. Lo que sí lo acelera son las menciones fuera del dominio
propio, que es exactamente lo que hacen el live, LinkedIn y los patrocinios.

## Lo que no hay que hacer

- **Pedir indexación URL por URL cada semana.** El sitemap ya hace el trabajo;
  el botón de "Solicitar indexación" no acelera el ranking, solo el rastreo, y
  usarlo de más no da puntos.
- **Juzgar por el buscador propio.** Sesión iniciada, historial y ubicación
  hacen que el sitio se vea mejor posicionado de lo que está. El dato bueno
  está en Search Console.
- **Tocar títulos y H1 cada mes.** Cambiarlos reinicia la lectura que Google
  ya tenía. Si algo se cambia, se le dan varias semanas antes de opinar.
