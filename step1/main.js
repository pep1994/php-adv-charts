$(document).ready(function () {

  $.ajax({
    method: "GET",
    url: "server.php",
    dataType: "json",
    success: function (data) {

        printLine(data);
      
    },
    error: function (err) { 

      console.error(err);
      
     }
  });


  function printLine(data) {

    var ctx = $('#line');
  
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
          datasets: [{
              label: 'Vendite',
              data: data,
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

  
});