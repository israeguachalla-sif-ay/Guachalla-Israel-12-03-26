// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const form = document.getElementById('userForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');

    // Buttons
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const backupBtn = document.getElementById('backupBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    // Validation function
    function validateField(field, condition) {
        field.classList.toggle('is-valid', condition);
        field.classList.toggle('is-invalid', !condition);
    }

    // Real-time validation
    firstName.addEventListener('input', () => validateField(firstName, firstName.value.trim().length >= 2));
    lastName.addEventListener('input', () => validateField(lastName, lastName.value.trim().length >= 2));
    email.addEventListener('input', () => validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)));
    password.addEventListener('input', () => validateField(password, password.value.length >= 6));
    confirmPassword.addEventListener('input', () => validateField(confirmPassword, confirmPassword.value === password.value && confirmPassword.value.length >= 6));
    terms.addEventListener('change', () => validateField(terms, terms.checked));

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const isValid = form.checkValidity() &&
                       firstName.classList.contains('is-valid') &&
                       lastName.classList.contains('is-valid') &&
                       email.classList.contains('is-valid') &&
                       password.classList.contains('is-valid') &&
                       confirmPassword.classList.contains('is-valid') &&
                       terms.checked;

        if (isValid) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Registrando...';

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Usuario Registrado';
                showAlert('Usuario registrado exitosamente!', 'success');
                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = 'Registrar';
                    [firstName, lastName, email, password, confirmPassword].forEach(field => {
                        field.classList.remove('is-valid', 'is-invalid');
                    });
                    terms.classList.remove('is-valid', 'is-invalid');
                }, 2000);
            }, 2000);
        } else {
            showAlert('Complete todos los campos correctamente.', 'danger');
        }
    });

    // Cancel button
    cancelBtn.addEventListener('click', function() {
        if (confirm('¿Cancelar registro?')) {
            form.reset();
            [firstName, lastName, email, password, confirmPassword].forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            terms.classList.remove('is-valid', 'is-invalid');
            showAlert('Registro cancelado.', 'warning');
        }
    });

    // Action buttons with loading states
    const actions = [
        { btn: exportBtn, text: 'Exportando...', msg: 'Datos exportados!', type: 'success' },
        { btn: importBtn, text: 'Importando...', msg: 'Datos importados!', type: 'info' },
        { btn: backupBtn, text: 'Creando Backup...', msg: 'Backup creado!', type: 'success' },
        { btn: deleteBtn, text: 'Eliminando...', msg: 'Datos eliminados!', type: 'danger', confirm: true }
    ];

    actions.forEach(action => {
        action.btn.addEventListener('click', function() {
            if (action.confirm && !confirm('¿Eliminar todos los datos?')) return;

            this.classList.add('loading');
            this.disabled = true;
            this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${action.text}`;

            setTimeout(() => {
                this.classList.remove('loading');
                this.disabled = false;
                this.innerHTML = this.id.replace('Btn', '').charAt(0).toUpperCase() + this.id.replace('Btn', '').slice(1);
                showAlert(action.msg, action.type);
            }, action.btn === deleteBtn ? 3000 : 2500);
        });
    });

    // Alert function
    function showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
        alert.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;min-width:300px;';
        document.body.appendChild(alert);
        setTimeout(() => alert.remove(), 5000);
    }

    // Responsive sidebar
    function handleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const main = document.querySelector('main');
        const isMobile = window.innerWidth < 768;

        sidebar.classList.toggle('d-md-block', !isMobile);
        main.style.paddingLeft = isMobile ? '0' : '250px';
    }

    window.addEventListener('resize', handleSidebar);
    handleSidebar();
});