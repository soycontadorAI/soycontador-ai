/*
 * Arma los tres prototipos de /empieza (2026-10-13):
 *   a-hojas.html    mundos día y noche con la pila de hojas de la home
 *   b-sesion.html   una sesión de Claude que avanza con el scroll
 *   c-lema.html     video primero + frase que se enciende palabra por palabra
 *
 * La cabecera y el pie salen del build real (.vercel/output/static/empieza),
 * y sitio.css es el CSS real del sitio. Uso: pnpm build && node design/mockups/empieza/armar.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const build = readFileSync(join(aqui, "../../../.vercel/output/static/empieza/index.html"), "utf8");
const cabecera = build.match(/<header[\s\S]*?<\/header>/)[0].replace(/ data-astro-cid-\w+/g, "")
  .replace(/<ul class="site-links">[\s\S]*?<\/ul>/, '<ul class="site-links"><li><a href="#para-quien">Para quién</a></li><li><a href="#las-dos-horas">Las dos horas</a></li><li><a href="#necesitas">Lo que necesitas</a></li><li><a href="#faq">Preguntas</a></li></ul>')
  .replace(/href="https:\/\/nas\.com[^"]*"/, 'href="#apartar"');
const pie = build.match(/<footer[\s\S]*?<\/footer>/)[0].replace(/ data-astro-cid-\w+/g, "");

/* Los <style> en línea del build (cabecera, pie, FAQ): sin los atributos de alcance de Astro. */
const estilos = [...build.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1].replace(/\[data-astro-cid-[\w-]+\]/g, "")).join("\n");

const FOTO = "../../../public/assets/israel-saco-invita.webp";

/* ---------- Copy propuesto (compartido por las tres) ---------- */
const ENTREGABLES = [
  ["Un proyecto de Claude configurado para tu despacho", "Con tus instrucciones, los regímenes que atiendes y tus formatos de entrega. Y sin un solo dato que no deba vivir ahí."],
  ["Un prompt que te contesta como contador y cita el fundamento", "Probado en vivo con una duda fiscal tuya. Con el renglón que le exige el artículo y que le hace decir cuando no lo tiene."],
  ["Tu primera tarea operativa resuelta", "Un lote de XML convertido en tabla y revisado: totales, duplicados, el CFDI que no cuadra. Con datos ficticios que te llevas para practicar."],
];
const BLOQUES = [
  ["Qué es y qué no", "Predice, no piensa. Por qué resume una novela entera y no sabe que tu cliente es RESICO. Por qué contesta como blog.", "La expectativa correcta"],
  ["Cómo se le pide", "La misma consulta fiscal, mal y bien: rol, contexto, instrucción, formato. Se agrega el renglón que exige el fundamento. Cada quien lo prueba con una duda propia.", "Tu primer prompt que cita artículo"],
  ["Tu proyecto", "Se crea el proyecto de Claude del despacho. Qué se guarda ahí y qué nunca: los tres niveles, del chat público al canal controlado.", "El proyecto configurado"],
  ["La primera tarea", "Lote de XML ficticios, tabla en Excel, revisión. Es la conciliación más simple que existe, y es la que Daniel hoy hace en minutos.", "La tarea hecha y el prompt para repetirla"],
  ["Qué sigue", "Qué puedes hacer con esto la semana que entra y cómo seguir si quieres ir más a fondo.", "El mapa"],
];
const PERFILES = [
  ["No la has usado", "Te da desconfianza o sientes que no tienes tiempo de aprenderla. Aquí no hay nada que saber antes: empezamos en cero."],
  ["Probaste ChatGPT y te contestó como blog", "Respuestas genéricas que no sirven para un caso real. No es la herramienta: es cómo se le pide. Eso se arregla en los primeros 30 minutos."],
  ["Leíste el libro y no te has atrevido", "Ya entiendes qué es y qué no. Te falta sentarte a hacerlo con alguien al lado. Eso es este taller."],
];
const INCLUYE = ["Las 2 horas en vivo por Zoom, en grupo de 25", "La grabación, disponible 30 días", "El lote de XML ficticios y los prompts del taller, para repetirlo en casa", "La lista de verificación de qué nunca se sube a un chat", "La guía de 5 prompts para auditar XML con Claude"];

