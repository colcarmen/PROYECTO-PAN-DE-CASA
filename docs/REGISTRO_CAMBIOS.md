# Registro de Cambios (Change Log)

## Informe de Cambio Normativo
**Id de Cambio/Commit:** Pre-commit/Staged
**Fecha:** 2026-03-10
**Responsable:** Agente / Entorno Local (Aria)

### 1. Dimensionamiento del Cambio (ISO 12207 - Mantenimiento)
- **Propósito y Categoría:** Adaptación y Acciones Preventivas (Refactorización de Seguridad)
- **Elementos Modificados:** 
  - `README.md`: Creación de la documentación del proyecto detallando calidad normativa.
  - `admin/product-form.html`: Extracción de lógica JS a archivo independiente (Separation of Concerns).
  - `index.html`: Extracción de lógica JS a archivo independiente.
  - `js/admin-catalog.js`: Nuevo archivo aislando las responsabilidades administrativas del catálogo. Adopción de mitigación XSS.
  - `js/catalog.js`: Nuevo archivo aislando las interacciones del catálogo del cliente. Adopción de mitigación XSS.
  - `js/store.js`: Integración de validaciones `try/catch` para manejo robusto del API de Storage y nueva directiva `escapeHTML` previniendo XSS en capa global.
- **Descripción Técnica:** Se elimina el uso de JavaScript embebido ("inline scripts") dentro de los archivos HTML para cumplir con principios de mantenibilidad y facilitar la posterior inserción de Content Security Policies (CSP). Se añade resiliencia global gestionando excepciones de cuotas de `localStorage` con la que el ciclo de vida del estado centralizado (`store.js`) no colapse ante el usuario. Además, se aplican técnicas de escape HTML seguro para datos inyectados dinámicamente, asegurando la remediación de vulnerabilidades de Injection (CWE-79).

### 2. Aseguramiento de Calidad (ISO/IEC TR 90006)
- **Requisito de Calidad Atendido:** Mantenibilidad (aislamiento de código), Seguridad (Prevención XSS) y Fiabilidad/Resiliencia ante fallos del navegador local (ISO 25000/27001).
- **Criterios de Aceptación:**
  - Código HTML no debe contener bloques extensos de `<script>`.
  - Renderizado dinámico debe procesarse primero por `escapeHTML()`.
  - Inicialización y lectura del `Store` debe capturar errores y persistir ejecutable.

### 3. Control y Gestión del Cambio (ITIL / ISO 20000)
- **Análisis de Riesgo:** Bajo - Las reglas de negocio permanecen iguales; el cambio es estructural sobre la invocación del código y escape visual.
- **Evaluación de Impacto:** Afecta a nivel global la renderización de perfiles tanto de usuario final (`index.html`) como panel administrativo (`admin/product-form.html`).
- **Plan de Pruebas (Validación):** 
  1. Abrir la página principal, dar clic en "Agregar" un producto y validar el toast de feedback y subida de número del badge del carrito en memoria.
  2. Entrar a `admin/product-form.html`, crear un producto simulado, y verificar que no haya problemas de renderizado al cargarse.
  3. Ejecutar simulación de carga insegura probando títulos con elementos de inyección como: `<script>alert(1)</script>` para constatar su escape limpio.
- **Plan de Contingencia (Rollback):** Ejecución de `git restore --staged . && git checkout .` en caso de fallo crítico en pruebas iniciales antes de consolidar el Merge hacia ramas productivas (producción).
