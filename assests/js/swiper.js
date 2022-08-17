// features slider
var swiper = new Swiper(".health-coach__sliders", {
navigation: {
    nextEl: ".health-coach__card--next",
    prevEl: ".health-coach__card--prev",
},
breakpoints: {
    240: {
    slidesPerView: 1,
    spaceBetween: 20,
    },
    768: {
    slidesPerView: 2,
    spaceBetween: 20,
    },
    1024: {
    slidesPerView: 2,
    spaceBetween: 20,
    },
    1250: {
    slidesPerView: 3,
    spaceBetween: 30,
    },
},
});

// feedback slider
var swiper = new Swiper(".feedback__swiper", {
navigation: {
    nextEl: ".feedback__nav--right",
    prevEl: ".feedback__nav--left",
},
pagination: {
    el: ".feedback__bullet",
    clickable: true,
},
});