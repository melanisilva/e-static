import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets} from 'chart.js';
import {DataServiceService} from '../../../service.service';
import {IStatistics} from '../../../models';

@Component({
  selector: 'app-predict-demand-fifty-years',
  templateUrl: './predict-demand-fifty-years.component.html',
  styleUrls: ['./predict-demand-fifty-years.component.scss']
})
export class PredictDemandFiftyYearsComponent implements OnInit {

  private statsDataSubscription: Subscription;
  public demand: any = {};
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
        this.demandChartData[0].data.push(6000);
      }
    );

    this.service.getForecastValue50().subscribe(
      (res) => {
        console.log(res);
        this.lineChartLabels.push('2058');
        this.demandChartData[0].data.push(parseInt(res.value, 10));
        this.demand = parseInt(res.value, 10);
      }
    );
  }

}
