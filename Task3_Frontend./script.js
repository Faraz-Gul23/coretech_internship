// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'rotate(0) translate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0)';
    }
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        
        // Reset hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0)';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
