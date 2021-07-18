<?php
require_once './functions/config.php';
session_start();

if(!isset($_SESSION['user'])){
  require_once './partials/header.restricted.view.php';
    
  require_once './partials/login.view.php';
    
  require_once './partials/footer.restricted.view.php';
} else {
  header('Location: https://admpanel.hermanitos.org.br');
}