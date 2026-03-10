---
name: Validar ISO/IEC 25000 (SQuaRE)
description: Evaluador de calidad del producto de software (rendimiento, mantenibilidad, fiabilidad, seguridad y usabilidad).
---

# Skill: Validación ISO/IEC 25000 (SQuaRE)

Este skill se encarga de analizar el código frente a los criterios de calidad establecidos por la norma ISO/IEC 25000:
1. **Adecuación Funcional:** ¿El código hace lo que debe hacer correctamente?
2. **Eficiencia de Rendimiento:** ¿El código es óptimo y responde rápido?
3. **Mantenibilidad:** ¿Es fácil de leer, modular y modificar?
4. **Fiabilidad y Seguridad:** ¿Maneja errores y excepciones adecuadamente?

## Cuándo ejecutar este skill (TRIGGER)

- Cuando el usuario solicite explícitamente "validar ISO 25000" o "revisar calidad del software".
- Cuándo se haya finalizado un módulo o funcionalidad de tamaño medio/grande.

## Procedimiento

1. **Revisión de Mantenibilidad:**
   - Revisa si la arquitectura general del proyecto está acoplada o si sigue principios SOLID.
   - Ejecuta linters estáticos (eslint, stylelint) para verificar complejidad ciclomática.

2. **Revisión de Rendimiento (Eficiencia):**
   - Evalúa el uso de recursos, bucles pesados, renderizados innecesarios en la interfaz y tamaños de assets.

3. **Revisión de Fiabilidad:**
   - Comprueba si existen bloques `try/catch` para peticiones de red y operaciones filesystem.
   - Identifica funciones sin retornos consistentes.

4. **Reporte:**
   - Presenta al usuario un reporte detallado en el formato de la norma con los hallazgos y correcciones propuestas de cada pilar evaluado.
