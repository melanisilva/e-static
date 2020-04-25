import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './pages/workshop/view/view.component';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  retrieveData(){
    return this.http.get<Data[]>('http://localhost:8080/api/demf')}

  addData(adding:object){
    return this.http.post<any>("http://localhost:8080/add/",adding)
  }
  updateData(updating:object){
    return this.http.post<any>("http://localhost:8080/update/",updating)
  }


  }
