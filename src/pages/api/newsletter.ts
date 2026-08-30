/**
 * POST /api/newsletter
 *
 * Alta de newsletter server-side hacia Sendy (doble opt-in). Único endpoint
 * serverless del sitio; todo lo demás es estático.
 *
 * Body JSON: { email, hp?, referrer? }
 * Respuesta:  { ok, status: 'confirm' | 'already' | 'error', error? }
 */

import type { APIRoute } from "astro";

import { suscribir } from "../../lib/sendy";

export const prerender = false;

interface NewsletterResponse {
  ok: boolean;
  status?: "confirm" | "already" | "error";
  error?: string;
}

const json = (status: number, body: NewsletterResponse): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return json(400, { ok: false, error: "Correo inválido" });
  }
  const referrer = typeof raw.referrer === "string" ? raw.referrer.slice(0, 500) : undefined;

  const status = await suscribir({ email, referrer });

  if (status === "error") {
    return json(502, { ok: false, status, error: "No pudimos suscribirte. Inténtalo de nuevo." });
  }
  return json(200, { ok: true, status });
};

export const ALL: APIRoute = () => json(405, { ok: false, error: "Method not allowed" });
