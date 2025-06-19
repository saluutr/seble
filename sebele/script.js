document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS for scroll animations
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Typing animation for homepage subtitle
    const typingElement = document.getElementById('typing-subtitle');
    if (typingElement) {
        new Typed('#typing-subtitle', {
            strings: ['modern web experiences.', 'with creativity and precision.', 'that are fast and beautiful.'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            smartBackspace: true
        });
    }

});

