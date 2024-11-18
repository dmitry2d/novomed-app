<?php

    include "./components/header.php";

    include "./components/page-header.php";

?>

    <script>
        const app_version = 4;
    </script>

    <style>
        body {
            height: 100%;
        }
        html {
            height: 100%;
        }
        .fullcenter {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    </style>

        <div class="fullcenter">
            Приложение Новомед&nbsp;<span class="version"></span>
        </div>

        <script>
            function wrongVersion () {
                window.location.reload();
            };
            function checkVersion () {
                $.ajax({
                    type:"GET", 
                    url: "http://volcharo.ru/novomed-app/version.php", 
                    success: function(data) {
                        const actual_version = data.version;
                        if (app_version != actual_version) {
                            $(".version").html('устаревшая версия, обновляю');
                            setTimeout (wrongVersion, 5000);
                        } else {
                            $(".version").html(JSON.stringify('v. ' +  data.version));
                            setTimeout (checkVersion, 5000);
                        }
                    }, 
                    error: function(jqXHR, textStatus, errorThrown) {
                        $(".version").html('Ошиьбка проверки версии. Напишите нам.');
                        setTimeout (checkVersion, 5000);
                    },
                    dataType: "json"
                });
            }
            checkVersion();
        </script>

<?php
    
    include "./components/page-footer.php";

    include "./components/footer.php";

?>