# Plan de anuncios para el taller "Empieza aquí" (borrador, 2026-10-13)

> **2026-10-16: la primera campaña ya se lanzó.** Lo que se hizo de verdad
> (cuentas, eventos, estructura, qué medir y el registro de resultados) está en
> `campana-meta-taller-empieza-oct2026.md`. Este plan queda como antecedente.

Estado original: **plan para revisar con Israel. No se ha tocado nada de Meta.** Israel
está creando la Página de Facebook y el portafolio de negocio de soycontador.ai.
Lo marcado `[POR DECIDIR]` o `[VERIFICAR]` no se asume.

## 1. Qué se busca

Llenar las 25 plazas de cada edición con gente que no conocía a Israel, y
aprender qué mensaje y qué formato funcionan para el **Avatar A** (contador
individual, 45 a 65, compra por miedo a quedar obsoleto; ver `avatar.md`).
Los anuncios son una prueba de mensajes antes que una máquina de ventas: con
25 lugares el volumen de compras será muy bajo.

Para qué edición: la del 17-oct ya no da tiempo (pixel, revisión de Meta y fase
de aprendizaje toman días). Se monta para la **siguiente**; su fecha y su
checkout en nas.com aún no existen (`src/lib/empieza.ts`, edición comentada).

## 2. Medición: la compra ocurre en nas.com

El cobro vive en **nas.com**, otro dominio, así que el pixel de soycontador.ai
solo ve la visita y el clic a "Apartar mi lugar". **Dato de Israel
(2026-10-14): nas.com permite configurar un pixel de Facebook**, lo que abre
la compra como evento. Hay un conflicto que resolver antes de usarlo:

- El checkout actual es `communityCode=TODOCONTA_CLUB`: el taller está como
  evento dentro de la comunidad de **TodoConta** en nas.com. `[VERIFICAR]` si
  el pixel de nas.com se configura por comunidad. Si es así, el pixel que se
  ponga ahí aplica a todo lo de esa comunidad.
- Poner ahí el pixel de soycontador.ai mezcla las compras de TodoConta con las
  de este proyecto. Dejar el de TodoConta hace que la compra del taller llegue
  al pixel equivocado y no sirva para optimizar estos anuncios.
- Salidas `[POR DECIDIR]`: (a) comunidad propia de soycontador.ai en nas.com,
  con su pixel; (b) usar un solo pixel para ambas marcas y asumir la mezcla;
  (c) no usar el pixel de nas.com y medir compras a mano (cruce con `utm_*` y
  `lib/origen.ts`).
- `[VERIFICAR]` qué eventos manda nas.com (compra, inicio de pago), si admite
  parámetros de campaña y si cambiar de comunidad afecta enlaces, correos y
  ventas ya hechas.

Si se resuelve, Meta puede optimizar a **compra**; si no, se optimiza a clic
al checkout. Con volumen bajo (25 lugares) conviene decidirlo por cuántas
compras se esperan, no por pureza.

Eventos propuestos en la página (sin dato personal, regla de AGENTS.md):
`clic_checkout` (con edición y origen), `ver_dos_horas` (llegó al bloque).
Hoy `MEDICION.metaPixel` es `null` y el bloque ya existe en `Analytics.astro`.
**Al instalar el pixel hay que actualizar el aviso de privacidad en el mismo
commit** (obligación LFPDPPP, AGENTS.md).

## 3. Cuentas (lo hace Israel)

- Página de Facebook nueva de soycontador.ai, dentro de un portafolio de
  negocio propio, con la cuenta de Instagram ya vinculada.
- Cuenta publicitaria nueva y método de pago.
- Pixel (conjunto de datos) para soycontador.ai. Dominio verificado.
- No mezclar con la Página de TodoConta: otra marca (`arquitectura-de-marca.md`),
  otras audiencias y su propia medición.
- `[VERIFICAR]` si Meta permite anunciar solo con la cuenta de Instagram como
  identidad. Si sí, la Página es técnica y no hay que cuidarla como canal.

## 4. Estructura de campaña

Una campaña, un objetivo, pocas piezas. Lo que se mueve son los **creativos**,
no el público.

- **Campaña:** objetivo `[POR DECIDIR]` (tráfico a la página o clientes
  potenciales; ver sección 2). Una sola.
- **Conjunto de anuncios:** México, 45 a 65 `[VERIFICAR]` (Meta limita
  segmentación por edad en ciertos casos), intereses amplios (contabilidad,
  SAT, despachos). Un solo conjunto al inicio.
- **Anuncios:** de 5 a 8 creativos que varían UNA cosa a la vez (ver 5).
- Todo se crea **en pausa**; Israel revisa y activa.

## 5. Matriz de creativos

Una herramienta por pieza (regla de AGENTS.md): todo habla de **Claude**.
El copy respeta el QA de AGENTS.md: español MX, tuteo, sin raya, sin ofertas posteriores ni
descuento del curso, sin precio de high ticket, Claude Pro "recomendado".

| Ángulo (el miedo) | Gancho de ejemplo |
|---|---|
| Probé ChatGPT y me contestó como blog | "¿La probaste y te contestó como blog? No fue la herramienta: fue cómo se le pidió." |
| Nunca la he abierto | "Si todavía no la abres, en dos horas dejas de mirarla desde afuera." |
| Experiencia como ventaja | "Con todo lo que ya sabes de contabilidad, Claude te rinde más que a quien apenas empieza." |
| Resultado concreto | "Sales con tu proyecto, un prompt y tu primera tarea con XML ya hecha." |

