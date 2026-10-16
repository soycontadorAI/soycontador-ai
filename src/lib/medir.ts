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

/** Los parámetros de Meta admiten además listas (`content_ids`). */
type DatosMeta = Record<string, string | number | boolean | readonly string[] | undefined>;

/**
 * Un ID por evento del pixel. Es la llave con la que Meta deduplica: si el
 * mismo evento llega por el navegador y por la API de conversiones con el
 * mismo `eventID`, cuenta uno. `randomUUID` solo existe en contexto seguro
 * (https o localhost); el respaldo no es criptográfico, pero para deduplicar
 * basta con que no se repita. El PageView de Analytics.astro usa la misma
 * receta escrita a mano, porque es un script is:inline y no puede importar.
 */
export function nuevoEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

/**
 * Evento estándar del pixel de Meta. Mismas reglas que `medir`: inofensivo
 * si el pixel no cargó, y sin datos personales. Solo los eventos que definimos
 * aquí y solo parámetros estándar de Meta: el conjunto de datos está en una
 * categoría restringida. La coincidencia avanzada automática va apagada.
 *
 * Devuelve el `eventID`, para mandar el mismo evento desde el servidor el día
 * que haya API de conversiones propia.
 */
export function medirMeta(evento: "ViewContent" | "InitiateCheckout", datos: DatosMeta = {}): string {
  const limpio: DatosMeta = {};
  for (const [k, v] of Object.entries(datos)) if (v !== undefined && v !== "") limpio[k] = v;
  const eventID = nuevoEventId();
  window.fbq?.("track", evento, limpio, { eventID });
  return eventID;
}
