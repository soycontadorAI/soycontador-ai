/*
 * Tres alternativas de logotipo (2026-10-01). Fuente única del marcado: la
 * página de comparación (index.html) y los prototipos de movimiento lo leen
 * de aquí, para que lo que se compara sea exactamente lo que se monta.
 *
 *   document.querySelector(".site-logo").innerHTML = LOGOS.contrapartida.html;
 *   document.querySelector(".site-logo").setAttribute("aria-label", LOGOS.contrapartida.aria);
 *
 * El estilo vive en logos.css y solo usa tokens de src/styles/tokens.css.
 * Cada entrada trae:
 *   html         el logotipo de cabecera (escritorio)
 *   htmlGrande   la versión de detalle, cuando cambia
 *   htmlCompacto la versión sin descriptor, para tamaños chicos (B)
 *   aria         el nombre accesible del enlace (WCAG 2.5.3: contiene el
 *                texto visible, así que cambia con el logotipo)
 *   icono        favicon (SVG, lienzo 96)
 *   iconoGrande  apple-touch-icon (SVG, lienzo 180)
 *   notas        lo que hay que saber para montarlo
 */
(function () {
  /* La T del isotipo, en el dibujo de Nav.astro. `abono` lleva el verde. */
  const SELLO = `<svg viewBox="0 0 40 40" aria-hidden="true">
    <circle class="disco" cx="20" cy="20" r="20"/>
    <rect class="t" x="7" y="10.5" width="26" height="3.2"/>
    <rect class="t" x="18.4" y="10.5" width="3.2" height="19"/>
    <rect class="t" x="8.6" y="17.3" width="8.2" height="2.9"/>
    <rect class="t" x="8.6" y="22" width="5.9" height="2.9"/>
    <rect class="abono" x="23.2" y="17.3" width="8.2" height="2.9"/>
    <rect class="abono" x="23.2" y="22" width="5.9" height="2.9"/>
  </svg>`;

  const PROMPT = `<svg viewBox="0 0 24 20" aria-hidden="true">
    <rect class="t" x="0.5" y="1.5" width="23" height="2.6"/>
    <rect class="t" x="10.7" y="1.5" width="2.6" height="17"/>
    <rect class="t" x="1.5" y="7" width="7.6" height="2.5"/>
    <rect class="t" x="1.5" y="11.5" width="5.4" height="2.5"/>
    <rect class="abono" x="14.9" y="7" width="7.6" height="2.5"/>
    <rect class="abono" x="14.9" y="11.5" width="5.4" height="2.5"/>
  </svg>`;

  const contrapartida = (renglones) =>
    `<span class="lg lg-a${renglones ? " con-renglones" : ""}">` +
    `<span class="lg-a-cargo">soycontador<i></i></span>` +
    `<span class="lg-a-asta" aria-hidden="true"></span>` +
    `<span class="lg-a-abono">.ai<i></i></span>` +
    `</span>`;

  const firma = (dominio) =>
    `<span class="lg lg-b${dominio ? "" : " sin-dominio"}">` +
    `<span class="lg-b-sello" aria-hidden="true">${SELLO}</span>` +
    `<span class="lg-b-nombre">Israel Castro</span>` +
    `<span class="lg-b-filete" aria-hidden="true"></span>` +
    `<span class="lg-b-dominio">soycontador<b>.ai</b></span>` +
    `</span>`;

  const prompt = (pestana) =>
    `<span class="lg lg-c${pestana ? " pestana" : ""}">` +
    `<span class="lg-c-prompt" aria-hidden="true">${PROMPT}</span>` +
    `<span class="lg-c-cmd"><span class="lg-c-texto">soycontador<b>.ai</b></span>` +
    `<span class="lg-c-cursor" aria-hidden="true"></span></span>` +
    `</span>`;

  /* Íconos. En el sitio irían como archivo con los hex de los tokens
     (terminal-bg #0D1420, terminal-bright #E8EDF5, terminal-ok #3DD68C);
     aquí van con los tokens para que el comparador no duplique valores. */
  const ICONO_A = `<svg viewBox="0 0 96 96" aria-hidden="true">
    <rect width="96" height="96" rx="18" fill="var(--color-terminal-bg)"/>
    <rect x="0" y="24" width="96" height="9" fill="var(--color-terminal-bright)"/>
    <rect x="43.5" y="24" width="9" height="49" fill="var(--color-terminal-bright)"/>
    <rect x="14" y="43" width="24" height="8" fill="var(--color-terminal-bright)"/>
    <rect x="14" y="56" width="17" height="8" fill="var(--color-terminal-bright)"/>
    <rect x="58" y="43" width="24" height="8" fill="var(--color-terminal-ok)"/>
    <rect x="58" y="56" width="17" height="8" fill="var(--color-terminal-ok)"/>
  </svg>`;

  const ICONO_B = `<svg viewBox="0 0 96 96" aria-hidden="true">
    <circle cx="48" cy="48" r="48" fill="var(--color-terminal-bg)"/>
    <rect x="18" y="29" width="60" height="8" fill="var(--color-terminal-bright)"/>
    <rect x="44" y="29" width="8" height="44" fill="var(--color-terminal-bright)"/>
    <rect x="21" y="45" width="19" height="7" fill="var(--color-terminal-bright)"/>
    <rect x="21" y="57" width="13" height="7" fill="var(--color-terminal-bright)"/>
    <rect x="56" y="45" width="19" height="7" fill="var(--color-terminal-ok)"/>
    <rect x="56" y="57" width="13" height="7" fill="var(--color-terminal-ok)"/>
  </svg>`;

  /* El sello completo, con su leyenda alrededor, como el de un contador
     público. Solo lo que es cierto: nombre y profesión, nada de cédula. El
     círculo arranca 65.5° antes de las doce para que «ISRAEL CASTRO»
     quede centrado arriba (135 de arco: 13 letras de 10.39). */
  const ICONO_B_GRANDE = `<svg viewBox="0 0 180 180" aria-hidden="true">
    <rect width="180" height="180" fill="var(--color-bg)"/>
    <circle cx="90" cy="90" r="76" fill="var(--color-terminal-bg)"/>
    <path id="lg-anillo-sello" d="M36.31,65.53 A59,59 0 1,1 143.69,114.47 A59,59 0 1,1 36.31,65.53" fill="none"/>
    <text font-family="JetBrains Mono Variable, monospace" font-size="10.4" font-weight="600" letter-spacing="4.15" fill="var(--color-terminal-ink)">
      <textPath href="#lg-anillo-sello">ISRAEL CASTRO · CONTADOR PÚBLICO · </textPath>
    </text>
    <rect x="61" y="68" width="58" height="7.5" fill="var(--color-terminal-bright)"/>
    <rect x="86.25" y="68" width="7.5" height="41" fill="var(--color-terminal-bright)"/>
    <rect x="64" y="83" width="18" height="6.5" fill="var(--color-terminal-bright)"/>
    <rect x="64" y="94" width="12.5" height="6.5" fill="var(--color-terminal-bright)"/>
    <rect x="98" y="83" width="18" height="6.5" fill="var(--color-terminal-ok)"/>
    <rect x="98" y="94" width="12.5" height="6.5" fill="var(--color-terminal-ok)"/>
  </svg>`;

  /* El abono es el cursor: del lado de la IA es donde se escribe. */
  const ICONO_C = `<svg viewBox="0 0 96 96" aria-hidden="true">
    <rect width="96" height="96" rx="18" fill="var(--color-terminal-bg)"/>
    <rect x="14" y="26" width="68" height="9" fill="var(--color-terminal-bright)"/>
    <rect x="43.5" y="26" width="9" height="44" fill="var(--color-terminal-bright)"/>
    <rect x="16" y="44" width="22" height="8" fill="var(--color-terminal-bright)"/>
    <rect x="16" y="57" width="15" height="8" fill="var(--color-terminal-bright)"/>
    <rect class="lg-ico-cursor" x="58" y="44" width="15" height="26" fill="var(--color-terminal-ok)"/>
  </svg>`;

  const LOGOS = {
    contrapartida: {
      nombre: "Contrapartida",
      html: contrapartida(false),
      htmlGrande: contrapartida(true),
      aria: "soycontador.ai, inicio",
      icono: ICONO_A,
      iconoGrande: ICONO_A,
      notas:
        "Una línea: la raya de la cuenta T cubre el nombre y el asta separa el cargo (soycontador, tinta) del abono (.ai, verde). Space Grotesk 700 y JetBrains Mono 700, como el logotipo actual. Cambia de mundo solo con los tokens (--color-ink y --color-accent), sin reglas extra. El aria-label actual sirve tal cual.",
    },
    firma: {
      nombre: "Firma",
      html: firma(true),
      htmlCompacto: firma(false),
      aria: "Israel Castro, soycontador.ai, inicio",
      icono: ICONO_B,
      iconoGrande: ICONO_B_GRANDE,
      notas:
        "El enlace TIENE que cambiar su aria-label a 'Israel Castro, soycontador.ai, inicio': con el actual, el nombre accesible ya no contendría el texto visible (WCAG 2.5.3, la misma trampa que VideoFacade). El descriptor (filete y dominio) se oculta solo por debajo de 1024 px desde logos.css: medido en la cabecera real, ahí ya no cabe junto al menú y el botón (desbordaba 98 px a 390 y 73 a 881). El mismo html sirve en todos los anchos. El disco del sello pasa al cromo de la terminal bajo un ancestro [data-mundo='noche'] o .noche; sin él se pierde el disco pero la T sigue legible.",
    },
    prompt: {
      nombre: "Prompt",
      html: prompt(true),
      htmlSinPestana: prompt(false),
      aria: "soycontador.ai, inicio",
      icono: ICONO_C,
      iconoGrande: ICONO_C,
      notas:
        "Va en su pestaña de terminal por defecto (fondo terminal-bg, solo tokens de la familia terminal, así que no depende del mundo); en la noche la pestaña pasa al cromo con [data-mundo='noche'] o .noche. El tecleo corre una vez al montar: en un sitio de varias páginas hay que llamar LOGOS.unaVezPorSesion() para que no se repita a cada clic. htmlSinPestana es la versión desnuda.",
    },
  };

  /* El tecleo y las demás entradas solo tienen sentido la primera vez. El
     sitio es de varias páginas: sin esto la cabecera se movería en cada
     navegación. Con el almacenamiento bloqueado, se anima siempre. */
  Object.defineProperty(LOGOS, "unaVezPorSesion", {
    enumerable: false,
    value(raiz = document.documentElement) {
      try {
        if (sessionStorage.getItem("lg-visto")) raiz.classList.add("lg-quieto");
        else sessionStorage.setItem("lg-visto", "1");
      } catch (e) {
        /* sin almacenamiento: se anima siempre, que tampoco rompe nada */
      }
    },
  });

  window.LOGOS = LOGOS;
})();
