// first drop down
const dropDown = document.querySelector(".icon-first-down");
const menuList = document.querySelector(".menu__drop-menu--item");

dropDown.addEventListener("click", () => {
    if(dropDown.classList.contains("rotate-down")){
        dropDown.classList.remove("rotate-down");
        dropDown.classList.add("rotate-up");
        menuList.classList.add("menu__drop-menu--list");
        menuList.classList.remove("item-list");
    }
    else{
        dropDown.classList.add("rotate-down");
        dropDown.classList.remove("rotate-up");
        menuList.classList.remove("menu__drop-menu--list");
        menuList.classList.add("item-list");
    }
});

// second drop down
const subDropDown = document.querySelector(".icon-second-down");
const subMenuList = document.querySelector(".menu__sub-drop--item");

subDropDown.addEventListener("click", () => {
    if(subDropDown.classList.contains("rotate-down")){
        subDropDown.classList.remove("rotate-down");
        subDropDown.classList.add("rotate-up");
        subMenuList.classList.add("menu__sub-drop--list");
        subMenuList.classList.remove("item-list");
    }
    else{
        subDropDown.classList.add("rotate-down");
        subDropDown.classList.remove("rotate-up");
        subMenuList.classList.remove("menu__sub-drop--list");
        subMenuList.classList.add("item-list");
    }
});