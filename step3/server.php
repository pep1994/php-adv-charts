<?php 

  function getLevelByString ($string){

    if ($string == 'guest') {
      
      return 0;

    } elseif ($string == 'employee') {

      return 1;

    } elseif ($string == 'clevel') {

      return 2;

    } else {

      return -1;

    }

  }
  


  include 'database.php';


  header('Content-Type: application/json');

  

  $access = $_GET['level'];

  $fatturato_line = $graphs['fatturato'];

  $fatturato_pie = $graphs['fatturato_by_agent']['data'];

  $team_line = $graphs['team_efficiency']['data'];

  $level_number = getLevelByString($access);

  $result = [];

  if ($level_number >= getLevelByString($graphs['fatturato']['access'])) {

    $result[] = [
      fatturato => $fatturato_line
    ];
   
  }

  if ($level_number >= getLevelByString($graphs['fatturato_by_agent']['access'])) {

    $result[] = [
      
      fatturato_by_agent => [
      labels => [],
      data => [],
      type => $graphs['fatturato_by_agent']['type'],
      access => $graphs['fatturato_by_agent']['access']
      ]
    ];

      for ($i=0; $i < count($result); $i++) {
        
         if (array_key_exists('fatturato_by_agent', $result[$i]) ) {

          foreach ($fatturato_pie as $key => $value) {

            $result[$i]['fatturato_by_agent']['labels'][] = $key;
            $result[$i]['fatturato_by_agent']['data'][] = $value;
       
          }

         }
 

      }
     
    }


  if ($level_number >= getLevelByString($graphs['team_efficiency']['access'])) {


    $result[] = [
      
      team_efficiency => [
        type => $graphs['team_efficiency']['type'],
        team => [],
        data => [],
        access => $graphs['team_efficiency']['access']
      ]
    ];


    for ($i=0; $i < count($result); $i++) {
        
       if (array_key_exists('team_efficiency', $result[$i]) ) {

        foreach ($team_line as $key => $value) {

          $result[$i]['team_efficiency']['team'][] = $key;
          $result[$i]['team_efficiency']['data'][] = $value;
     
        }

       }

    }
   
  }


  echo json_encode($result);

?>