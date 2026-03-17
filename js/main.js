// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.innerText = cart.length;
}

// Page Navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
