const scrollBtn = document.querySelector(".scroll-up");
const navList = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".menu-btn");

scrollBtn.addEventListener("click", scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
  console.log(scrollBtn);
})

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-show");
  navList.classList.toggle("nav-list")
})