# Plan de anuncios para el taller "Empieza aquí" (borrador, 2026-10-13)

Estado: **plan para revisar con Israel. No se ha tocado nada de Meta.** Israel
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

## 2. El problema de medición (lo que condiciona todo)

El cobro vive en **nas.com**, otro dominio. El pixel de soycontador.ai ve la
visita y el clic a "Apartar mi lugar", pero **no ve la compra**. Consecuencias:

- Meta no puede optimizar a "compra": no la ve. Se optimiza a un paso previo
  (visita a la página o clic al checkout).
- "Quién compró" se cruza a mano: nas.com contra el origen del clic
  (`utm_*`, `lib/origen.ts`). Es lento pero sirve a este volumen.
- Alternativa `[POR DECIDIR]`: preguntar a nas.com si admite pixel o
  redirección con parámetro en su página de gracias. `[VERIFICAR]`

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
El copy respeta el QA de AGENTS.md: español MX, tuteo, sin raya, sin bono ni
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
- Si nas.com permite medir la compra.
- Si el MCP sirve sin app propia y qué objetivos acepta.
- Qué hacer con los comentarios de los anuncios (alguien debe responder).
