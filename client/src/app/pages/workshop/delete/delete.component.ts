import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
currentTutorial = null;
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }
  

  deleteTutorial() {
    this.service.delete(this.currentTutorial.year)
      .subscribe(
        response => {
          console.log(response);
        
        },
        error => {
          console.log(error);
        });
  }

}
