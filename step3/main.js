$(document).ready(function () {

  $.ajax({
    method: "GET",
    url: "server.php",
    dataType: "json",
    success: function (data) {

        printLine(data);
        console.log(data);

        printPie(data);

        printMultiLine(data);
        
      
    },
    error: function (err) { 

      console.error(err);
      
     }
  });



  function monthsList() { 

    moment.locale('it');
    return moment.months();

   }


  function printLine(result) {

    var ctx = $('#line');
  
    var myChart = new Chart(ctx, {
      type: result.fatturato.type,
      data: {
          labels: monthsList(),
          datasets: [{
              label: 'Vendite',
              data: result.fatturato.data,
              backgroundColor: [
                'rgba(150, 33, 146, .7)',
                'rgba(82, 40, 204, 1)',
                'rgba(4, 51, 255, 1)',
                'rgba(0, 146, 146, 1)',
                'rgba(0, 249, 0, 1)',
                'rgba(202, 250, 0, 1)',
                'rgba(255, 251, 0, 1)',
                'rgba(255, 199, 0, 1)',
                'rgba(255, 147, 0, 1)',
                'rgba(255, 80, 0, 1)',
                'rgba(255, 38, 0, 1)',
                'rgba(216, 34, 83, 1)'
              ],
              borderColor: [
                'rgba(150, 33, 146, 1)',
                'rgba(82, 40, 204, 1)',
                'rgba(4, 51, 255, 1)',
                'rgba(0, 146, 146, 1)',
                'rgba(0, 249, 0, 1)',
                'rgba(202, 250, 0, 1)',
                'rgba(255, 251, 0, 1)',
                'rgba(255, 199, 0, 1)',
                'rgba(255, 147, 0, 1)',
                'rgba(255, 80, 0, 1)',
                'rgba(255, 38, 0, 1)',
                'rgba(216, 34, 83, 1)'
              ],
              
              hoverBackgroundColor: [
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)'
              ],
              
              borderWidth: 3
            
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          animation: {
            duration: 1500,
            easing: 'easeInBounce'
          },
          title: {
            display: true,
            text: "Line",
            fontSize: 20,
            lineHeight: 3
          },
          legend: {
            align: 'end'
          } 
      }
  });

}




function printPie(result) {

  var ctx = $('#pie');

  var myChart = new Chart(ctx, {
    type: result.fatturato_by_agent.type,
    data: {
        labels: result.fatturato_by_agent.labels,
        datasets: [{
            label: 'Vendite',
            data: result.fatturato_by_agent.data,
            backgroundColor: [
              'rgba(255, 251, 0, 1)',
              'rgba(255, 199, 0, 1)',
              'rgba(255, 147, 0, 1)',
              'rgba(255, 80, 0, 1)'
            ],
            borderColor: [
              'rgba(255, 251, 0, 1)',
              'rgba(255, 199, 0, 1)',
              'rgba(255, 147, 0, 1)',
              'rgba(255, 80, 0, 1)'
            ],
            hoverBackgroundColor: [
              'rgba(255, 255, 255)',
              'rgba(255, 255, 255)',
              'rgba(255, 255, 255)',
              'rgba(255, 255, 255)'
            ],
            
            borderWidth: 1
          
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        
        title: {
          display: true,
          text: "Pie",
          fontSize: 20,
          lineHeight: 3
        },
        legend: {
          align: 'end'
        } 
    }
});

}


function printMultiLine(result) {

  var ctx = $('#multi-line');

  var myChart = new Chart(ctx, {
    type: result.team_efficiency.type,
    data: {
        labels: monthsList(),
        datasets: [{
            label: 'Team1',
            data: result.team_efficiency.data[0],
            backgroundColor: [
              'rgba(255, 80, 0, 0)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)'
            ],
            borderColor: [
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 80, 0, 1)'
            ],
            

            borderWidth: 3
          
        },

        {
          label: 'Team2',
          data: result.team_efficiency.data[1],
          backgroundColor: [
            'rgba(4, 51, 255, 0)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)'
          ],
          borderColor: [
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)',
            'rgba(4, 51, 255, 1)'
          ],
          
         
          borderWidth: 3
        
      },

      {
        label: 'Team3',
        data: result.team_efficiency.data[2],
        backgroundColor: [
          'rgba(0, 249, 0, 0)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)'
        ],
        borderColor: [
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)',
          'rgba(0, 249, 0, 1)'
        ],
        
        borderWidth: 3
      
    }
      
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        
        title: {
          display: true,
          text: "Multi-line",
          fontSize: 20,
          lineHeight: 3
        },
        legend: {
          align: 'end'
        } 
    }
});

}
 
});