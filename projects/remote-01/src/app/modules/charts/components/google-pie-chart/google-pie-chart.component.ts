import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google-pie-chart',
  templateUrl: './google-pie-chart.component.html',
  styleUrls: ['./google-pie-chart.component.scss']
})
export class GooglePieChartComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    google.charts.load('current', {'packages':['corechart']})
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 2],
      ['Sausage',3],
      ['Olives', 1], 
      ['Cheese', 3],
      ['Pepperoni', 3]
    ]);

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                   'width':500,
                   'height':400};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

}
