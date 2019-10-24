$(function (){
    $('.hamburger-menu').on('click', function (){
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    })

    $('.nav-item').on('click', function () {
        $('.toggle').removeClass('open');
        $('.nav-list').removeClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
    });
})