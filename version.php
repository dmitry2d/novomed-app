<?php
$jsonData = array(
    'version' => 4,
);
header('Content-Type: application/json');
echo json_encode($jsonData);
?>