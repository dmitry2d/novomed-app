

$(document).ready (() => {
    
    $(document).on('escKey', e => {
        $('.nmui-popup').removeClass('nmui-popup-open');
    });

    $('.nmui-popup-wrapper').on('click', e => {e.preventDefault(); e.stopPropagation();});
    $('.nmui-popup').on('click', closePopup);
    $('.nmui-popup-close').on('click', closePopup);
    $('.nmui-popup-button-cancel').on('click', closePopup);
    $(document).on('click', closePopup);

    function closePopup (e) {
        let _widget = $(e.currentTarget).closest('.nmui-popup');
        _widget.removeClass('nmui-popup-open');
    }

});