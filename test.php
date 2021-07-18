<?php
session_start();
require_once './functions/session.php';


$user = checkUser('saulcova.ec@gmail.com', 'Sllax20.13');

echo $user.name;