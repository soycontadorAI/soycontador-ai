/**
 * Herramientas que Israel construyó. Copy propio de este sitio (regla
 * anti-duplicación: describir y ENLAZAR, nunca copiar texto de todoconta.com).
 */

export interface Herramienta {
  nombre: string;
  descripcion: string;
  url: string;
  estado: "disponible" | "beta" | "en desarrollo";
}

export const HERRAMIENTAS: Herramienta[] = [
  {
    nombre: "TodoConta",
    descripcion:
      "El software fiscal que empecé en 2012 y sigue creciendo: descarga masiva de CFDI del SAT, Constancia de Situación Fiscal y Opinión de Cumplimiento 32-D en un clic, cruce contra listas negras (69 y 69-B) y procesamiento de nómina.",
    url: "https://todoconta.com",
    estado: "disponible",
  },
  {
    nombre: "Conexión MCP con el SAT",
    descripcion:
      "El puente entre Claude y tus CFDI: le pides cálculos, conciliaciones y reportes en lenguaje natural, y la IA trabaja sobre tus archivos locales. Ningún dato fiscal sale de tu computadora.",
    url: "https://todoconta.com",
    estado: "disponible",
  },
  {
    nombre: "Abacus",
    descripcion:
      "Asistente fiscal mexicano por WhatsApp y Telegram: resuelve dudas de SAT, CFDI e impuestos en el chat donde ya trabajas.",
    url: "https://todoconta.com",
    estado: "beta",
  },
];
