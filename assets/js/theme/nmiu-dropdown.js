$(document).ready (() => {

    $('.nmui-dropdown').each((i,e) => {

        let _id = Date.now() + Math.random(1);

        $(e).attr('nmui_id', _id);

    })

    $('.nmui-dropdown').on('click', e => {

        e.stopPropagation();
        
        $(e.currentTarget).toggleClass('open');
        
    });
    
    $('.nmui-dropdown-list-item').click(e => {

        const _main_node = $(e.currentTarget).closest('.nmui-dropdown');
        _main_node.find('.nmui-dropdown-list-item').removeClass('current');
        $(e.currentTarget).addClass('current');
        _main_node.find('.nmui-dropdown-main-text').html($(e.currentTarget).html());

    });

    $(document).click (e => {
        $('.nmui-dropdown').removeClass('open');
    });


});