/* ---------- Piezas ---------- */
const hero = ({ video = false } = {}) => `
<section class="hero">
  <div class="container-default hero-grid">
    <div>
      <p class="folio">TALLER EN VIVO · <b>SÁBADO 17 DE OCTUBRE</b> · 11:00 · 2 HORAS</p>
      <h1 class="titulo-xl">Empieza aquí: <span class="hl">tu primer día con Claude</span></h1>
      <p class="hero-headline">Sales con tres cosas hechas, no con apuntes.</p>
      <p class="hero-gancho">¿Ni la has abierto, o la probaste y te contestó como blog? <span class="tenue">En dos horas, en vivo y con tus propios casos, dejas de mirarla desde afuera.</span></p>
      <p class="precio"><b>$697 MXN</b><span>pago único · 2 horas en vivo · cupo de 25</span></p>
      <div class="acciones"><a class="btn btn-primary" href="#apartar">Apartar mi lugar</a><a class="btn btn-ghost" href="#las-dos-horas">Ver las dos horas</a></div>
    </div>
    ${video ? `<aside aria-label="Video">${videoPh()}</aside>` : `<aside class="entregables" aria-labelledby="ent">
      ${videoPh()}
      <p class="folio" id="ent">CON QUÉ <b>SALES</b></p>
      <ol class="palomas">${ENTREGABLES.map(([t, x], i) => `<li class="p" style="--i:${i}"><span class="e-num">${String(i + 1).padStart(2, "0")}</span><span><b>${t}</b><span class="e-texto">${x}</span></span></li>`).join("")}</ol>
    </aside>`}
  </div>
</section>`;

const videoPh = () => `<div class="video-ph" role="img" aria-label="Video: por qué tomar el taller (pendiente de grabar)"><span class="play"></span><span class="cinta"><b>VIDEO</b> · por qué tomar el taller</span></div>`;

const paraQuien = () => `
<section id="para-quien"><div class="container-default">
  <div class="sec-head"><h2 class="folio">PARA <b>QUIÉN</b> ES</h2></div>
  <div class="perfiles">${PERFILES.map(([t, x], i) => `<article class="perfil" data-reveal style="--reveal-delay:${i * 0.08}s"><h3>${t}</h3><p>${x}</p></article>`).join("")}</div>
  <p class="no-es" data-reveal>Y para quién no: si ya usas proyectos de Claude y quieres construir con Claude Code, este taller se te queda corto. <a href="#faq">Escríbeme y te digo por dónde seguir.</a></p>
</div></section>`;

const dosHoras = () => `
<section id="las-dos-horas"><div class="container-default">
  <div class="sec-head"><h2 class="folio">LAS <b>DOS HORAS</b>, EN CINCO BLOQUES</h2></div>
  <p class="intro" data-reveal>Ritmo de taller, no de plática: cada bloque termina con algo hecho en tu pantalla. El orden es este; los tiempos se ajustan al grupo. Los datos son ficticios y te los llevas.</p>
  <ol class="bloques">${BLOQUES.map(([t, x, s], i) => `<li class="bloque" data-reveal><span class="n">${String(i + 1).padStart(2, "0")}</span><div><h3>${t}</h3><p>${x}</p><p class="sale"><span class="folio">SALES CON</span> ${s}</p></div></li>`).join("")}</ol>
</div></section>`;

const necesitas = () => `
<section id="necesitas"><div class="container-narrow">
  <div class="sec-head"><h2 class="folio">LO QUE <b>NECESITAS</b></h2></div>
  <div class="necesitas" data-reveal>
    <p><b>Una cuenta de Claude Pro.</b> Cuesta aparte: <span class="precio-usd">US$20 al mes</span> (aprox. $400 MXN), y es la misma que vas a usar el lunes. Si no la tienes, en el correo de confirmación te digo cómo sacarla en cinco minutos, y los primeros minutos del taller son para que todos la tengan abierta antes de empezar. <span class="nota-fecha">// precio de claude.com/pricing, verificado el 2026-10-13</span></p>
    <p><b>Computadora, no celular.</b> Se trabaja en vivo, con archivos.</p>
    <p><b>Nada más.</b> Ni programación, ni IA, ni haber leído nada. Cero.</p>
  </div>
</div></section>`;

const prueba = () => `
<section><div class="container-narrow">
  <div class="sec-head"><h2 class="folio">ALGUIEN QUE <b>YA EMPEZÓ</b></h2></div>
  <figure class="prueba" data-reveal><blockquote>"Somos analfabetos en programación y aun así lo logramos."</blockquote>
  <p>Daniel Souza lleva solo su despacho en Mexicali. Hoy encuentra en minutos la diferencia entre el auxiliar de bancos y el estado de cuenta, que le tomaba horas. <a href="#">Su testimonio →</a></p></figure>
</div></section>`;

const autor = () => `
<section id="autor"><div class="container-default">
  <div class="sec-head"><h2 class="folio">QUIÉN <b>LO DA</b></h2></div>
  <div class="autor" data-reveal>
    <img src="${FOTO}" alt="Israel Castro" width="560" height="700" loading="lazy">
    <div class="quien">
      <p>Soy Israel Castro, contador público con 14 años de ejercicio y desarrollador de software. Empecé capturando pólizas y peleándome con el portal del SAT, igual que tú.</p>
      <p>Cada jueves resuelvo un problema de despacho en vivo en <a href="#">Jueves de ContadorIA</a>. Este taller es lo que le daría a alguien que apenas va a empezar.</p>
    </div>
  </div>
</div></section>`;

