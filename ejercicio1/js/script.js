// JavaScript para el Dashboard

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section-btn');
    const bigNumber = document.getElementById('big-number');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clicado
            this.classList.add('active');
            // Cambiar el número grande
            const section = this.getAttribute('data-section');
            bigNumber.textContent = section;
        });
    });
});