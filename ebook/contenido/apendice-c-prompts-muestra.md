---
title: "Apéndice C: 5 Prompts de muestra"
pubDate: 2026-03-13
description: "Cinco prompts listos para usar en situaciones fiscales y contables reales del despacho mexicano."
chapter: 20
bookSlug: "ia-para-contadores"
isFree: false
---

# Apéndice C: 5 Prompts de muestra

Estos son cinco prompts simplificados, uno por cada categoría del Pack de Prompts de Productividad para Contadores Mexicanos. Son funcionales y puedes usarlos hoy mismo con cualquier modelo de IA.

Sin embargo, son versiones reducidas. El pack completo incluye 25 prompts con más variables, más detalle, validaciones adicionales y tips profesionales que hacen la diferencia entre una respuesta genérica y una respuesta de nivel profesional.

---

## 1. Análisis Fiscal: Revisión de CFDI

**Cuándo usarlo:** Cuando recibes la facturación mensual de un cliente y necesitas revisarla antes de registrarla en contabilidad.

```
Actúa como un Contador Público mexicano especializado en revisión de CFDI.

Analiza los siguientes comprobantes fiscales y genera un reporte con observaciones.

DATOS DEL CONTRIBUYENTE:
- RFC: [RFC_DEL_CLIENTE]
- Régimen fiscal: [REGIMEN_FISCAL]
- Período de revisión: [MES_Y_AÑO]

DATOS DE LOS CFDI A REVISAR:
[PEGAR_AQUI_RESUMEN_DE_CFDIS]
(Incluye: UUID, RFC emisor, concepto, subtotal, IVA, total, uso de CFDI, método de pago, forma de pago)

PARA CADA CFDI, VALIDA:
1. Que el RFC del emisor tenga formato válido y no sea genérico (XAXX010101000)
2. Que el uso de CFDI sea congruente con el concepto facturado
3. Que el método de pago (PUE/PPD) y la forma de pago sean consistentes
4. Si es deducible conforme al Art. 27 LISR

Entrega una tabla resumen con el estatus de cada CFDI y lista las alertas que encuentres ordenadas por prioridad.
```

**La versión completa en el pack incluye:** clasificación de deducibilidad con tres niveles (deducible, revisar, no deducible), formato de entrega con resumen ejecutivo y sistema de alertas por semáforo, y recomendaciones de acciones específicas priorizadas.

---

## 2. Análisis Financiero: Análisis de Estados Financieros

**Cuándo usarlo:** Cuando necesitas preparar un resumen ejecutivo de resultados financieros para presentar a tu cliente o a los socios de la empresa.

```
Actúa como un Contador Público mexicano especializado en análisis financiero conforme a las NIF.

Analiza los siguientes estados financieros y genera un reporte ejecutivo.

DATOS DE LA EMPRESA:
- Nombre: [NOMBRE_EMPRESA]
- Giro: [GIRO_O_INDUSTRIA]

ESTADO DE SITUACIÓN FINANCIERA al [FECHA_CORTE]:
ACTIVO:
- Efectivo: $[MONTO]
- Cuentas por cobrar: $[MONTO]
- Inventarios: $[MONTO]
- Total activo circulante: $[MONTO]
- Activo fijo neto: $[MONTO]
- Total activo: $[MONTO]

PASIVO:
- Proveedores: $[MONTO]
- Impuestos por pagar: $[MONTO]
- Total pasivo corto plazo: $[MONTO]
- Deuda largo plazo: $[MONTO]
- Total pasivo: $[MONTO]

CAPITAL CONTABLE:
- Capital social: $[MONTO]
- Resultados acumulados: $[MONTO]
- Resultado del ejercicio: $[MONTO]
- Total capital: $[MONTO]

ESTADO DE RESULTADOS período [PERIODO]:
- Ingresos netos: $[MONTO]
- Costo de ventas: $[MONTO]
- Gastos de operación: $[MONTO]
- Utilidad neta: $[MONTO]

GENERA:
1. Resumen ejecutivo (5 puntos clave en lenguaje claro, no técnico)
2. Indicadores principales: liquidez, rentabilidad y endeudamiento
3. Tres recomendaciones concretas ordenadas por impacto
```

**La versión completa en el pack incluye:** 14 indicadores financieros con semáforo visual, análisis comparativo contra período anterior con detección de variaciones significativas, y ciclo de conversión de efectivo con días de cobro, inventario y pago.

---

## 3. Nómina e IMSS: Cálculo de Liquidación y Finiquito

**Cuándo usarlo:** Cuando necesitas calcular cuánto le corresponde a un trabajador que se separa de la empresa, ya sea por renuncia o por despido.

