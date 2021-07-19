<?php
require_once './functions/config.php';
session_start();

$host = host();
if(isset($_SESSION["id_user"])){
  header("Location: $host");
} else {
  require_once './partials/header.restricted.view.php';
    
  require_once './partials/login.view.php';
    
  require_once './partials/footer.restricted.view.php';
}