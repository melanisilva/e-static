import { Component, OnInit } from '@angular/core';
import { XhrFactory } from '@angular/common/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    
  }
  onClickMe(){
    console.log("it works");
  }
<<<<<<< HEAD

  myfuntion(){
    console.log("Fooo");
  }

=======
>>>>>>> 2c63757756a205b87a0479bc15f14b9b8b201053
}
