$(document).ready(() => {

    window.dragscrollOffset = 0;

    $('[dragscroll]').on('mousedown', function (e) {

        console.log (e)

        e.preventDefault();

        window.dragscrollWrapper = $(this).find('[dragwrap]');
        if (!window.dragscrollWrapper) {
            window.dragscrollContainer = null;
            window.dragscrollOffset = 0;
            return;
        }

        window.dragscrollContainer = this;
        window.dragscrollStart = e.pageX;
        window.dragscrollStartOffset = $(window.dragscrollContainer).scrollLeft();

    });
    $(window).on('click', function (e) {
        if (window.dragscrollOffset) {
            e.preventDefault();
            e.stopPropagation();
        }
        window.dragscrollContainer = null;
        window.dragscrollOffset = 0;
    });
    $(window).on('mousemove', function (e) {

        if(window.dragscrollContainer) {

            e.preventDefault();
            e.stopPropagation();

            window.dragscrollOffset = window.dragscrollStart - e.pageX;

            let newOffset = window.dragscrollOffset + window.dragscrollStartOffset;
            $(window.dragscrollContainer).scrollLeft(newOffset);

        };
    });

});