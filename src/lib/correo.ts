/**
 * Envío por Amazon SES.
 *
 * Se usa SES y no otro proveedor porque el dominio ya está verificado ahí, con
 * SPF y DKIM alineados: es el mismo camino por el que sale el correo de Sendy,
 * así que estos envíos heredan la reputación en vez de estrenar una.
 *
 * El remitente TIENE que ser @soycontador.ai. Con cualquier otro, SES rechaza.
 */

import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";
import {
  CORREO_COPIA,
  CORREO_REMITENTE,
  SES_ACCESS_KEY_ID,
  SES_REGION,
  SES_SECRET_ACCESS_KEY,
} from "astro:env/server";

export const correoConfigurado = Boolean(
  SES_ACCESS_KEY_ID && SES_SECRET_ACCESS_KEY && SES_REGION && CORREO_REMITENTE,
);

let cliente: SESv2Client | null = null;

function obtenerCliente(): SESv2Client {
  cliente ??= new SESv2Client({
    region: SES_REGION,
    credentials: {
      accessKeyId: SES_ACCESS_KEY_ID as string,
      secretAccessKey: SES_SECRET_ACCESS_KEY as string,
    },
  });
  return cliente;
}

export interface Envio {
  para: string;
  asunto: string;
  html: string;
  texto: string;
  /** Copia oculta. Por omisión, la de CORREO_COPIA. */
  copiaOculta?: string | null;
}

/**
 * Devuelve true si SES lo aceptó. Nunca lanza: quien llama decide qué hacer
 * con un fallo, y en el caso del lead eso significa avisarle a la persona en
 * lugar de fingir que se registró.
 */
export async function enviar(envio: Envio): Promise<boolean> {
  if (!correoConfigurado) {
    console.error("[correo] SES sin configurar: no se envió", envio.asunto);
    return false;
  }

  const copia = envio.copiaOculta === undefined ? CORREO_COPIA : envio.copiaOculta;

  try {
    await obtenerCliente().send(
      new SendEmailCommand({
        FromEmailAddress: CORREO_REMITENTE,
        Destination: {
          ToAddresses: [envio.para],
          ...(copia ? { BccAddresses: [copia] } : {}),
        },
        // Que la respuesta del lead caiga en el buzón que se lee, no en el
        // remitente técnico.
        ReplyToAddresses: copia ? [copia] : undefined,
        Content: {
          Simple: {
            Subject: { Data: envio.asunto, Charset: "UTF-8" },
            Body: {
              Html: { Data: envio.html, Charset: "UTF-8" },
              Text: { Data: envio.texto, Charset: "UTF-8" },
            },
          },
        },
      }),
    );
    return true;
  } catch (err) {
    console.error("[correo] SES rechazó el envío:", err);
    return false;
  }
}
