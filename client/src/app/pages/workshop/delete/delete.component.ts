import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }
  passDelete(){
    
    var year = document.getElementById("year");
    var deleting ={
      year:year
    };

    this.service.deleteData(deleting).subscribe(
      (data)=>{
        console.log(data);
        alert ("The data has been deleted")
      }
    )

  }

}
