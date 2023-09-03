let navbar = document.querySelector(".position-cont");
let startScroll = window.scrollY;

window.addEventListener('scroll', function(e) {
    let currentScroll = window.scrollY;
    currentScroll > startScroll ? navbar.style.top = "-100px" : navbar.style.top = "0";
    startScroll = currentScroll;
});