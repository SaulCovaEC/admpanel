<?php
require_once 'dbcnfg.php';

header("Access-Control-Allow-Origin: *");

function checkUser($mail, $pass) {
    $result = array();
    $userSql = "SELECT id_user, name FROM users WHERE email = '$mail' AND pass = '$pass' LIMIT 1";

    //$userResult = mysqli_query($GLOBALS['conn'], $userSql);
    
    //$userReturn = mysqli_fetch_object($userResult);
        
    //array_push($result, $userReturn);

    //echo json_encode($result[0]);
    echo $userSql;
}


if($_POST) {
    checkUser($_POST["mail"], $_POST["pass"]);
} else if($_GET) {
    checkUser($_GET["mail"], $_GET["pass"]);
}