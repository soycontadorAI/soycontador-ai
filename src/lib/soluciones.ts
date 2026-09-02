/**
 * Soluciones a la medida: desarrollo de automatizaciones para procesos
 * específicos. El cliente no aprende a programar; recibe la herramienta
 * funcionando. Sin precios (cierre por diagnóstico).
 */

export interface Solucion {
  titulo: string;
  descripcion: string;
}

export const SOLUCIONES: Solucion[] = [
  {
    titulo: "Automatizar un proceso manual",
    descripcion:
      "Ese reporte que armas a mano cada mes (concentrados de ventas, conciliaciones, papeles de trabajo) se convierte en un script que corre en segundos, con el mismo formato que ya usas.",
  },
  {
    titulo: "Mejorar los flujos que ya tienes",
    descripcion:
      "Tus plantillas de Excel, tus descargas del SAT y tus reportes recurrentes se quedan; les quitamos los pasos manuales y los errores de captura.",
  },
  {
    titulo: "Auditar tu operación con código",
    descripcion:
      "Revisión de tus flujos operativos con ojos de contador y de ingeniero: dónde se pierde tiempo, qué se puede automatizar primero y qué requiere criterio humano.",
  },
];

/**
 * Caso real (verificado en el repo excel_templates/cortes_gasolineras):
 * cortes diarios de 2 gasolineras, un Excel por sucursal con una hoja por día
 * del mes (hasta 31), consolidado a mano en 6-7 horas cada mes. Hoy un script
 * en Python (pandas + openpyxl) detecta los archivos, tolera que cada sucursal
 * acomode sus tablas distinto, y entrega un concentrado de 4 hojas (resumen
 * diario, clientes, vales y gastos) en segundos.
 */
export const CASO_GASOLINERA = {
  contexto: "Cortes diarios de 2 estaciones de gasolina",
  antes: "6 a 7 horas de captura al mes, repartidas en 1 a 3 días",
  despues: "Un script en Python lo concentra en segundos",
  detalle:
    "Un Excel por sucursal con una hoja por cada día del mes (hasta 31 hojas). El script encuentra las tablas aunque cada sucursal las acomode diferente y entrega un consolidado mensual de 4 hojas: resumen diario, clientes, vales y gastos.",
} as const;

/**
 * Vigía fiscal: producto nombrado dentro de Soluciones (no es un servicio
 * genérico, es un desarrollo recurrente sobre una cartera de RFCs). Sin
 * precio publicado: se cotiza por tamaño de cartera tras el diagnóstico.
 *
 * GUARDARRAÍL, no adorno de copy: el vigía NUNCA abre el buzón tributario.
 * Abrir un documento del buzón equivale a darse por notificado y arranca los
 * plazos, así que un monitor que lo abriera solo le crearía obligaciones al
 * contribuyente. Avisar sí; abrir, jamás sin decisión humana.
 */
export const VIGIA = {
  nombre: "Vigía fiscal",
  promesa: "Un vigía que revisa tu cartera todos los días",
  vigila: [
    {
      que: "Opinión de cumplimiento (32-D)",
      detalle: "El día que pasa de positiva a negativa, te enteras tú primero.",
    },
    {
      que: "Listas 69 y 69-B",
      detalle: "Tus clientes y los proveedores que les están facturando.",
    },
    {
      que: "Constancia de Situación Fiscal",
      detalle: "Cambios de régimen, de domicilio y altas o bajas de obligaciones.",
    },
  ],
  noHace: {
    titulo: "Lo que no hace: abrir tu buzón tributario",
    detalle:
      "Abrir un documento del buzón equivale a darte por notificado y arranca los plazos. El vigía te avisa que hay algo esperándote; la decisión de abrirlo, y cuándo, sigue siendo tuya.",
  },
  paraQuien:
    "Despachos con cartera grande, corporativos con varias entidades y plataformas que administran empresas de terceros.",
} as const;
