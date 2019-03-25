/* JS Document */

/******************************

 [Table of Contents]

 1. Vars and Inits
 2. Set Header
 3. Init Menu


 ******************************/

$(document).ready(function () {
    "use strict";

    /*

    1. Vars and Inits

    */

    setHeader();

    $(window).on('resize', function () {
        setHeader();

        setTimeout(function () {
            $(window).trigger('resize.px.parallax');
        }, 375);
    });

    $(document).on('scroll', function () {
        setHeader();
    });

    initMenu();

    /*

    2. Set Header

    */

    function setHeader() {
        var header = $('.fixed_header');

        if ($(window).scrollTop() > 180) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }

    /*

    3. Init Menu

    */

    function initMenu() {
        if ($('.menu').length && $('.hamburger').length) {
            var menu = $('.menu');
            var hamburger = $('.hamburger');
            var close = $('.menu_close');
            var door = $('.menu_door');
            var menuContent = $('.menu_content');
            var items = $('.menu_nav ul li');

            hamburger.on('click', function () {
                // menu.toggleClass('active');

                // Open menu
                TweenMax.to(menu, 0,
                    {
                        visibility: 'visible',
                        opacity: 1
                    });
                TweenMax.to(door, 1,
                    {
                        width: '50%',
                        ease: Power3.easeOut
                    });
                TweenMax.to(menuContent, 0.4,
                    {
                        opacity: 1,
                        delay: 0.4
                    });
                TweenMax.staggerFromTo(items, 1,
                    {
                        y: 10,
                        opacity: 0,
                        ease: Power2.easeInOut
                    },
                    {
                        y: 0,
                        opacity: 1,
                        delay: 0.2
                    }, 0.08)
            });

            close.on('click', function () {
                // menu.toggleClass('active');
                TweenMax.to(menuContent, 0.4,
                    {
                        opacity: 0
                    });
                TweenMax.to(door, 1,
                    {
                        width: 0,
                        ease: Power3.easeOut,
                        delay: 0.6
                    });
                TweenMax.to(menu, 0,
                    {
                        visibility: 'hidden',
                        opacity: 0,
                        delay: 1.5
                    });
            });
        }
    }

});