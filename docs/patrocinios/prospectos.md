# Prospectos: cómo se busca, cómo se califica, a quién se le escribe

Búsqueda propia, verificada con URL. La investigación previa hecha con
Gemini ("Patrocinadores Potenciales para @soycontador.ai", septiembre 2026)
sirvió como mapa de qué empresas tienen programa de partners; sus rangos de
inversión, CAC y LTV no tienen fuente y no se usan. Lo que no confirme una
URL queda `por-verificar` en el CSV y no se contacta.

## Reglas de fit

**La marca es dueña del tema, nunca de la herramienta.** Viva patrocinó la
serie de fútbol de Chisme Corporativo sin jugar fútbol: vende viajes al
Mundial. Aquí, el tema de la serie de noviembre es **el fundamento legal**;
lo poseen las plataformas y editoriales fiscales. Dos de cuatro episodios son
de **nómina e IMSS**; lo posee el software de nómina. El **cálculo** vive en
el ERP. Claude es la herramienta de la serie y no está en venta.

**Excluidos** (no entran al CSV más que como `descartado`):

- Software de descarga masiva o auditoría de CFDI: dSoft, MisKuentas,
  Contalink, y cualquiera con "descarga masiva" en su página de precios.
  Compiten con TodoConta.

**No recomendados** (entran solo con decisión expresa de Israel):

- Otros proveedores de IA (OpenAI, Google, Microsoft y sus partners): rompen
  "una herramienta por pieza".
- Quien venda capacitación de IA para contadores: compite con los talleres.
  ISEF entra solo como editorial y con bandera.

**No son patrocinadores**: IMCP, CCPM, AMCP y colegios. Son aliados de
difusión o compradores de capacitación. Se anotan en una sección aparte.

**Fintech y PAC** (Xepelin, Clara, Konfío, Kapital, Mendel; SW Sapien,
Facturama, Finkok): su tema es flujo de efectivo y timbrado. No encaja con
noviembre; encaja con una serie futura de cobranza o conciliación. Van a
"segunda ola".

## Método de verificación

Por empresa, estas búsquedas (se corren con búsqueda web; se guarda la URL
que prueba cada cosa):

```
"<empresa>" programa de partners contadores
"<empresa>" programa de aliados OR referidos despachos
"<empresa>" patrocinador OR patrocina congreso IMCP OR CCPM OR AMCP
"<empresa>" webinar contadores 2026
"<empresa>" creador de contenido OR influencer contadores
"<empresa>" alianzas OR partnerships México linkedin
"<empresa>" head of partnerships OR growth OR marketing México
site:youtube.com "<empresa>" contadores
```

Descubrimiento por categoría, una vez por temporada:

```
software nómina México programa contadores
plataforma fiscal México suscripción contadores fundamento
patrocinador webinar contadores México software 2026
"programa de contadores" software México
patrocinadores convención IMCP 2026
patrocinadores congreso CCPM 2026
```

Las listas de patrocinadores de los congresos del gremio son la mejor
evidencia de quién tiene presupuesto para contadores.

**Checklist, una fila por empresa en `prospectos.csv`:**

| Campo | Qué se verifica |
|---|---|
| `programa_partners_url` | Tiene programa de partners, aliados, referidos o contadores. URL. |
| `contacto_nombre`, `contacto_cargo`, `contacto_linkedin` | Quién lleva alianzas, partnerships, growth o marketing en México. Si no se localiza, "no localizado"; nunca se inventa. |
| `evidencia_contenido_url` | Ya patrocina o produce contenido para contadores: congresos, webinars, canal, creadores. URL. |
| `entidad_mx` | Razón social u oficina en México; si la matriz es extranjera, se anota (cambia el IVA y la velocidad). |
| `conflicto` | `todoconta` (descarga CFDI), `herramienta` (proveedor de IA), `capacitacion` (vende cursos de IA), o vacío. |
| `fecha_verificacion` | El día en que se comprobó lo anterior. Sin fecha, no se contacta. |

## Rúbrica (0 a 11)

| Criterio | Puntos |
|---|---|
| Fit temático con la serie completa | 0 a 3 (3 = posee el tema de la serie; 2 = posee dos episodios; 1 = posee uno) |
| Programa de alianzas existente | 0 a 2 (2 = programa público con términos; 1 = hay área pero sin programa) |
| Ya invierte en contenido o eventos para contadores | 0 a 2 |
| Decisor en México localizable | 0 a 2 (2 = nombre y LinkedIn; 1 = solo área o correo genérico) |
| Velocidad probable de aprobación para el 29-oct | 0 a 2 (2 = scale-up con responsable local; 1 = mediana; 0 = corporativo con comité) |
| Penalización por conflicto | -3 descarga CFDI (fuera); -2 vende capacitación de IA; -1 proveedor de IA |

