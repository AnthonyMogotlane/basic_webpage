const scrollBtn = document.querySelector(".scroll-up");
const navList = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".menu-btn");
const navItem = document.getElementsByClassName("nav-item");
const menuClose = document.querySelector(".menu-close");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
  console.log(scrollBtn);
})

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-show");
  menuBtn.style.display = "none";
  menuClose.style.display = "block"
})

navItem[0].addEventListener("click", () => {
  navList.classList.remove("nav-show");
  menuClose.classList.toggle("nav-hide")
})
navItem[1].addEventListener("click", () => {
  navList.classList.remove("nav-show");
})
navItem[2].addEventListener("click", () => {
  navList.classList.remove("nav-show");
})
navItem[3].addEventListener("click", () => {
  navList.classList.remove("nav-show");
})

menuClose.addEventListener("click", () => {
  menuBtn.style.display = "block";
  menuClose.style.display = "none";
  navList.classList.remove("nav-show");
})


