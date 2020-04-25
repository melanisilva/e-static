import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';



export class Data{
  constructor(
    public year:string,
    public population:string,
    public domesticConsumer:string,
    public eSales:string,
    public gdpagri:string,
    public gdpperCap:string,
    public gdpservice:string,
    public avgElectricity:string,
  ){}
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
data :Data[]
  constructor(private service :DataServiceService) { }

  ngOnInit() {
    this.service.retrieveData().subscribe(
      Response =>{
        this.data =Response
        console.log(this.data)
      }
    )
    
  }

}