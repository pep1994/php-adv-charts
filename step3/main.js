$(document).ready(init);

  
  function init () { 

    $('#level-access').val("");
    $('#level-access').change(ajaxCall);

   }


  function ajaxCall () { 

    var level = $('#level-access').val();

    $.ajax({
      method: "GET",
      url: "server.php",
      dataType: "json",
      data: {
        level: level
      },
      success: function (data) {

        console.log(data);

        for (var key in data) {

           printGraphs(data, key);

        }
     
      },
      error: function (err) { 
  
        console.error(err);
        
       }
    });
    
   }


   function printGraphs(data, key) {

    console.log(data[key]);

    var ctx = $('#' + data[key].type);

    var label = monthsList();

    if (data[key].type == 'line') {
      
       if (data[key]['team']) {

         ctx = $('#multi-line');
         
         var dataset = [
           {
           label: 'Team1',
           data: data[key].data[0],
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
             data: data[key].data[1],
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
             data: data[key].data[2],
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
       
         ];

       } else {

           dataset = [{
             label: 'Vendite',
             data: data[key].data,
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
           
           }];
       }

    } else {

         dataset = [{
           data: data[key].data,
           backgroundColor: [
             'rgba(255, 251, 0, .8)',
             'rgba(0, 249, 0, .8)',
             'rgba(4, 51, 255, .8)',
             'rgba(255, 80, 0, .8)'
           ],
           borderColor: [
             'rgba(255, 251, 0, 1)',
             'rgba(0, 249, 0, 1)',
             'rgba(4, 51, 255, 1)',
             'rgba(255, 80, 0, 1)'
           ],
           hoverBackgroundColor: [
             'rgba(255, 255, 255)',
             'rgba(255, 255, 255)',
             'rgba(255, 255, 255)',
             'rgba(255, 255, 255)'
           ],
           
           borderWidth: 1
         
       }];

     }

    if (data[key]['labels']) {

      label = data[key].labels;

    } 

    var myChart = new Chart(ctx, {
     type: data[key].type,
     data: {
         labels: label,
         datasets: dataset
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
           text: key,
           fontSize: 20,
           lineHeight: 3
         },
         legend: {
           align: 'end'
         } 
     }
   });

  }

  
  function monthsList() { 

    moment.locale('it');

    var months = moment.months();
    
    return months;

  }
