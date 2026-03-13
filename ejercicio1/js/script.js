// Simple Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const sectionButtons = document.querySelectorAll('.section-btn');
    const bigNumber = document.getElementById('big-number');
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    // Navigation functionality
    sectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            sectionButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update the big number
            const sectionNumber = this.getAttribute('data-section');
            bigNumber.textContent = sectionNumber;
        });
    });

    // Responsive sidebar handling
    function handleResponsiveSidebar() {
        const isMobile = window.innerWidth < 576; // Bootstrap xs breakpoint

        if (isMobile) {
            sidebar.style.display = 'none';
            main.style.marginLeft = '0';
        } else {
            sidebar.style.display = 'block';
            const sidebarWidth = window.innerWidth >= 1200 ? '80px' :
                               window.innerWidth >= 992 ? '80px' :
                               window.innerWidth >= 768 ? '75px' : '70px';
            main.style.marginLeft = sidebarWidth;
        }
    }

    // Initial check
    handleResponsiveSidebar();

    // Handle window resize
    window.addEventListener('resize', handleResponsiveSidebar);
});