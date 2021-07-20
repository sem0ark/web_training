
// responsive nav
$(function () {
    menu = $('nav ul');

    $('#openup').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});

// smooth scroll

$('.cf a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $(this.hash).offset().top
            },
            800,
            function () {
                window.location.hash = this.hash;
            }
        );
    }
});