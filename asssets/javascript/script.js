let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", function(){
    if(scrollY >= 350){
        navbar.classList.add("navbar_scrolled")
    } else {navbar.classList.remove("navbar_scrolled")}
        
    
})

gsap.to(".myName", {top: 200, opacity: 1, duration:5, font_size: 100} )