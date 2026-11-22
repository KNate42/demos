const hero = document.querySelector('.hero');

if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.classList.add('hero-ready');
}
