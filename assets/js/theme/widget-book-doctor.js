$(document).ready (bindWidgetBookDoctor);


function bindWidgetBookDoctor () {

    $('.widget-book-doctor-consult-type').on('click', function () {
        $(this).parent().find('.widget-book-doctor-consult-type').removeClass('selected');
        $(this).addClass('selected');
    });

    // popup

    $('.widget-book-doctor-time').on('click', e => {

        const _node = $(e.target).closest('.widget-book-doctor');

        const _data = {
            time: $(e.target).html(),
            name: _node.find('[widget-book-doctor-data="name"]').html(),
            photo: _node.find('[widget-book-doctor-data="photo"]').html(),
            position: _node.find('[widget-book-doctor-data="position"]').html(),
            address: _node.find('[widget-book-doctor-data="address"]').html(),
            filial: _node.find('[widget-book-doctor-data="filial"]').html(),
            type: _node.find('.widget-book-doctor-consult-type.selected [widget-book-doctor-data="type"]').html(),
            date: _node.find('[widget-book-doctor-data="date"] .current').html()
        }

        Object.keys(_data).forEach((key) => {
            $(`.widget-doctor-popup [widget-doctor-popup-data="${key}"]`).html($.trim(_data[key]));
        });

        $('.widget-doctor-popup .nmui-popup').addClass('nmui-popup-open');
    });

};