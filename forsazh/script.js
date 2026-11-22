const needle = document.querySelector('#gauge-needle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (needle && !reducedMotion.matches && typeof needle.animate === 'function') {
  const sweep = needle.animate(
    [{ transform: 'rotate(-32deg)' }, { transform: 'rotate(0deg)' }],
    { duration: 700, easing: 'cubic-bezier(.2,.7,.35,1)' }
  );

  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) sweep.cancel();
  }, { once: true });
}
