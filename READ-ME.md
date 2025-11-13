# 🛡️ Proyecto Portafolio: Sitio Web de Ciberseguridad

Este proyecto es un sitio web informativo y responsivo sobre ciberseguridad, desarrollado como parte de mi portafolio profesional.

## 🚀 Objetivo

Crear un sitio web de 3 páginas (Inicio, Amenazas, Consejos) aplicando tecnologías front-end modernas, diseño responsivo y buenas prácticas de control de versiones.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** (Uso de etiquetas semánticas)
* **CSS3:** (Estilos personalizados y Media Queries)
* **Bootstrap 5:** (Para el layout responsivo, Navbar, Cards, Acordeón y Modal)
* **JavaScript (ES6+):** (Validación del formulario de contacto)
* **jQuery:** (Efectos de Ocultar/Mostrar en tarjetas y lógica del test en el Modal)
* **Git y GitHub:** (Control de versiones)

## 📁 Estructura del Sitio

* **/index.html**: Página de inicio con introducción.
* **/amenazas.html**: Detalla amenazas comunes (Phishing, Malware, etc.) usando tarjetas interactivas y un acordeón de casos reales.
* **/consejos.html**: Lista de buenas prácticas, un formulario de contacto validado con JS y un modal interactivo con un test de seguridad.
* **/css/style.css**: Hoja de estilos personalizada.
* **/js/main.js**: Lógica de JavaScript y jQuery.

## 🔧 Funcionalidad Destacada

1.  **Validación de Formulario (JavaScript):** El formulario de contacto en `consejos.html` utiliza JavaScript puro para validar los campos (nombre, email, mensaje) antes del envío, mostrando mensajes de error dinámicos.
2.  **Test Interactivo (jQuery + Modal):** Se utiliza un Modal de Bootstrap que contiene un test. jQuery se usa para capturar la respuesta del usuario, evaluarla y mostrar retroalimentación (correcta/incorrecta) manipulando el DOM.
3.  **Efectos (jQuery):** En la página `amenazas.html`, se usa jQuery (`slideToggle`) para mostrar y ocultar información adicional en las tarjetas de amenazas.