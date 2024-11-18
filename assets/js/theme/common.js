


$(document).on('keyup', e=> {

    // Событие нажатия эскейп
    if (e.keyCode == 27) {
        $(document).trigger('escKey');
    }
    
})