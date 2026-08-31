/**
 * Correo de acuse de un lead, con la identidad de la marca.
 *
 * Un solo envío hace dos trabajos: le confirma al visitante lo que dejó (con el
 * resumen, para que sepa qué se registró) y le llega a Israel en copia oculta
 * como registro del lead. Por eso el diseño es para el visitante, no para un
 * panel interno.
 *
 * Es correo TRANSACCIONAL: responde a una solicitud que la persona hizo, y esa
 * finalidad ya está en el aviso de privacidad ("responder a tu solicitud de
 * contacto, diagnóstico o cotización"). No lleva doble opt-in ni baja, porque
 * no es marketing. El newsletter va aparte y sí requiere casilla marcada.
 *
 * Restricciones de correo que explican el HTML: tablas en vez de grid, estilos
 * en línea en vez de hoja, y nada de fuentes web (ningún cliente carga Space
 * Grotesk, así que se cae a la pila del sistema). La póliza de la marca sí
 * sobrevive tal cual, porque ya era una tabla.
 */

const C = {
  bg: "#FAFBFD",
  surface: "#F1F4F9",
  raised: "#FFFFFF",
  line: "#DFE6EF",
  ink: "#101828",
  inkSoft: "#3D4A5C",
  inkDim: "#5F6B80",
  accent: "#0A7B45",
  accentSoft: "#E4F4EB",
  termBg: "#0D1420",
  termInk: "#9FB0C9",
  termOk: "#3DD68C",
};

const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,'Liberation Mono',monospace";

