
<?php
    include "./components/header.php";
?>

<div class="page-grid">
    <div class="__left">
        <?php
            include "./components/main-menu.php";
        ?>
    </div>
    <div class="__right">

        <?php
            include "./components/page-header.php";
        ?>
        <div class="p-4 p-lg-5">
            <div class="">
                <?php
                    include "./components/widget-welcome.php";
                ?>
            </div>
            <div class="row row-cols-1 row-cols-xl-2 g-4 g-lg-5">
                <div class="col">
                    <?php
                        include "./components/widget-book.php";
                    ?>
                    <div class="my-4 my-lg-5"></div>
                    <?php
                        include "./components/widget-book-banner.php";
                    ?>
                </div>
                <div class="col">
                    <?php
                        include "./components/widget-analis.php";
                    ?>
                </div>
            </div>
        </div>

    </div>
</div>

<?php
    include "./components/page-footer.php";
?>
<?php
    include "./components/footer.php";
?>