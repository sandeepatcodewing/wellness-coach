let visibility = false;
let visible = false;

const menuBar = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".menu__navbar-button");
const navLinks = document.querySelector(".menu__navbar--links");
const smallMenuBar = document.querySelector(".hamburger");
const extraMenu = document.querySelector(".extra-menu");

menuBar.addEventListener("click", () => {
    visibility = !visibility;
    if(visibility){
        smallMenuBar.classList.remove("small-menu-animate");
        extraMenu.classList.remove("extra-menu__items");
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

smallMenuBar.addEventListener("click", () => {
    visible = !visible;
    if(visible){
        smallMenuBar.classList.add("small-menu-animate");
        extraMenu.classList.add("extra-menu__items");
        menuBar.classList.remove("animate-menu");
        navList.classList.remove("list-nav");
        navLinks.classList.remove("list-nav--links")
    }
    else{
        smallMenuBar.classList.remove("small-menu-animate");
        extraMenu.classList.remove("extra-menu__items");
    }
});