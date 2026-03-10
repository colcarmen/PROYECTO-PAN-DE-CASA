---
name: Explicar Código (Modo Estudiante)
description: Skill para reescribir o actualizar archivos de código agregando comentarios didácticos en español, ideales para un estudiante de 2do semestre de programación.
---

# Skill: Explicar Código (Modo Estudiante)

Este skill se enfoca en hacer que cualquier código HTML, CSS, JavaScript o de otro lenguaje sea completamente entendible para un estudiante de programación de segundo semestre. Su objetivo es educar, enseñando las buenas prácticas y explicando el "por qué" y el "cómo" detrás de la lógica del código.

## Cuándo ejecutar este skill (TRIGGER)

- Cuando el usuario solicite explícitamente: "explica el código", "pon comentarios al código", "no entiendo esto", etc.
- Automáticamente cuando generes o modifiques un bloque de código complejo (funciones largas, lógica de estado, interacciones complejas con el DOM).
- Si el usuario te indica que está estudiando un código específico.

## Procedimiento

1. **Lectura y Análisis:**
   - Usa `view_file` para revisar el archivo o fragmento de código que el usuario está viendo.
   - Identifica los bloques lógicos clave: variables importantes, funciones, bucles, condicionales y peticiones.

2. **Inyección de Comentarios Didácticos:**
   - Usa `replace_file_content` o `multi_replace_file_content` para inyectar los comentarios directamente en el código.
   - **Reglas de los comentarios:**
     * Deben estar en **español latino claro y sencillo**.
     * Deben explicar **qué** hace la línea/bloque y **por qué** es necesario.
     * Evita jerga excesivamente técnica sin explicación. (Ej. en vez de "Resuelve la Promesa", usa "Espera a que los datos terminen de cargar de la base de datos (resolución de promesa)").
     * En HTML: Explica el propósito de las etiquetas semánticas y agrupaciones (`<div>`, `<section>`, etc.).
     * En CSS: Explica por qué se usan ciertas propiedades (ej. `display: flex` para alinear elementos).
     * En JS: Comenta pasos de algoritmos, uso de arrays/objetos, funciones de flecha y manipulación del DOM.

3. **Explicación Resumida:**
   - Una vez comentados los archivos, responde al usuario con un resumen de los conceptos clave utilizados en ese archivo, actuando como un profesor tutor amable.
