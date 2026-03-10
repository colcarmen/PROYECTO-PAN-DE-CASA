---
name: Validar HTML
description: Herramienta para revisar y validar la correcta estructura y sintaxis de los archivos HTML del proyecto.
---

# Skill: Validar HTML

Este skill te permite validar automáticamente los archivos HTML de este proyecto para asegurarte de que estén bien formados, no tengan etiquetas sin cerrar y sigan las mejores prácticas.

## Cuándo ejecutar este skill (TRIGGER AUTOMÁTICO)

Este skill debe ejecutarse de forma **automática** y **proactiva** siempre que:
- El usuario abra, cargue o modifique un archivo `.html`.
- Estés trabajando en una tarea que involucre escribir o alterar código HTML en el proyecto.

NO esperes a que el usuario te lo pida explícitamente. Si ves un archivo HTML abierto o recién modificado, aplica estos pasos inmediatamente:

1. **Ejecutar el validador estático:**
   Usa la herramienta `npx htmlhint` ejecutando el siguiente comando en la terminal (usando la herramienta `run_command`):
   ```bash
   npx htmlhint "**/*.html"
   ```

2. **Analizar los resultados:**
   Revisa los errores o advertencias que arroje la consola. Si el comando indica que faltan paquetes, instálalos primero si es seguro o corre el comando con el flag `-y` (`npx -y htmlhint "**/*.html"`).

3. **Corregir los errores:**
   Para cada archivo que presente errores:
   - Usa `view_file` para revisar la línea del problema.
   - Aplica la corrección necesaria en el archivo utilizando `replace_file_content` o `multi_replace_file_content`.

4. **Confirmación:**
   Una vez corregidos los errores encontrados (o si no hubo ninguno desde el principio), confirma explícitamente al usuario que el HTML del sitio ha sido validado satisfactoriamente.
