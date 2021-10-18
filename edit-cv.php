<?php
require_once './functions/config.php';
require_once './functions/get-data-user.php';
session_start();

$host = host();
$nameFile = fileName();
$login = $host."/login";

if(isset($_SESSION["id_user"])){
  $idUser = $_GET['id'];
  $dataUser = getDataUser($idUser);
  require_once './partials/header.view.php';
  require_once './partials/edit-cv.view.php';
  require_once './partials/footer.view.php';
} else {
  header("Location: $login");
}