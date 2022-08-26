// let Navbar_HTML=`;

// let Navbar =document.querySelector("nav")
// Navbar.innerHTML=Navbar_HTML;

let cart_slider =document.querySelector("#cart_slider");
let closebtn_cart =document.querySelector("#cart_cross");
let search_slider =document.querySelector("#search_slider");
let closebtn_search =document.querySelector("#search_cross");

document.querySelector("#cart").addEventListener("click",function(){
    cart_slider.style.display="block";
    cart_slider.style.width="25%";
})
closebtn_cart.addEventListener("click",function(){
    cart_slider.style.display="none";
})

document.querySelector("#search").addEventListener("click",function(){
    search_slider.style.display="block";
    search_slider.style.height="50%";
})
closebtn_search.addEventListener("click",function(){
    search_slider.style.display="none";
})
