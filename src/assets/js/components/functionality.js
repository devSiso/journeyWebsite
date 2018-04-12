$(document).ready(function () {
    $(window).on('scroll', function () {
        var mouseposit = $(window).scrollTop();
        var startAnimate = 1;
        if (mouseposit > startAnimate) {
            $('.arrow').addClass('animated');
        } else {
            $('.arrow').removeClass('animated');
        }
    });
});