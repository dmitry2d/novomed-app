

// В приложении используется WebView
// Приложение - это по сути веб сайт
// Приложение обращается к файлу version.php и проверяет версию
// Если версия не совпадает, приложение перегружает сайт

$(document).ready (() => {
    setTimeout (nmui_version.check);    
});

const nmui_version = 
{
    actual: '1.0.4',
    interval: 10000,
    app: '',
    url: 'https://volcharo1.fvds.ru/novomed-app/version.php',
    container: '.nmui_version'
}

nmui_version.wrong = function ()
{
    console.log ('wrong version');  
    setTimeout ( () => {window.location.reload()}, nmui_version.interval);
};

nmui_version.set = function (value)
{
    console.log ('version: ', value);  
    nmui_version.app = value;
    setTimeout (nmui_version.check, nmui_version.interval);
    $(nmui_version.container).html(value);
};



nmui_version.check = function ()
{
    console.log ('check version');    
    $.ajax({
        type:"GET", 
        url: nmui_version.url, 
        success: function(data) {
            const app_version = data.version;
            if (nmui_version.actual != app_version) {
                nmui_version.set('wrong');
                nmui_version.wrong();
            } else {
                nmui_version.set(data.version);
            }
        }, 
        error: function() {
            setTimeout (checkVersion, 20000);
            nmui_version.set('error');
        },
        dataType: "json"
    });
}