/**
 * Herramientas que Israel construyó. Copy propio de este sitio (regla
 * anti-duplicación: describir y ENLAZAR, nunca copiar texto de todoconta.com).
 *
 * Precisión de privacidad: solo la app de ESCRITORIO garantiza que los XML se
 * quedan en tu equipo. El MCP trabaja vía la cuenta de TodoConta (app online),
 * así que su promesa es "canal controlado, sin pegar datos en chats públicos".
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
      "Software fiscal en web y escritorio: descarga masiva de CFDI del SAT, Constancia de Situación Fiscal y Opinión de Cumplimiento 32-D en un clic, cruce contra listas negras (69 y 69-B) y procesamiento de nómina. En la versión de escritorio tus XML se quedan en tu equipo.",
    url: "https://todoconta.com",
    estado: "disponible",
  },
  {
    nombre: "Conexión MCP con el SAT",
    descripcion:
      "El puente entre tu asistente de IA y tus CFDI: conectas Claude (para quien fue diseñado) a tu cuenta de TodoConta y le pides cálculos, conciliaciones y reportes en lenguaje natural. Un canal controlado para trabajo fiscal, en lugar de copiar y pegar datos de clientes en un chat público.",
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
