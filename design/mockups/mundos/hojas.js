/*
 * G · Hojas: la pila de hojas. Ver hojas.css para el porqué.
 *
 * Por cuadro se leen todos los rects primero y luego se escriben tres
 * variables por hoja, solo si cambiaron:
 *   --asentar  0 → 1 mientras la hoja sube desde el borde de abajo hasta arriba
 *   --hundir   0 → 1 mientras la hoja SIGUIENTE la va tapando
 *   transform  la escala de la hoja hundida, con el origen en el centro de lo
 *              que se ve de ella (una hoja puede medir 3,000 px)
 */
(() => {
  const M = window.Mundos;
  if (!M || M.quieto) return; // Sin movimiento: mundos estáticos, pie normal.

  const raiz = document.documentElement;
  const main = document.querySelector("main");
  const pie = document.querySelector(".site-footer");
  const cabecera = document.querySelector(".site-header");
  const hojas = [...document.querySelectorAll("main > .mundo")];
  if (!main || hojas.length < 2) return;

  raiz.classList.add("hojas-vivo");

  /* ---------- Dónde se fija cada hoja ----------
     Una hoja más baja que la ventana se fija bajo la cabecera. Una más alta se
     fija cuando su borde de abajo toca el de la ventana: así se lee completa
     antes de que la siguiente empiece a taparla. */
  const topes = [];
  let altoPie = 0;
  function mide() {
    const vh = innerHeight;
    const alto = cabecera ? cabecera.offsetHeight : 0;
    hojas.forEach((h, i) => {
      const t = h.offsetHeight <= vh - alto ? alto : vh - h.offsetHeight;
      topes[i] = t;
      h.style.setProperty("--tope", `${t}px`);
    });
    altoPie = pie ? pie.offsetHeight : 0;
    main.style.setProperty("--alto-pie", `${altoPie}px`);
    M.pide();
  }
  new ResizeObserver(mide).observe(main);
  addEventListener("resize", mide);
  mide();

  /* ---------- Por cuadro: primero se lee todo, luego se escribe ---------- */
  const antes = hojas.map(() => ({ asentar: -1, hundir: -1, oculta: false }));
  const ESCALA = 0.055;
  const ultima = hojas[hojas.length - 1];
  let levantarAntes = -1;

  /* El plumón que pasas tú: la banda avanza mientras el centro del renglón va
     del 80% al 50% de la ventana, y al subir se despinta. El del titular de la
     portada no entra: está sobre el pliegue y se pinta al cargar, como hoy. */
  const marcas = [...document.querySelectorAll("main .hl")].filter((el) => !el.closest(".portada-titulo"));
  marcas.forEach((el) => el.setAttribute("data-trazo", ""));
  const trazos = marcas.map(() => -1);

  M.cada(() => {
    const vh = innerHeight;
    // Lecturas.
    const rects = hojas.map((h) => h.getBoundingClientRect());
    const finMain = main.getBoundingClientRect().bottom;
    const centros = marcas.map((el) => {
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2;
    });

    // La pila.
    hojas.forEach((h, i) => {
      const asentar = i === 0 ? 1 : M.limita((vh - rects[i].top) / vh);
      const sig = rects[i + 1];
      const hundir = sig ? M.limita((vh - sig.top) / vh) : 0;
      const a = antes[i];

      if (Math.abs(asentar - a.asentar) > 0.0005) {
        h.style.setProperty("--asentar", asentar.toFixed(4));
        a.asentar = asentar;
      }
      if (Math.abs(hundir - a.hundir) > 0.0005) {
        h.style.setProperty("--hundir", hundir.toFixed(4));
        h.style.setProperty("--velo", (hundir ** 1.8 * 0.55).toFixed(4));
        if (hundir > 0) {
          // Mientras se hunde está fija en su tope: el centro de lo visible
          // queda a media ventana, medido desde la orilla de arriba de la hoja.
          h.style.transformOrigin = `50% ${vh / 2 - topes[i]}px`;
          h.style.transform = `scale(${1 - ESCALA * M.curva(hundir)})`;
          h.style.willChange = "transform";
        } else {
          h.style.transform = "";
          h.style.willChange = "";
        }
        a.hundir = hundir;
      }
      // Una hoja tapada por completo no se pinta: debajo de una hoja que se
      // hunde debe asomar la mesa, no las hojas de antes.
      const oculta = hundir >= 1 && sig && sig.top <= 0.5;
      if (oculta !== a.oculta) {
        h.style.visibility = oculta ? "hidden" : "";
        a.oculta = oculta;
      }
    });

    // La última hoja no se hunde: se levanta para dejar ver el pie.
    const levantar = altoPie ? M.limita((vh - finMain) / Math.min(altoPie, vh * 0.35)) : 0;
    if (Math.abs(levantar - levantarAntes) > 0.002) {
      ultima.style.setProperty("--levantar", levantar.toFixed(3));
      levantarAntes = levantar;
    }

    // El plumón. Lineal a propósito: la banda sigue al dedo, no a un reloj.
    centros.forEach((centro, i) => {
      const t = M.limita((vh * 0.8 - centro) / (vh * 0.3));
      if (Math.abs(t - trazos[i]) > 0.002) {
        marcas[i].style.setProperty("--trazo", t.toFixed(3));
        trazos[i] = t;
      }
    });
  });
})();
