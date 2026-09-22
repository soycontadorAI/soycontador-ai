import type { APIRoute } from "astro";
import { htmlLead } from "../lib/correo-lead";
import { calendarioDe } from "../lib/site";

export const prerender = false;
export const GET: APIRoute = () =>
  new Response(
    htmlLead({
      nombre: "Mariana Ruiz",
      origen: "/soluciones",
      newsletter: false,
      calendario: calendarioDe("diagnostico"),
      resumen: [
        { campo: "Correo", valor: "mariana@despachoruiz.mx" },
        { campo: "Nombre", valor: "Mariana Ruiz" },
        { campo: "WhatsApp", valor: "744 123 4567" },
        { campo: "Perfil", valor: "Tengo o trabajo en un despacho" },
        { campo: "Interés", valor: "Solución a la medida" },
        { campo: "Lo que me contaste", valor: "Bajamos CFDI a mano para 40 clientes y el cierre nos toma una semana cada mes." },
      ],
    }),
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
