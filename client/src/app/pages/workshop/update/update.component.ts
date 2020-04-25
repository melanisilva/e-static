import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }

  passUpdate(){
    let year = (<HTMLInputElement>document.getElementById('year')).value;
    let updatePopulation = (<HTMLInputElement>document.getElementById('updatePopulation')).value;
    let updateGDP1 = (<HTMLInputElement>document.getElementById('updateGDP1')).value;
    let updateDom = (<HTMLInputElement>document.getElementById('updateDom')).value;
    let updateGDP2 = (<HTMLInputElement>document.getElementById('updateGDP2')).value;
    let updateGDP3 = (<HTMLInputElement>document.getElementById('updateGDP3')).value;
    let updateAvg = (<HTMLInputElement>document.getElementById('updateAvg')).value;

    var updating ={
      year:year,
      updatePopulation:updatePopulation,
      updateGDP1:updateGDP1,
      updateDom:updateDom,
      updateGDP2:updateGDP2,
      updateGDP3:updateGDP3,
      updateAvg:updateAvg
    };

    this.service.updateData(updating).subscribe(
      (data)=>{
        console.log(data);
      }
    )

  }

}
