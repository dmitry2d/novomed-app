$(document).ready (() => {

    $('.nmui-folders-selector').on ('click', (e) => {
        const _this = $(e.currentTarget);
        let _index = _this.index();
        _this.parent().find('.nmui-folders-selector').removeClass('current');
        _this.addClass('current');
        _this.closest('.nmui-folders').find('.nmui-folders-content').removeClass('current');
        _this.closest('.nmui-folders').find(`.nmui-folders-content:nth-child(${_index + 1})`).addClass('current');

    });

});