import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  template:'<input [(ngModel)] ="name" type ="text"> {{name}} '
  
})
export class AddComponent implements OnInit {
public name="";
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }

  passAdd(){
    let addYear = (<HTMLInputElement>document.getElementById('addYear')).value;
    let addPopulation = (<HTMLInputElement>document.getElementById('addPopulation')).value;
    let addGDP1 = (<HTMLInputElement>document.getElementById('addGDP1')).value;
    let addDom = (<HTMLInputElement>document.getElementById('addDom')).value;
    let addGDP2 = (<HTMLInputElement>document.getElementById('addGDP2')).value;
    let addGDP3 = (<HTMLInputElement>document.getElementById('addGDP3')).value;
    let addAvg = (<HTMLInputElement>document.getElementById('addAvg')).value;

    var adding ={
      addYear:addYear,
      addPopulation:addPopulation,
      addGDP1:addGDP1,
      addDom:addDom,
      addGDP2:addGDP2,
      addGDP3:addGDP3,
      addAvg:addAvg
    };

    this.service.addData(adding).subscribe(
      (data)=>{
        console.log(data);
      }
    )

  }

}
