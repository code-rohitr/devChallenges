const overlay_nav = document.querySelector(".overlay-nav")
const ham_btn = document.querySelector(".menubtn")
const close_btn = document.querySelector(".closebtn")



ham_btn.addEventListener("click", ()=>{

    
    if (overlay_nav.classList.contains("slideout")) {
        overlay_nav.classList.remove("slideout")
        
    }
    overlay_nav.classList.toggle("slidein")
})

close_btn.addEventListener("click", ()=>{

    overlay_nav.classList.toggle("slideout")
    overlay_nav.classList.remove("slidein")
})