/*
 * "Qué encuentras aquí": la lógica de las tres alternativas (ver ofertas.css).
 *
 * La variante sale de la URL (?ofertas=catalogo|puertas|plana) o de la
 * barrita de revisión. Sin variante queda el carrusel de hoy, con su
 * arrastre, su teclado y su empujón, que siguen siendo los del sitio.
 */
(() => {
  const seccion = document.getElementById("ofertas");
  const pista = document.getElementById("pista");
  if (!seccion || !pista) return;
  const puertas = [...pista.querySelectorAll(".puerta")];
  const M = window.Mundos;
  const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const VARIANTES = {
    actual: "carrusel (hoy)",
    catalogo: "1 · catálogo",
    puertas: "2 · puertas",
    plana: "3 · plana",
  };
  /* El carrusel es una región desplazable y por eso es enfocable y dice "se
     recorre de lado". Fuera del carrusel ya no se desplaza: quitarle la
     parada de tabulador y el nombre evita anunciar algo que no es. */
  const original = ["tabindex", "role", "aria-label"].map((a) => [a, pista.getAttribute(a)]);
  let variante = "actual";

  function aplica(v) {
    variante = v;
    if (v === "actual") {
      delete seccion.dataset.variante;
      original.forEach(([a, valor]) => valor !== null && pista.setAttribute(a, valor));
    } else {
      seccion.dataset.variante = v;
      original.forEach(([a]) => pista.removeAttribute(a));
      pista.scrollLeft = 0;
    }
    puertas.forEach((p, i) => {
      p.classList.toggle("abierta", v === "puertas" && i === 0);
      p.classList.remove("en-lectura", "cerrandose");
      p.style.removeProperty("--subir");
    });
    botones.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === v)));
    M?.pide();
  }

  /* ---------- 2 · Puertas: se abre la que señalas ---------- */
  function abre(puerta) {
    if (variante !== "puertas" || puerta.classList.contains("abierta")) return;
    const antes = pista.querySelector(".puerta.abierta");
    if (antes) {
      antes.classList.remove("abierta");
      antes.classList.add("cerrandose");
      setTimeout(() => antes.classList.remove("cerrandose"), 450);
    }
    puerta.classList.add("abierta");
  }
  const escritorio = matchMedia("(min-width: 900px) and (hover: hover)");
  let intento = 0;
  puertas.forEach((p) => {
    // Con mouse, al señalar (con un respiro de 70 ms para no abrir todas al
    // cruzar el pasillo). Con teclado, al enfocar.
    p.addEventListener("pointerenter", (e) => {
      if (e.pointerType !== "mouse" || !escritorio.matches) return;
      clearTimeout(intento);
      intento = setTimeout(() => abre(p), 70);
    });
    p.addEventListener("pointerleave", () => clearTimeout(intento));
    p.addEventListener("focus", () => abre(p));
    // Con el dedo: el primer toque abre, el segundo entra. Se mira cómo estaba
    // la puerta al EMPEZAR el toque, porque el toque también la enfoca y el
    // foco la abre antes de que llegue el clic: sin esto, el primer toque ya
    // entraba. Con teclado no hay toque: Enter entra directo.
    let alTocar = null;
    p.addEventListener("pointerdown", () => {
      alTocar = p.classList.contains("abierta");
    });
    p.addEventListener("click", (e) => {
      const estaba = alTocar;
      alTocar = null;
      if (variante !== "puertas" || estaba !== false) return;
      e.preventDefault();
      abre(p);
    });
  });

  /* Las flechas: el carrusel las usa para desplazarse de lado. En las
     variantes no hay a dónde desplazarse, así que se intercepta antes: en
     Puertas pasan de puerta en puerta; en las otras dos, la página baja como
     siempre. */
  pista.addEventListener(
    "keydown",
    (e) => {
      if (variante === "actual" || !["ArrowRight", "ArrowLeft"].includes(e.key)) return;
      e.stopPropagation();
      if (variante !== "puertas") return;
      const i = puertas.indexOf(document.activeElement);
      if (i < 0) return;
      const j = Math.max(0, Math.min(puertas.length - 1, i + (e.key === "ArrowRight" ? 1 : -1)));
      puertas[j].focus();
      e.preventDefault();
    },
    true,
  );

  /* ---------- 1 · Catálogo: la regla de lectura ----------
     Se enciende el renglón que cruza la línea de lectura (42% de la
     ventana). Con menos movimiento no hay regla: los renglones se quedan
     quietos y solo responden al mouse. */
  let encendido = null;
  /* ---------- 3 · Plana: la cascada ---------- */
  const subidas = puertas.map(() => -1);

  M?.cada(() => {
    if (variante === "catalogo" && !quieto) {
      const linea = innerHeight * 0.42;
      let toca = null;
      for (const p of puertas) {
        const r = p.getBoundingClientRect();
        if (r.top <= linea && r.bottom > linea) {
          toca = p;
          break;
        }
      }
      if (toca !== encendido) {
        encendido?.classList.remove("en-lectura");
        toca?.classList.add("en-lectura");
        encendido = toca;
      }
    }
    if (variante === "plana" && !quieto) {
      const r = pista.getBoundingClientRect();
      const avance = M.limita((innerHeight - r.top) / (innerHeight * 0.85));
      const columnas = getComputedStyle(pista).gridTemplateColumns.split(" ").length || 1;
      puertas.forEach((p, i) => {
        const col = i % columnas;
        const fila = Math.floor(i / columnas);
        const t = M.limita(avance * 1.7 - (col * 0.13 + fila * 0.2));
        const subir = (1 - t) ** 3; // sale rápido, llega suave
        if (Math.abs(subir - subidas[i]) > 0.002) {
          p.style.setProperty("--subir", subir.toFixed(3));
          subidas[i] = subir;
        }
      });
    }
  });

  /* ---------- La barrita de revisión ---------- */
  const botones = [];
  const V = window.Visor;
  if (V) {
    const sep = document.createElement("span");
    sep.className = "sep";
    V.nav.insertBefore(sep, V.antesDe);
    for (const [v, nombre] of Object.entries(VARIANTES)) {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.v = v;
      b.textContent = nombre;
      b.addEventListener("click", () => {
        aplica(v);
        const url = new URL(location.href);
        if (v === "actual") url.searchParams.delete("ofertas");
        else url.searchParams.set("ofertas", v);
        history.replaceState(null, "", url);
        seccion.scrollIntoView({ block: "start", behavior: "instant" });
      });
      botones.push(b);
      V.nav.insertBefore(b, V.antesDe);
    }
  }

  const pedida = new URLSearchParams(location.search).get("ofertas");
  aplica(pedida && pedida in VARIANTES ? pedida : "actual");
})();
