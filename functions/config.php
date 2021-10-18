<?php

function host(){
  $host = ($_SERVER['HTTP_HOST'] == 'localhost') ? "http://localhost/admpanel" : "https://admpanel.hermanitos.org.br";

  return $host;
}

function fileName() {
  return ($_SERVER['HTTP_HOST'] == 'localhost') ? substr($_SERVER['PHP_SELF'], 10, -4) : substr($_SERVER['PHP_SELF'], 1, -4);
}