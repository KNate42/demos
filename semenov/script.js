const placeSetting = document.querySelector('.placemat');

if (placeSetting && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  placeSetting.animate(
    [
      { opacity: 0.65, transform: 'translateY(8px) scale(0.985)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' }
    ],
    { duration: 650, easing: 'ease-out' }
  );
}
