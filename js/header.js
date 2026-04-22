window.addEventListener("load", () => {
  let scrollPos = 0;
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    scrollPos = window.scrollY;

    window.requestAnimationFrame(() => {
      if (scrollPos > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
});