| Formato | Notas |
|---|---|
| Imagen única | El MCP la puede crear (solo imagen única con enlace) |
| Video corto a cámara | El del taller (`video-empieza-guion.md`); se sube desde Ads Manager |
| Carrusel | `[VERIFICAR]` si el MCP lo soporta; si no, desde Ads Manager |

Reglas de Meta que cuidar `[VERIFICAR]`: no aludir a atributos personales del
lector ("a tus 50 años...") ni prometer resultados económicos. La edad es
ventaja, no carencia, y eso se dice sin señalar al lector.

### Creativos listos (2026-10-16)

Los dos usan el ángulo "me contestó como blog", a propósito: la primera prueba
compara formato (video contra imagen), no mensaje. Ninguno lleva fecha, precio
en pantalla ni cupo, para que crucen de una edición a la siguiente. Cada uno es
UN anuncio con sus dos formatos, y Meta pone el que toca en cada ubicación.

| Creativo | Feed (4:5) y Stories/Reels (9:16) | Fuente |
|---|---|---|
| Video | `anuncio-4x5.mp4` y `anuncio-9x16.mp4` | `hyperframes-30-days/renders/empieza/vertical/` |
| Imagen | `design/salidas/anuncio-empieza-4x5.png` y `-9x16.png` | `design/piezas/anuncio-empieza-*.html` |

Texto del anuncio de imagen (título "Taller en vivo: tu primer día con Claude",
descripción "2 horas por Zoom · $697 MXN", botón "Más información"):

```
¿Le preguntaste algo a la IA y te contestó como blog?

No fue la herramienta. Fue cómo se le pidió.

En el taller “Empieza aquí” practicamos en vivo cómo pedirle las cosas a Claude para que te conteste como contador y te cite el fundamento. Dos horas por Zoom, grupo de 25, y cada bloque termina con algo hecho en tu pantalla:

✓ Tu proyecto de Claude configurado para tu despacho
✓ Un prompt que cita el fundamento
✓ Tu primer lote de XML convertido en tabla y revisado

No necesitas saber programar ni haber usado IA. $697 MXN, y la grabación es tuya 30 días.

La próxima fecha está en el enlace 👇
```

Parámetros de URL: `utm_source={{site_source_name}}&utm_medium=paid&utm_campaign=empieza&utm_content=imagen-blog`.
Meta llena `fb` o `ig` según dónde se vio. La campaña va sin edición (no
`empieza-<edicion>` como dice la sección 9) porque el anuncio corre de una
edición a otra; la fecha del clic dice a cuál le tocó. El video lleva los
mismos con su propio `utm_content`, para poder compararlos.

## 6. Cómo se elige al ganador

Fijar ANTES de activar, para no decidir a ojo:

- Métrica principal: costo por clic al checkout. Secundaria: tasa de clic
  de checkout sobre visitas a la página.
- Cada creativo debe llegar a un mínimo de clics antes de compararse
  `[POR DECIDIR]` (con volumen bajo, una diferencia chica es ruido).
- Se apaga lo claramente peor, se deja correr lo mejor y recién ahí se
  prueba otra variable. Las compras reales se cruzan a mano con nas.com.

## 7. Presupuesto

`[POR DECIDIR]` por Israel: tope diario, tope total por edición y tolerancia.
A $697 por plaza, el costo por compra tiene que quedar por debajo de lo que se
quiera pagar por cliente; ese número se fija antes de gastar.

## 8. Uso del Ads MCP de Meta

Servidor oficial: `https://mcp.facebook.com/ads`. Doc: ver el overview de
Meta (developers.facebook.com, "Ads MCP server").

- Conexión por OAuth. Comando documentado:
  `claude mcp add --transport http --client-id <META_APP_ID> meta-ads https://mcp.facebook.com/ads`.
  Meta dice que no hace falta app propia pero el comando pide un ID. `[VERIFICAR]`
- **Primero solo lectura** (informes). Gestión solo cuando el plan esté
  aprobado. Meta advierte contra dar gestión a agentes que procesan contenido
  no confiable (inyección de instrucciones).
- Lo crea todo pausado; `ads_activate_entity` es lo que gasta. **Nunca se
  activa sin visto bueno explícito de Israel en ese momento.**
- Límites documentados: creativos solo de imagen única con enlace, sin crear
  video ni subir medios; objetivos y la acción de pausar no están documentados.
- Útil para: crear campaña y anuncios en pausa, leer métricas, pruebas A/B
  (`ads_experiment_check_eligibility`), historial de cambios.

## 9. Orden de trabajo

1. Israel: Página, portafolio, cuenta publicitaria, pixel, dominio verificado.
2. Decidir objetivo, presupuesto y edición (sección 2 y 7).
3. En el repo: pixel en `site.ts`, eventos, aviso de privacidad, UTM de los
   anuncios (`utm_source=facebook|instagram`, `utm_medium=paid`,
   `utm_campaign=empieza-<edicion>`, `utm_content=<creativo>`), todo en un PR.
4. Hacer los creativos (carruseles en social-studio; video del taller).
5. Conectar el MCP en solo lectura; después, crear en pausa y revisar juntos.
6. Activar con tope bajo; revisar con la regla de la sección 6.

## 10. Abierto

- Fecha y checkout de la siguiente edición en nas.com.
- Cuál de las tres salidas de la sección 2 (comunidad propia, pixel único o medición a mano) y cómo configura nas.com su pixel.
- Si el MCP sirve sin app propia y qué objetivos acepta.
- Qué hacer con los comentarios de los anuncios (alguien debe responder).
