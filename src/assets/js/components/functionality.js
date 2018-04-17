$(document).ready(function () {
    $(window).on('scroll', function () {
        var mouseposit = $(window).scrollTop();
        var startAnimate = 1;
        if (mouseposit > startAnimate) {
            $('.arrow').addClass('animated');
            $('.navbar').addClass('color');

        } else {
            $('.arrow').removeClass('animated');
            $('.navbar').removeClass('color');

        }
    });
    $('.burger-btn').on('click', function () {
        $('body').toggleClass('menu-open');
        $('.burger-btn').toggleClass('active_hamburger');
        $('.navbar').toggleClass('active-navbar');
    });
    $('.nav-itens').on('click', function () {
        var btn = $(this).data('nav');
        setTimeout(function () {
            $('.navbar').removeClass('active-navbar');
            $('.burger-btn').removeClass('active_hamburger');
        }, 100);
        $('html, body').animate({
            scrollTop: $('.' + btn).offset().top - 65
        }, 500);
    });
});