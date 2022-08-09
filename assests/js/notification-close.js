const closeIcon = document.querySelector(".top-notification__cross");
const notificationSection = document.querySelector(".top-notification");

closeIcon.addEventListener("click", () => {
    notificationSection.classList.add("close");
});