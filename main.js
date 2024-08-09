// JavaScript to handle menu toggle and scroll reveal animations

// Toggle Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('ri-close-line');
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 200,
    reset: true
});

sr.reveal('.header__image', { origin: 'left' });
sr.reveal('.header__content', { origin: 'right' });
sr.reveal('.about-us__container', { origin: 'bottom' });
sr.reveal('.menu__items', { origin: 'bottom', interval: 200 });
sr.reveal('.contact__container', { origin: 'bottom' });
ScrollReveal().reveal('.header__content', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.services__item', { interval: 200 });
ScrollReveal().reveal('.about-us h2, .contact h2', { origin: 'top', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.nav__logo, .nav__links', { origin: 'top', distance: '20px', duration: 500 });
window.sr = ScrollReveal();

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
//

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const pawPrint = document.createElement('span');
        pawPrint.classList.add('paw-print');
        pawPrint.style.left = `${x}px`;
        pawPrint.style.top = `${y}px`;

        const paw1 = document.createElement('span');
        paw1.classList.add('paw1');
        paw1.textContent = "🐾";
        
        const paw2 = document.createElement('span');
        paw2.classList.add('paw2');
        paw2.textContent = "🐾";

        const paw3 = document.createElement('span');
        paw3.classList.add('paw3');
        paw3.textContent = "🐾";

        pawPrint.appendChild(paw1);
        pawPrint.appendChild(paw2);
        pawPrint.appendChild(paw3);

        button.querySelector('.paw-print').appendChild(pawPrint);

        setTimeout(() => {
            pawPrint.remove();
        }, 1000); // Remove o rastro após 1 segundo
    });
});
