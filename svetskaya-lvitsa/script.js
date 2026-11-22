const glints = document.querySelector(".portrait-glints");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (glints && !motionPreference.matches) {
  const shimmer = glints.animate(
    [{ opacity: 0.65 }, { opacity: 1 }, { opacity: 0.65 }, { opacity: 1 }],
    { duration: 1350, delay: 150, easing: "ease-in-out" }
  );

  motionPreference.addEventListener("change", () => {
    if (motionPreference.matches) shimmer.cancel();
  });
}
