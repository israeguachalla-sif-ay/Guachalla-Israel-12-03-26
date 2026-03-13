document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    let valido = true;
    const campos = ['nombre', 'apellido', 'email', 'telefono'];

    campos.forEach(campo => {
        const valor = document.getElementById(campo).value.trim();
        const error = document.getElementById('error-' + campo);
        if (valor === '') {
            error.textContent = 'Este campo es requerido.';
            valido = false;
        } else {
            error.textContent = '';
        }
    });

    if (valido) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar código para enviar el formulario o procesar los datos
    }
});