const apartar = () => `
<section id="apartar"><div class="container-default">
  <div class="sec-head"><h2 class="folio">CÓMO <b>APARTAR</b> TU LUGAR</h2></div>
  <article class="compra" data-reveal>
    <div class="izq"><p class="folio">SÁBADO 17 DE OCTUBRE · <b>11:00 A 13:00, HORA DEL CENTRO</b></p>
      <ul class="incluye">${INCLUYE.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <div class="der"><p class="folio">CUPO DE <b>25</b></p>
      <p class="precio"><b>$697 MXN</b><span>pago único, más tu cuenta de Claude Pro</span></p>
      <a class="btn btn-primary" href="#">Apartar mi lugar</a>
      <p class="garantia folio">// SI CANCELAS HASTA DOS DÍAS ANTES, TE DEVUELVO EL DINERO COMPLETO</p></div>
  </article>
</div></section>`;

const faq = () => `
<section id="faq"><div class="container-narrow">
  <div class="sec-head"><h2 class="folio">PREGUNTAS <b>DIRECTAS</b></h2></div>
  <div class="faq-mock">
    <details><summary>¿Necesito saber algo de IA o de programación?</summary><p>No. Cero. El taller empieza en qué es y qué no es la inteligencia artificial.</p></details>
    <details><summary>¿Por qué hace falta Claude Pro?</summary><p>El plan gratuito se topa con límites en una sesión intensa. Cuesta US$20 al mes (aprox. $400 MXN).</p></details>
    <details><summary>¿Esto es el curso Claude para Contadores?</summary><p>No: es el primer paso. (La respuesta completa queda en la FAQ real.)</p></details>
  </div>
</div></section>`;

const lema = () => `
<section class="lema" aria-label="Lo que vas a lograr"><div class="container-default">
  <p data-palabras>Sales con tres cosas hechas. No con apuntes. Con un proyecto, un prompt que cita el fundamento y tu primera tarea resuelta.</p>
</div></section>`;

/* B: la sesión. Cada paso enciende líneas del terminal. */
const PASOS = [
  { l: [["tu", "> Resume esta novela de 300 páginas."], ["ok", "✓ Listo en 12 segundos."], ["tu", "> ¿Mi cliente es RESICO?"], ["mal", "✗ No lo sé. Nadie me lo ha dicho."]] },
  { l: [["tu", "> Rol: contador en México. Contexto: persona física RESICO."], ["tu", "> Dime qué artículo lo respalda y, si no lo tienes, dilo."], ["ok", "✓ LISR art. 113-E. Fundamento citado."]] },
  { l: [["dim", "Proyecto: Despacho (ficticio)"], ["ok", "✓ Instrucciones y regímenes que atiendes"], ["ok", "✓ Formatos de entrega"], ["mal", "✗ Datos de clientes: nunca aquí"]] },
  { l: [["tu", "> Revisa este lote de XML."], ["ok", "✓ 48 CFDI leídos, tabla lista"], ["mal", "! 1 duplicado · 1 que no cuadra"]] },
  { l: [["dim", "Tu semana que entra:"], ["tu", "> mismo prompt, tus propios XML"], ["ok", "✓ Ya sabes por dónde seguir."]] },
];
const sesion = () => `
<section id="las-dos-horas" class="sesion" aria-label="Las dos horas"><div class="sesion-pegada"><div class="container-default">
  <div class="sesion-cabeza"><h2 class="folio">LAS <b>DOS HORAS</b>, EN CINCO BLOQUES</h2></div>
  <div class="sesion-grid">
    <ol class="pasos">${BLOQUES.map(([t, x, s], i) => `<li class="paso${i === 0 ? " on" : ""}" data-paso="${i}"><span class="n">${String(i + 1).padStart(2, "0")}</span><div><h3>${t}</h3><p>${x}</p><p class="sale"><span class="folio">SALES CON</span> ${s}</p></div></li>`).join("")}</ol>
    <div class="term" aria-hidden="true"><div class="term-barra"><i></i><i></i><i></i><span>claude · datos ficticios</span></div>
      <div class="term-cuerpo">${PASOS.map((p, i) => p.l.map(([k, t]) => `<span class="l ${k}" data-p="${i}">${t}</span>`).join("")).join("")}</div>
      <div class="progreso"><i></i></div></div>
  </div>
  <p class="intro" style="margin-top:1.2rem">Cada bloque termina con algo hecho en tu pantalla. El orden es este; los tiempos se ajustan al grupo.</p>
</div></div></section>`;

