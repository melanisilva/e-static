import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: String;
  constructor() { }

  ngOnInit() {
  }

  LoginUser()
  {
    if(this.username== "Admin" && this.password=="12345")
  {
    console.log("Welcome")
  }
  }
    
}