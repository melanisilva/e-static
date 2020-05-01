import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
currentTutorial = null;
message = '';
  constructor(private service:DataServiceService) { }

  ngOnInit() {
  }

  deleteTutorial() {

    let year=(<HTMLInputElement>document.getElementById('year')).value;
    var deleting={
      year:year
    }
    this.service.delete(year).subscribe(
        response => {
          console.log(response);
          console.log("The data was succesfully deleted")
          if (response==true){
            alert(" Data deleted");}
            else{
              alert("Year not found");
            }
        },
        error => {
          console.log(error);
          alert("Year not found");
        });
  }

}
