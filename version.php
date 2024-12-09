<?php
$jsonData = array(
    'version' => '1.0.4',
);
header('Content-Type: application/json');
echo json_encode($jsonData);
?>