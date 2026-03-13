// Simple Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const sectionButtons = document.querySelectorAll('.section-btn');
    const bigNumber = document.getElementById('big-number');

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
});