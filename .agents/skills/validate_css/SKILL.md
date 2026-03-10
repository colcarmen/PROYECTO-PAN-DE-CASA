---
name: Validar CSS
description: Herramienta para revisar y validar la correcta estructura y estilos de los archivos CSS del proyecto.
---

# Skill: Validar CSS

Este skill te permite validar automáticamente los archivos CSS de este proyecto para asegurarte de que sigan convenciones estándar, no tengan reglas duplicadas o errores de sintaxis.

## Cuándo ejecutar este skill (TRIGGER AUTOMÁTICO)

Este skill debe ejecutarse de forma **automática** y **proactiva** siempre que:
- El usuario abra, cargue o modifique un archivo `.css`.
- Estés trabajando en una tarea que involucre escribir o alterar código CSS en el proyecto.

NO esperes a que el usuario te lo pida explícitamente. Si ves un archivo CSS abierto o recién modificado, aplica estos pasos inmediatamente:

1. **Ejecutar el validador estático:**
   Usa la herramienta `stylelint` ejecutando el siguiente comando en la terminal (usando la herramienta `run_command`):
   ```bash
   npx stylelint "**/*.css"
   ```

2. **Analizar los resultados:**
   Revisa los errores o advertencias que arroje la consola. Si el comando indica que faltan paquetes, instálalos ejecutando `npm install -D stylelint stylelint-config-standard` o permite temporalmente su ejecución con `npx -y stylelint "**/*.css"`.

3. **Corregir los errores:**
   Para cada archivo que presente errores:
   - Usa `view_file` para revisar la línea del problema.
   - Aplica la corrección necesaria en el archivo utilizando `replace_file_content` o `multi_replace_file_content`.

4. **Confirmación:**
   Una vez corregidos los errores encontrados (o si no hubo ninguno desde el principio), confirma explícitamente al usuario que el CSS del sitio ha sido validado satisfactoriamente.
