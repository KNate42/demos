const sections = document.querySelectorAll('.site-nav a');

function updateCurrentSection() {
  for (const link of sections) {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

updateCurrentSection();
window.addEventListener('hashchange', updateCurrentSection);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelector('.hero-art').classList.add('is-ready');
}
