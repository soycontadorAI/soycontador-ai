/**
 * Testimonios en video de colegas que tomaron la capacitación.
 *
 * Cada entrada alimenta tres cosas desde un solo lugar: la sección de la home,
 * el nodo VideoObject del JSON-LD (con transcripción, para que buscadores y
 * LLMs indexen lo que se DICE y no solo el título) y llms-full.txt. Para
 * sumar un testimonio se agrega una entrada aquí y se sube su carátula a
 * `public/assets/`; la página no se toca.
 *
 * Reglas:
 * - Las citas son palabras del colega, limpias de muletillas pero sin
 *   reescribir. Si una frase no la dijo, no va entre comillas.
 * - Nombre, despacho y ciudad van completos: el testimonio vale porque se
 *   puede verificar. Quien lo da está de acuerdo en aparecer con su nombre.
 * - Del contacto se publica el sitio del despacho y, si el colega lo
 *   autorizó, su WhatsApp. El correo no: se cosecha de sitios ajenos y
 *   termina en listas de spam que él no pidió.
 */

export interface Testimonio {
  /** Identificador para anclas y para el @id del JSON-LD */
  slug: string;
  nombre: string;
  despacho: string;
  ciudad: string;
  /** Sitio del despacho: la salida para quien busca contador en su zona */
  sitio: string;
  /** WhatsApp del despacho en formato internacional sin espacios, solo si el
   *  colega autorizó publicarlo aquí. Opcional: no todos van a querer. */
  whatsapp?: string;
  /** Cómo se describe él, para presentarlo en una línea */
  perfil: string;
  videoId: string;
  /** Título tal como está publicado en YouTube */
  titulo: string;
  duracionISO: string;
  duracionTexto: string;
  fechaPublicacion: string;
  poster: string;
  /** Lo que creía antes: la objeción en sus palabras */
  antes: string;
  /** La cita central, en sus palabras */
  cita: string;
  /** Lo que cambió en su despacho, en tres o cuatro renglones */
  logros: readonly string[];
  /** Con qué cierra: su consejo a quien está donde él estaba */
  remate: string;
  /** Transcripción limpia del video completo, para el VideoObject */
  transcripcion: string;
}

export const TESTIMONIOS: readonly Testimonio[] = [
  {
    slug: "daniel-souza",
    nombre: "Daniel Souza Vázquez",
    despacho: "DSouza Consultores Fiscales",
    ciudad: "Mexicali, B.C.",
    sitio: "https://dsouzaconsultores.mx/",
    // Autorizado por Daniel vía Israel, 2026-09-19. Es el mismo que publica su sitio.
    whatsapp: "526862567293",
    perfil:
      "Lleva solo su despacho: asesoría fiscal y contabilidad para PyMEs y profesionistas de Baja California.",
    videoId: "xKSD3KxDNqM",
    titulo: "De Contador Cuadrado a IA: Ahorra Horas en Tu Despacho",
    duracionISO: "PT3M43S",
    duracionTexto: "4 minutos",
    fechaPublicacion: "2026-09-19",
    poster: "/assets/testimonio-daniel-souza.jpg",
    antes: "Creía que eso era cosa de jóvenes.",
    cita:
      "Yo siempre decía: no soy creativo, me falta verbo, no sé explicar. Clásico contador cuadrado. Poco a poco se han ido desbloqueando esas limitaciones que yo creía que tenía.",
    logros: [
      "Consultas que despachos medianos y grandes firmas no habían contestado a sus clientes, él las contesta. Y fundamentadas.",
      "La diferencia entre el auxiliar de bancos y el estado de cuenta, que le podía tomar horas, ahora la encuentra en minutos.",
      "Las presentaciones y los boletines del despacho ya salen en HTML y viven en su página web.",
      "Y un juego web para adivinar banderas, con pistas y comodines, para su nieto.",
    ],
    remate:
      "El primero es animarse. La limitación ya no está dada, es nada más las ganas de querer.",
    transcripcion:
      "Creía que eso era cosa de jóvenes, y los jóvenes son los que están interesados ahorita en esas cosas. Antes de empezar siempre decía: yo no soy creativo, me falta verbo, yo no sé explicar, porque estaba casado con que era muy técnico, con que no puedo, las cosas son así. Clásico contador cuadrado, ¿no? Para los que somos analfabetos en el sentido de programación, el poder utilizar Claude Code dentro de la misma aplicación de escritorio, sin irte a la terminal, también fue un avance. Yo los llamo los asistentes, para generalizar. Fue cuando sentí que uno empezaba a abandonar esas limitaciones. Poco a poco se han ido desbloqueando estas limitaciones, esas trabas que yo creía que tenía. Yo soy solo en el despacho. Aunque me dedico más a la asesoría fiscal, también llevo contabilidad. Algo que a mí me costaba a veces mucho trabajo era explicarme en el lenguaje de los empresarios, porque mis respuestas, cuando yo las elaboro, son muy técnicas. Consultas que a veces despachos medianos, despachos de las grandes firmas, no les habían dado respuesta a los clientes, las hemos podido contestar, y todo fundamentado. Tengo una contabilidad, pero mi auxiliar de bancos no me coincide con mi estado de cuenta bancario, y con un proyecto o un skill poder hacer esa conciliación y que me encuentre la diferencia, que a mí me podía tardar horas, y que me la encuentre en minutos, pues es una gran ventaja. A mi nieto le gusta mucho adivinar banderas. En base a esa inquietud dije: bueno, vamos a ir preguntando. Oye, quiero desarrollar una aplicación, dame los pasos. Y el resultado fue un juego web que nos permite, en sesiones de 10 rondas, jugar a adivinar banderas con pistas y con comodines, como le puse yo. Tanto las presentaciones como los boletines los estamos desarrollando en formato HTML, que en su momento empezamos a compartir primero como archivos únicos, después lo subimos a una página de GitHub, y ahorita ya las tenemos en nuestra página web. El que quiera aprender de todo esto: el primero es animarse. La limitación ya no está dada, es nada más las ganas de querer. Y ahora sigue, como dice el dicho, preguntando si hay algo también.",
  },
] as const;
