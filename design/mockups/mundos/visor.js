/*
 * visor.js: la barrita de revisión de los prototipos (no es parte del diseño).
 * Cambia de dirección conservando la posición del scroll, y si existen las
 * alternativas de logotipo (design/mockups/logos/), deja probarlas en la
 * cabecera real. Con ?limpio en la URL no aparece (para capturas).
 */
(() => {
  if (/[?&]limpio\b/.test(location.search)) return;
  const DIRS = [
    ["g-hojas.html", "G · Hojas"],
    ["h-portal.html", "H · Portal"],
    ["i-jornada.html", "I · Jornada"],
  ];
  const aqui = location.pathname.split("/").pop();
  const css = `
    .visor{position:fixed;left:12px;bottom:12px;z-index:50;display:flex;flex-wrap:wrap;align-items:center;gap:4px;
      max-width:calc(100vw - 24px);padding:5px;border-radius:999px;background:color-mix(in oklab, var(--color-terminal-bg) 88%, transparent);
      -webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 30px -12px rgb(0 0 0 / .5);
      font:500 11px/1 "JetBrains Mono Variable",ui-monospace,monospace;letter-spacing:.04em}
    .visor a,.visor button{color:var(--color-terminal-ink);text-decoration:none;padding:7px 10px;border-radius:999px;border:0;background:none;font:inherit;cursor:pointer}
    .visor a:hover,.visor button:hover{color:var(--color-terminal-bright)}
    .visor [aria-current],.visor [aria-pressed="true"]{background:var(--color-terminal-ok);color:var(--color-terminal-bg)}
    .visor .sep{width:1px;height:16px;background:var(--noche-line);margin:0 2px}
    .visor .cerrar{padding:7px 9px}
    .visor.min > :not(.abrir){display:none}
    .visor:not(.min) .abrir{display:none}
    @media (max-width:640px){.visor .logo-btn{display:none}}`;
  const st = document.createElement("style");
  st.textContent = css;
  document.head.append(st);

  const nav = document.createElement("nav");
  nav.className = "visor";
  nav.setAttribute("aria-label", "Revisión de prototipos");
  for (const [archivo, nombre] of DIRS) {
    const a = document.createElement("a");
    a.href = archivo;
    a.textContent = nombre;
    if (archivo === aqui) a.setAttribute("aria-current", "page");
    a.addEventListener("click", (e) => {
      e.preventDefault();
      // Misma altura relativa en la otra dirección: se compara el mismo tramo.
      const rel = scrollY / (document.documentElement.scrollHeight - innerHeight || 1);
      location.href = `${archivo}#rel=${rel.toFixed(4)}`;
    });
    nav.append(a);
  }
  const idx = document.createElement("a");
  idx.href = "index.html";
  idx.textContent = "índice";
  nav.append(idx);

  const cerrar = document.createElement("button");
  cerrar.className = "cerrar";
  cerrar.type = "button";
  cerrar.textContent = "×";
  cerrar.title = "Esconder";
  cerrar.addEventListener("click", () => nav.classList.add("min"));
  nav.append(cerrar);
  const abrir = document.createElement("button");
  abrir.className = "abrir";
  abrir.type = "button";
  abrir.textContent = "ronda 3";
  abrir.addEventListener("click", () => nav.classList.remove("min"));
  nav.append(abrir);
  document.body.append(nav);

  // Llegar a la misma altura relativa desde otra dirección.
  const m = location.hash.match(/rel=([\d.]+)/);
  if (m) {
    addEventListener("load", () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      scrollTo({ top: Number(m[1]) * h, behavior: "instant" });
      history.replaceState(null, "", location.pathname + location.search);
    });
  }

  // Las alternativas de logotipo, si ya existen y si todavía no hay uno
  // elegido (el generador marca html[data-logo] cuando ya se decidió).
  window.Visor = { nav, antesDe: cerrar };
  if (document.documentElement.dataset.logo) return;
  const logoCss = document.createElement("link");
  logoCss.rel = "stylesheet";
  logoCss.href = "logos/logos.css";
  const logoJs = document.createElement("script");
  logoJs.src = "logos/logos.js";
  logoJs.onload = () => {
    const LOGOS = window.LOGOS;
    const destino = document.querySelector(".site-header .site-logo");
    if (!LOGOS || !destino) return;
    document.head.append(logoCss);
    const original = destino.innerHTML;
    const sep = document.createElement("span");
    sep.className = "sep logo-btn";
    nav.insertBefore(sep, cerrar);
    const opciones = [["actual", null], ...Object.keys(LOGOS).map((k) => [k, LOGOS[k]])];
    const botones = [];
    for (const [clave, logo] of opciones) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "logo-btn";
      b.textContent = clave === "actual" ? "logo actual" : clave;
      b.setAttribute("aria-pressed", String(clave === "actual"));
      b.addEventListener("click", () => {
        destino.innerHTML = logo ? logo.html : original;
        destino.dataset.logo = clave;
        botones.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      });
      botones.push(b);
      nav.insertBefore(b, cerrar);
    }
  };
  logoJs.onerror = () => {};
  document.body.append(logoJs);
})();
