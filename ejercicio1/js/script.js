// Custom JavaScript for Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const userForm = document.getElementById('userForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');

    // Button elements
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const backupBtn = document.getElementById('backupBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    // Real-time validation
    function validateField(field, condition) {
        if (condition) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }
    }

    // First Name validation
    firstName.addEventListener('input', function() {
        validateField(this, this.value.trim().length >= 2);
    });

    // Last Name validation
    lastName.addEventListener('input', function() {
        validateField(this, this.value.trim().length >= 2);
    });

    // Email validation
    email.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(this, emailRegex.test(this.value));
    });

    // Password validation
    password.addEventListener('input', function() {
        validateField(this, this.value.length >= 6);
    });

    // Confirm Password validation
    confirmPassword.addEventListener('input', function() {
        validateField(this, this.value === password.value && this.value.length >= 6);
    });

    // Terms checkbox validation
    terms.addEventListener('change', function() {
        if (this.checked) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });

    // Form submission
    userForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if all fields are valid
        const isValid = userForm.checkValidity() &&
                       firstName.classList.contains('is-valid') &&
                       lastName.classList.contains('is-valid') &&
                       email.classList.contains('is-valid') &&
                       password.classList.contains('is-valid') &&
                       confirmPassword.classList.contains('is-valid') &&
                       terms.checked;

        if (isValid) {
            // Simulate form submission
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Registrando...';

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Usuario Registrado';

                // Show success message
                showAlert('Usuario registrado exitosamente!', 'success');

                // Reset form
                setTimeout(() => {
                    userForm.reset();
                    submitBtn.innerHTML = 'Registrar Usuario';
                    // Remove validation classes
                    const fields = [firstName, lastName, email, password, confirmPassword];
                    fields.forEach(field => {
                        field.classList.remove('is-valid', 'is-invalid');
                    });
                    terms.classList.remove('is-valid', 'is-invalid');
                }, 2000);
            }, 2000);
        } else {
            showAlert('Por favor, complete todos los campos correctamente.', 'danger');
        }
    });

    // Cancel button
    cancelBtn.addEventListener('click', function() {
        if (confirm('¿Está seguro de que desea cancelar? Se perderán los datos no guardados.')) {
            userForm.reset();
            // Remove validation classes
            const fields = [firstName, lastName, email, password, confirmPassword];
            fields.forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            terms.classList.remove('is-valid', 'is-invalid');
            showAlert('Registro cancelado.', 'warning');
        }
    });

    // Action buttons with different states
    exportBtn.addEventListener('click', function() {
        this.classList.add('loading');
        this.disabled = true;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exportando...';

        setTimeout(() => {
            this.classList.remove('loading');
            this.disabled = false;
            this.innerHTML = '<i class="fas fa-download"></i> Exportar Datos';
            showAlert('Datos exportados exitosamente!', 'success');
        }, 3000);
    });

    importBtn.addEventListener('click', function() {
        this.classList.add('loading');
        this.disabled = true;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Importando...';

        setTimeout(() => {
            this.classList.remove('loading');
            this.disabled = false;
            this.innerHTML = '<i class="fas fa-upload"></i> Importar Datos';
            showAlert('Datos importados exitosamente!', 'info');
        }, 2500);
    });

    backupBtn.addEventListener('click', function() {
        this.classList.add('loading');
        this.disabled = true;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando Backup...';

        setTimeout(() => {
            this.classList.remove('loading');
            this.disabled = false;
            this.innerHTML = '<i class="fas fa-save"></i> Crear Backup';
            showAlert('Backup creado exitosamente!', 'success');
        }, 4000);
    });

    deleteBtn.addEventListener('click', function() {
        if (confirm('¿Está completamente seguro de que desea eliminar todos los datos? Esta acción no se puede deshacer.')) {
            this.classList.add('loading');
            this.disabled = true;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Eliminando...';

            setTimeout(() => {
                this.classList.remove('loading');
                this.disabled = false;
                this.innerHTML = '<i class="fas fa-trash"></i> Eliminar Datos';
                showAlert('Datos eliminados permanentemente.', 'danger');
            }, 3000);
        }
    });

    // Alert function
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.body.appendChild(alertDiv);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    // Sidebar toggle for mobile (if needed)
    const sidebarToggle = document.querySelector('.navbar-toggler');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth < 768) {
                sidebar.classList.toggle('show');
            }
        });
    }

    // Responsive sidebar behavior
    function handleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const main = document.querySelector('main');

        if (window.innerWidth < 768) {
            sidebar.classList.remove('d-md-block');
            main.style.paddingLeft = '0';
        } else {
            sidebar.classList.add('d-md-block');
            main.style.paddingLeft = '250px';
        }
    }

    // Handle window resize
    window.addEventListener('resize', handleSidebar);
    handleSidebar(); // Initial call

    // Add some interactive effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize tooltips if Bootstrap tooltips are used
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});