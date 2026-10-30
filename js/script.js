// Menu Hamburguer Mobile
const mobileBtn = document.getElementById('mobile-btn');
const navbarLinks = document.getElementById('navbar-links');
const icon = mobileBtn.querySelector('i');

mobileBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Sombra no Header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    
    if (window.scrollY > 0) {
        header.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});