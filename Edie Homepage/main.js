const ham_menu = document.querySelector(".ham-menu")
const nav_menu = document.querySelector(".nav-menu")
const nav_li = document.querySelector(".nav-menu > ul > a > li")


ham_menu.addEventListener("click", ()=>{

    nav_menu.classList.toggle("slide-in")
})