export interface DatosLead {
  /** Lo que se le muestra al visitante como resumen, en orden. */
  resumen: { campo: string; valor: string }[];
  nombre?: string;
  /** De dónde salió: "/soluciones", "/capacitacion"… */
  origen?: string;
  /** Si aceptó el boletín, el correo lo dice para que quede constancia. */
  newsletter: boolean;
  /** Liga de la agenda, si está configurada. */
  calendario?: string | null;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Isotipo "La contrapartida" en tabla: los SVG no cargan en varios clientes. */
function isotipo(): string {
  const barra = (ancho: number, color: string) =>
    `<td width="${ancho}" height="6" bgcolor="${color}" style="font-size:0;line-height:0">&nbsp;</td>`;
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
  <tr>${barra(58, C.ink)}</tr>
  <tr><td height="4" style="font-size:0;line-height:0">&nbsp;</td></tr>
  <tr><td><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse"><tr>
    ${barra(20, C.ink)}<td width="6"></td>${barra(20, C.accent)}
  </tr></table></td></tr>
  <tr><td height="4" style="font-size:0;line-height:0">&nbsp;</td></tr>
  <tr><td><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse"><tr>
    ${barra(14, C.ink)}<td width="12"></td>${barra(14, C.accent)}
  </tr></table></td></tr>
</table>`;
}

function filaResumen({ campo, valor }: { campo: string; valor: string }): string {
  return `<tr>
  <td style="padding:10px 14px;border-bottom:1px solid ${C.line};font-family:${MONO};font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${C.inkDim};white-space:nowrap;vertical-align:top">${esc(campo)}</td>
  <td style="padding:10px 14px;border-bottom:1px solid ${C.line};font-family:${SANS};font-size:14px;line-height:1.5;color:${C.ink}">${esc(valor)}</td>
</tr>`;
}

export function asuntoLead(datos: DatosLead): string {
  const quien = datos.nombre?.trim();
  const interes = datos.resumen.find((r) => /inter[eé]s|modalidad/i.test(r.campo))?.valor;
  return ["Recibí tus datos", interes, quien].filter(Boolean).join(" · ");
}

/** Versión de texto plano. Va siempre: hay clientes que no pintan HTML. */
export function textoLead(datos: DatosLead): string {
  const lineas = datos.resumen.map((r) => `${r.campo}: ${r.valor}`).join("\n");
  return `Recibí tus datos. Gracias por escribir.

Esto es lo que me llegó:

${lineas}

${datos.calendario ? `Si quieres adelantar, aparta tu horario aquí:\n${datos.calendario}\n\n` : ""}Te respondo personalmente. Si algo de arriba está mal, contéstame este correo y lo corregimos.

Israel Castro
Contador público y desarrollador de software
soycontador.ai`;
}

export function htmlLead(datos: DatosLead): string {
  const saludo = datos.nombre?.trim() ? `Hola, ${esc(datos.nombre.trim().split(" ")[0])}.` : "Hola.";

  const boton = datos.calendario
    ? `<tr><td style="padding:0 32px 28px">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td bgcolor="${C.accent}" style="border-radius:4px">
            <a href="${esc(datos.calendario)}" style="display:inline-block;padding:13px 22px;font-family:${SANS};font-size:15px;font-weight:700;color:#ffffff;text-decoration:none">Apartar mi horario</a>
          </td>
        </tr></table>
        <p style="margin:12px 0 0;font-family:${SANS};font-size:13px;line-height:1.5;color:${C.inkDim}">
          Son 30 minutos. Llego con lo de arriba leído, así que no gastamos la llamada en presentaciones.
        </p>
      </td></tr>`
    : "";

  const nota = datos.newsletter
    ? `Además pediste recibir el boletín, así que te va a llegar un correo aparte para confirmarlo. Si no lo confirmas, no te llega nada: así de simple.`
    : `No te anoté a ningún boletín, porque no lo pediste. Este correo es solo el acuse de lo que llenaste.`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(asuntoLead(datos))}</title>
</head>
<body style="margin:0;padding:0;background:${C.bg}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Recibí tus datos y te respondo personalmente. Aquí está el resumen de lo que llenaste.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.bg}">
<tr><td align="center" style="padding:28px 12px 40px">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${C.raised};border:1px solid ${C.ink};border-radius:8px;overflow:hidden">

  <tr><td style="padding:26px 32px 0">
    ${isotipo()}
    <p style="margin:14px 0 0;font-family:${SANS};font-size:18px;font-weight:700;letter-spacing:-.02em;color:${C.ink};line-height:1.1">soycontador<span style="font-family:${MONO};color:${C.accent}">.ai</span></p>
  </td></tr>

  <tr><td style="padding:24px 32px 0">
    <p style="margin:0;font-family:${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${C.inkDim}">ACUSE · <b style="color:${C.accent}">RECIBIDO</b></p>
    <h1 style="margin:10px 0 0;font-family:${SANS};font-size:26px;font-weight:700;letter-spacing:-.03em;line-height:1.15;color:${C.ink}">${saludo}<br>Ya me llegaron tus datos.</h1>
    <p style="margin:14px 0 0;font-family:${SANS};font-size:15px;line-height:1.6;color:${C.inkSoft}">
      Te respondo personalmente, no con una plantilla automática. Mientras tanto,
      esto es exactamente lo que se registró:
    </p>
  </td></tr>

  <tr><td style="padding:20px 32px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border:1px solid ${C.ink};border-radius:4px;overflow:hidden">
      <tr><td colspan="2" bgcolor="${C.surface}" style="padding:9px 14px;border-bottom:1px solid ${C.ink};font-family:${MONO};font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${C.ink}">LO QUE LLENASTE</td></tr>
      ${datos.resumen.map(filaResumen).join("\n      ")}
    </table>
    <p style="margin:12px 0 0;font-family:${SANS};font-size:13px;line-height:1.55;color:${C.inkDim}">
      ¿Algo está mal? Contéstame este correo y lo corregimos. ${nota}
    </p>
  </td></tr>

  <tr><td style="padding:24px 32px 0"><div style="height:1px;background:${C.line};font-size:0;line-height:0">&nbsp;</div></td></tr>
  <tr><td style="height:24px;font-size:0;line-height:0">&nbsp;</td></tr>
  ${boton}

  <tr><td bgcolor="${C.termBg}" style="padding:18px 32px">
    <p style="margin:0;font-family:${MONO};font-size:13px;color:#E8EDF5">
      <span style="color:${C.termOk};font-weight:700">$</span> soycontador.ai
    </p>
    <p style="margin:8px 0 0;font-family:${MONO};font-size:11px;line-height:1.6;color:${C.termInk}">
      Israel Castro · Contador público y desarrollador de software<br>
      ${datos.origen ? `// llegaste por ${esc(datos.origen)}` : ""}
    </p>
  </td></tr>

</table>

<p style="margin:16px 0 0;font-family:${SANS};font-size:11px;line-height:1.5;color:${C.inkDim};max-width:600px">
  Recibes este correo porque llenaste un formulario en soycontador.ai. Es el acuse de tu solicitud, no publicidad.
</p>

</td></tr>
</table>
</body>
</html>`;
}
