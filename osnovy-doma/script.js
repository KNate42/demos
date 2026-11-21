const drawing = document.querySelector(".drawing");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  drawing.classList.add("drawing-enter");
}
