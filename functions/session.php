<?php
session_start();
require_once 'dbcnfg.php';

header("Access-Control-Allow-Origin: *");

function checkUser($mail, $pass) {
    $result = array();
    $userSql = "SELECT id_user, name FROM users WHERE email = '$mail' AND pass = '$pass' LIMIT 1";

    $userResult = mysqli_query($GLOBALS['conn'], $userSql);
    while ($user = mysqli_fetch_object($userResult)) {
        if($user->id_user){
            $_SESSION["id_user"] = $user->id_user;
            $_SESSION["user_name"] = $user->name;
            echo json_encode($user);
        }
    }
}


if($_POST) {
    checkUser($_POST["email"], $_POST["pass"]);
} else if($_GET) {
    checkUser($_GET["email"], $_GET["pass"]);
}