```
Actúa como un especialista mexicano en derecho laboral y nóminas, con conocimiento de la LFT y la LISR.

Calcula la liquidación/finiquito para el siguiente caso.

DATOS DEL TRABAJADOR:
- Fecha de ingreso: [FECHA_INGRESO]
- Fecha de separación: [FECHA_SEPARACION]
- Salario diario: $[SALARIO_DIARIO]
- Salario diario integrado: $[SDI]

CAUSA DE SEPARACIÓN: [RENUNCIA VOLUNTARIA / DESPIDO INJUSTIFICADO / DESPIDO JUSTIFICADO]

PRESTACIONES:
- Aguinaldo: [DIAS] días al año
- Vacaciones según antigüedad: [DIAS] días
- Prima vacacional: [PORCENTAJE]%
- Vacaciones no disfrutadas: [DIAS] días

CALCULA:
1. Finiquito: salarios pendientes, aguinaldo proporcional, vacaciones proporcionales, prima vacacional
2. Indemnización (si aplica por despido injustificado): 3 meses de salario, 20 días por año, prima de antigüedad
3. ISR a retener considerando las exenciones del Art. 93 LISR
4. Neto a pagar

Presenta los cálculos en tablas con el desglose de cada concepto.
```

**La versión completa en el pack incluye:** manejo de seis causas de separación distintas con sus fundamentos legales, cálculo detallado de ISR con tabla de exentos y gravados por concepto, y sección de obligaciones patronales (baja IMSS, timbrado, constancia de retenciones).

---

## 4. Comunicación: Correo Profesional a Clientes

**Cuándo usarlo:** Cuando necesitas redactar un correo a tu cliente para comunicar resultados, solicitar documentos o notificar algo importante, y quieres que suene profesional sin perder claridad.

```
Actúa como un Contador Público mexicano que necesita redactar un correo profesional para un cliente.

DATOS:
- Mi nombre: [TU_NOMBRE]
- Nombre del cliente: [NOMBRE_CLIENTE]
- Tono: [FORMAL / CERCANO PERO PROFESIONAL]

SITUACIÓN:
Tipo de correo: [Entrega de información / Solicitud de documentos / Comunicar impuestos a pagar / Seguimiento de trámite / Otro]

Detalle: [DESCRIBIR QUÉ NECESITAS COMUNICAR]

Montos importantes: [SI APLICA]
Fechas límite: [SI APLICA]

Redacta un correo que:
- Tenga un asunto claro y específico
- Sea breve (máximo 200 palabras)
- Use lenguaje claro sin jerga contable innecesaria
- Incluya la acción que el cliente debe tomar y en qué plazo
- Cierre de forma profesional
```

**La versión completa en el pack incluye:** dos versiones del correo (formal y conversacional) para que elijas la que mejor se adapte, un mensaje de seguimiento por WhatsApp listo para usar, y personalización por tipo de relación con el cliente (nueva, recurrente, de años).

---

## 5. Productividad: Checklist de Cierre Mensual

**Cuándo usarlo:** Cuando empieza el período de cierre del mes y necesitas un listado ordenado de todo lo que tienes que hacer para no olvidar ningún paso.

```
Actúa como un Contador Público mexicano experto en procesos de cierre contable y fiscal.

Crea un checklist ordenado cronológicamente para el cierre mensual de un cliente.

DATOS DEL CLIENTE:
- Nombre: [NOMBRE_CLIENTE]
- Tipo de persona: [FÍSICA / MORAL]
- Régimen fiscal: [REGIMEN]
- ¿Tiene nómina? [SI/NO]
- ¿Presenta DIOT? [SI/NO]
- Mes de cierre: [MES_Y_AÑO]

OBLIGACIONES:
- ¿Pago provisional de ISR? [SI/NO]
- ¿Pago definitivo de IVA? [SI/NO]
- ¿Retenciones de ISR o IVA? [SI/NO]
- ¿ISN estatal? [SI/NO]

Organiza el checklist en estas fases:
1. Recopilación de información (días 1-5)
2. Registro contable (días 3-10)
3. Conciliaciones (días 8-12)
4. Cálculo de impuestos (días 10-14)
5. Presentación de declaraciones (días 14-17)

Para cada tarea incluye una fecha límite sugerida y quién es responsable (contador, auxiliar o cliente).
```

**La versión completa en el pack incluye:** fase de cierre y documentación con respaldo de información, calendario visual del mes con fechas límite, prioridad por tarea con tiempo estimado, y un mensaje listo para enviar al cliente con la lista de documentos que debe entregar.

---

Estos cinco prompts te dan una idea clara de cómo trabaja cada categoría. Si con estas versiones simplificadas ya obtienes resultados útiles, imagina lo que puedes lograr con los 25 prompts completos del pack, cada uno con todas las variables, validaciones y tips profesionales incluidos.
