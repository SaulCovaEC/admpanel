<?php
session_start();
require_once './functions/session.php';


$user = checkUser('saulcova.ec@gmail.com', 'Sllax20.13');

if($user) {
  $_SESSION['id_user'] = $user['id'];
  $_SESSION['name'] = $user['name'];
  echo $_SESSION["name"];
} else {
  echo $user;
  echo "\nNo hay sesion";
}