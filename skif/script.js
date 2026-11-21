const trackArt = document.querySelector('.hero-art');

if (trackArt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  trackArt.classList.add('is-animated');
}
