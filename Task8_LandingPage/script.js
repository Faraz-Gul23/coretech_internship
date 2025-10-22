// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal
const getStartedBtn = document.getElementById('getStartedBtn');
const signupModal = document.getElementById('signupModal');
const closeModal = document.getElementById('closeModal');

getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    signupModal.classList.remove('active');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Form submission
const modalForm = document.querySelector('.modal-form');
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
    signupModal.classList.remove('active');
    modalForm.reset();
});
