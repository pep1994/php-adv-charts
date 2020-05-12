<?php 

  include 'database.php';

  header('Content-Type: application/json');

  
  $fatturato_line = $graphs['fatturato'];

  $result = [
    fatturato => $graphs['fatturato'],
    fatturato_by_agent => [
    labels => [],
    data => [],
    type => $graphs['fatturato_by_agent']['type']
    ],
    team_efficiency => [
      type => $graphs['team_efficiency']['type'],
      labels => [],
      data => [],
    ]
  ];

  


  
  $fatturato_pie = $graphs['fatturato_by_agent']['data'];
  
  foreach ($fatturato_pie as $key => $value) {

    $result['fatturato_by_agent']['labels'][] = $key;
    $result['fatturato_by_agent']['data'][] = $value;
  
  }

  $team_line = $graphs['team_efficiency']['data'];

  foreach ($team_line as $key => $value) {

    $result['team_efficiency']['labels'][] = $key;
    $result['team_efficiency']['data'][] = $value;
   
  }
  

  echo json_encode($result);

?>