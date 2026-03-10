---
name: Validar ISO 9001:2015 (Gestión de Calidad)
description: Verificador de procesos de calidad, trazabilidad y documentación en el ciclo de vida del desarrollo.
---

# Skill: Validación ISO 9001:2015 (Gestión de Calidad)

ISO 9001 establece criterios para un sistema de gestión de la calidad. Aplicado al desarrollo, significa consistencia, revisión cruzada y documentación adecuada del código entregable.

## Cuándo ejecutar este skill (TRIGGER)

- Antes de realizar un Commit importante (como pre-commit hook).
- Cuando el usuario solicite "verificar documentación" o "hacer revisión de calidad ISO 9001".

## Procedimiento

1. **Revisión de Documentación (Control de la Información Documentada):**
   - Asegúrate de que el código añadido o modificado contenga comentarios explicando *el por qué* de la lógica compleja.
   - Verifica que el proyecto tenga un `README.md` y que haya sido actualizado según las nuevas funcionalidades.

2. **Control de Cambios y Trazabilidad:**
   - Verifica que todas las funciones exportadas o componentes tengan una estructura clara.
   - Cerciórate de que se hayan ejecutado los test o validadores unitarios (HTML/JS/CSS skills) antes de dar por completado un entregable.

3. **Reporte:**
   - Indica al usuario si faltan comentarios en el código o si algún proceso estructural ha sido omitido durante el desarrollo.
