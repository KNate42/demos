const scan = document.querySelector('.scan');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (scan && !reducedMotion.matches && 'IntersectionObserver' in window) {
  const scanObserver = new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      scan.classList.add('is-scanning');
      observer.disconnect();
    }
  }, { threshold: 0.4 });

  scanObserver.observe(scan);
}
