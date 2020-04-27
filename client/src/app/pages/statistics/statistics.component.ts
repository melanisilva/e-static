import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataServiceService } from '../../service.service';
import {Subscription} from 'rxjs';
import {IStatistics} from '../../models';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  private statsDataSubscription: Subscription;
  // Demand Chart
  public lineChartLabels: Label[] = [];
  public demandChartData: ChartDataSets[] = [
    {
      label: 'Electricity Demand',
      data: [],
      fill: false,
    }
  ];

  lineChartOptions = {
    responsive: true,
  };
  lineChartDisplay = {
    display : false,
  };
  lineChartColors: Color[] = [
    {
      borderColor: '#0c7b93',
      backgroundColor: 'rgba(166,177,225,1)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
// ---------------------------------------------------//
// GDP chart
  public gdpChartData: ChartDataSets[] = [
    {
      label: 'Gross Domestic Product (GDP)',
      data: []
    }
  ];
// Population chart
  public populationChartData: ChartDataSets[] = [
    {
      label: 'Population',
      data: []
    }
  ];


  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.statsDataSubscription = this.service.getStatistics()
      .subscribe((response: IStatistics[]) => {
        if (response && response instanceof Array && response.length > 0) {
          response.reverse().map((item) => {
            this.lineChartLabels.push(item.year);
            this.demandChartData[0].data.push(parseInt(item.eSales, 10));
            this.gdpChartData[0].data.push(parseInt(item.gdpservice, 10));
            this.populationChartData[0].data.push(parseInt(item.population, 10));
          });
        }
      });
  }
}
