import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataServiceService } from '../../../service.service';
import { Subscription } from 'rxjs';
import { IStatistics } from '../../../models';

@Component({
  selector: 'app-predict-demand-page',
  templateUrl: './predict-demand-page.component.html',
  styleUrls: ['./predict-demand-page.component.scss'],
})
export class PredictDemandPageComponent implements OnInit {
  private statsDataSubscription: Subscription;
  public demand: any = {};
  public accuracy: any = {};
  // Demand Chart
  public lineChartLabels: Label[] = [];
  public demandChartData: ChartDataSets[] = [
    {
      label: 'Electricity Demand',
      data: [],
      fill: false,
    },
  ];

  lineChartOptions = {
    responsive: true,
  };
  lineChartDisplay = {
    display: false,
  };
  lineChartColors: Color[] = [
    {
      borderColor: '#fad76e',
      backgroundColor: '#424874',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  // ---------------------------------------------------//
  constructor(private service: DataServiceService) {}

  ngOnInit() {
    this.statsDataSubscription = this.service
      .getStatistics()
      .subscribe((response: IStatistics[]) => {
        if (response && response instanceof Array && response.length > 0) {
          response.reverse().map((item) => {
            this.lineChartLabels.push(item.year);
            this.demandChartData[0].data.push(parseInt(item.eSales, 10));
          });
        }
      });

    this.service.getForecastValue20().subscribe(
        (res) => {
          console.log(res);
          this.lineChartLabels.push('2038');
          this.demandChartData[0].data.push(parseInt(res.value, 10));
          this.demand = parseInt(res.value, 10);
          this.accuracy = parseFloat(res.accurcy);
        }
      );
  }
}
