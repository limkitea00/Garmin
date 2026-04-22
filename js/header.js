window.addEventListener("scroll", function(){
  let header = document.getElementById("header");

  if(window.scrollY > 500){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
});