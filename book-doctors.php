
<?php
    include "./components/header.php";
?>
<?php
    include "./components/main-menu.php";
?>

<div class="page-grid">
    <?php
        include "./components/page-header.php";
    ?>
    <div class="px-4 px-lg-5 my-4">
        <div class="">
            <h1 class="py-1">
                Записаться на прием
            </h1>
            <?php
                include "./components/widget-doctor-search.php";
            ?>
        </div>
    </div>
    <div class="my-5"></div>
    <div class="px-4 px-lg-5 my-4">
        <div class="">
            <h2 class="py-1">
                Популярные направления
            </h2>
            <div class="widget-directions-popular-compact">
                <?php
                    include "./components/widget-directions-popular.php";
                ?>
            </div>
        </div>
    </div>

    <div class="my-5"></div>

    <div class="px-4 px-lg-5 my-4">
        <?php
            include "./components/widget-book-doctor.php";
        ?>
    </div>


</div>

<?php
    include "./components/page-footer.php";
?>
<?php
    include "./components/footer.php";
?>