Primera ola: 7 o más. De 5 a 6: segunda ola o enero. Menos de 5: se anota y
no se contacta.

## Shortlist por episodio

| Episodio | Tema que se posee | Quién lo posee (verificado) |
|---|---|---|
| 29-oct Declaración mensual | Cálculo mensual, consulta fiscal | Fiscalia.com, Tax Editores, IDC Online; Crol, Alegra; CONTPAQi y Siigo Aspel (enero) |
| 5-nov Ajuste anual de ISR | Salarios, constancias | Worky, Runa, Nomilinea, Factorial |
| 12-nov Cuotas obrero patronales | IMSS, Infonavit, SBC | Nomilinea, Worky, Runa, Factorial, Buk |
| 19-nov Candado a las fuentes | Fundamento, biblioteca fiscal | Fiscalia.com, Tax Editores, IDC Online, Tirant (con bandera de IA propia) |

Dueño de la serie completa, en orden: **1) plataforma o editorial fiscal**
(posee "fundamento", la regla de la serie); **2) nómina** (posee dos de
cuatro); **3) ERP con MCP** (Crol y Alegra ya venden "cálculos fiscales con
Claude sobre los datos del sistema", que es literalmente el episodio 4).

## Primera ola

Diez marcas, en orden de fit por velocidad. Las dos últimas van para enero
desde el primer mensaje. Nadie sale de aquí sin `fecha_verificacion` en el
CSV.

**Contactos confirmados el 2026-09-23** (segunda pasada; "verificado"
significa que la URL de LinkedIn aparece indexada con nombre y empresa, no
que se abrió el perfil, porque LinkedIn bloquea la lectura automática). Lo
que cambió respecto a la tabla de abajo, que se conserva por el argumento:

| Marca | A quién de verdad | Correo |
|---|---|---|
| Worky | **Mariana Calleja Martínez**, Partner Manager. La cuenta "Aguilar y Reyes" es compartida y sus posts son de 2023; Carlos de León es DG de maquila, no marketing. | mariana.calleja@worky.mx (publicado en worky.mx/distribuidores-y-aliados) |
| Tax Editores | **Diego Perezchavez**, CEO y DG de Tax Holding (LinkedIn `dpchstudio`, posts de sept-2026). Secundario: Carlos A. Corona Rabía, Director de Libros, Leyes y Revistas. | contactanos-tax@tax.com.mx |
| Nomilinea | **Marily Martínez**, Marketing Manager de Software SICOSS / Nomilinea (LinkedIn publicado en la página de la compañía). Luis Martínez existe pero no tiene LinkedIn. DG: Andrés Alberto Durán. | contacto@sicoss.com.mx |
| Runa HR | **Caleb Zúñiga Marroquín**, Channel Manager; sus posts son de 2022-2023, vigencia sin confirmar. | Formulario runahr.com/mx/distribuidores |
| IDC Online | **María Ayala**, Gerente Comercial de IDC: es el contacto de patrocinio del Media Kit 2025. | maria.ayala@idconline.mx, 55 8066 3458 |
| Fiscalia.com | Gustavo Leal Cueva, confirmado al frente (firma artículos del 4, 11 y 22 de sept-2026). LinkedIn `glealc`. | contacto@fiscalia.com |
| Crol ERP | Avelino Castro Valencia, DG. Sin marketing ni alianzas con nombre. | contacto@crol.mx |
| Factorial | Ernesto Blanco Sierra, Strategy y Partnerships LATAM, sigue en 2026; su agenda HubSpot está incrustada en factorial.mx/partnerships. | Sin correo público |
| CONTPAQi | Brian Nishizaki Simón, confirmado con el cargo el 18-sep-2026. Marketing: María Ramírez, Directora de Desarrollo de Mercado. | Sin correo público |
| **Alegra** | **Sin a quién escribirle hoy**: el country manager salió (Víctor Moreno está en Sesame) y la vacante de Channel Partnerships Manager México se cerró hace unas semanas: el nombramiento está por salir. Se revisa la página de LinkedIn de la empresa cada semana; alterno, Jorge Soto (CEO). | partners.alegra.com/quiero-ser-partner como puerta lateral |

| # | Marca | Rúbrica | Por qué | A quién |
|---|---|---|---|---|
| 1 | **Fiscalia.com** | 8 | Su producto es la biblioteca de leyes y tesis: el fundamento es su tema. Sin IA propia, sin cursos de IA. Empresa chica que decide su fundador. | Gustavo Leal Cueva, fundador y director ejecutivo; contacto@fiscalia.com |
| 2 | **Crol ERP** | 10 | Su mensaje es "usa Claude, ChatGPT o Copilot y genera cálculos fiscales" vía Crol Conecta (MCP). Programa Crol Firma (20 % + 5 %). El director general es contador colegiado. Decide el fundador. Bandera media: autoTran+ descarga CFDI dentro del ERP. | Avelino Castro Valencia, director general (LinkedIn localizado) |
| 3 | **Worky** | 9 | Nómina MX con eventos de IMSS y SBC activos este mes; equipo de alianzas con nombre. Bandera: acaban de lanzar SophIA, "agente payroll" con IA nativa. Ángulo a plantear de frente: Claude fundamenta y verifica, Worky ejecuta y timbra. | María Fernanda Aguilar y Maya Reyes, Business Alliances y Partnerships |
| 4 | **Runa HR** | 9 | Programa de contadores explícito y campaña anual para contadores. Entidad mexicana. Falta el nombre de alianzas. | Por localizar en la página de LinkedIn de la empresa; alterno, formulario de partners |
| 5 | **Alegra México** | 9 | MCP oficial con Claude (jun-2026), alianza con el IMCP, Summit 2026 con el SAT, patrocinó Nuevas Voces 2025: presupuesto de eventos demostrado. Bandera leve: Administrador XML. Riesgo: que pidan que los datos salgan de Alegra vía su MCP, y eso encaja con el episodio 4. | Víctor Moreno Navarro, country manager (verificar si sigue); David Sánchez, Head of Product; Jackie Villamil, Academy |
| 6 | **Nomilinea (Grupo SICOSS)** | 8 | Ya produce webinars de ajuste anual de ISR e IMSS: la serie es continuación de su propio contenido. Sin IA. Planes multiempresa para despachos. Falta el decisor. | Luis Martínez, Manager de Administración y Estrategia (por verificar); ventas@nomilinea.com.mx |
| 7 | **Tax Editores** | 6, entra por excepción | "Leyes correlacionadas artículo por artículo con casos prácticos" es el guion de la serie. Sin IA, sin cursos de IA. Editorial familiar sin área de alianzas: hay que llegar a dirección. | Sin nombre verificado; veronica.mora@tax.com.mx (cargo desconocido), 55 8000 9500 |
| 8 | **Factorial México** | 8 | Programa de partners certificados para asesorías, con nombre y agenda. Matriz en Barcelona: preguntar en la primera llamada dónde se aprueba marketing. | Ernesto Blanco Sierra, Manager de Partners Estratégicos (LinkedIn localizado) |
| 9 | **IDC Online (Grupo Expansión)**, para enero | 8 | Ya compran y venden patrocinios (Foro IDC con patrocinador principal y media kit). Tema exacto: consulta fiscal con fundamento. Corporativo de medios: se entra por Branded Content y se asume enero. | Claudia Candano, Directora Editorial y Branded Content; Alejandro Leal, Director Comercial Corporativo (directorio de Grupo Expansión) |
| 10 | **CONTPAQi**, para enero | 7 | Patrocina la Convención del IMCP 2026 y el CCPM; dueño del "cálculo" en escritorio. Bandera fuerte: XML en Línea+ es descarga masiva como producto, y BENI (IA propia, 9-sep-2026). Se contacta ahora para enero con el ángulo "Claude como capa de razonamiento sobre SU cálculo". Israel decide si la bandera de descarga lo saca. | Brian Nishizaki, Director de Nuevos Negocios (alianzas; LinkedIn localizado) |

## Segunda ola y otras series

| Marca | Rúbrica | Para qué serie | Nota |
|---|---|---|---|
| Siigo Aspel | 7 | Enero | Programa Partners con 8 a 10 %; convenio con el CCPM 2026 con énfasis en IA; patrocinó congresos del CCPM en 2024. Bandera fuerte: Siigo Fiscal Descargas ($499 al año por RFC) es producto de descarga masiva, y Siigo Fiscal trae IA propia. Corporativo (Bogotá). |
| Odoo México | 8 | Enero | Patrocina IMCP 2026, MCP oficial con Claude, programa de firmas contables. Pero su contabilidad es de empresa, no de despacho. Miquel Torner, director México. |
| Buk México | 7 | Enero | Patrocinador Diamante de AMEDIRH 2026: tiene presupuesto. Audiencia de RR.HH. corporativo. Luis de la Garza, Head of Partnerships. |
| Tirant Contadores | 6 | Enero | Legislación concordada y calculadoras; Adriana Bermúdez, directora comercial (LinkedIn). Bandera: SOFIA 3.0, IA propia sobre su base. |
| TAS (tasmx.app) | 6 | Otra serie | Vende "papel de trabajo citando el artículo" sin IA propia: tema exacto. Startup sin entidad visible ni presupuesto claro. |
| Thomson Reuters México (Checkpoint, Dofiscal) | 5 | Enero, si acaso | Tema exacto y alianza con el CCPM, pero lanzó CoCounsel (IA propia) en México: verán a Claude como rival. Multinacional, muy lenta. |
| Nominax (Tress) | 5 | Otra serie | Nómina multiempresa para despachos, Tijuana. Sin contacto. |
| Casia Creaciones (PAF), Notas Fiscales (HESS), Contribu, LEFISCO | 4 a 5 | Otra serie | Público correcto, presupuesto chico, sin contacto con nombre. |
| Fintech: Xepelin, Clara, Konfío, Kapital, Mendel | sin evaluar | Serie de cobranza o conciliación | Su tema es flujo de efectivo; no es noviembre. |
| PAC: SW Sapien, Facturama, Finkok | sin evaluar | Serie de facturación | Su tema es timbrado. |

**Descartados con motivo:**

- **Contalink**: descarga de XML del SAT. Conflicto con TodoConta.
- **Bind ERP**: fit 1 (contabilidad integrada para pyme, no el sistema con
  que un despacho calcula); adquirida por SUMA en 2021, sin decisor visible.
- **Zoho Books México**: patrocina IMCP y tiene MCP, pero poca tracción en
  despachos y cálculo fiscal MX básico.
- **QuickBooks**: salió de México en 2023.
- **ISEF**: vende "Inteligencia Artificial Aplicada para Contadores" (curso y
  paquete libro + curso). Conflicto directo con el ebook y los talleres.
- **ContadorMx**: vende cursos de IA para contadores y tiene afiliados al
  20 %. Conflicto de capacitación.
- **HELP AI, Tesio, Contaclub**: venden IA fiscal propia. Rompen "una
  herramienta por pieza".
- **Sesame HR, Rankmi**: no calculan nómina MX nativa o audiencia
  equivocada.
- **Fisconet**: no existe en México (la única es brasileña). **Sicofi**: es
  un PAC y el sistema del SAT, fuera de categoría.
- **Fortia, Nomitek, Nominapp, FiscoClic, Contadigital**: fuera de tema.

## Aliados de difusión (no patrocinadores)

- **IMCP.** Vende patrocinios de su Convención Nacional (Acapulco, 21 al
  23-oct-2026; brochure 2024 con paquetes desde $35,000 hasta $180,000
  MXN): convencion.imcp.org.mx/patrocinadores. Patrocinadores 2026:
  CONTPAQi, Zoho, Odoo, Microsoft, Editorial ISEF, ContadorMx, las Big Four
  y más. Sirve como referencia de precio de mercado con fuente y como lista
  de quién tiene presupuesto para contadores.
- **CCPM.** Sin paquete público; modelo de "beneficio a socios" (Checkpoint,
  Tirant, convenio con Siigo Aspel). Informe anual 2024: Siigo Aspel pagó
  "múltiples congresos" ($87,420) y Computación en Acción espacios
  publicitarios ($17,968). Contacto de patrocinios:
  patrocinios@colegiocpmexico.org.mx.
- **AMCP.** Convención anual 26 al 28-nov-2026; patrocinadores en imagen,
  no legibles en texto.

## Resultado de la búsqueda

Búsqueda del 2026-09-20. Cada afirmación lleva la URL que la prueba; lo que
no la tiene va como "por verificar".

### Nómina y recursos humanos

Posee los episodios del 5-nov (ajuste anual por salarios) y del 12-nov
(cuotas IMSS e Infonavit).

**Nomilinea (Grupo SICOSS).** Nómina en la nube desde 2004, planes anuales
públicos de $7,115 a $9,015 MXN con multiempresa "para despachos"
(nomilinea.com/carritoenlinea). Sin programa de comisiones publicado; la
página de alianzas es de integraciones (nomilinea.com/alianzas). **Ya
produce exactamente el contenido de la serie**: webinars "Ajuste Anual de
ISR" (youtu.be/KvHS5kltXUY), "IMSS: variables paso a paso"
(youtu.be/JNZr1ZNO6ps), prima de riesgo, créditos Infonavit
(nomilinea.com/webinars). Sin IA propia: Claude es complemento puro.
Entidad: Nomilinea, S.A. de C.V., CDMX. Contacto: Luis Martínez, Manager de
Administración y Estrategia (por verificar en LinkedIn); genérico
ventas@nomilinea.com.mx. Fit 3. Velocidad media (empresa mexicana mediana,
sin responsable de marketing visible). Rúbrica: 3+1+2+1+1 = **8**.

**Worky (con Zentric, su motor de nómina).** RR.HH. y nómina con "Garantía
Cero Multas"; precio público desde $30 por empleado más $49 el módulo de
nómina (worky.mx/precios-y-planes). "Refiere y gana" y red de distribuidores
en el home, sin términos publicados. Eventos esta misma semana: taller de
jornada de 40 horas (22-sep), mesa redonda legal y fiscal (23-sep),
lanzamiento con IA (24-sep); webinars grabados de IMSS, SBC, corrección de
CFDI (landing.worky.mx/eventos). Contacto con nombre: María Fernanda Aguilar
y Maya Reyes, Business Alliances y Partnerships (LinkedIn
`fernanda-aguilar-y-maya-reyes-957b4a135`); cofundador Carlos Marina
(linkedin.com/in/carlos-marina-69949019). Entidad: Worky, S.A.P.I. de C.V.,
CDMX, serie A 2024. **Bandera de IA**: acaban de lanzar "SophIA, agente
payroll" con IA nativa; su relato es que su agente hace la nómina. El ángulo
que hay que plantear de frente en la primera llamada: Claude fundamenta y
verifica, Worky ejecuta y timbra. Fit 3 con asterisco. Velocidad rápida.
Rúbrica: 3+1+2+2+2 = **10**, menos 1 si la tensión de IA se confirma.

**Runa HR.** Nómina y RR.HH., precio público $2,200 al mes más $1,100 por
licencia (runahr.com/mx/precios). **Programa de contadores explícito**: "red
de contadores y noministas que usan Runa para gestionar a sus clientes"
(runahr.com/mx/partners, runahr.com/mx/contadores). Campaña anual
"Celebremos a las contadoras y contadores" (recursos.runahr.com). Agentes de
IA para ISN e IMSS en su oferta: pueden ver a Claude como complemento o como
relato que prefieren controlar. Entidad: Runa HR, S. de R.L. de C.V., CDMX,
Y Combinator. Responsable de alianzas: no localizado (hay que entrar por el
formulario de partners o por LinkedIn de la empresa). Fit 3. Velocidad
media-rápida. Rúbrica: 3+2+2+0+2 = **9**.

**Factorial México.** Suite de RR.HH. con nómina MX, precio a cotización.
**Programa de Partners Certificados para asesorías** con revenue share y
directorio (factorial.mx/asesorias, factorial.mx/partnerships). Contacto con
nombre: Ernesto Blanco Sierra, Manager de Partners Estratégicos
(mx.linkedin.com/in/ernestoblancosierra); Valeria Brown, Marketing Manager.
Matriz en Barcelona, oficina en CDMX. En España patrocinan el Congreso en
Despachos Profesionales; en México el contenido es blog de RR.HH. Fit 2 (la
nómina es un módulo, no el centro; marca española). Velocidad media (el
presupuesto probablemente se aprueba en Barcelona). Rúbrica: 2+2+1+2+1 = **8**.

**Buk México.** Gestión de personas con nómina MX; precio no público.
Programa de referidos genérico. **Presupuesto de patrocinio demostrado**:
patrocinador Diamante del World HR Congress 2026 de AMEDIRH
(congresoamedirh.com/patrocinadores/buk). Pero su audiencia es RR.HH.
corporativo, no el contador de 45 a 65. Contacto: Luis de la Garza, Head of
Partnerships (sin LinkedIn localizado); Manuel Andrade, country manager desde
julio 2026. Entidad: Tech Bukers, S. de R.L. de C.V., Polanco; matriz en
Chile. Fit 2. Velocidad media-lenta. Rúbrica: 2+1+2+1+1 = **7**.

**Siigo Aspel NOI.** Nómina en línea $590 al mes. Programa Partners para
contadores con términos públicos: 8 a 10 % de bonificación, niveles, "NOI
cuenta" (siigo.com/mx/partners, siigo.com/mx/terminos-contadores-aliados).
Sin contacto de alianzas localizado. Corporativo (matriz en Bogotá). Fit 2.
Velocidad lenta. Se trata en la sección de ERP.

**CONTPAQi Nóminas.** Escritorio y nube multi-RFC "ideal para despachos"
(contpaqi.com/nominas). Red de distribuidores. Lanzó su agente BENI el
9-sep-2026 y querrá contar esa historia. Se trata en la sección de ERP.

**Sesame HR.** No calcula ISR ni IMSS de forma nativa y no le habla a
contadores. Tiene programa de afiliados de 10 a 20 % abierto a creadores
(sesamehr.mx/partners/afiliados), que no es patrocinio. Fit 1. Fuera de la
primera ola.

**Rankmi.** Suite de RR.HH. "con IA" para empresa grande, matriz en Chile.
Fit 1. Fuera.

**Contalink.** Contabilidad y nómina en la nube "para contadores
independientes y despachos". Incluye descarga de XML del SAT: **excluido por
conflicto con TodoConta**.

**Nominax** (Tress, Tijuana): nómina multiempresa para despachos, sin precio
ni contacto visibles. Fit 2, por verificar; segunda ola.

Descartados por alcance: Fortia y Nomitek (nómina empresarial on-premise),
Nominapp (colombiano; el mexicano es una app de recibos de ATEB).

### Plataformas y editoriales fiscales

Poseen el tema de la serie completa (fundamento) y los episodios del 29-oct
y del 19-nov.

**Fiscalia.com.** Portal fiscal con leyes, tesis, calculadoras y análisis;
planes anuales públicos de $2,875 a $8,775 MXN (fiscalia.com/suscribe.html).
Sin programa de partners. Contenido propio: cursos y el programa de radio
"Frecuencia Fiscal". Sin IA propia ni cursos de IA. Decide su fundador:
Gustavo Leal Cueva, director ejecutivo y socio de Leal Benavides (Monterrey,
por verificar); contacto@fiscalia.com, 818 356 9434. Razón social no
localizada. Fit 3. Velocidad rápida. Rúbrica: 3+0+2+1+2 = **8**.

**Tax Editores Unidos.** Prontuario fiscal, Práctica Fiscal, leyes
correlacionadas "artículo por artículo con casos prácticos", Tax Capacita
(tax.com.mx). Sin partners. Sin IA. Sin cursos de IA localizados. Entidad:
Tax Editores Unidos, S.A. de C.V., Roma Sur, CDMX, desde 1989. Decisor no
localizado; veronica.mora@tax.com.mx (cargo desconocido), 55 8000 9500. Fit
3. Velocidad media. Rúbrica: 3+0+1+1+1 = **6**; entra a la primera ola por
excepción porque posee el tema exacto sin ningún conflicto.

**IDC Online (Grupo Expansión).** Análisis fiscal y laboral, membresías
anuales de $5,100 a $15,000 más IVA (idconline.mx/suscribete). **Ya operan
patrocinios**: Foro IDC con patrocinador principal (Themis) y formulario
"quiero ser patrocinador"; media kit 2022 en promociones.idconline.mx.
Seminarios, desayunos, IDC Click, playlist de cursos en YouTube. Sin IA
propia ni cursos de IA. Entidad: IDC Asesores y Consultores, S.A. de C.V.,
Nápoles, CDMX. Contactos del directorio comercial de Grupo Expansión: Claudia
Candano (Directora Editorial y Branded Content), Alejandro Leal (Director
Comercial Corporativo), Cristhian Del Angel (Estrategia Multiplataforma y
Growth). Fit 3. Velocidad lenta (corporativo de medios). Rúbrica: 3+1+2+2+0 =
**8**, para enero.

**Thomson Reuters México (Checkpoint, Dofiscal, ProView).** Tema exacto y
Checkpoint es beneficio para socios del CCPM. Programa de socios solo para
revendedores. **Lanzó CoCounsel Core (IA generativa) en México en 2026**:
verán a Claude como rival. Entidad: Dofiscal Editores, S.A. de C.V., Del
Valle, CDMX. Sin nombre localizado; contacto@thomson.com.mx. Fit 2. Muy
lenta. Rúbrica: 2+1+2+0+0 = **5**.

**Tirant lo Blanch México (Tirant Contadores).** Legislación concordada,
jurisprudencia, 21 calculadoras, alertas 69-B. Convenios con el CCPM.
Contacto con nombre: Adriana Bermúdez, directora comercial (LinkedIn
localizado). Entidad: Tirant México, S. de R.L. de C.V., CDMX. Bandera:
SOFIA 3.0, IA propia sobre su base. Fit 2. Velocidad media. Rúbrica:
2+0+1+2+1 = **6**.

**Editorial ISEF.** Compendios y cursos; Foro Fiscal de Alto Nivel; canal de
YouTube. **Vende "Inteligencia Artificial Aplicada para Contadores"** (curso
de 4 horas con ChatGPT, Copilot y Perplexity) y un paquete libro + curso:
conflicto directo con el ebook y los talleres. Fit 1. **No recomendado.**

**Editoriales chicas con público correcto y presupuesto dudoso**: Casia
Creaciones (revista PAF y "La Hora PAF"), Notas Fiscales (Grupo Editorial
HESS, Naucalpan; ventas@notasfiscales.com.mx), Contribu, LEFISCO (leyes
correlacionadas, San Pedro Garza García). Fit 2 a 3 por tema, sin contacto
con nombre. Segunda ola u otra serie.

**Plataformas de IA fiscal** (venden justo la promesa del episodio 4, con IA
propia): HELP AI (Puebla, $499 a $1,999 al mes), Tesio ($416 a $666 al mes),
Contaclub. **No recomendadas** por "una herramienta por pieza". **TAS
(tasmx.app)** es distinta: papel de trabajo que cita el artículo, sin IA
propia; fit 3 por tema, pero startup sin entidad visible. Otra serie.

**ContadorMx**: medio con cursos y afiliados al 20 %; vende cursos de IA
para contadores. Conflicto de capacitación. Fuera.

### ERP y software contable

Poseen el "cálculo" (el episodio del 29-oct) y, los que tienen MCP, el
episodio del 19-nov.

**Crol ERP.** ERP y POS en la nube, contabilidad automática (crol.mx).
Programa Crol Firma: 20 % recurrente por administrar suscripciones de
clientes y 5 % por referidos (crol.mx/contadores.html). **Crol Conecta, sobre
MCP: "usa Claude, ChatGPT o Copilot y genera estados financieros, análisis y
cálculos fiscales"**; además "Neocontador" por WhatsApp (ago-2026). Es el
único de la lista que ya nombra a Claude en su venta: complemento explícito.
Webinars en YouTube (@CrolERP). Contacto: Avelino Castro Valencia, director
general y cofundador, C.P.C., exvicepresidente del Colegio de Contadores de
Sonora (LinkedIn localizado). Entidad: Crol PFF México, S.A.P.I. de C.V.,
Hermosillo. Bandera media: autoTran+ descarga y registra CFDI desde el SAT
como función del ERP. Fit 3. Velocidad rápida. Rúbrica: 3+2+1+2+2 = **10**.

**Alegra México.** Contabilidad y facturación en la nube con RFC ilimitados
para contadores. Alegra Partners con certificación (comisión no pública en
MX). **Servidor MCP oficial para Claude y ChatGPT (8-jun-2026)**, Alegra IA
para DIOT, RESICO, IVA e ISR. Evidencia de presupuesto: convenio con el IMCP
para educación continua, Academy Summit México 2026 (11-ago, con el SAT),
patrocinador del Congreso Nuevas Voces 2025. Entidad: Alegra Contabilidad,
S.A. de C.V., RFC ACO240708JZ7. Contactos: Víctor Moreno Navarro, country
manager (su LinkedIn hoy muestra Sesame: verificar si sigue), David Sánchez,
Head of Product, Jackie Villamil, Product Academy Leader. Bandera leve:
Administrador XML carga facturas del SAT. Su Academy Live de "Alegra IA" es
gratuita y de su producto, no un curso de venta. Fit 3. Velocidad
media-rápida. Rúbrica: 3+2+2+1+1 = **9**.

**CONTPAQi (Computación en Acción, S.A. de C.V., Guadalajara).** Suite de
escritorio con nube nueva (Anticipa, Optimiza, Colabora). Sin programa de
contadores con comisión; canal de más de 6 mil distribuidores. **Patrocina
la Convención Nacional del IMCP 2026** (convencion.imcp.org.mx/patrocinadores)
y al CCPM (informe 2024); organiza CONTPAQi Profit. Lanzó BENI, agente de IA
en Anticipa, el 9-sep-2026. **Bandera fuerte: XML en Línea+ es descarga
masiva vendida como producto**, y Anticipa descarga XML para alertas. No es
su core, pero compite con TodoConta en ese módulo; Israel decide. Contacto:
Brian Nishizaki, Director de Nuevos Negocios desde dic-2025, con mandato de
alianzas (LinkedIn localizado). Fit 2. Velocidad lenta. Rúbrica: 2+1+2+2+0 =
**7**, para enero.

**Siigo Aspel (Aspel de México, S.A. de C.V., Tlalnepantla).** SAE, COI, NOI
de escritorio más Siigo Nube y Siigo Fiscal. Programa Partners con términos
públicos: 8 % en planes mensuales y 10 % en anuales, cinco niveles, bonos de
capacitación. **Convenio de dos años con el CCPM (mayo 2026) con énfasis en
IA**; pagó "múltiples congresos" del CCPM en 2024. Siigo Fiscal trae IA
propia (feb-2026). **Bandera fuerte: Siigo Fiscal Descargas, $499 al año por
RFC, es producto de descarga masiva.** Contacto: David Ortiz, CEO Latam y
country manager (sin LinkedIn verificado); formulario de aliados. Fit 2.
Velocidad lenta (Bogotá). Rúbrica: 2+2+2+1+0 = **7**, para enero.

**Odoo México.** ERP modular con localización mexicana. Programa de firmas
contables (accountingfirmsmx@mail.odoo.com), sin comisión pública.
**Patrocina la Convención del IMCP 2026**; bootcamp de contabilidad en CDMX
(may-2026). **MCP oficial documentado para Claude Desktop y Claude Code.**
Contactos: Miquel Torner, director México (LinkedIn); Alejandro de la Cruz,
Head of Channel; Laila El Shawarby, Business Alliance Manager. Oficina en
Polanco; razón social MX por verificar. Fit 2 (contabilidad de empresa, la
nómina MX pasa por partners). Velocidad media-lenta. Rúbrica: 2+1+2+2+1 =
**8**, para enero.

**Zoho Books México.** Patrocina IMCP 2026, MCP oficial en Claude, Fernando
Sotelo dirige alianzas Latam (LinkedIn). Pero poca tracción en despachos y
cálculo fiscal MX básico. Fit 1. Descartado para esta serie.

**Bind ERP.** "Bind para Contadores" con hasta 40 % de comisión recurrente,
webinars propios. Contabilidad integrada para pyme, no el sistema con que un
despacho calcula ajuste anual o cuotas. Adquirida por SUMA en 2021; el
fundador ya salió y no hay decisor visible. Fit 1. Descartado.

**QuickBooks**: cerró México en 2023. Fuera.

### Listas de patrocinadores de congresos (quién tiene presupuesto)

- **103 Convención Nacional IMCP 2026**, Acapulco, 21 al 23-oct-2026:
  CONTPAQi, Zoho, Odoo, Microsoft, Editorial ISEF, ContadorMx, Deloitte,
  KPMG, Grant Thornton, BDO, Moore, Crowe, Kreston, Baker Tilly, Themis,
  Emburse y otros. Brochure de patrocinios 2024 con paquetes de $35,000 a
  $180,000 MXN (convencion.imcp.org.mx/wp-content/uploads/2024/08/brochure-patrocinios-agosto-2024.pdf).
  Nota: ni Siigo Aspel ni Alegra aparecen en esta lista.
- **CCPM, informe anual 2024**: Siigo Aspel (múltiples congresos, $87,420),
  Computación en Acción (espacios, $17,968), maratones de conocimiento con
  EY, KPMG, Deloitte, Garrido Licona y B·Solver ($85,000 cada uno).
- **Eventos propios de marca con contadores**: CONTPAQi Profit 2026 (3-jun,
  Pepsi Center, con la presidenta del IMCP), Alegra Academy Summit México
  2026 (11-ago, EBC, con el SAT).
