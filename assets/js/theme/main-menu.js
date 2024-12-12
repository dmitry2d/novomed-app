

$(document).ready (() => {
    $('#hamburger').on('mousedown', e => {
        e.preventDefault();
        e.stopPropagation();
    });
    $('#hamburger').on('click', e => {
        e.preventDefault();
        e.stopPropagation();
        $('.main-menu').addClass('open');
    });
    $(document).on('escKey', () => {
        $('.main-menu').removeClass('open');
    });
    $('.main-menu').on('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        $('.main-menu').removeClass('open');
    });
});