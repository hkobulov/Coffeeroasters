var elHamburgerBtn = document.querySelector('.menu-list__btn');
var elHeader = document.querySelector('.header');
// var elCancelBtn = document.querySelector(".menu-list__cancel-btn");

elHamburgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("header--open");
})

// elHamburgerBtn.addEventListener("click", function(){
//     elHeader.classList.add("header--open");
// })


// elCancelBtn.addEventListener("click", function(){
//     elHeader.classList.remove("header--open");
// })


