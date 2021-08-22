<?php
require_once 'dbcnfg.php';

header("Access-Control-Allow-Origin: *");

function filterPosition($position, $limit = 10, $page = 1) {
    $offset = ($page == 1) ? 0 : ($page*10)-1;
    $result = array();
    $positionSql = "SELECT DISTINCT position FROM `professional_experience` WHERE position != '' AND position LIKE '%$position%';";

    $positionResult = mysqli_query($GLOBALS['conn'], $positionSql);
    while ($position = mysqli_fetch_object($positionResult)) {
      array_push($result, $position);
    }

    echo json_encode($result);
}


if($_POST) {
    filterPosition($_POST["position"], $_POST["limit"], $_POST["page"]);
}