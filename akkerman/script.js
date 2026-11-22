const workbench = document.querySelector('.workbench');
const motionAllowed = window.matchMedia('(prefers-reduced-motion: no-preference)');

if (workbench && motionAllowed.matches && typeof workbench.animate === 'function') {
  workbench.animate(
    [
      { opacity: 0.65, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration: 380, easing: 'ease-out' },
  );
}
