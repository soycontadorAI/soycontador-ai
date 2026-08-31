/**
 * POST /api/lead
 *
 * Formulario de contacto/calificación de leads. Da de alta el correo en la
 * lista de Sendy con campos personalizados (Whatsapp, Rol, Interes, Mensaje);
 * la lista debe tener esos campos creados en Sendy con esos nombres exactos.
 *
 * Body JSON: { email, nombre?, whatsapp?, rol?, interes?, mensaje?, empresa?,
 *              equipo?, nivelIA?, cuando?, hp?, referrer? }
 * (los campos extendidos los usa el formulario de precalificación empresarial)
 * Respuesta:  { ok, status: 'confirm' | 'already' | 'error', error? }
 */

import type { APIRoute } from "astro";

import { suscribir } from "../../lib/sendy";

export const prerender = false;

interface LeadResponse {
  ok: boolean;
  status?: "confirm" | "already" | "error";
  error?: string;
}

const json = (status: number, body: LeadResponse): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const texto = (v: unknown, max: number): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export const POST: APIRoute = async ({ request }) => {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { ok: false, error: "Body inválido (no es JSON)" });
  }

  // Honeypot: 200 fake para bots.
  if (typeof raw.hp === "string" && raw.hp.length > 0) {
    return json(200, { ok: true, status: "confirm" });
  }

  const email = texto(raw.email, 200);
  if (!EMAIL_RE.test(email)) {
    return json(400, { ok: false, error: "Correo inválido" });
  }

  const status = await suscribir({
    email,
    nombre: texto(raw.nombre, 120) || undefined,
    referrer: texto(raw.referrer, 500) || undefined,
    campos: {
      Whatsapp: texto(raw.whatsapp, 30),
      Rol: texto(raw.rol, 80),
      Interes: texto(raw.interes, 80),
      Mensaje: texto(raw.mensaje, 500),
      Empresa: texto(raw.empresa, 160),
      Equipo: texto(raw.equipo, 40),
      NivelIA: texto(raw.nivelIA, 80),
      Cuando: texto(raw.cuando, 80),
    },
  });

  if (status === "invalido") {
    // Reintentar no arregla una dirección rechazada: hay que corregirla.
    return json(400, {
      ok: false,
      status,
      error: "Esa dirección no pasó la validación. Revísala o prueba con otra.",
    });
  }
  if (status === "error") {
    return json(502, { ok: false, status, error: "No pudimos registrarte. Inténtalo de nuevo." });
  }
  return json(200, { ok: true, status });
};

export const ALL: APIRoute = () => json(405, { ok: false, error: "Method not allowed" });
