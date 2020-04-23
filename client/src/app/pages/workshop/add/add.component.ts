import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  template:'<input [(ngModel)] ="name" type ="text"> {{name}} ',
styles :[]
  
})
export class AddComponent implements OnInit {
public name="";
  constructor() { }

  ngOnInit(): void {
  }

}
