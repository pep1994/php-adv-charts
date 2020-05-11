<?php 

  include 'database.php';

  header('Content-Type: application/json');

  
  $fatturato_line = $graphs['fatturato'];
  
  

  echo json_encode($fatturato_line);

?>