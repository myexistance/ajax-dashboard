var grades = [
  {
    "name" : "Joon MK1",
    "Percentage" : 78,
  },
  {
    "name" : "Joon MK2",
    "Percentage" : 82,
  },
  {
    "name" : "Joon MK3",
    "Percentage" : 90,
  },
  {
    "name" : "Joon MK4",
    "Percentage" : 88,
  }
];





// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it.
function drawDashboard() {
  console.log(grades[0].name , grades[0].Percentage) //arrayToDataTable example
  // Create our data table.
  // var data = google.visualization.arrayToDataTable([
  //   ["Name", "Grade Percentage"],
  //   [grades[0].name , grades[0].Percentage ],
  //   [grades[1].name , grades[1].Percentage],
  //   [grades[2].name , grades[2].Percentage],
  //   [grades[3].name , grades[3].Percentage]
  // ]);

  var data = new google.visualization.DataTable(); // for loop example
      data.addColumn('string','Name');
      data.addColumn('number','Percentage');
      for (var i=0; i<grades.length; i++) {
        data.addRow([grades[i].name, grades[i].Percentage]);
      }



  // Create a dashboard.
  var dashboard = new google.visualization.Dashboard(
      document.getElementById('dashboard_div'));

  // Create a range slider, passing some options
  var donutRangeSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'filter_div',
    'options': {
      'filterColumnLabel': 'Percentage'
    }
  });

  // Create a pie chart, passing some options
  var pieChart = new google.visualization.ChartWrapper({
    'chartType': 'PieChart',
    'containerId': 'chart_div',
    'options': {
      'width': 300,
      'height': 300,
      'pieSliceText': 'value',
      'legend': 'right'
    }
  });

  // Establish dependencies, declaring that 'filter' drives 'pieChart',
  // so that the pie chart will only display entries that are let through
  // given the chosen slider range.
  dashboard.bind(donutRangeSlider, pieChart);

  // Draw the dashboard.
  dashboard.draw(data);
}
