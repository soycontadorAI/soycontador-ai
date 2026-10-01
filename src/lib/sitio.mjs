/**
 * Lee src/lib/sitio-prompt.md y lo parte en lo que usan la página /sitio y el
 * PDF de guias/sitio-despacho/: el prompt principal, el prompt de la firma y
 * los 11 tips. Es .mjs y no .ts porque también lo importa el generador del PDF,
 * que corre en Node sin compilar.
 */

/**
 * El Markdown viene con saltos duros a ~100 caracteres (así se escribió para
 * leerse en el editor). En una caja angosta eso se vería cortado dos veces, así
 * que se vuelve a armar en párrafos y renglones de lista. Lo que sale de aquí
 * es lo que se ve, lo que se copia y lo que va al PDF.
 */
export function desenvolver(texto) {
  return texto
    .split(/\n{2,}/)
    .map((bloque) => {
      const renglones = [];
      for (const linea of bloque.split("\n")) {
        const item = /^(?:[-*]\s|\d+\.\s)/.test(linea);
        const continua = /^\s+\S/.test(linea);
        const previo = renglones.at(-1);
        if (previo === undefined || item) renglones.push(linea);
        else if (continua) renglones[renglones.length - 1] = `${previo} ${linea.trim()}`;
        else if (/[.:]$/.test(previo)) renglones.push(linea);
        else renglones[renglones.length - 1] = `${previo} ${linea.trim()}`;
      }
      return renglones.join("\n");
    })
    .join("\n\n");
}

/** Quita el marcado ligero de los tips (negritas) para el texto llano. */
const llano = (s) => s.replace(/\*\*(.+?)\*\*/g, "$1");

export function partes(md) {
  const bloques = [...md.matchAll(/```\n([\s\S]*?)\n```/g)].map((m) => m[1]);
  if (bloques.length < 2) throw new Error("sitio-prompt.md: faltan los dos bloques ``` (prompt y firma)");

  const desde = md.indexOf("## Los tips");
  if (desde < 0) throw new Error("sitio-prompt.md: falta la sección '## Los tips'");
  const tips = [];
  for (const linea of md.slice(desde).split("\n")) {
    const m = linea.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*(.*)$/);
    if (m) tips.push({ n: Number(m[1]), titulo: m[2].trim(), texto: m[3].trim() });
    else if (tips.length && /^\s+\S/.test(linea)) tips.at(-1).texto += ` ${linea.trim()}`;
  }
  if (tips.length !== 11) throw new Error(`sitio-prompt.md: se esperaban 11 tips y hay ${tips.length}`);

  return {
    prompt: desenvolver(bloques[0]),
    firma: desenvolver(bloques[1]),
    tips: tips.map((t) => ({ ...t, texto: llano(t.texto) })),
  };
}
