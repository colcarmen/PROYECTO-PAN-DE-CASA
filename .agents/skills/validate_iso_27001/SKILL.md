---
name: Validar ISO/IEC 27001 (Seguridad)
description: Auditoría de seguridad de la información para el proyecto, enfocada en riesgos, secretos y vulnerabilidades.
---

# Skill: Validación ISO/IEC 27001 (Seguridad de la Información)

Este skill alinea el desarrollo de software con las mejores prácticas de gestión de seguridad de la información.

## Cuándo ejecutar este skill (TRIGGER)

- Automáticamente cuando se modifiquen configuraciones, bases de datos (localStorage en cliente), autenticación o manejo de datos de usuario.
- A petición explícita del usuario: "Auditar seguridad", "Ejecutar ISO 27001".

## Procedimiento

1. **Auditoría de Dependencias:**
   - Ejecuta `npm audit` usando `run_command` para detectar vulnerabilidades conocidas en paquetes de terceros (si el proyecto usa npm).

2. **Escaneo de Secretos (Credentials Leakage):**
   - Rastrea si existen tokens de API, contraseñas, IPs, o llaves privadas puestas directamente en el código (`grep_search` o una revisión estricta en los archivos modificados).

3. **Revisión de Prácticas de Acceso y Datos:**
   - Analiza si los datos del usuario (en LocalStorage, Cookies, etc.) están expuestos indebidamente (XSS) u obteniendo información sensible sin ser necesaria.

4. **Remediaciones y Reporte:**
   - Por cada hallazgo de seguridad, aplica el parche usando las herramientas de modificación de código.
   - Genera una "Alerta de Seguridad ISO 27001" al usuario detallando el riesgo mitigado.
