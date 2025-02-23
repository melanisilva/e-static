import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions:{};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

      chart: {
          type: 'area'
      },
      title: {
          text: 'Historic and Estimated Population Growth by Region'
      },
      subtitle: {
          text: 'National Demand Forecast Report 2020-2044 - CEB'
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Domestic',
          data: [291, 320, 369, 435, 493, 561, 618]
      }, {
          name: 'Industrial',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Commercial',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Other',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(
            new Event('resize')
        );
    },300);
  }

}

