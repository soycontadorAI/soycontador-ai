/*
 * portal.js: H · Portal. "Cada mundo se abre por una ventana."
 *
 * Cuatro aberturas, todas amarradas al scroll (no a un temporizador):
 *   1. El punto final de "tú." crece en un círculo de noche que revela la
 *      escena, quieta en su lugar, mientras la portada se va por debajo.
 *   2. La tarjeta de papel del cuarto renglón ("tu criterio") se vuelve la
 *      ventana al día: crece desde su rect hasta la pantalla y detrás está la
 *      vuelta, quieta, esperando.
 *   3. La noche 2 llega como ventana de terminal (barra y semáforo) y se abre
 *      a pantalla completa al llegar arriba.
 *   4. Al terminarse, se cierra otra vez en ventana y se va. El pie repite el
 *      gesto, chico.
 * Y una sola animación por tiempo: el primer titular de cada mundo abierto
 * sube por renglones (0.62 s por renglón, escalonado de 80 ms).
 *
 * Sin JavaScript o con "reducir movimiento" no se activa nada: quedan los
 * mundos pintados por sección (comun.css) y todo el contenido a la vista.
 */
(() => {
  const M = window.Mundos;
  if (!M || M.quieto) return;

  const raiz = document.documentElement;
  const cabecera = document.querySelector(".site-header");
  const mundos = [...document.querySelectorAll("main > .mundo[data-mundo]")];
  const escena = document.getElementById("escena");
  const fija = escena && escena.querySelector(".escena-fija");
  const renglones = [...document.querySelectorAll("#renglones .renglon")];
  const cuenta = document.getElementById("cuenta-escena");
  const h1 = document.querySelector(".portada-titulo");
  if (mundos.length < 4 || !fija || renglones.length !== 4 || !h1 || !cabecera) return;
  const [mHero, mEscena, mDia2, mNoche2] = mundos;
  const cuarto = renglones[3];
  const vuelta = mDia2.querySelector(".vuelta");
  if (!vuelta) return;
  const revVuelta = vuelta.querySelector("[data-reveal]");
  const pie = document.querySelector(".site-footer");

  /* ---------- El punto de "tú." ----------
     Un Range sobre el nodo de texto "." da la caja del carácter, y el canvas
     da dónde cae la TINTA dentro de esa caja (Instrument Serif deja aire a los
     lados y bajo la línea base). Con las dos cosas, el círculo nace sobre el
     punto exacto y no sobre su caja. */
  const punto = (() => {
    const lineas = h1.querySelectorAll(".reng > span");
    const ultima = lineas[lineas.length - 1];
    if (!ultima) return null;
    const camino = document.createTreeWalker(ultima, NodeFilter.SHOW_TEXT);
    let nodo = null;
    for (let n = camino.nextNode(); n; n = camino.nextNode()) if (n.data.includes(".")) nodo = n;
    if (!nodo) return null;
    const r = document.createRange();
    const i = nodo.data.lastIndexOf(".");
    r.setStart(nodo, i);
    r.setEnd(nodo, i + 1);
    return r;
  })();
  if (!punto) return;

  let tinta = null;
  function midePunto() {
    const cs = getComputedStyle(h1);
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = ctx.measureText(".");
    tinta = {
      izq: m.actualBoundingBoxLeft,
      der: m.actualBoundingBoxRight,
      asc: m.actualBoundingBoxAscent,
      desc: m.actualBoundingBoxDescent,
      base: m.fontBoundingBoxAscent,
    };
  }
  function centroPunto() {
    const r = punto.getBoundingClientRect();
    return {
      cx: r.left + (tinta.der - tinta.izq) / 2,
      cy: r.top + tinta.base - (tinta.asc - tinta.desc) / 2,
      radio: Math.max(tinta.der + tinta.izq, tinta.asc + tinta.desc) / 2,
    };
  }

  /* ---------- Estructura ----------
     Clases de enganche, la pista donde la vuelta espera fija, la barra de la
     ventana de terminal y el fantasma de la tarjeta de papel. Nada de esto es
     texto nuevo: todo lo añadido es decorativo y va aria-hidden. */
  mEscena.classList.add("portal-escena");
  mDia2.classList.add("portal-dia2");
  mNoche2.classList.add("portal-noche2");

  const pista = document.createElement("div");
  pista.className = "portal-pista";
  vuelta.before(pista);
  pista.append(vuelta);

  const barra = document.createElement("div");
  barra.className = "portal-barra";
  barra.setAttribute("aria-hidden", "true");
  barra.innerHTML = "<i></i><i></i><i></i>";
  mNoche2.prepend(barra);

  const listaFantasma = document.createElement("ol");
  listaFantasma.setAttribute("aria-hidden", "true");
  listaFantasma.style.cssText = "margin:0;padding:0;list-style:none";
  const fantasma = cuarto.cloneNode(true);
  fantasma.classList.add("portal-fantasma", "activo");
  listaFantasma.append(fantasma);
  mEscena.append(listaFantasma);

  /* ---------- Medidas ----------
     El largo de cada gesto va en múltiplos del alto de la ventana. En el
     celular la barra del navegador mueve innerHeight a cada rato: solo se
     recalcula con un cambio real (ancho, o más de 120 px de alto), para que
     la página no brinque a media escena. */
  let vw = 0;
  let vh = 0;
  let S_IRIS = 0;
  let R_RENG = 0;
  let S_EXP = 0;
  let G = 0;
  let RADIO = 28;
  function medidas(forzar) {
    const ancho = document.documentElement.clientWidth;
    const alto = innerHeight;
    if (!forzar && ancho === vw && Math.abs(alto - vh) < 120) return false;
    vw = ancho;
    vh = alto;
    const angosto = matchMedia("(max-width: 980px)").matches;
    S_IRIS = Math.round(vh * (angosto ? 0.8 : 0.85));
    R_RENG = Math.round(vh * (angosto ? 1.8 : 2.2));
    S_EXP = Math.round(vh * 0.85);
    G = vw < 700 ? 14 : Math.min(96, Math.round(vw * 0.06));
    RADIO = vw < 700 ? 20 : 28;
    raiz.style.setProperty("--portal-vh", `${vh}px`);
    raiz.style.setProperty("--portal-sube", `${mHero.getBoundingClientRect().bottom + scrollY}px`);
    raiz.style.setProperty("--portal-alto-escena", `${S_IRIS + R_RENG + S_EXP + vh}px`);
    raiz.style.setProperty("--portal-traslape", `${vh + S_EXP}px`);
    raiz.style.setProperty("--portal-exp", `${S_EXP}px`);
    raiz.style.setProperty("--portal-alto-vuelta", `${Math.max(vuelta.offsetHeight, vh)}px`);
    midePunto();
    return true;
  }

  /* Cómo crece cada abertura con el scroll. El círculo arranca lento (el punto
     se hincha antes de tragarse la página) y las ventanas aceleran y frenan. */
  const crece = (p) => Math.pow(p, 2.15);
  const abre = (p) => p * p * (3 - 2 * p);

  /* ---------- Tipografía cinética ----------
     Parte el titular en renglones tal como los acomodó el navegador (con la
     fuente real ya cargada), cada uno detrás de su máscara, y al terminar
     devuelve el marcado original para que vuelva a fluir solo. Conserva las
     etiquetas en línea (<em>) clonándolas por renglón. */
  function partir(el) {
    const original = el.innerHTML;
    const palabras = [];
    const textos = [];
    const camino = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = camino.nextNode(); n; n = camino.nextNode()) textos.push(n);
    for (const t of textos) {
      const frag = document.createDocumentFragment();
      for (const parte of t.data.split(/(\s+)/)) {
        if (!parte) continue;
        if (/^\s+$/.test(parte)) {
          frag.append(document.createTextNode(parte));
        } else {
          const s = document.createElement("span");
          s.textContent = parte;
          frag.append(s);
          palabras.push(s);
        }
      }
      t.replaceWith(frag);
    }
    const lineas = [];
    let arriba = null;
    for (const p of palabras) {
      const y = Math.round(p.getBoundingClientRect().top);
      if (arriba === null || Math.abs(y - arriba) > 6) {
        lineas.push([]);
        arriba = y;
      }
      lineas[lineas.length - 1].push(p);
    }
    const nuevo = document.createDocumentFragment();
    lineas.forEach((ps, i) => {
      const mascara = document.createElement("span");
      mascara.className = "portal-reng";
      const dentro = document.createElement("span");
      dentro.style.setProperty("--d", `${(i * 0.08).toFixed(2)}s`);
      mascara.append(dentro);
      let cadena = [];
      ps.forEach((p, j) => {
        const ancestros = [];
        for (let a = p.parentNode; a && a !== el; a = a.parentNode) ancestros.unshift(a);
        let k = 0;
        while (k < cadena.length && k < ancestros.length && cadena[k][0] === ancestros[k]) k++;
        cadena = cadena.slice(0, k);
        let padre = k ? cadena[k - 1][1] : dentro;
        if (j > 0) padre.append(document.createTextNode(" "));
        for (let m = k; m < ancestros.length; m++) {
          const c = ancestros[m].cloneNode(false);
          padre.append(c);
          cadena.push([ancestros[m], c]);
          padre = c;
        }
        padre.append(document.createTextNode(p.textContent));
      });
      nuevo.append(mascara);
    });
    el.textContent = "";
    el.append(nuevo);
    return { original, renglones: lineas.length };
  }
  const titulos = [];
  function preparaTitulo(el, umbral) {
    if (!el) return;
    el.removeAttribute("data-reveal");
    const t = { el, umbral, ...partir(el), subio: false };
    titulos.push(t);
  }
  function sube(t) {
    t.subio = true;
    t.el.classList.add("portal-sube");
    const total = 620 + (t.renglones - 1) * 80 + 120;
    setTimeout(() => {
      t.el.innerHTML = t.original;
      t.el.classList.remove("portal-sube");
    }, total);
  }

  /* ---------- El cuadro ---------- */
  let estadoCab = null;
  let encendidos = -1;
  let vueltaRevelada = false;
  let retratoArriba = false;

  /* El observador del sitio marca la vuelta como visible en cuanto cruza la
     ventana, aunque esté tapada por la noche. Se le quita la marca en la misma
     microtarea, antes de pintar, hasta que la ventana de papel ya se abrió:
     si no, el texto alcanzaba a asomar un cuadro por la abertura chica. */
  if (revVuelta) {
    new MutationObserver(() => {
      if (!vueltaRevelada && revVuelta.classList.contains("is-visible")) revVuelta.classList.remove("is-visible");
    }).observe(revVuelta, { attributes: true, attributeFilter: ["class"] });
  }

  function cuadro() {
    // Primero todas las lecturas...
    const re = escena.getBoundingClientRect();
    const s = -re.top;
    const pI = M.limita(s / S_IRIS);
    const pR = M.limita((s - S_IRIS) / R_RENG);
    const pE = M.limita((s - S_IRIS - R_RENG) / S_EXP);
    const hy = cabecera.offsetHeight / 2;
    const altoCab = cabecera.offsetHeight;
    const iris = pI < 1 ? centroPunto() : null;
    const rc = pE > 0 && pE < 1 ? cuarto.getBoundingClientRect() : null;
    const rv = rc ? vuelta.getBoundingClientRect() : null;
    const rn = mNoche2.getBoundingClientRect();
    const rp = pie ? pie.getBoundingClientRect() : null;

    // ...y luego todas las escrituras.
    let cab = null;

    // 1. El punto final se abre.
    if (iris) {
      const R = Math.hypot(Math.max(iris.cx, vw - iris.cx), Math.max(iris.cy, vh - iris.cy)) + 4;
      const r = s < 1 ? 0 : iris.radio * 0.96 + (R - iris.radio) * crece(pI);
      fija.style.clipPath = `circle(${r.toFixed(2)}px at ${iris.cx.toFixed(2)}px ${iris.cy.toFixed(2)}px)`;
      // La cabecera es translúcida: pasa a noche cuando el círculo ya cubre
      // la mitad de su línea. Esperar a que la cubra completa la dejaba gris
      // (papel al 84% sobre la noche) durante medio gesto.
      const dy = Math.abs(iris.cy - hy);
      const media = dy < r ? Math.sqrt(r * r - dy * dy) : 0;
      const cuerda = Math.max(0, Math.min(vw, iris.cx + media) - Math.max(0, iris.cx - media));
      cab = cuerda >= vw * 0.5 ? "noche" : "dia";
    } else {
      fija.style.clipPath = "";
      if (pE <= 0 && s < S_IRIS + R_RENG + S_EXP) cab = "noche";
    }

    // 2. Los renglones, con el recorrido corrido por lo que tomó la abertura.
    const activos = Math.min(4, Math.floor((pR / 0.85) * 4) + 1);
    renglones.forEach((el, i) => el.classList.toggle("activo", i < activos));
    if (cuenta && (activos !== encendidos || cuenta.textContent !== String(activos).padStart(2, "0"))) {
      cuenta.textContent = String(activos).padStart(2, "0");
    }
    encendidos = activos;

    // 3. Tu criterio abre el día.
    if (rc) {
      const k = 1 - abre(pE);
      const arriba = (rc.top - rv.top) * k;
      const izq = (rc.left - rv.left) * k;
      const der = (rv.right - rc.right) * k;
      const abajo = (rv.bottom - rc.bottom) * k;
      vuelta.style.clipPath = `inset(${arriba.toFixed(1)}px ${der.toFixed(1)}px ${abajo.toFixed(1)}px ${izq.toFixed(1)}px round ${(12 * k).toFixed(1)}px)`;
      const op = 1 - M.limita(pE / 0.2);
      fantasma.style.visibility = op > 0 ? "visible" : "hidden";
      fantasma.style.opacity = op.toFixed(3);
      if (op > 0) {
        fantasma.style.left = `${rc.left}px`;
        fantasma.style.top = `${rc.top}px`;
        fantasma.style.width = `${rc.width}px`;
        fantasma.style.height = `${rc.height}px`;
      }
      cab = arriba <= hy && vw - izq - der >= vw * 0.5 ? "dia" : "noche";
    } else {
      vuelta.style.clipPath = pE >= 1 ? "none" : "";
      fantasma.style.visibility = "hidden";
    }
    // La vuelta cuenta su objeción hasta que la ventana ya se abrió casi a la
    // mitad, y el retrato sube un poco después: mientras la ventana es chica,
    // por ella solo se ve papel.
    if (revVuelta && !vueltaRevelada) {
      if (pE >= 0.4) {
        revVuelta.classList.add("is-visible");
        vueltaRevelada = true;
      } else {
        revVuelta.classList.remove("is-visible");
      }
    }
    if (!retratoArriba && pE >= 0.5) {
      vuelta.classList.add("portal-retrato-sube");
      retratoArriba = true;
    }

    // 4. Entrar y salir de la terminal.
    if (rn.bottom > -20 && rn.top < vh + 20) {
      const pIn = M.limita((vh - rn.top) / (vh - altoCab));
      const pOut = M.limita((vh - rn.bottom) / (vh * 0.7));
      const x = G * Math.max(1 - abre(pIn), abre(pOut));
      const radio = (RADIO * x) / G;
      mNoche2.style.clipPath = x < 0.5 ? "" : `inset(0 ${x.toFixed(1)}px round ${radio.toFixed(1)}px)`;
      barra.style.opacity = (1 - M.limita((pIn - 0.45) / 0.45)).toFixed(3);
      barra.style.setProperty("--portal-x", `${x.toFixed(1)}px`);
      // Mientras la ventana pase bajo la cabecera, la cabecera es de noche aunque
      // la ventana se esté cerrando: el papel solo asoma en las orillas.
      if (rn.top <= hy && rn.bottom > hy) cab = "noche";
    }

    // 5. El pie, eco chico del mismo gesto.
    if (rp && rp.top < vh) {
      const p = M.limita((vh - rp.top) / Math.max(1, rp.height));
      const x = G * (1 - abre(p));
      const radio = (RADIO * x) / G;
      pie.style.clipPath = x < 0.5 ? "" : `inset(0 ${x.toFixed(1)}px 0 ${x.toFixed(1)}px round ${radio.toFixed(1)}px ${radio.toFixed(1)}px 0 0)`;
    }

    // 6. Los titulares de los mundos que se acaban de abrir.
    for (const t of titulos) {
      if (t.subio) continue;
      if (t.umbral(pI, rn)) sube(t);
    }

    estadoCab = cab;
  }

  /* ---------- Arranque ----------
     La clase y las medidas entran en la misma tarea, antes del siguiente
     pintado: nunca se ve la escena encimada sin su recorte. */
  fija.style.clipPath = "circle(0px at 50% 50%)";
  medidas(true);
  raiz.classList.add("portal-activo");
  cuadro();
  M.cada(cuadro);
  M.mundoBajoCabecera(() => estadoCab);
  addEventListener("resize", () => {
    if (medidas(false)) M.pide();
  });
  document.fonts.ready.then(() => {
    medidas(true);
    const altoCab = () => cabecera.offsetHeight;
    preparaTitulo(document.querySelector(".escena-titulo"), (pI) => pI >= 0.72);
    preparaTitulo(document.querySelector(".galeria-titulo"), (pI, rn) => {
      const pIn = M.limita((innerHeight - rn.top) / (innerHeight - altoCab()));
      return pIn >= 0.86;
    });
    M.pide();
  });
})();
