---
name: Validar JS
description: Herramienta para revisar y validar sintaxis y buenas prácticas en archivos JavaScript del proyecto.
---

# Skill: Validar JavaScript

Este skill te permite validar automáticamente los archivos JavaScript de este proyecto para asegurarte de que estén libres de errores de sintaxis y sigan las mejores prácticas.

## Cuándo ejecutar este skill (TRIGGER AUTOMÁTICO)

Este skill debe ejecutarse de forma **automática** y **proactiva** siempre que:
- El usuario abra, cargue o modifique un archivo `.js`.
- Estés trabajando en una tarea que involucre escribir o alterar código JavaScript en el proyecto.

NO esperes a que el usuario te lo pida explícitamente. Si ves un archivo JavaScript abierto o recién modificado, aplica estos pasos inmediatamente:

1. **Ejecutar el validador estático:**
   Usa la herramienta `eslint` ejecutando el siguiente comando en la terminal (usando la herramienta `run_command`):
   ```bash
   npx eslint "**/*.js"
   ```

2. **Analizar los resultados:**
   Revisa los errores o advertencias que arroje la consola. Si el comando indica que faltan paquetes o configuraciones, ejecuta `npx -y eslint --init` de ser necesario, o simplemente corrige los errores de sintaxis reportados.

3. **Corregir los errores:**
   Para cada archivo que presente errores:
   - Usa `view_file` para revisar la línea del problema.
   - Aplica la corrección necesaria en el archivo utilizando `replace_file_content` o `multi_replace_file_content`.

4. **Confirmación:**
   Una vez corregidos los errores encontrados (o si no hubo ninguno desde el principio), confirma explícitamente al usuario que el JavaScript del sitio ha sido validado satisfactoriamente.
