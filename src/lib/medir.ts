/**
 * Medición del lado del cliente.
 *
 * Una sola puerta para todos los eventos, por dos razones. La primera es que
 * el tag puede no estar (en local y en los previews no se carga, y un
 * bloqueador de anuncios lo tumba en producción), así que cada llamada tiene
 * que ser inofensiva cuando no hay nada escuchando. La segunda es que cuando
 * entre el pixel de Meta se agrega aquí y no en siete formularios.
 *
 * NUNCA se manda un dato personal: ni el correo, ni el WhatsApp, ni el nombre
 * de la empresa. Solo la categoría de lo que pasó (qué lista, qué modalidad,
 * qué tamaño de equipo). Eso es lo que hace que la medición no cambie de
 * naturaleza lo que la persona nos confió en el formulario.
 */
type Datos = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function medir(evento: string, datos: Datos = {}): void {
  // Se limpian los undefined: GA los manda como la cadena "undefined".
  const limpio: Datos = {};
  for (const [k, v] of Object.entries(datos)) if (v !== undefined && v !== "") limpio[k] = v;
  window.gtag?.("event", evento, limpio);
}
