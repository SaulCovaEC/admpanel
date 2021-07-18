<?php

$ch = curl_init();

$mail = "saulcova.ec@gmail.com";
$pass = "Sllax20.13";
$url = "https://api.hermanitos.org.br/session-login?mail=$mail&pass=$pass";

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, false);

$resultado = curl_exec($ch);
curl_close($ch);

var_dump($resultado);