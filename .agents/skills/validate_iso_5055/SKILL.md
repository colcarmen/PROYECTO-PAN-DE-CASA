---
name: Validar ISO 5055 (Calidad Estructural)
description: Medición estricta de la calidad estructural del código fuente basado en reglas CISQ.
---

# Skill: Validación ISO 5055 (Automated Source Code Quality Measures)

La norma ISO 5055 mide el riesgo de fallo del software basándose en reglas arquitectónicas y de codificación estrictas publicadas por CISQ (Consortium for Information & Software Quality).

## Cuándo ejecutar este skill (TRIGGER)

- A petición del usuario ("validar ISO 5055" o "medición de código CISQ").
- Como tarea final de refactorización masiva.

## Procedimiento

Analiza minuciosamente el código del proyecto basándote en las 4 dimensiones estructurales de ISO 5055:

1. **Seguridad (Security) a Nivel Código:**
   - Prevención estricta de inyección (SQLi, XSS). Validación obligatoria de entradas en cualquier formulario.
   - Manejo adecuado de la autenticación/autorización si existe.

2. **Fiabilidad (Reliability) a Nivel Código:**
   - Verificación de uso de recursos: liberación de memoria (cierres de eventos `removeEventListener`), no dejar promesas colgando sin captura de errores (`catch`).
   - Identificación de funciones que fallan silenciosamente.

3. **Eficiencia de Rendimiento (Performance) a Nivel Código:**
   - Análisis algorítmico: detección de llamadas repetitivas o costosas al DOM, reflows innecesarios o bucles O(N^2) ineficientes.

4. **Mantenibilidad (Maintainability) a Nivel Estructural:**
   - Evaluación arquitectónica estricta para asegurar que la lógica de negocio esté completamente separada de la capa de interfaz.
   - Erradicación de código "muerto" (variables/funciones declaradas y no utilizadas).

5. **Reporte y Corrección:**
   - Si detectas violaciones a la norma en cualquiera de las 4 métricas, arréglalas proactivamente o presenta el listado de refactorizaciones urgentes necesarias basadas en métricas (ej. reducir la complejidad ciclomática de x función).
