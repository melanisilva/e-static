import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],

})
export class AddComponent implements OnInit {

  DemandForecast = {
    year: '',
    population:'',
    domesticConsumer:'',
    avgElectricity:'',
    eSales:'',
    eClass:'',
    gdpservice:'',
    gdpperCap:'',
    gdpagri:''
  };
  submitted = false;

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }

  saveDF() {
    const data = {
      year: this.DemandForecast.year,
      population: this.DemandForecast.population,
      domesticConsumer: this.DemandForecast.domesticConsumer,
      avgElectricity: this.DemandForecast.avgElectricity,
      eSales: this.DemandForecast.eSales,
      eClass: this.DemandForecast.eClass,
      gdpservice: this.DemandForecast.gdpservice,
      gdpperCap: this.DemandForecast.gdpperCap,
      gdpagri: this.DemandForecast.gdpagri,
    };

    console.log(this.DemandForecast);
    this.service.addData(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });



  }

  newDF() {
    this.submitted = false;
    this.DemandForecast = {
      year: '',
      population:'',
      domesticConsumer:'',
      avgElectricity:'',
      eSales:'',
      eClass:'',
      gdpservice:'',
      gdpperCap:'',
      gdpagri:''
    };
  }


}
