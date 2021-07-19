<?php
if ($_SERVER['HTTP_HOST'] == 'localhost') {
  $host = 'localhost';
  $dbname = 'hermanitos';
  $username = 'saulcova';
  $password = 'Sllax20.13';
} else {
  $host = 'localhost';
  $dbname = 'u308122992_hrmnts1';
  $username = 'u308122992_usrrtdb';
  $password = 'ADbd1Hrmnts';
}

$conn = mysqli_connect($host, $username, $password, $dbname);


function consult_db($sql) {
  $queryresutl = mysqli_query($GLOBALS['conn'], $sql);
  $resultquery = mysqli_fetch_array($queryresutl);
  return $resultquery;
}
