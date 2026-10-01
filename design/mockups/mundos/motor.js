/*
 * motor.js: lo que comparten las tres direcciones de la ronda 3.
 *
 * Un solo bucle por cuadro (requestAnimationFrame colgado del scroll), sin
 * librerías: el sitio hoy carga unos 3.5 KB de JavaScript y una capa de
 * movimiento no tiene por qué multiplicarlo. Cada dirección registra sus
 * tareas con Mundos.cada(fn) y el motor las corre una vez por cuadro.
 *
 * Además resuelve dos cosas que las tres necesitan:
 *   1. La cabecera toma el mundo de lo que tiene debajo (día o noche).
 *   2. El color del navegador (meta theme-color) sigue al mundo, así que en
 *      el celular la barra del sistema también "entra" a la noche.
 */
(() => {
  const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const raiz = document.documentElement;
  const cabecera = document.querySelector(".site-header");
  const meta = document.querySelector('meta[name="theme-color"]');
  /* Los colores del navegador salen de los tokens, no de un hex escrito aquí. */
  const tokens = getComputedStyle(raiz);
  const COLOR = {
    dia: tokens.getPropertyValue("--dia-bg").trim() || "#FBFAF7",
    noche: tokens.getPropertyValue("--color-terminal-bg").trim() || "#0D1420",
  };
  const tareas = [];
  let pedido = false;
  let mundoCabecera = null;
  let resolverMundo = null;

  const limita = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  const Mundos = {
    quieto,
    limita,
    /* Interpolación con la curva de la marca, para lo que se calcula a mano. */
    curva(t) {
      // cubic-bezier(0.16, 0.84, 0.28, 1) resuelta por bisección: es barata y exacta.
      const x1 = 0.16, y1 = 0.84, x2 = 0.28, y2 = 1;
      const bx = (s) => 3 * x1 * s * (1 - s) ** 2 + 3 * x2 * s * s * (1 - s) + s ** 3;
      const by = (s) => 3 * y1 * s * (1 - s) ** 2 + 3 * y2 * s * s * (1 - s) + s ** 3;
      let lo = 0, hi = 1, s = t;
      for (let i = 0; i < 18; i++) {
        s = (lo + hi) / 2;
        if (bx(s) < t) lo = s;
        else hi = s;
      }
      return by(s);
    },
    /* 0 cuando el borde superior del elemento asoma por abajo, 1 cuando llega arriba. */
    entrada(el, recorrido = innerHeight) {
      const r = el.getBoundingClientRect();
      return limita((innerHeight - r.top) / recorrido);
    },
    /* 0 cuando el borde inferior está abajo de la ventana, 1 cuando sale por arriba. */
    salida(el, recorrido = innerHeight) {
      const r = el.getBoundingClientRect();
      return limita((innerHeight - r.bottom) / recorrido);
    },
    /* Para secciones con una capa fija adentro: avance sobre su propio alto. */
    fijo(el) {
      const r = el.getBoundingClientRect();
      const recorrido = r.height - innerHeight;
      return recorrido > 0 ? limita(-r.top / recorrido) : 1;
    },
    cada(fn) {
      tareas.push(fn);
      pide();
    },
    /* Una dirección puede decidir ella qué mundo hay bajo la cabecera. */
    mundoBajoCabecera(fn) {
      resolverMundo = fn;
      pide();
    },
    /* Por omisión: el último .mundo (en orden del documento) que cubre la línea
       de la cabecera. El último porque en "Hojas" las hojas se enciman, y
       porque una isla (una sección pintada con el otro mundo, como la guía)
       va después de la hoja que la contiene y tiene que ganarle. */
    mundoEn(y) {
      const mundos = document.querySelectorAll("[data-mundo]:is(.mundo, .site-footer, section)");
      for (let i = mundos.length - 1; i >= 0; i--) {
        const r = mundos[i].getBoundingClientRect();
        if (r.top <= y && r.bottom > y) return mundos[i].dataset.mundo;
      }
      return "dia";
    },
    pide,
  };

  function pide() {
    if (pedido) return;
    pedido = true;
    requestAnimationFrame(cuadro);
  }

  function cuadro() {
    pedido = false;
    for (const t of tareas) t();
    if (!cabecera) return;
    const y = cabecera.getBoundingClientRect().height / 2;
    const mundo = (resolverMundo && resolverMundo(y)) || Mundos.mundoEn(y);
    if (mundo !== mundoCabecera) {
      mundoCabecera = mundo;
      cabecera.dataset.mundo = mundo;
      raiz.dataset.mundoCabecera = mundo;
      if (meta) meta.content = COLOR[mundo] ?? COLOR.dia;
    }
  }

  addEventListener("scroll", pide, { passive: true });
  addEventListener("resize", pide);
  addEventListener("load", pide);
  window.Mundos = Mundos;
  raiz.classList.add("mundos-listo");
})();
