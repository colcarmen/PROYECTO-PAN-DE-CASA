---
name: Documentar Cambios Normativo (ISO/ITIL)
description: Skill para documentar cada cambio en el software basándose en ISO/IEC/IEEE 12207, ISO/IEC TR 90006 y Gestión de Cambios (ITIL/ISO 20000).
---

# Objetivo
Documentar y registrar cada cambio realizado en el software garantizando la trazabilidad, evaluación de impacto y cumplimiento de normativas internacionales de calidad, ciclo de vida y gestión de servicios TI.

# Normativas de Referencia Aplicadas
1. **ISO/IEC/IEEE 12207 (Procesos del Ciclo de Vida del Software):** Se asegura de que el cambio documente formalmente la fase de mantenimiento, las tareas realizadas y la trazabilidad del código.
2. **ISO/IEC TR 90006 (Ingeniería de software — Directrices para la aplicación de ISO 9001):** Garantiza que la documentación refleje el aseguramiento de la calidad y el cumplimiento de los requisitos de servicio TI afectados.
3. **Gestión de Cambios (ITIL e ISO/IEC 20000):** Provee un formato estandarizado para el control del cambio (RFC - Request For Change), definiendo claramente el riesgo, el impacto y un plan de contingencia (Rollback).

# Instrucciones de Ejecución
Cada vez que se invoque esta skill, debes analizar los últimos archivos modificados o el parche de diferencias (`git diff`) y realizar las siguientes acciones:

1. **Analizar el Cambio:**
   - Extrae el propósito principal del cambio (refactorización, corrección de errores, nueva característica).
   - Identifica todos los archivos y componentes afectados.

2. **Generar la Documentación Estandarizada:**
   Actualiza el archivo `docs/REGISTRO_CAMBIOS.md` (o el medio de registro que indique el usuario) añadiendo una nueva entrada con la siguiente plantilla estricta:

   ```markdown
   ## Informe de Cambio Normativo
   **Id de Cambio/Commit:** [Generar ID o usar hash de Git]
   **Fecha:** [YYYY-MM-DD]
   **Responsable:** [Nombre del Desarrollador/Agente]

   ### 1. Dimensionamiento del Cambio (ISO 12207 - Mantenimiento)
   - **Propósito y Categoría:** [Nueva funcionalidad | Corrección | Adaptación | Preventivo]
   - **Elementos Modificados:** 
     - [Archivo A]: [Breve razón de modificación]
     - [Archivo B]: [Breve razón de modificación]
   - **Descripción Técnica:** [Explicación detallada del cambio a nivel arquitectónico/código]

   ### 2. Aseguramiento de Calidad (ISO/IEC TR 90006)
   - **Requisito de Calidad Atendido:** [Ej: Eficiencia, Seguridad, Mantenibilidad, etc.]
   - **Criterios de Aceptación:** [Condiciones que el cambio debe satisfacer para darse por completado]

   ### 3. Control y Gestión del Cambio (ITIL / ISO 20000)
   - **Análisis de Riesgo:** [Bajo | Medio | Alto] - [Justificación]
   - **Evaluación de Impacto:** [Qué otros módulos o servicios podrían verse afectados]
   - **Plan de Pruebas (Validación):** [Pasos exactos para confirmar que el código funciona]
   - **Plan de Contingencia (Rollback):** [Cómo revertir el cambio de forma segura si algo falla en producción]
   ```

3. **Asistir en los Mensajes de Commit:**
   - Si el usuario tiene abierto el archivo `.git/COMMIT_EDITMSG`, redacta un mensaje de commit que resuma los puntos anteriores (Propósito, Impacto y Riesgo) para que la base de la norma quede plasmada directamente en el control de versiones.
