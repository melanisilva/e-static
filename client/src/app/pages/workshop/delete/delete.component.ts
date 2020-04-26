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
          this.message = 'The data was succesfully deleted';
        },
        error => {
          console.log(error);
        });
  }

}
