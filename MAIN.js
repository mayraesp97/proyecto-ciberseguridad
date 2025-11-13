// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // === VALIDACIÓN DE FORMULARIO (JavaScript Puro) ===
    // (Solo se ejecuta si estamos en la página de consejos)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        
        contactForm.addEventListener("submit", function(event) {
            // Previene el envío del formulario
            event.preventDefault();
            event.stopPropagation();

            let isValid = true;
            
            // Quitar clases de validación anteriores
            contactForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));

            // Validar Nombre
            const nombre = document.getElementById("nombre");
            if (nombre.value.trim() === "") {
                nombre.classList.add("is-invalid");
                isValid = false;
            } else {
                nombre.classList.add("is-valid");
            }

            // Validar Email
            const email = document.getElementById("email");
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add("is-invalid");
                isValid = false;
            } else {
                email.classList.add("is-valid");
            }
            
            // Validar Mensaje
            const mensaje = document.getElementById("mensaje");
            if (mensaje.value.trim().length < 10) { // Ejemplo: mínimo 10 caracteres
                mensaje.classList.add("is-invalid");
                // Modificamos el feedback
                mensaje.nextElementSibling.textContent = "El mensaje debe tener al menos 10 caracteres.";
                isValid = false;
            } else {
                mensaje.classList.add("is-valid");
            }

            if (isValid) {
                // Si todo es válido, podríamos enviar el form (aquí solo simulamos)
                alert("¡Formulario enviado con éxito!");
                contactForm.reset();
                contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
            }
        });
    }

}); // Fin del DOMContentLoaded


// === INTERACCIONES CON JQUERY ===
// (jQuery se puede ejecutar fuera del DOMContentLoaded con esta sintaxis)
$(document).ready(function() {

    // --- Interacción Tarjetas de Amenazas (Ocultar/Mostrar) ---
    $('.btn-toggle-info').click(function() {
        // Busca el div 'info-oculta' dentro del mismo 'card-body'
        let infoBox = $(this).siblings('.info-oculta');
        
        // Muestra u oculta con un efecto 'slide'
        infoBox.slideToggle(300); // 300ms de animación
        
        // Cambia el texto del botón
        if ($(this).text() === "Saber más") {
            $(this).text("Ocultar");
        } else {
            $(this).text("Saber más");
        }
    });


    // --- Interacción Modal (Test de Seguridad) ---
    $('#btnCheckTest').click(function() {
  M      // Obtener el valor de la respuesta seleccionada
        const respuesta = $('input[name="testQ1"]:checked').val();
        const feedbackBox = $('#testFeedback');

        if (respuesta === "correcto") {
            feedbackBox.text("¡Correcto! Nunca debes hacer clic en enlaces sospechosos. Siempre verifica en el sitio oficial.");
            feedbackBox.removeClass('alert-danger').addClass('alert-success');
        } else if (respuesta === "incorrecto") {
            feedbackBox.text("Incorrecto. Hacer clic o responder al email puede exponerte a malware o al robo de tu cuenta.");
            feedbackBox.removeClass('alert-success').addClass('alert-danger');
        } else {
            // Si no seleccionó nada
            feedbackBox.text("Por favor, selecciona una respuesta.");
            feedbackBox.removeClass('alert-success alert-danger').addClass('alert-warning');
        }

        // Mostrar el feedback con un efecto 'fade'
        feedbackBox.fadeIn();
    });

    // Ocultar feedback si el modal se cierra
    $('#securityTestModal').on('hidden.bs.modal', function () {
        $('#testFeedback').hide();
        // Desmarcar radios
        $('input[name="testQ1"]').prop('checked', false);
    });

});