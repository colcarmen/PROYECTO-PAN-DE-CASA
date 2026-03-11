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

---

## Informe de Cambio Normativo
**Id de Cambio/Commit:** Doc-Norm-20260310-02
**Fecha:** 2026-03-10
**Responsable:** Agente AI (Antigravity)

### 1. Dimensionamiento del Cambio (ISO 12207 - Mantenimiento)
- **Propósito y Categoría:** Adaptación, Acción Preventiva y Documentación Didáctica (Validación de Estándares).
- **Elementos Modificados:** 
  - `admin/dashboard.html`: Validación de sintaxis HTML e inclusión de comentarios pedagógicos.
  - `admin/orders.html`: Validación de sintaxis HTML e inclusión de comentarios pedagógicos.
  - `admin/product-form.html`: Refinamiento estructural y comentarios didácticos.
  - `css/index.css`: Corrección de reglas CSS (Stylelint) y anotaciones sobre diseño responsivo y tipografía.
  - `index.html`: Optimización de carga de scripts (CRP) y metadatos SEO.
  - `js/admin-catalog.js`: Validación de lógica administrativa (ESLint) y comentarios explicativos.
- **Descripción Técnica:** Se ejecutaron herramientas de análisis estático (Linters) para asegurar la integridad de los lenguajes cliente. Se reestructuró la carga de scripts en `index.html` desplazándolos al final del `body` para mejorar el tiempo de interactividad. Además, se aplicó una capa de documentación interna en español orientada a facilitar la comprensión del código para perfiles en formación.

### 2. Aseguramiento de Calidad (ISO/IEC TR 90006)
- **Requisito de Calidad Atendido:** Mantenibilidad (Legibilidad del código), Usabilidad (Optimización SEO) y Portabilidad (Cumplimiento de Estándares W3C/ECMAScript).
- **Criterios de Aceptación:** 
  - Ausencia de errores críticos en validadores automáticos.
  - Los scripts externos deben cargarse después del renderizado del DOM principal.
  - Los archivos clave deben poseer comentarios descriptivos de sus secciones principales.

### 3. Control y Gestión del Cambio (ITIL / ISO 20000)
- **Análisis de Riesgo:** Muy Bajo - Se preserva la lógica de negocio; los cambios son estructurales sobre comentarios y posición de recursos.
- **Evaluación de Impacto:** Mejora ligera en el rendimiento percibido y gran impacto positivo en la mantenibilidad por parte de terceros.
- **Plan de Pruebas (Validación):** 
  1. Ejecución de `npm run lint` (si está configurado) o validación manual de sintaxis.
  2. Verificar que las funcionalidades de administración (dashboard y órdenes) cargan sin errores en consola.
  3. Comprobar que el SEO metatag en `index.html` es visible para agentes de rastreo.
- **Plan de Contingencia (Rollback):** Ejecución de `git checkout .` para restaurar el estado previo a las anotaciones y reubicación de scripts.
