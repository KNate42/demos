const sparkles = document.querySelector('.art-sparkles');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

if (sparkles && !motionPreference.matches) {
  const glint = sparkles.animate(
    [{ opacity: 1 }, { opacity: 0.55, offset: 0.26 }, { opacity: 1 }],
    { duration: 950, easing: 'ease-in-out' }
  );

  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches) glint.cancel();
  }, { once: true });
}
