/**
 * Datos de la oferta de talleres. Alimentan /talleres y llms-full.txt.
 * Sin precios: el cierre es por diagnóstico (regla del proyecto).
 */

export interface Taller {
  titulo: string;
  para: string;
  descripcion: string;
  resultados: string[];
}

export const TALLERES: Taller[] = [
  {
    titulo: "IA aplicada al trabajo fiscal",
    para: "Despachos contables de 2 a 20 personas",
    descripcion:
      "El taller base: tu equipo aprende a usar Claude sobre casos reales del despacho, con método y sin exponer datos de clientes.",
    resultados: [
      "Prompts de auditoría de CFDI funcionando sobre XML reales",
      "Flujo de conciliación asistida por IA",
      "Criterios claros de qué se automatiza y qué requiere criterio humano",
    ],
  },
  {
    titulo: "Automatiza tu despacho con MCP",
    para: "Despachos que ya usan IA y quieren el siguiente nivel",
    descripcion:
      "Conectamos Claude a los archivos locales del despacho vía MCP: descarga masiva, conciliaciones y reportes en lenguaje natural, sin que un dato salga de sus equipos.",
    resultados: [
      "Conexión MCP instalada y operando en las máquinas del equipo",
      "Tres procesos del despacho automatizados en la sesión",
      "Protocolo interno de privacidad de datos fiscales",
    ],
  },
  {
    titulo: "IA para colegios y empresas",
    para: "Colegios de contadores, universidades y áreas de finanzas",
    descripcion:
      "Conferencia o taller a la medida para grupos grandes: el panorama real de la IA en la profesión contable mexicana, con demostraciones en vivo sobre el SAT.",
    resultados: [
      "Sesión de 2 a 8 horas adaptada a la audiencia",
      "Demostraciones en vivo con CFDI y herramientas reales",
      "Material de seguimiento para los asistentes",
    ],
  },
];
