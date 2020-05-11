<?php 

  include 'database.php';

  header('Content-Type: application/json');

  $pie_result = [
    labels => [],
    data => []
  ];

  $fatturato_pie = $graphs['fatturato_by_agent']['data'];
  
  foreach ($fatturato_pie as $key => $value) {
    $pie_result['labels'][] = $key;
    $pie_result['data'][] = $value;
    
    
  }
  

  echo json_encode($pie_result);

?>