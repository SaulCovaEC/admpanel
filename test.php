<?php
require_once './functions/session.php';
session_start();

checkUser('saulcova.ec@gmail.com', 'Sllax20.13');

if(isset($_SESSION['user'])){
  echo "con sesion";
} else {
  echo "sin sesion";
}