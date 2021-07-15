<?php

function host(){
  $host = ($_SERVER['HTTP_HOST'] == 'localhost') ? "http://localhost/admpanel" : "https://admpanel.hermanitos.org.br/";

  return $host;
}