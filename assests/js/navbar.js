let visibility = false;

const menuBar = document.querySelector(".details__icons-navigation--hamburger-icon");
const navList = document.querySelector(".menu__navbar");
const navLinks = document.querySelector(".menu__navbar--links");

menuBar.addEventListener("click", () => {
    visibility = !visibility;
    if(visibility){
        menuBar.classList.add("animate-menu");
        navList.classList.add("list-nav")
        navLinks.classList.add("list-nav--links")
    }
    else{
        menuBar.classList.remove("animate-menu");
        navList.classList.remove("list-nav")
        navLinks.classList.remove("list-nav--links")
    }
});