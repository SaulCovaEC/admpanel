<?php
session_start();
require_once './functions/session.php';


$user = json_decode(checkUser('saulcova.ec@gmail.com', 'Sllax20.13'));

var_dump($user);