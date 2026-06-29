//JS: Navbar scroll + menu + Animación Scroll Suave
// Navbar en scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// toggle de menú mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const spans = [document.getElementById('h1'), document.getElementById('h2'), document.getElementById('h3')];
let open = false;

function toggleMenu() {
  open = !open;
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) {
    spans[0].style.transform = 'translateY(8px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    spans[2].style.width = '24px';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
    spans[2].style.width = '16px';
  }
}

hamburger.addEventListener('click', toggleMenu);

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (open) toggleMenu();
}));

// ── SCRIPT SÚPER LIMPIO PARA INTERSECTION OBSERVER ──
const revealItems = document.querySelectorAll('.reveal-item');
const observerOptions = {
  root: null,
  threshold: 0.15, // Se activa cuando el 15% del elemento es visible
  rootMargin: "0px 0px -40px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Deja de escuchar una vez animado
    }
  });
}, observerOptions);

revealItems.forEach(item => {
  observer.observe(item);
});