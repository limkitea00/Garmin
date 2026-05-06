window.addEventListener("load", () => {
  const watchBox = document.querySelectorAll(".watch-box");
  const wImg = document.querySelectorAll(".w-img");
  watchBox.forEach((color, index) => {
    // console.log(color);
    color.addEventListener("click", (e) => {
      e.preventDefault();
      watchBox.forEach((bc) => {
        bc.classList.remove("active");
        color.classList.add("active");
      });
      wImg.forEach((wi)=>wi.classList.remove("active"))
      wImg[index].classList.add("active");
    });
  });
});
