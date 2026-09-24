# docs de soycontador.ai

Documentación de estrategia de esta propiedad. **Nada de aquí se publica:**
Astro solo sirve `src/pages/` y `public/`, así que esta carpeta vive fuera del
sitio a propósito, igual que `ebook/`. Contiene precios internos que no deben
salir nunca (ver abajo).

| Documento | Qué resuelve |
|---|---|
| [`avatar.md`](avatar.md) | Los dos avatares de soycontador.ai (A en la home, B en `/despachos`), cada uno completo: sus dolores, sus objeciones y las palabras que teclean. Se lee solo. |
| [`arquitectura-de-marca.md`](arquitectura-de-marca.md) | Qué propiedad sirve a qué avatar (sitio, Instagram, LinkedIn, YouTube) y por qué no se pisan. |
| [`youtube/`](youtube/canal.md) | El canal `@soycontadorAI` como superficie de la marca personal: nombre, descripción, los cinco enlaces y el banner. Registra lo que se quedó en la etapa de TodoConta al cambiar de dueño. |
| [`linkedin/`](linkedin/playbook.md) | LinkedIn como superficie del Avatar B: los tres pilares, el ritmo de tres por semana colgado del live, la humanización que falta y hasta dónde llega la polémica. El lineamiento de origen está al lado. |
| [`patrocinios/`](patrocinios/README.md) | Cómo se vende una serie de Jueves de ContadorIA a una marca (modelo product-first): hoja ejecutiva, prospectos, playbook de venta y métricas. Trae el fee y los contactos: interno. |
| [`jueves/`](jueves/README.md) | El programa: `episodios.csv` es la **fuente única** del calendario del canal (emitidos, con live y corte, y los que vienen). Lo que se decida sobre temas futuros se escribe ahí. Incluye la encuesta de agosto y sus respuestas. |
| [`instagram/`](instagram/perfil-landing.md) | El perfil de IG como landing: nombre, bio, un enlace, destacados como menú y las stories fijas de "Empieza aquí". El lineamiento de origen está al lado. |
| [`taller-empieza-aqui.md`](taller-empieza-aqui.md) | La spec del taller de 2 horas: temario, logística, precio y cupón. Es el escalón anterior a las 8 horas. |
| [`llamada-diagnostico.md`](llamada-diagnostico.md) | Qué se hace en los 15 minutos que agenda `/diagnostico`, con el cuestionario ya contestado enfrente. |
| [`correos/`](correos) | Los correos que se mandaron, tal como salieron. Sirven de registro y de plantilla. |
| [`seo-altas.md`](seo-altas.md) | Qué está dado de alta (Search Console, sitemap, GA4), qué falta (Bing, enlaces de vuelta, pixel) y **en qué mes tiene sentido revisar resultados**. Se lee antes de preguntar si ya salimos en Google. |

## De dónde vienen

La metodología es la de **Eloisa Wolf** (4 S, embudo evergreen, regla 7-11-4,
"un canal, un avatar", títulos searching-first). Hay documentos hermanos en
`todoconta-apps/docs/lineamientos-marca-personal.md` y
`checklist-wolf-canal.md`, pero **estos se leen solos**: no hace falta abrir
aquellos para trabajar en soycontador.ai. Si algo se contradice, el de
TodoConta manda para lo que es de TodoConta y este para esta propiedad.

**Lo que estos docs NO hacen:** volver a definir la oferta de despachos. Eso ya
está productizado en `todoconta-apps/docs/taller-ia-despachos.md` (temario,
entregables, logística, pricing por tier, cómo se vende). Aquí solo se registra
lo que es propio de esta propiedad: a quién sirve y cómo rutea hacia esa
oferta.

## Precios: qué es público y qué no

La línea que separa: **el precio fijo se publica, el high ticket se cotiza.**
Donde cada caso se evalúa (8 horas, in company, organizaciones, el Club) no hay
precio que publicar, y ponerlo convertiría la decisión del lector en una
comparación de cifras.

| Dato | Estado |
|---|---|
| Ebook, $297 MXN | **Público.** Vive en `src/lib/ebook.ts` y `site.ts`. |
| Taller "Empieza aquí" de 2 h, $697 MXN (cupón de $497 en nas.io para el segmento de la encuesta) | **Público.** Precio fijo. Ver [`taller-empieza-aqui.md`](taller-empieza-aqui.md) y `src/lib/empieza.ts`. |
| Curso de Fiscalistas.AI, $3,500 MXN | **Público, pero no es de Israel.** Es precio público de ellos: por eso vive en `COLABORACION` de `src/lib/capacitacion.ts` y **no** se emite JSON-LD de oferta. |
| Taller abierto de 8 h | **Ya no publica precio.** Decisión de Israel 2026-09-08, que revierte la del 2026-08-30 (antes eran $4,999 por persona). Pasa a cotización por correo: en la misma página vive la colaboración a $3,500 y dos números juntos vuelven la decisión una comparación de precio en vez de una de formato. |
| Taller in-company, $28,000-32,000 MXN por 8 h | **Interno.** Cotización tras diagnóstico. |
| Ancla de $3,500-4,000 MXN/hora | **Interno.** Es piso de cotización, nunca tarifa publicada. |
| Club de Automatización Fiscal | **Interno.** Cierra por aplicación. |
| Capacitación empresarial | **Interno.** Solo cotización por llamada tras formulario. |
| Fee de patrocinio por serie de Jueves de ContadorIA | **Interno.** Solo en `patrocinios/hoja-ejecutiva-noviembre.md`; la versión compartible no trae cifras. Se conversa en llamada. |

**Al retirar un precio hay que sacarlo de cuatro lugares, no solo de la
tarjeta:** la página, el nodo `Offer` del JSON-LD, `llms.txt` y
`llms-full.txt`. Ahí es donde se escapa.

La regla completa está en `CLAUDE.md` de la raíz y no se relaja porque un
documento sea interno: el riesgo es que una cifra interna se copie de aquí a
una página.
