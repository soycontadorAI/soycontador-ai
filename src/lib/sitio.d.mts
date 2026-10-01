/** Tipos de src/lib/sitio.mjs (es .mjs porque también lo usa el generador del PDF). */
export interface Tip {
  n: number;
  titulo: string;
  texto: string;
}

export function desenvolver(texto: string): string;

export function partes(md: string): { prompt: string; firma: string; tips: Tip[] };
