import { Component, OnInit } from '@angular/core';
import { XhrFactory } from '@angular/common/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent{
  title = "Information";
  public infoTitle = " distribution division";


  constructor() {}
  ngOnInit() {}


  division1(){
    this.infoTitle = "division 1!!!"
  }

  division2(){
    this.infoTitle = "division 2!!!"
  }

  division3(){
    this.infoTitle = "division 3!!!"
  }
    division4(){
      this.infoTitle = "division 4!!!"
    }

}
