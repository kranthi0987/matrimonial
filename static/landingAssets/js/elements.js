/* JS Document */

/******************************

 [Table of Contents]

 1. Vars and Inits
 2. Set Header
 3. Init Menu
 4. Init Accordions
 5. Init Tabs
 6. Init Loaders
 7. Init Milestones


 ******************************/

$(document).ready(function () {
    "use strict";

    /*

    1. Vars and Inits

    */

    var ctrl = new ScrollMagic.Controller();

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
    initAccordions();
    initTabs();
    initLoaders();
    initMilestones();

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

    4. Init Accordions

    */

    function initAccordions() {
        if ($('.accordion').length) {
            var accs = $('.accordion');

            accs.each(function () {
                var acc = $(this);

                if (acc.hasClass('active')) {
                    var panel = $(acc.next());
                    var panelH = panel.prop('scrollHeight') + "px";

                    if (panel.css('max-height') == "0px") {
                        panel.css('max-height', panel.prop('scrollHeight') + "px");
                    } else {
                        panel.css('max-height', "0px");
                    }
                }

                acc.on('click', function () {
                    if (acc.hasClass('active')) {
                        acc.removeClass('active');
                        var panel = $(acc.next());
                        var panelH = panel.prop('scrollHeight') + "px";

                        if (panel.css('max-height') == "0px") {
                            panel.css('max-height', panel.prop('scrollHeight') + "px");
                        } else {
                            panel.css('max-height', "0px");
                        }
                    } else {
                        acc.addClass('active');
                        var panel = $(acc.next());
                        var panelH = panel.prop('scrollHeight') + "px";

                        if (panel.css('max-height') == "0px") {
                            panel.css('max-height', panel.prop('scrollHeight') + "px");
                        } else {
                            panel.css('max-height', "0px");
                        }
                    }
                });
            });
        }
    }

    /*

    5. Init Tabs

    */

    function initTabs() {
        if ($('.tab').length) {
            $('.tab').on('click', function () {
                $('.tab').removeClass('active');
                $(this).addClass('active');
                var clickedIndex = $('.tab').index(this);

                var panels = $('.tab_panel');
                panels.removeClass('active');
                $(panels[clickedIndex]).addClass('active');
            });
        }
    }

    /*

    6. Init Loaders

    */

    function initLoaders() {
        if ($('.loader').length) {
            var loaders = $('.loader');

            loaders.each(function () {
                var loader = this;
                var endValue = $(loader).data('perc');

                var loaderScene = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 'onEnter',
                    reverse: false
                })
                    .on('start', function () {
                        var bar = new ProgressBar.Circle(loader,
                            {
                                color: '#7360ff',
                                // This has to be the same size as the maximum width to
                                // prevent clipping
                                strokeWidth: 3,
                                trailWidth: 0,
                                trailColor: 'transparent',
                                easing: 'easeInOut',
                                duration: 1400,
                                text:
                                    {
                                        autoStyleContainer: false
                                    },
                                from: {color: '#ff0e3b', width: 3},
                                to: {color: '#ff0e3b', width: 3},
                                // Set default step function for all animate calls
                                step: function (state, circle) {
                                    circle.path.setAttribute('stroke', state.color);
                                    circle.path.setAttribute('stroke-width', state.width);

                                    var value = Math.round(circle.value() * 100);

                                    if (value === 0) {
                                        circle.setText('0%');
                                    } else {
                                        circle.setText(value + "%");
                                    }
                                }
                            });


                        bar.animate(endValue);  // Number from 0.0 to 1.0
                    })
                    .addTo(ctrl);
            });
        }
    }

    /*

    7. Init Milestones

    */

    function initMilestones() {
        if ($('.milestone_counter').length) {
            var milestoneItems = $('.milestone_counter');

            milestoneItems.each(function (i) {
                var ele = $(this);
                var endValue = ele.data('end-value');
                var eleValue = ele.text();

                /* Use data-sign-before and data-sign-after to add signs
                infront or behind the counter number */
                var signBefore = "";
                var signAfter = "";

                if (ele.attr('data-sign-before')) {
                    signBefore = ele.attr('data-sign-before');
                }

                if (ele.attr('data-sign-after')) {
                    signAfter = ele.attr('data-sign-after');
                }

                var milestoneScene = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 'onEnter',
                    reverse: false
                })
                    .on('start', function () {
                        var counter = {value: eleValue};
                        var counterTween = TweenMax.to(counter, 4,
                            {
                                value: endValue,
                                roundProps: "value",
                                ease: Circ.easeOut,
                                onUpdate: function () {
                                    document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
                                }
                            });
                    })
                    .addTo(ctrl);
            });
        }
    }

});