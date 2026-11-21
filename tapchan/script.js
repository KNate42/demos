const menuLinks = document.querySelectorAll('.menu-nav a');

function markCurrentSection() {
  for (const link of menuLinks) {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

markCurrentSection();
window.addEventListener('hashchange', markCurrentSection);
