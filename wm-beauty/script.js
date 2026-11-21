const artwork = document.querySelector('.hero-art');

if (artwork && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  artwork.animate(
    [
      { opacity: 0.7, translate: '0 8px' },
      { opacity: 1, translate: '0 0' },
    ],
    { duration: 550, easing: 'ease-out' },
  );
}
