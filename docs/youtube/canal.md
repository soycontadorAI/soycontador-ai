# El canal de YouTube como superficie de la marca personal

`@soycontadorAI` pasó de `@todoconta` a la marca personal el **2026-09-15** (ver
[`../arquitectura-de-marca.md`](../arquitectura-de-marca.md)), y ahí quedó
escrito que su estilo se alinea a soycontador.ai "a partir de las siguientes
ediciones". Este documento es esa alineación: qué dice el canal y a qué enlaza.

**Es un canal nuevo, no el heredado.** El de `@todoconta` (hoy **Cuentas
Claras**, +4,000 subs) resultó tener un avatar de trámites y burocracia, no de
contadores, así que el programa se abrió en un canal propio: 129 suscriptores
y 111 videos. La historia completa está en
[`../arquitectura-de-marca.md`](../arquitectura-de-marca.md). Se mide como lo
que es, un canal nuevo, y renombrarlo no cuesta nada.

**Avatar A**, como toda la superficie de YouTube: contador individual o de
despacho de 1 a 3, de 45 a 65 años, que compra por miedo a quedarse atrás. Al
socio de despacho se le cierra en LinkedIn, no aquí.

---

## Lo que estaba mal (revisión del 2026-09-23)

La personalización se quedó completa en la etapa de TodoConta:

| Qué | Estaba | Por qué está mal |
|---|---|---|
| Nombre | `TodoConta con Israel Castro` | Rompe la división: TodoConta vende software y tendrá su propio canal institucional. Este canal vende a Israel |
| Banner | Identidad de TodoConta (navy, azul, cian, logotipo "TodoConta.") | Es la marca hermana, no esta |
| Imán | `todoconta.com/flujos` (3 flujos) | El imán vigente es la guía de 5 prompts, y es el CTA de todos los episodios planeados en `../jueves/episodios.csv` |
| Boletín | `todoconta.com/entra` | Es la lista de la otra marca |
| LinkedIn | `linkedin.com/in/soyisracastro` | **Enlace muerto.** Se renombró a `in/soycontadorAI` el 2026-09-15. `soyisracastro` es el handle **parqueado** para el track de IA no fiscal |

El del LinkedIn es el más caro: manda al vacío a quien quiso verificarte.

---

## Nombre del canal

```
Israel Castro · IA para Contadores MX
```

37 de 50 caracteres. Es **el mismo nombre visible que Instagram**, y eso es
deliberado: con el handle ya armonizado en las cuatro superficies, que el
nombre también coincida es lo que hace que la marca se reconozca igual en
todas. "Israel Castro" es la entidad que el sitio posiciona (JSON-LD,
`sameAs`, `llms.txt`), así que el cruce entre sitio y canal funciona porque el
nombre es el mismo.

Sin "TodoConta": ese nombre es de la otra marca y de su canal institucional.

---

## Descripción

Las dos primeras líneas son lo único que se ve antes del "...más", así que ahí
va la promesa y no la biografía.

```
Inteligencia Artificial para Contadores en México 🇲🇽
Aprende a usar y construir herramientas con IA para la operativa de tu despacho, sin saber programar.

Soy Israel Castro, contador público y desarrollador de software. Construyo soluciones fiscales reales: descarga masiva del SAT, un asistente fiscal por WhatsApp y una API que otros sistemas consumen.

🔴 En vivo cada jueves 11:00 am (Centro de México) en Jueves de ContadorIA:

- Clasificar y conciliar CFDIs en segundos.
- Auditar un lote de XMLs antes de que lo audite el SAT.
- Cerrar el mes sin estrés y ganar horas operativas.

De colega a colega, en español claro y sin rodeos. Si llevas la contabilidad de varios clientes y quieres llevar tu despacho al siguiente nivel con IA, este canal es para ti.

🎁 Descarga gratis la guía: 5 prompts para auditar tus XMLs con Claude
👉 https://soycontador.ai/audita

🔔 Suscríbete y activa la campana para no perderte ninguna sesión en vivo.
```

Tres cambios respecto a la anterior, y ninguno es de estilo:

- **El imán es el de `/audita`**, no el de los 3 flujos. `/flujos` sigue en pie
  con su propia lista, pero no es el que se recomienda.
- **"Automatizar respuestas a requerimientos del SAT" sale de la lista.** Es lo
  único de las tres viñetas que no está respaldado por un episodio emitido ni
  planeado, y prometer en la descripción lo que el canal no entrega es la
  manera más barata de perder a alguien que llegó por eso.
- **El emoji queda funcional y dosificado** (🇲🇽 🔴 🎁 👉 🔔), que es la regla
  para esta superficie. Cero emoji es para LinkedIn y el banner.

---

## Enlaces

Cinco, en este orden. El primero es el que se pinta junto al nombre.

| # | Título | URL |
|---|---|---|
| 1 | Guía gratis: 5 prompts para auditar XMLs | `https://soycontador.ai/audita` |
| 2 | Jueves de ContadorIA | `https://soycontador.ai/jueves` |
| 3 | IA para Contadores (el ebook) | `https://soycontador.ai/ebook` |
| 4 | LinkedIn | `https://www.linkedin.com/in/soycontadorAI` |
| 5 | TodoConta (el software) | `https://todoconta.com` |

TodoConta se queda, pero de quinto y nombrado como lo que es: **el software**.
Esa es la división completa en un renglón. Los cuatro primeros son de esta
marca; el quinto es la hermana.

La fuente de las URLs de redes es `src/lib/site.ts` (`FOOTER_LINKS`). Si el
handle de YouTube se libera y cambia, se toca ahí y no aquí.

---

## Banner

`design/og/banner-youtube.html`, se renderiza con `pnpm og banner-youtube` y
sale a `design/salidas/banner-youtube.png`.

**El copy no se reescribió**: es el mismo del banner anterior, que ya estaba
validado. Lo que cambió es la identidad, no el mensaje.

Dos cosas que no se pueden aflojar al editarlo:

- **La caja segura es 1546×423 centrada** en los 2560×1440 del archivo.
  YouTube recorta distinto en TV, escritorio, tableta y teléfono, y ese
  rectángulo es lo único que se ve en todos. Fuera de ahí no va nada, ni el
  dominio. En la plantilla eso es `.seguro`, con 44px de respiro interno:
  a ras del borde, el primer render cortaba la J de "Jueves".
- **Sin retrato**, por la misma razón que el banner de LinkedIn: el avatar del
  canal ya trae su cara al lado, y un retrato aquí se recorta distinto en cada
  dispositivo.

---

## Qué falta

- Subir el banner y pegar nombre, descripción y los cinco enlaces.
- El avatar del canal sigue siendo la foto de la sudadera. Para Avatar A está
  bien y no urge; el saco es el registro de B (LinkedIn y despachos).
- Crear el canal de TodoConta, que es lo que libera a este de tener que hablar
  de software. El handle `@TodoConta` ya se liberó justo para eso.
- Decidir qué se hace con **Cuentas Claras**: son 4,000 personas alrededor de
  trámites y burocracia, que no es el avatar de ninguna de las dos marcas.
