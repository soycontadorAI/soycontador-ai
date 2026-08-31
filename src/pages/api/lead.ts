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
 * Respuesta:  { ok, status: 'confirm' | 'already' | 'invalido' | 'error', error? }
 *
 * CUIDADO al agregar un campo: el mapeo de abajo traduce el camelCase del
 * formulario al nombre EXACTO del campo en Sendy (`nivelIA` -> `NivelIA`). No
 * es un emparejamiento, es una asignación, y por eso hay que tocar dos lados:
 * este objeto y la definición del campo en la lista de Sendy. Nunca pasar las
 * llaves crudas del body: Sendy no se queja de un campo que no reconoce,
 * simplemente no lo guarda, y el dato se pierde sin que nada falle.
 */

import type { APIRoute } from "astro";

import { enviar } from "../../lib/correo";
import { asuntoLead, htmlLead, textoLead, type DatosLead } from "../../lib/correo-lead";
import { calendarioDe } from "../../lib/site";
import { suscribir, type EstadoSendy } from "../../lib/sendy";

/** Etiquetas legibles del resumen. El orden es el que ve el visitante. */
const CAMPOS_LEGIBLES = {
  Whatsapp: "WhatsApp",
  Empresa: "Empresa",
  Rol: "Perfil",
  Interes: "Interés",
  Equipo: "Tamaño del equipo",
  NivelIA: "Uso de IA hoy",
  Cuando: "Para cuándo",
  Mensaje: "Lo que me contaste",
} as const;

async function enviarAcuse(datos: {
  email: string;
  nombre: string;
  campos: Record<string, string>;
  origen: string;
  newsletter: boolean;
}): Promise<boolean> {
  const resumen = [
    { campo: "Correo", valor: datos.email },
    ...(datos.nombre ? [{ campo: "Nombre", valor: datos.nombre }] : []),
    ...Object.entries(CAMPOS_LEGIBLES)
      .filter(([clave]) => datos.campos[clave])
      .map(([clave, etiqueta]) => ({ campo: etiqueta, valor: datos.campos[clave] })),
  ];

  const payload: DatosLead = {
    resumen,
    nombre: datos.nombre || undefined,
    origen: datos.origen || undefined,
    newsletter: datos.newsletter,
    calendario: calendarioDe("diagnostico"),
  };

  return enviar({
    para: datos.email,
    asunto: asuntoLead(payload),
    html: htmlLead(payload),
    texto: textoLead(payload),
  });
}

export const prerender = false;

interface LeadResponse {
  ok: boolean;
  status?: EstadoSendy;
  /** Si además quedó suscrito al boletín: cambia el mensaje del formulario. */
  newsletter?: boolean;
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

  const nombre = texto(raw.nombre, 120);
  const campos = {
    Whatsapp: texto(raw.whatsapp, 30),
    Rol: texto(raw.rol, 80),
    Interes: texto(raw.interes, 80),
    Mensaje: texto(raw.mensaje, 500),
    Empresa: texto(raw.empresa, 160),
    Equipo: texto(raw.equipo, 40),
    NivelIA: texto(raw.nivelIA, 80),
    Cuando: texto(raw.cuando, 80),
  };

  /** Casilla marcada a mano. Cualquier otra cosa es "no". */
  const quiereNewsletter = raw.newsletter === true;
  const referrer = texto(raw.referrer, 500);
  const origen = URL.canParse?.(referrer) ? new URL(referrer).pathname : "";

  /*
   * El acuse es el registro del lead: va al visitante y a Israel en copia
   * oculta. Se manda SIEMPRE, con o sin newsletter, porque es la respuesta a
   * una solicitud que la persona hizo, no publicidad.
   */
  const enviado = await enviarAcuse({
    email,
    nombre,
    campos,
    origen,
    newsletter: quiereNewsletter,
  });

  /*
   * A Sendy solo entra quien lo pidió marcando la casilla. Antes entraba todo
   * el mundo, lo que le mandaba un correo de confirmación de boletín a alguien
   * que solo quería una cotización, y si no confirmaba se perdía el lead.
   */
  let status: EstadoSendy | undefined;
  if (quiereNewsletter) {
    status = await suscribir({ email, nombre: nombre || undefined, referrer, campos });

    if (status === "invalido") {
      // Reintentar no arregla una dirección rechazada: hay que corregirla.
      return json(400, {
        ok: false,
        status,
        error: "Esa dirección no pasó la validación. Revísala o prueba con otra.",
      });
    }
  }

  /*
   * Si el acuse no salió y tampoco hubo alta, el lead no quedó guardado en
   * ningún lado: hay que decirlo, no fingir que se registró.
   */
  if (!enviado && !status) {
    return json(502, {
      ok: false,
      status: "error",
      error: "No pudimos registrar tus datos. Escríbeme directo a hola@soycontador.ai.",
    });
  }

  return json(200, { ok: true, status: status ?? "confirm", newsletter: quiereNewsletter });
};

export const ALL: APIRoute = () => json(405, { ok: false, error: "Method not allowed" });
