/* JS Document */

/******************************

 [Table of Contents]

 1. Vars and Inits
 2. Set Header
 3. Init Menu
 4. Init Google Map


 ******************************/

$(document).ready(function () {
    "use strict";

    /*

    1. Vars and Inits

    */

    var map;

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
    initGoogleMap();

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

    /*

    4. Init Google Map

    */

    function initGoogleMap() {
        var myLatlng = new google.maps.LatLng(40.760836, -73.910357);
        var mapOptions =
            {
                center: myLatlng,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                draggable: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions:
                    {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                styles:
                    [
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffeba1"
                                }
                            ]
                        }
                    ]
            };

        // Initialize a map with options
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Re-center map after window resize
        google.maps.event.addDomListener(window, 'resize', function () {
            setTimeout(function () {
                google.maps.event.trigger(map, "resize");
                map.setCenter(myLatlng);
            }, 1400);
        });
    }

});