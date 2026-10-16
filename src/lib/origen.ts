/**
 * Origen de la visita: cómo llegó una persona al sitio.
 *
 * `capturarOrigen()` corre en cada página (lo monta Analytics.astro) y guarda
 * en sessionStorage SOLO la primera: la página de aterrizaje, de qué sitio
 * venía y los utm_* del enlace. Las siguientes no la pisan, porque el dato que
 * sirve es qué la trajo, no por dónde navegó después. Al enviar un formulario,
 * `leerOrigen()` lo manda junto con el lead.
 *
 * Por qué sessionStorage y no una cookie ni localStorage: vive solo mientras
 * dura la pestaña, no viaja al servidor en cada petición y no deja nada en el
 * navegador de quien volvió otro día. Si la visita llegó el lunes y el
 * formulario se llenó el jueves, el origen del jueves es el que cuenta.
 *
 * Nada de esto es dato personal: rutas, el dominio de origen (sin ruta ni
 * parámetros) y las etiquetas que Israel mismo puso en sus enlaces. Aun así,
 * a GA4 solo se manda la versión corta (`paraMedicion`).
 *
 * Todo va en try/catch porque sessionStorage puede lanzar (modo privado,
 * bloqueo de datos del sitio) y el formulario tiene que seguir funcionando.
 */

const CLAVE = "sc_origen";
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

export interface Origen {
  /** Ruta de la primera página de la sesión: "/despachos". */
  aterrizaje?: string;
  /** Dominio de donde venía, sin ruta: "youtube.com". Vacío si fue directo o interno. */
  referente?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

const recorta = (v: string | null | undefined, max = 80): string | undefined => {
  const t = (v ?? "").trim().slice(0, max);
  return t || undefined;
};

export function capturarOrigen(): void {
  try {
    if (sessionStorage.getItem(CLAVE)) return;

    const origen: Origen = { aterrizaje: recorta(location.pathname, 120) };

    // Solo el dominio: la ruta y los parámetros del sitio de origen pueden
    // traer cosas que no son nuestras (búsquedas, tokens).
    if (document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (ref.hostname && ref.hostname !== location.hostname) {
          origen.referente = recorta(ref.hostname.replace(/^www\./, ""));
        }
      } catch {
        /* referrer ilegible: se queda sin referente */
      }
    }

    const params = new URLSearchParams(location.search);
    for (const k of UTM) origen[k] = recorta(params.get(k));

    sessionStorage.setItem(CLAVE, JSON.stringify(origen));
  } catch {
    /* sin almacenamiento: el sitio funciona igual, solo sin este dato */
  }
}

export function leerOrigen(): Origen {
  try {
    return JSON.parse(sessionStorage.getItem(CLAVE) ?? "{}") as Origen;
  } catch {
    return {};
  }
}

/** El checkout de nas.com (taller y ebook): la compra ocurre allá. */
export function esCheckoutNas(url: URL): boolean {
  return /(^|\.)nas\.(com|io)$/.test(url.hostname) && url.pathname.includes("checkout");
}

/**
 * El enlace al checkout con el origen de la visita, para que la venta en
 * nas.com se pueda ligar al anuncio. Dos cosas, y nada más del enlace se toca
 * (communityId, ticketTypeObjectId y compañía quedan igual):
 *
 * - `fbclid`: el ID del clic en el anuncio de Meta. Sin él, el pixel del otro
 *   lado no tiene con qué atribuir la compra a ese clic.
 * - `utm_*`: los fijos del enlace se cambian EN BLOQUE por los de la visita,
 *   o no se tocan. Si llegó con al menos uno, mandan los suyos y los fijos
 *   que falten se quitan: mezclar su "facebook" con nuestro "web" inventaría
 *   una fuente que nadie usó.
 */
export function conOrigenDeVisita(href: string, visita: URLSearchParams): string {
  const u = new URL(href);
  const fbclid = visita.get("fbclid");
  if (fbclid && /^[\w.-]{1,500}$/.test(fbclid)) u.searchParams.set("fbclid", fbclid);
  if (UTM.some((k) => recorta(visita.get(k)))) {
    for (const k of UTM) {
      const v = recorta(visita.get(k), 100);
      if (v) u.searchParams.set(k, v);
      else u.searchParams.delete(k);
    }
  }
  return u.toString();
}

/**
 * Las tres etiquetas que van a GA4 con el evento de lead. `fuente` es lo más
 * específico que haya: el utm_source que Israel puso, o el dominio de origen,
 * o "directo". Sin utm_campaign a propósito: ya viaja en la propia sesión de
 * GA4, y aquí lo que falta es ligarlo al evento del formulario.
 */
export function paraMedicion(): { fuente: string; aterrizaje?: string; pagina_envio: string } {
  const o = leerOrigen();
  return {
    fuente: o.utm_source ?? o.referente ?? "directo",
    aterrizaje: o.aterrizaje,
    pagina_envio: location.pathname,
  };
}
