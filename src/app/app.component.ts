import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chart-tooltip-issue';
  public Highcharts = Highcharts;

  public chartOptions: any = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: [{
      categories: ['Prior', 'YTD', 'Rolling'],
      left: '0%',
      offset: 0,
      width: '10%'
    },
    {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      left: '15%',
      offset: 0,
      width: '85%'
    }],
    yAxis: [{ // Primary yAxis
      left: '0%',
      min: 0,
      offset: 0,
      width: '10%',
      labels: {
        format: '{value}°C',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      left: '15%',
      min: 0,
      offset: 0,
      width: '80%',
      title: {
        text: 'Rainfall',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value} mm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: false
    },
    series: [{
      color: 'Red',
      name: 'Rainfall',
      type: 'column',
      xAxis: 0,
      yAxis: 0,
      data: [49.9, 71.5, 106.4],
      id: 'Rainfall',
      tooltip: {
        valueSuffix: ' mm'
      }
    },
    {
      color: 'Red',
      name: 'Rainfall',
      type: 'column',
      xAxis: 1,
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      linkedTo: 'Rainfall',
      tooltip: {
        valueSuffix: ' mm'
      }
    }, {
      color: '#111122',
      name: 'Temperature',
      type: 'spline',
      xAxis: 0,
      yAxis: 0,
      data: [7.0, 6.9, 9.5],
      id: 'Temperature',
      tooltip: {
        valueSuffix: '°C'
      }
    },
    {
      color: '#111122',
      name: 'Temperature',
      type: 'spline',
      xAxis: 1,
      yAxis: 1,
      linkedTo: 'Temperature',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: '°C'
      }
    }]
  };

  ngOnInit(): void {
  }
}