const SCRIPT_REVEAL = `<script>
document.documentElement.classList.add("js-reveal");
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.15 });
document.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
const pal = document.querySelector(".palomas");
if (pal) requestAnimationFrame(() => pal.classList.add("vivas"));
</script>`;

const SCRIPT_LEMA = `<script>
/* Cada palabra se enciende al cruzar la línea de lectura (66 % de la ventana). Un solo rAF, lee y luego escribe. */
const p = document.querySelector("[data-palabras]");
p.innerHTML = p.textContent.split(" ").map((w) => '<span class="w">' + w + "</span>").join(" ");
const ws = [...p.querySelectorAll(".w")];
let pidio = false;
const pinta = () => { pidio = false; const l = innerHeight * 0.66; const t = ws.map((w) => w.getBoundingClientRect().top < l); ws.forEach((w, i) => w.classList.toggle("on", t[i])); };
addEventListener("scroll", () => { if (!pidio) { pidio = true; requestAnimationFrame(pinta); } }, { passive: true });
pinta();
</script>`;

const SCRIPT_SESION = `<script>
const sec = document.querySelector(".sesion"), pasos = [...document.querySelectorAll(".paso")], ls = [...document.querySelectorAll(".l")], barra = document.querySelector(".progreso i");
let pidio = false, ult = -1;
const tick = () => {
  pidio = false;
  const r = sec.getBoundingClientRect(), total = r.height - innerHeight;
  const p = Math.min(1, Math.max(0, -r.top / total));
  const n = Math.min(pasos.length - 1, Math.floor(p * pasos.length));
  barra.style.setProperty("--p", p.toFixed(3));
  if (n === ult) return; ult = n;
  pasos.forEach((el, i) => el.classList.toggle("on", i === n));
  ls.forEach((el) => el.classList.toggle("on", +el.dataset.p <= n));
};
addEventListener("scroll", () => { if (!pidio) { pidio = true; requestAnimationFrame(tick); } }, { passive: true });
tick();
</script>`;

const pagina = (clave, etiqueta, cuerpo, extraHead = "", extraScripts = "") => `<!DOCTYPE html><html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#FBFAF7"><title>/empieza · ${etiqueta}</title>
<link rel="stylesheet" href="sitio.css"><style>${estilos}</style><link rel="stylesheet" href="empieza.css">${extraHead}</head><body>
${cabecera}
${cuerpo}
${pie}
<span class="etiqueta-variante">${etiqueta}</span>
${SCRIPT_REVEAL}${extraScripts}</body></html>`;

/* A: mundos. Día / noche / día / noche / día. */
writeFileSync(join(aqui, "a-hojas.html"), pagina("a", "A · Hojas (los mundos de la home)", `<main>
<div class="mundo" data-mundo="dia">${hero()}${paraQuien()}</div>
<div class="mundo" data-mundo="noche">${dosHoras()}${necesitas()}</div>
<div class="mundo" data-mundo="dia">${prueba()}${autor()}</div>
<div class="mundo" data-mundo="noche">${apartar()}</div>
<div class="mundo" data-mundo="dia">${faq()}</div>
</main>`, `<link rel="stylesheet" href="../mundos/comun.css"><link rel="stylesheet" href="../mundos/hojas.css">`, `<script defer src="../mundos/motor.js"></script><script defer src="../mundos/hojas.js"></script>`));

/* B: la sesión con scroll. */
writeFileSync(join(aqui, "b-sesion.html"), pagina("b", "B · Sesión en vivo (scroll)", `<main>${hero()}${paraQuien()}${sesion()}${necesitas()}${prueba()}${autor()}${apartar()}${faq()}</main>`, "", SCRIPT_SESION));

/* C: video primero + lema. */
const heroC = hero({ video: true });
const entregablesC = `<section><div class="container-default"><div class="sec-head"><h2 class="folio">CON QUÉ <b>SALES</b></h2></div>
<div class="entregables palomas" style="box-shadow:none"><ol>${ENTREGABLES.map(([t, x], i) => `<li class="p" style="--i:${i}"><span class="e-num">${String(i + 1).padStart(2, "0")}</span><span><b>${t}</b><span class="e-texto">${x}</span></span></li>`).join("")}</ol></div></div></section>`;
writeFileSync(join(aqui, "c-lema.html"), pagina("c", "C · Video primero + lema", `<main>${heroC}${lema()}${entregablesC}${paraQuien()}${dosHoras()}${necesitas()}${prueba()}${autor()}${apartar()}${faq()}</main>`, "", SCRIPT_LEMA));
console.log("listo: a-hojas.html, b-sesion.html, c-lema.html");
