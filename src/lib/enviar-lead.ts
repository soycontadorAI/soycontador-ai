/**
 * El envío de los dos formularios de lead (LeadForm y FormCapacitacion):
 * POST a /api/lead, el mensaje de recibido, el enlace para agendar que se
 * descubre al enviar y la medición. Lo que cambia entre los dos (qué campos
 * viajan, qué evento se mide, qué se le dice a la persona) entra por
 * opciones; el resto era el mismo script copiado dos veces.
 */
import { medir } from "./medir";

export interface OpcionesLead {
  /** Selector del <form>, p. ej. "[data-lead]" */
  formulario: string;
  /** Selector del <small> donde se escribe el estado */
  mensaje: string;
  /** Evento de medición: lead_enviado o diagnostico_enviado */
  evento: string;
  /** Los campos propios del formulario. newsletter, hp y referrer los pone el módulo. */
  carga: (datos: FormData) => Record<string, FormDataEntryValue | null | string>;
  /** Qué se mide. Solo categorías, nunca un dato personal (ver lib/medir.ts). */
  medida: (datos: FormData) => Record<string, string | boolean>;
  /** El texto de recibido. `boletin` ya trae la frase del doble opt-in o va vacío. */
  recibido: (boletin: string, conAgenda: boolean) => string;
}

const ERROR = "No pudimos registrarte. Inténtalo de nuevo.";

export function montarLead(o: OpcionesLead): void {
  document.querySelectorAll<HTMLFormElement>(o.formulario).forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = form.querySelector<HTMLElement>(o.mensaje);
      // Vive fuera del <form>, así que se busca en la tarjeta completa.
      const agenda = form.closest(".form-card")?.querySelector<HTMLElement>("[data-agenda]");
      const boton = form.querySelector<HTMLButtonElement>("button[type=submit]");
      const data = new FormData(form);
      if (boton) boton.disabled = true;
      try {
        const resp = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...o.carga(data),
            newsletter: data.get("newsletter") === "si",
            hp: data.get("hp"),
            referrer: location.href,
          }),
        });
        const body = await resp.json();
        if (msg) {
          if (body.ok) {
            // El acuse va siempre; el correo de confirmación solo si pidió el
            // boletín. Prometer una confirmación que no existe deja a la
            // persona esperando un correo que nunca llega.
            const boletin = body.newsletter
              ? " Y para el boletín, confírmalo desde el correo que te acaba de llegar."
              : "";
            msg.textContent = o.recibido(boletin, Boolean(agenda));
          } else {
            msg.textContent = body.error ?? ERROR;
          }
        }
        // El enlace para agendar se descubre al enviar, no antes. Al aparecer,
        // el botón de enviar se retira: ya hizo su trabajo, y dejar dos botones
        // primarios juntos compite por la atención e invita a reenviar.
        if (agenda && body.ok) {
          agenda.hidden = false;
          if (boton) boton.hidden = true;
        }
        if (body.ok) {
          medir(o.evento, o.medida(data));
          form.reset();
        }
      } catch {
        if (msg) msg.textContent = ERROR;
      } finally {
        if (boton) boton.disabled = false;
      }
    });
  });
}
