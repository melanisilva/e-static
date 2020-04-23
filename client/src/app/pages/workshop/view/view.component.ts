import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';


export class Pets{
  constructor(
    public name:string,
    public species:string,
    public breed:string,
  ){}
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
pets :Pets[]
  constructor(private service :DataServiceService) { }

  ngOnInit() {
    this.service.retrievepets().subscribe(
      Response =>{
        this.pets =Response
        console.log(this.pets)
      }
    )
    
  }

}
