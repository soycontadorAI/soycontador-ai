# Meta: categoría del conjunto de datos de soycontador.ai

Meta clasificó el dominio soycontador.ai como **Servicio financiero** y aplicó
la configuración básica (core setup) al pixel `1407516788160351`: no recibe la
ruta de la URL ni parámetros personalizados.

- Primera revisión pedida: 16 oct 2026, 10:52 (pendiente al 18 oct).
- Si la rechazan, se puede pedir otra 30 días después de la decisión.
- Ruta: Administrador de eventos → Resumen → Administrar categorías →
  soycontador.ai → Ver detalles → Solicitar revisión.
- Texto de apelación y seguimiento: doc "Meta: apelación de categoría de
  soycontador.ai" en Claude.

## Qué probablemente lo detonó

"fiscal" (96 menciones), "conciliación bancaria", "estado de cuenta" y la
descripción por defecto "automatizar su operación fiscal". En el JSON-LD la
capacitación estaba como `ProfessionalService`.

## Cambios hechos (2026-10-18)

- Título y descripción por defecto (home, WebSite, llms-full.txt) abren con
  "Cursos y talleres de IA para contadores".
- `capacitacionService()` pasa de `ProfessionalService` a `Service` con
  `category: "Educación y capacitación profesional"`.
- `knowsAbout` suma "capacitación en IA para contadores" y "cursos de IA".
- /capacitacion: "trabajo fiscal" → "trabajo contable" en la descripción.

## Regla para copy nuevo

En título, descripción y metadatos, lo primero es lo que se vende
(cursos, talleres, capacitación). Los temas fiscales y bancarios van como
contenido de las clases, no como servicio.

## Mientras siga la restricción

- Optimizar campañas con eventos estándar (`ViewContent`, `InitiateCheckout`),
  que sí llegan.
- No usar conversiones personalizadas basadas en URL (por ejemplo /gracias):
  Meta no ve la ruta.
