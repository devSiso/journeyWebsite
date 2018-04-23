$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 5,
        slideToClickedSlide: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

});