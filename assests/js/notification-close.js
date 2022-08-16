const closeIcon = document.querySelector(".top-notification__icon");
const notificationSection = document.querySelector(".top-notification");
const openNotif = document.querySelector(".details__bell");
const bellIcon = document.getElementById("bell-icon");

closeIcon.addEventListener("click", () => {
    closeIcon.classList.add("close");
    notificationSection.classList.add("close");
    notificationSection.classList.remove("open")
        bellIcon.style.display = 'block';
});

openNotif.addEventListener("click", () => {
    if(notificationSection.classList.contains("open")){
        closeIcon.classList.add("close");
        notificationSection.classList.remove("open");
        notificationSection.classList.add("close");
    }
    else{
        closeIcon.classList.remove("close");
        notificationSection.classList.add("open");
        notificationSection.classList.remove("close");
        bellIcon.style.display = "";
    }
});