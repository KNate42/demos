const navigationLinks = document.querySelectorAll('.navigation a');

function updateCurrentSection() {
  for (const link of navigationLinks) {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

window.addEventListener('hashchange', updateCurrentSection);
updateCurrentSection();
