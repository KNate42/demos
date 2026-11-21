const art = document.querySelector(".hero-art");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (art && !reducedMotion.matches && typeof art.animate === "function") {
  art.animate(
    [
      { opacity: 0.85, transform: "translateY(7px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: 520, easing: "ease-out" },
  );
}
