const artwork = document.querySelector('.plate-art');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

if (artwork?.animate && !motionPreference.matches) {
  const entrance = artwork.animate(
    [{ opacity: 0.55, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 450, easing: 'ease-out' },
  );

  motionPreference.addEventListener('change', () => entrance.cancel(), { once: true });
}
