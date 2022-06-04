// jQuery(document).ready(function() {

//     jQuery(window).load(function() {
//         $(".loader").fadeOut(25000);
//     });

// });

let loader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})