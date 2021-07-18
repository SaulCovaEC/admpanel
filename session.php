<?php

$ch = curl_init();

curl_setopt_array($ch, [

    CURLOPT_URL => 'https://api.hermanitos.org.br/session-login',

    CURLOPT_POST => true,

    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $token,
        'Content-Type: application/json',
        'x-li-format: json'
    ],

    CURLOPT_POSTFIELDS => json_encode([
        'mail' => 'saulcova.ec@gmail.com',
        'pass' => 'Sllax20.13'
    ]),

    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_PROTOCOLS => CURLPROTO_HTTPS
]);

$resultado = curl_exec($ch);
curl_close($ch);

var_dump($resultado);