$(document).ready (() => {
    $('#header-search-form-open').on('click', e => {
        e.preventDefault();
        e.stopPropagation();
        $('.widget-page-header').addClass('__search-open');
        $('#header-search-form-input').focus();
    });
    $('#header-search-form-close').on('click', e => {
        e.preventDefault();
        e.stopPropagation();
        $('.widget-page-header').removeClass('__search-open');
    });
    $(document).on('escKey', e => {
        e.preventDefault();
        e.stopPropagation();
        $('.widget-page-header').removeClass('__search-open');
    });
});