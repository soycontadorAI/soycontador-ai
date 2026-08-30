/**
 * Alta en Sendy desde el servidor (la API key nunca viaja al navegador).
 * Port del patrón probado en todoconta-apps/apps/landing, sin la capa CRM.
 * Sendy manda su correo de confirmación: nadie entra a la lista sin confirmar
 * (doble opt-in), y al confirmar aterriza en /dentro.
 */

import { SENDY_API_KEY, SENDY_ACTION_URL, SENDY_LIST_ID } from "astro:env/server";

export type EstadoSendy = "confirm" | "already" | "error";

export interface SuscribirInput {
  email: string;
  nombre?: string;
  /** Sendy rechaza el alta si no es URL válida: solo se manda cuando parsea */
  referrer?: string;
  /**
   * Campos personalizados de la lista de Sendy (el nombre del campo tal cual
   * está en Sendy, ej. Whatsapp/Rol/Interes/Mensaje). Los usa el formulario
   * de calificación de leads.
   */
  campos?: Record<string, string>;
}

export async function suscribir(input: SuscribirInput): Promise<EstadoSendy> {
  if (!SENDY_API_KEY || !SENDY_ACTION_URL || !SENDY_LIST_ID) {
    console.error("[sendy] SENDY_API_KEY/ACTION_URL/LIST_ID sin configurar");
    return "error";
  }

  try {
    const body = new URLSearchParams({
      api_key: SENDY_API_KEY,
      email: input.email,
      list: SENDY_LIST_ID,
      boolean: "true",
    });
    if (input.nombre) body.set("name", input.nombre);
    if (input.referrer && URL.canParse?.(input.referrer)) {
      body.set("referrer", input.referrer);
    }
    for (const [campo, valor] of Object.entries(input.campos ?? {})) {
      if (valor) body.set(campo, valor.slice(0, 500));
    }

    const resp = await fetch(SENDY_ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8000),
    });
    const texto = (await resp.text()).trim();
    if (texto === "1" || texto === "true") return "confirm";
    if (texto === "Already subscribed.") return "already";
    console.warn("[sendy] respondió: %s", texto.slice(0, 120));
    return "error";
  } catch (err) {
    console.error("[sendy] no respondió:", err);
    return "error";
  }
}
