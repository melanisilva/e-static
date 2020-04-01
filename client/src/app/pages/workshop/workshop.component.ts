import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  year = [1995,1996,1997,1998];
  constructor(
  ) { }
  ngOnInit() {
  }

}
