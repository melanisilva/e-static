import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  LoginUser()
  {
    if(this.username== "admin" && this.password=="12345")
  {
    console.log("Welcome")
    alert("log in succesfull");
    this.router.navigateByUrl('/');
    
  }else{
    alert("invalid");
  }
  }
}