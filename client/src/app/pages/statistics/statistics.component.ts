import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl:'./statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [173,185,230,256,257,303,334,344,393,430,496,527,557,655,678,708,762,711,785,858,950,981,1066,1173], label: 'Electricity Demand' },
  ];

  lineChartLabels: Label[] = ['1977', '1978', '1979', '1980', '1981', '1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#0c7b93'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
