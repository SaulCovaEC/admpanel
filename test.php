<?php
session_start();
require_once './functions/session.php';

if(!isset($_SESSION['user'])){
  checkUser('saulcova.ec@gmail.com', 'Sllax20.13');
}

if(isset($_SESSION['user'])){
  echo "con sesion";
} else {
  echo "sin sesion";
}