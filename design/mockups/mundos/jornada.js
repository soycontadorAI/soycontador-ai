/*
 * I · Jornada: la página es un día de trabajo y la luz cambia con la hora.
 *
 * Cuatro piezas, todas colgadas del único bucle del motor:
 *   1. El cambio de luz: una zona toma la página cuando su borde cruza una
 *      línea de la ventana, con histéresis para que no parpadee si el lector
 *      se detiene en la frontera. Es UNA escritura de atributo en el <body>;
 *      la interpolación la hace el CSS.
 *   2. Madrugada → amanecer: dentro de la escena fija la noche se aclara con
 *      cada renglón que cierra la máquina, y al encenderse el cuarto (el tuyo)
 *      amanece la página entera.
 *   3. La cabeza de página: el folio de la sección en curso, en el margen.
 *   4. Una sola cifra que cuenta: los 3,412 XML, cuando se enciende el primer
 *      renglón.
 */
(() => {
  const M = window.Mundos;
  if (!M) return;
  const raiz = document.documentElement;
  const body = document.body;
  const zonas = [...document.querySelectorAll(".mundo[data-zona]")];
  const pie = document.querySelector(".site-footer[data-zona]");
  const escena = document.getElementById("escena");
  const zonaEscena = escena ? escena.closest(".mundo[data-zona]") : null;
  const renglones = [...document.querySelectorAll("#renglones .renglon")];
  const cuentaEscena = document.getElementById("cuenta-escena");

  /* El pie es la banda de cierre y se pinta de noche por su cuenta. NO apaga
     la página: al llegar a él el formulario sigue a la vista, y apagarle la
     luz a quien lo está llenando sería el peor momento para un efecto. */
  if (pie) pie.dataset.mundo = pie.dataset.zona;

  const cabeza = montaCabeza();

  /* Con menos movimiento no hay luz global ni conteo: cada zona se pinta
     estática con su mundo (la escena queda de noche con la tarjeta del cuarto
     renglón en papel, regla de comun.css) y la cabeza cambia sin animarse. */
  if (M.quieto) {
    zonas.forEach((z) => (z.dataset.mundo = z.dataset.zona));
    if (cabeza) M.cada(() => cabeza.pon(cabeza.lee(), false));
    return;
  }

  raiz.classList.add("jornada-global", "jornada-quieta");
  body.dataset.mundo = "dia";
  M.mundoBajoCabecera(() => body.dataset.mundo);
  // Dos cuadros sin transición: la luz de una recarga a media página se pone,
  // no se anima.
  requestAnimationFrame(() => requestAnimationFrame(() => raiz.classList.remove("jornada-quieta")));

  /* [entra, regresa], en fracción del alto de la ventana. Bajando, una zona
     toma la luz cuando su borde superior pasa del 60%; subiendo, la devuelve
     hasta que ese borde baja del 74%. Entre las dos líneas no pasa nada: esa
     franja es la que evita el parpadeo.
     La escena es la excepción a propósito: su noche llega cuando la escena ya
     se está fijando (16%), no cuando apenas asoma. Primero se ve llegar el
     cuarto, luego se apaga la luz. */
  const UMBRAL_ZONA = [0.6, 0.74];
  const UMBRAL_ESCENA = [0.16, 0.32];
  const umbral = (z) => (z === zonaEscena ? UMBRAL_ESCENA : UMBRAL_ZONA);
  let activa = 0;
  let cambio = 0;

  /* Los cuatro renglones, sobre el avance de la escena fija. La holgura es
     histéresis por renglón: el cuarto prende la luz de toda la página, y sin
     ella un lector detenido justo en el umbral la haría parpadear. */
  const PASOS = [0.03, 0.24, 0.45, 0.66];
  const HOLGURA = 0.025;
  let encendidos = 0;
  const cuenta = preparaCifra();

  M.cada(() => {
    const vh = innerHeight;

    /* ---- Lecturas ---- */
    while (activa < zonas.length - 1 && zonas[activa + 1].getBoundingClientRect().top < umbral(zonas[activa + 1])[0] * vh) activa++;
    while (activa > 0 && zonas[activa].getBoundingClientRect().top > umbral(zonas[activa])[1] * vh) activa--;

    let n = encendidos;
    if (escena) {
      // Antes de fijarse la escena no hay renglón encendido: la máquina
      // empieza a trabajar cuando ya se apagó la luz.
      const p = escena.getBoundingClientRect().top > 0 ? -1 : M.fijo(escena);
      while (n < PASOS.length && p >= PASOS[n]) n++;
      while (n > 0 && p < PASOS[n - 1] - HOLGURA) n--;
    }
    const folio = cabeza ? cabeza.lee() : null;

    /* ---- Escrituras ---- */
    if (escena) {
      // Va después del handler original de la página en el mismo cuadro, así
      // que estos .activo son los que quedan.
      renglones.forEach((el, i) => el.classList.toggle("activo", i < n));
      if (cuentaEscena) cuentaEscena.textContent = String(Math.max(1, n)).padStart(2, "0");
      if (n >= 1 && encendidos === 0 && cuenta) cuenta();
    }
    encendidos = n;

    const zona = zonas[activa];
    let mundo = zona ? zona.dataset.zona : "dia";
    let hora = null;
    if (zona === zonaEscena && mundo === "noche") {
      if (n >= 4) mundo = "dia"; // amanece: el cuarto renglón es tuyo, y es de día
      else if (n === 3) hora = "2"; // la hora azul
      else if (n === 2) hora = "1";
    }
    if (body.dataset.mundo !== mundo) {
      body.dataset.mundo = mundo;
      // Media vuelta en la que el color lo manda solo el body (ver jornada.css).
      raiz.classList.add("cambiando-luz");
      clearTimeout(cambio);
      cambio = setTimeout(() => raiz.classList.remove("cambiando-luz"), 560);
    }
    if (hora) {
      if (body.dataset.hora !== hora) body.dataset.hora = hora;
    } else if (body.dataset.hora) {
      delete body.dataset.hora;
    }

    if (cabeza) cabeza.pon(folio, true);
  });

  /* ---------- La cifra ----------
   * Envuelve "3,412" del primer renglón para poder contarlo. El texto final es
   * el original, carácter por carácter, y el h3 lleva su texto completo como
   * nombre accesible para que un lector de pantalla nunca oiga un cero. */
  function preparaCifra() {
    const h3 = renglones[0] && renglones[0].querySelector("h3");
    if (!h3) return null;
    const original = h3.textContent;
    const nodo = [...h3.childNodes].find((x) => x.nodeType === 3 && /\d/.test(x.textContent));
    const m = nodo && nodo.textContent.match(/^(\s*)(\d{1,3}(?:,\d{3})+|\d+)([\s\S]*)$/);
    if (!m) return null;
    const final = m[2];
    const valor = Number(final.replace(/,/g, ""));
    const span = document.createElement("span");
    span.className = "jornada-cifra";
    span.textContent = final;
    if (m[1]) h3.insertBefore(document.createTextNode(m[1]), nodo);
    h3.insertBefore(span, nodo);
    nodo.textContent = m[3];
    h3.setAttribute("aria-label", original);

    let hecho = false;
    // El ancho final se reserva para que el resto del renglón no baile al
    // contar. Se mide otra vez cuando llegan las fuentes: medido con la de
    // respaldo quedaba 1.3 px corto y el texto se recorría al aparecer la coma.
    const reserva = () => {
      const visto = span.textContent;
      span.style.minWidth = "";
      span.textContent = final;
      // Ancho de maqueta, no de pantalla: el renglón apagado va escalado
      // (0.985) y el rect medía la versión encogida.
      span.style.minWidth = getComputedStyle(span).width;
      span.textContent = visto;
    };
    reserva();
    document.fonts.ready.then(reserva);
    // Si al cargar la escena todavía no llega, el renglón espera en cero (y
    // apagado) para que la cuenta no salte de 3,412 a 0 frente al lector.
    if (escena.getBoundingClientRect().top > 0) span.textContent = "0";
    else hecho = true;
    const fmt = new Intl.NumberFormat("es-MX");
    return () => {
      if (hecho) return;
      hecho = true;
      const t0 = performance.now();
      const DURA = 600; // la regla: ningún tramo pasa de 620 ms
      const paso = (t) => {
        const x = Math.min(1, (t - t0) / DURA);
        span.textContent = x < 1 ? fmt.format(Math.round(valor * M.curva(x))) : final;
        if (x < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };
  }

  /* ---------- La cabeza de página ----------
   * Cada sección aporta el folio que YA tiene (sin texto nuevo). La portada
   * no lo repite (su kicker está a la vista) y la vuelta no tiene, así que
   * ahí la cabeza se retira. */
  function montaCabeza() {
    const secciones = [...document.querySelectorAll("main section")];
    if (!secciones.length) return null;
    const folios = secciones.map((s) => {
      if (s.classList.contains("portada")) return null;
      const f = s.querySelector(".sec-head .folio") || s.querySelector(".folio");
      if (!f) return null;
      const clon = f.cloneNode(true);
      for (const e of [clon, ...clon.querySelectorAll("*")]) for (const a of [...e.attributes]) e.removeAttribute(a.name);
      return clon.innerHTML.trim();
    });
    const el = document.createElement("div");
    el.className = "cabeza-pagina";
    el.setAttribute("aria-hidden", "true");
    document.body.append(el);

    let i = -1;
    let mostrado;
    return {
      /* La sección en curso es la última cuyo borde ya pasó la línea de
         lectura (42% de la ventana). Avanza y retrocede por pasos: dos o tres
         lecturas de rect por cuadro, no once. */
      lee() {
        const linea = innerHeight * 0.42;
        while (i < secciones.length - 1 && secciones[i + 1].getBoundingClientRect().top <= linea) i++;
        while (i >= 0 && secciones[i].getBoundingClientRect().top > linea) i--;
        return i >= 0 ? folios[i] : null;
      },
      pon(html, animar) {
        if (html === mostrado) return;
        mostrado = html;
        const visible = innerWidth >= 1280 && animar;
        for (const viejo of el.querySelectorAll(".cabeza-renglon:not(.sale)")) {
          if (!visible) {
            viejo.remove();
            continue;
          }
          viejo.classList.remove("entra");
          viejo.classList.add("sale");
          const quita = () => viejo.remove();
          viejo.addEventListener("animationend", quita, { once: true });
          setTimeout(quita, 500); // por si la animación no corre (pestaña oculta)
        }
        if (!html) return;
        const renglon = document.createElement("span");
        renglon.className = visible ? "cabeza-renglon entra" : "cabeza-renglon";
        const texto = document.createElement("span");
        texto.className = "cabeza-texto";
        texto.innerHTML = html;
        renglon.append(texto);
        el.append(renglon);
      },
    };
  }
})();
