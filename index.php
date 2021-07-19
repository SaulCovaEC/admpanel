<?php
require_once './functions/config.php';
session_start();

$host = host();
$login = $host."/login";

if(isset($_SESSION["id_user"])){
  require_once './partials/header.view.php';
  require_once './partials/index.view.php';

  require_once './partials/footer.view.php';
} else {
  header("Location: $login");
}