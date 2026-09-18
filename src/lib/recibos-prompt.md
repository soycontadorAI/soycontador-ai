Actúa como un desarrollador web Senior Full-Stack con experiencia en facturación electrónica en México (SAT, CFDI 4.0 y Complemento de Nómina 1.2).

Quiero construir una aplicación web que convierta XML de recibos de nómina CFDI 4.0 en PDF.

---

## RESTRICCIÓN NÚMERO UNO

La aplicación debe ser **100% del lado del cliente**. Sin backend y sin subir archivos a ningún servidor.

- Los XML se leen con `FileReader` y se procesan en memoria.
- El PDF se genera en el navegador y se descarga desde ahí.
- Ninguna petición de red debe llevar contenido de los XML, ni siquiera para telemetría o para generar el código QR.
- Las librerías van **incluidas en el archivo**, no cargadas desde un CDN: la app tiene que funcionar hasta sin internet.

Esto no es negociable: son datos fiscales de contribuyentes y no pueden salir de la computadora de quien usa la app. Si algún requisito de abajo te parece que obliga a un servidor, **dímelo en vez de resolverlo con uno**.

Entrégalo como **un solo archivo HTML autocontenido**, guardado en esta carpeta. Lo voy a abrir con doble clic.

---

## REQUISITOS

1. Zona de **arrastrar y soltar**, vista previa del PDF y descarga en lote (ZIP).
   - Acepta uno o varios XML a la vez.
   - Lista de lo cargado con empleado, periodo y neto a pagar, con opción de quitar uno.
   - Descarga individual y descarga en lote en ZIP.
   - Opción de cargar un logotipo para el encabezado (se queda en memoria, tampoco se sube).
   - Errores claros y distintos entre sí: XML mal formado, XML que no es de nómina, versión de CFDI distinta a 4.0.

2. Parsea por nombre local de nodo, no por prefijo: no supongas que siempre viene `cfdi:` y `nomina12:`. Lee en UTF-8 y tolera el BOM: los nombres traen acentos y Ñ, y con la codificación equivocada salen caracteres rotos. Extrae:
   - Comprobante: Version, Serie, Folio, Fecha, Moneda, TipoDeComprobante (debe ser `N`), SubTotal, Descuento, Total, LugarExpedicion, MetodoPago, FormaPago, NoCertificado.
   - Emisor (`cfdi:Emisor` y `nomina12:Emisor`): Nombre, Rfc, RegimenFiscal, RegistroPatronal.
   - Receptor: CURP, NumSeguridadSocial, FechaInicioRelLaboral, Antigüedad, TipoContrato, TipoJornada, TipoRegimen, NumEmpleado, Departamento, Puesto, RiesgoPuesto, PeriodicidadPago, Banco, CuentaBancaria, SalarioBaseCotApor, SalarioDiarioIntegrado, ClaveEntFed; más Nombre y Rfc del `cfdi:Receptor`.
   - Nómina: TipoNomina, FechaPago, FechaInicialPago, FechaFinalPago, NumDiasPagados, TotalPercepciones, TotalDeducciones, TotalOtrosPagos.
   - Desglose: Percepciones (Clave, Concepto, ImporteGravado, ImporteExento), Deducciones (Clave, Concepto, Importe), OtrosPagos (Clave, Concepto, Importe, y el nodo `SubsidioAlEmpleo` cuando venga), HorasExtra dentro de cada Percepción, e Incapacidades.
   - Timbre (`tfd:TimbreFiscalDigital`): Version, UUID, FechaTimbrado, RfcProvCertif, SelloCFD, NoCertificadoSAT, SelloSAT.

3. Cálculos.
   - Neto a pagar = TotalPercepciones + TotalOtrosPagos − TotalDeducciones.
   - Los importes vienen como texto con hasta 6 decimales. Súmalos en centavos o con decimal fijo, nunca con flotantes crudos, y redondea sólo al presentar.
   - Moneda mexicana, dos decimales, separador de miles.
   - **Verifica contra el propio XML**: si tu suma de percepciones no coincide con el atributo `TotalPercepciones`, no lo escondas. Márcalo visible en la interfaz y en el PDF. Prefiero ver una diferencia que un PDF bonito y mal.

4. Dos cosas que casi siempre salen mal.
   - **La Cadena Original del complemento de certificación NO viene en el XML.** Hay que armarla con el formato del SAT, `||version|UUID|FechaTimbrado|RfcProvCertif|SelloCFD|NoCertificadoSAT||`. No la busques como nodo: no existe.
   - **El QR no es sólo el UUID.** La expresión impresa del CFDI 4.0 apunta a `https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx` y lleva `id` (UUID), `re` (RFC del emisor), `rr` (RFC del receptor), `tt` (total) y `fe` (los últimos 8 caracteres del SelloCFD). Genera el QR con una librería local, nunca con una API que reciba la URL. Antes de escribir código dime exactamente qué cadena vas a construir y cómo vas a formatear `tt`, para validarlo contra el Anexo 20.

5. El PDF.
   - Una hoja carta por recibo, con aire y tipografía legible, que se entienda impreso en blanco y negro.
   - Encabezado con logotipo y datos del emisor; bloque del receptor; bloque del periodo; tablas de percepciones, deducciones y otros pagos; totales destacados; y pie fiscal con UUID, sellos, cadena original y QR.
   - Los sellos y la cadena original son cadenas larguísimas: pártelas para que no se salgan del margen ni encimen el resto.
   - Nombre del archivo: `RFC_NumEmpleado_FechaInicialPago_FechaFinalPago.pdf`, sin acentos ni espacios.

Fuera de alcance: no timbra, no valida sellos contra el SAT, no usa FIEL ni CSD, y no guarda nada entre sesiones.

---

### DOCUMENTACION OFICIAL

Te adjunto la guía del SAT del complemento de nómina (y el Anexo 20 como respaldo). **Valida la estructura contra la norma antes de escribir el código final**, y dime si algo no queda claro.

En la carpeta `guia-sat/` están la guía, el Anexo 20 (guía general y el estándar técnico del DOF, donde viven la cadena original y el QR) y los tres XSD: `cfdv40.xsd`, `nomina12.xsd` y `TimbreFiscalDigitalv11.xsd`. Los XSD son la fuente de verdad de qué atributos existen y cuáles son obligatorios.

No te voy a dar XML reales: la estructura viene en la norma. Los recibos de verdad entran hasta que la app esté terminada, y ahí la pruebo yo en mi máquina. No inventes nodos ni valores de ejemplo; si algo de la norma no aparece o no lo encuentras, dímelo.

---

### ¿CÓMO QUIERO QUE TRABAJEMOS?

1. **Confírmame que entiendes** el requerimiento y la estructura del CFDI 4.0 de nómina.
2. **Recomiéndame el stack** más liviano para lograrlo rápido.
3. Dime **qué de la norma no te quedó claro** antes de escribir una línea.
4. Antes de escribir código dime también qué librería vas a usar para PDF, ZIP y QR (y confirma que las tres caben dentro del HTML), qué cadena exacta va a llevar el QR y cómo vas a armar la cadena original.
5. Sólo entonces escribe el código.
6. Cuando lo pruebe con mis XML, te voy a describir lo que no funcione (un total que no cuadra, un sello que se sale del margen). Se corrige sobre el mismo archivo, sin empezar de cero, hasta que la generación en lote quede.
