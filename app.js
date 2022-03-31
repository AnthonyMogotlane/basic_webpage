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
  if(menuBtn.classList.contains("nav-show")) {

    menuBtn.innerHTML = `<i class="fas fa-window-close"></i>`;
  }
})

navItem[0].addEventListener("click", () => {
  navList.classList.remove("nav-show");
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
  navList.classList.remove("nav-show");
  menuBtn.innerHTML = `hello`;
})


