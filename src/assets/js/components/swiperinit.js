$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    function cu(className) {
        var index = 0;
        $.each($('.swiper-wrapper').children(), function (i, item) {
            if ($(item).hasClass(className)) {
                index = i;
                return false;
            }
        });
        return index;
    }
    swiper.slideTo(cu('careca'), 0, !1);
});