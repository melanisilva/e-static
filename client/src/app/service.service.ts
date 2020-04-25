import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pets } from './pages/workshop/view/view.component';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  retrievepets(){
    return this.http.get<Pets[]>('http://localhost:8080/pets/')}


  }
