<?php
require_once './functions/config.php';
session_start();

if(isset($_SESSION['user'])){
  require_once './partials/header.view.php';

  require_once './partials/index.view.php';

  require_once './partials/footer.view.php';
} else {
  header('Location: https://admpanel.hermanitos.org.br/login');
}