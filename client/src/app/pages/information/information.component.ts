import { Component, OnInit } from '@angular/core';
import { XhrFactory } from '@angular/common/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  title = "Information";
  public jaffna = "helloooo";


  constructor() {}
  ngOnInit() {}
<<<<<<< HEAD
=======

    Jaffna(){
      console.log("heeey");
      this.jaffna = "working!!!!!!!!!!!!!!!!!!";
    }
    
>>>>>>> fd85421cd1a64c02f9bdfb5d741fe010ed89e04f
}
