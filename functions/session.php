<?php
require_once 'dbcnfg.php';

function checkUser($mail, $pass) {
    $result = array();
    $userSql = "SELECT id_user, name FROM users WHERE email = '$mail' AND pass = '$pass' LIMIT 1";

    $userResult = mysqli_query($GLOBALS['conn'], $userSql);
    
    $userReturn = mysqli_fetch_object($userResult);
        
    array_push($result, $userReturn);

    return json_encode($result[0]);
}

if($_POST) {
    checkUser($_POST["email"], $_POST["pass"]);
} else if($_GET) {
    checkUser($_GET["email"], $_GET["pass"]);
}