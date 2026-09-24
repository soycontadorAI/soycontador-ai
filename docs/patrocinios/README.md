# Patrocinios de Jueves de ContadorIA

Cómo se vende una serie del programa a una marca, con el modelo que Rosalaura
López describe para Chisme Media: **la serie se diseña completa primero
(nombre, ángulo, calendario, entregables) y después se sale a venderla directo
a una lista corta de marcas como "patrocinador oficial"**. Sin agencia en
medio, la producción la hace Israel y la marca no toca el guion. La marca
compra ser dueña de un tema que ya le pertenece en la cabeza del público; no
compra menciones sueltas ni "dos reels".

**Nada de esta carpeta se publica.** Trae el precio del patrocinio, la lista
de prospectos y los contactos. Astro solo sirve `src/pages/` y `public/`.

## Reglas duras

- **El fee es interno.** Vive solo en `hoja-ejecutiva-noviembre.md`. La
  versión compartible no trae cifras, ni "interno", ni enlaces a `docs/`.
  Precio único por serie; se conversa en llamada y se confirma por correo.
- **Solo pago fijo.** Sin especie (licencias, cuentas, cortesías). Si no hay
  presupuesto, no hay patrocinio, y la serie sale igual.
- **La marca es dueña del tema, nunca de la herramienta.** Cada pieza del
  canal enseña UNA herramienta a fondo (hoy Claude). El patrocinador posee el
  tema (fundamento legal, nómina, cálculo), como una aerolínea patrocina una
  serie de fútbol sin jugar fútbol.
- **Excluidos:** software de descarga masiva o auditoría de CFDI (dSoft,
  MisKuentas, Contalink y cualquiera que venda "descarga masiva"), porque
  compiten con TodoConta.
- **No recomendados:** otros proveedores de IA (rompen "una herramienta por
  pieza") y quien venda capacitación de IA para contadores (compite con los
  talleres de Israel). Entran solo con decisión expresa de Israel.
- **No son patrocinadores:** IMCP, CCPM, AMCP y colegios. Son aliados de
  difusión o compradores de capacitación; se listan aparte.
- **Honestidad técnica:** cada dato de audiencia lleva fecha de foto; lo que
  no se ha probado no se promete; las cifras de mercado sin fuente no
  entran (ni CAC, ni LTV, ni "horas de exposición" heredadas de un doc de IA).
- Copy: español de México, tuteo, primera persona de Israel, sin raya, nunca
  "Isca Castro".

## Archivos

| Archivo | Qué es |
|---|---|
| `hoja-ejecutiva-noviembre.md` | **Interna.** El producto completo: serie, audiencia, qué recibe y qué no el patrocinador, independencia editorial, precio y neto, checklist antes de compartir. |
| `hoja-ejecutiva-noviembre-compartible.md` | La que sale de casa (base para PDF o Canva). Archivo aparte a propósito para que la interna nunca se "limpie a mano". |
| `prospectos.md` | Método de búsqueda, checklist de verificación, rúbrica, exclusiones, shortlist por episodio y primera ola con argumento por marca. |
| `prospectos.csv` | El pipeline: una fila por empresa, con estado, siguiente paso y fecha de verificación. |
| `playbook-venta.md` | Calendario hacia atrás, secuencias de contacto con plantillas, llamada de descubrimiento, propuesta, objeciones, contrato, entrega por episodio, informe y renovación. |
| `metricas-youtube.md` | Qué exportar de YouTube, Instagram, Sendy y GA4, cómo argumenta cada dato y cómo se guarda. |
| `metricas.csv` | Las fotos de métricas, fechadas, en formato largo. |
| `mensajes-ola-1.md` | Los mensajes de la primera ola, uno por marca y listos para pegar, con el tema que cada marca posee ya escrito. |
| `generar-hoja.mjs` | Genera el PDF de la compartible (`pnpm patrocinios:hoja`) con la identidad del sitio. Sale a `salida/`, fuera de git. Si quedan placeholders, el archivo se llama `-borrador.pdf` y no se manda. Se niega a generar la interna. |

Fuera de esta carpeta: `docs/jueves/episodios.csv` lleva la columna
`patrocinador` (se llena al firmar, no al negociar) y `docs/README.md`
registra el fee como dato interno.

## El enlace de agenda no se escribe aquí

La hoja compartible cierra con un enlace de Google Calendar. **Su fuente única
es `CALENDARIOS.default` en `src/lib/site.ts`**, que es donde vive la decisión
de "una sola agenda para todo" (2026-08-31). Al cambiar la agenda hay que
traerlo de ahí, no editarlo a mano.

Ya pasó una vez: la hoja se editó al enlace nuevo y `site.ts` se quedó con el
viejo, así que durante un rato el sitio y la hoja mandaban a calendarios
distintos y nadie se enteró. Es el riesgo de hardcodear un dato de la entidad
en un documento.

**La duración, resuelta (decisión de Israel, 2026-09-22).** La hoja ofrecía una
llamada de 30 minutos y el enlace agenda 15. Se ajusta la hoja a **15**, que es
lo que de verdad se aparta. El guion de venta sigue siendo de 30 minutos y
encaja porque hay **15 de colchón** hasta la siguiente cita: una llamada que lo
amerite se extiende sin empalmar.

Es holgura real, no una promesa. **Se acaba el día que la agenda se llene**, y
ese día el patrocinio necesita su propia entrada de 30 minutos en
`CALENDARIOS`. El mapa ya lo soporta sin refactor: `calendarioDe("cotizacion")`
la tomaría sola. Los detalles operativos están en `playbook-venta.md`, en la
sección de la llamada de descubrimiento.

## Bitácora

- **2026-09-20.** Israel decide: la primera serie que se vende es la de
  noviembre ("Cálculos que se fundamentan solos", 29-oct a 19-nov); octubre
  corre sin patrocinador y se mide como caso de estudio. Única exclusión:
  descarga y auditoría de CFDI. Solo pago fijo por serie. Piso y objetivo
  del fee fijados (ver hoja interna). Factura persona física. Si no cierra
  antes del 22-oct se ofrece la versión de tres episodios hasta el 30-oct.
  Corporativos (CONTPAQi, Thomson Reuters, IDC) se contactan en la misma ola
  apuntando a enero. Datos del canal al día: 129 suscriptores, 230 horas de
  visualización en 28 días.
