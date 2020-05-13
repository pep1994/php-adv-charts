$(document).ready(init);

  
  function init () { 

    $('#level-access').val("");
    $('#level-access').change(ajaxCall);

   }

   var listaGraficiPopolata = [];


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

        for(var i = 0; i < listaGraficiPopolata.length; i++) {

          listaGraficiPopolata[i].destroy();

        }

        listaGraficiPopolata = [];

        for (var key in data) {

           printGraphs(data, key);

        }
     
      },
      error: function (err) { 
  
        console.error(err);
        
       }
    });
    
   }

   function generateRandomNumber (max, min) {

      return Math.floor(Math.random() * (max - min) + min) ;
     
   }

   console.log(generateRandomNumber(5, 0));
   


   function printGraphs(data, key) {

    console.log(data[key]);

    var ctx = $('#' + data[key].type);

    var label = monthsList();

    if (data[key].type == 'line') {
      
       if (data[key]['team']) {

         ctx = $('#multi-line');

         var dataset = [];
         var team;

         for (var i = 0; i < data[key]['team'].length; i++) {

            var arrayLineColor = [];
            var arrayLineBorderColor = [];

            var colorLine = 'rgba(' + generateRandomNumber(256, 0) + ", " + generateRandomNumber(256, 0) + ", " + generateRandomNumber(256, 0) + ", " + 0 + ')';

            arrayLineColor.push(colorLine);

            colorLine = 'rgba(' + generateRandomNumber(256, 0) + ", " + generateRandomNumber(256, 0) + ", " + generateRandomNumber(256, 0) + ", " + 1 + ')';

            arrayLineBorderColor.push(colorLine);

            for (var index = 0; index < 11; index++) {
              
              arrayLineColor.push(colorLine);
              arrayLineBorderColor.push(colorLine);
            }

             team = {
               label: data[key]['team'][i],
               data:  data[key]['data'][i],
               backgroundColor: arrayLineColor,
               borderColor: arrayLineBorderColor,
               borderWidth: 3
             };

             dataset.push(team);
             console.log(dataset);
         }
         
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

      var arrayBackgroundColor = [];
      var arrayBorderColor = [];
      var arrayHoverColor = [];
     
        for (var j = 0; j < data[key]['labels'].length; j++) {
        
           var colorElement = 'rgba(' + generateRandomNumber(256, 0) + ", " + generateRandomNumber(256, 0) + ", " + generateRandomNumber(256, 0) + ", " + 1 + ')';
           var hoverColorElement = 'rgb(255, 255, 255)';
           arrayBackgroundColor.push(colorElement);
           arrayBorderColor.push(colorElement);
           arrayHoverColor.push(hoverColorElement);

        }

        console.log(arrayBackgroundColor);
        
         dataset = [{
           
           data: data[key].data,
           backgroundColor: arrayBackgroundColor,
           borderColor: arrayBorderColor,
           hoverBackgroundColor: arrayHoverColor,
           borderWidth: 1
         
       }];

       console.log(dataset);

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

   listaGraficiPopolata.push(myChart);

  }


  function monthsList() { 

    moment.locale('it');

    var months = moment.months();
    
    return months;

  }
