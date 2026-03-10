---
name: Subir a GitHub
description: Skill para automatizar la creación de commits y subida de cambios aprobados a GitHub.
---

# Skill: Subir a GitHub (Auto-Commit & Push)

Este skill se encarga de crear un commit con un mensaje descriptivo y subir automáticamente los cambios a la rama principal (o la actual) del repositorio remoto en GitHub.

## Cuándo ejecutar este skill (TRIGGER)

Este skill debe ejecutarse de forma **proactiva** cuando:
- Has completado una tarea (crear una feature, arreglar un bug, validar y corregir código, etc.) y **el usuario aprueba** los cambios realizados.
- El usuario te pide explícitamente "sube esto", "guarda en github", "comitea los cambios" o comandos similares.

## Procedimiento

Una vez el usuario haya dado el "visto bueno" a las modificaciones, sigue estos pasos:

1. **Revisar estado del repositorio:**
   Usa la herramienta `run_command` para ejecutar `git status` y verificar qué archivos han sido modificados.

2. **Preparar archivos (Staging):**
   Ejecuta `git add .` para agregar todos los cambios al área de preparación (staging).

3. **Crear el Commit:**
   Genera un mensaje de commit claro y descriptivo que resuma lo que hiciste.
   Ejecuta: `git commit -m "feat/fix/docs/chore: <Descripción breve de los cambios>"`

4. **Subir al repositorio remoto (Push):**
   Ejecuta: `git push` o `git push origin HEAD` (dependiendo de la configuración del usuario).
   *Nota: Si la consola arroja un error de autenticación o de que no existe el branch remoto, notifica al usuario inmediatamente.*

5. **Confirmación:**
   Informa al usuario que los cambios se subieron exitosamente a GitHub indicando el mensaje de commit utilizado.
