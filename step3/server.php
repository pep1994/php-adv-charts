<?php 

  include 'database.php';

  header('Content-Type: application/json');

  $access = $_GET['level'];

  $fatturato_line = $graphs['fatturato'];

  $fatturato_pie = $graphs['fatturato_by_agent']['data'];

  $team_line = $graphs['team_efficiency']['data'];

  if ($access === 'guest') {

    $result = [
      fatturato => $fatturato_line
    ];

  } elseif ($access === 'employee') {

    $result = [
      fatturato => $fatturato_line,
      fatturato_by_agent => [
      labels => [],
      data => [],
      type => $graphs['fatturato_by_agent']['type'],
      access => 'employee'
      ]
    ];

     
      foreach ($fatturato_pie as $key => $value) {

        $result['fatturato_by_agent']['labels'][] = $key;
        $result['fatturato_by_agent']['data'][] = $value;
      
      }
    
     } elseif ($access === 'clevel') {


      $result = [
        fatturato => $fatturato_line,
        fatturato_by_agent => [
        labels => [],
        data => [],
        type => $graphs['fatturato_by_agent']['type'],
        access => 'employee'
        ],
        team_efficiency => [
          type => $graphs['team_efficiency']['type'],
          labels => [],
          data => [],
          access => 'clevel'
        ]
      ];

      
      foreach ($fatturato_pie as $key => $value) {

        $result['fatturato_by_agent']['labels'][] = $key;
        $result['fatturato_by_agent']['data'][] = $value;
      
      }
       

        foreach ($team_line as $key => $value) {

          $result['team_efficiency']['labels'][] = $key;
          $result['team_efficiency']['data'][] = $value;
   
        }
  }

  // foreach ($graphs as $key => $graph) {

  //   $data = $graph['data'];
    
  //   foreach ($data as $key => $value) {
  //     $labels[] = $key;
  //     $number[] = $value;
  //   }

  //   $risultato[] = [
      
  //     data => [
  //       labels => $labels,
  //       data => $number
  //     ]

  //   ];
  // }



  echo json_encode($result);

?>