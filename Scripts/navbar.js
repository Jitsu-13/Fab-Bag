let Navbar_HTML=`<div id="container_navbar">
<!-- <svg id="burger" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg> -->
    <div>
        <a style="text-decoration:none; color:goldenrod" href="./subscribe.html"><h2>SUBSCRIBE NOW</h2></a>
    </div>
    <div>
       <a href="./index.html">
        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-Printing1_6350cdb4-8c03-49a8-bd2e-c8df50c83b37_2048x.png?v=1660282958" alt="logo">
        </a>
    </div>
    <div>
        <svg id="search" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <svg id="love" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        <svg id="profile" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        <svg id="cart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg>
    </div>
</div>
<div id="cart_slider">
    <div>
        <p>MY CART</p>
        <svg id="cart_cross" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
    </div>
    <div>
        <p>You have no items in your shopping cart</p>
    </div>
</div>
<div id="search_slider">
    <div>
        <svg id="search_cross" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
    </div>
    <div>
        <p>WHAT ARE YOU LOOKING FOR?</p>
        <input type="text" placeholder="search product">
    </div>
</div>
<div id="dropdown">
    <div>Languages: En   Fr</div>
    <hr>
    <div>Checkout</div>
    <hr>
    <div id="signin"><a style="text-decoration:none;color:black" href="./signup.html">Sign In</a></div>
    <hr>
    <div id="signup"><a style="text-decoration:none;color:black" href="./signup.html">Create An Account</a></div>
</div>`;

let Navbar =document.querySelector("nav")
Navbar.innerHTML=Navbar_HTML;

let cart_slider =document.querySelector("#cart_slider");
let closebtn_cart =document.querySelector("#cart_cross");
let search_slider =document.querySelector("#search_slider");
let closebtn_search =document.querySelector("#search_cross");
let profilebtn=document.querySelector("#profile")
let dropdown=document.querySelector("#dropdown");

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
let count=0
profilebtn.addEventListener("click",function(){
    count++
    if(count%2!=0){
        dropdown.style.display="block";
        dropdown.style.width="15%";
    }else{
        dropdown.style.display="none";
    }
})
