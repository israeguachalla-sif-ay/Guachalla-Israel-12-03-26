// Simple Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const sectionButtons = document.querySelectorAll('.section-btn');
    const bigNumber = document.getElementById('big-number');
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    // Navigation
    sectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            sectionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            bigNumber.textContent = this.getAttribute('data-section');
        });
    });

    // Responsive sidebar
    function updateSidebar() {
        const isMobile = window.innerWidth < 576;
        sidebar.style.display = isMobile ? 'none' : 'block';
        main.style.marginLeft = isMobile ? '0' : '80px';
    }

    updateSidebar();
    window.addEventListener('resize', updateSidebar);
});