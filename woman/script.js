const sectionLinks = document.querySelectorAll('.site-nav a');

function markCurrentSection() {
  for (const link of sectionLinks) {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

window.addEventListener('hashchange', markCurrentSection);
markCurrentSection();
