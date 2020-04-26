import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Data } from './pages/workshop/view/view.component';

const baseUrl = 'http://localhost:8080/api/demf';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url: string;
  constructor(private http: HttpClient) { }
//calling api for view 
  retrieveData(){
    return this.http.get<Data[]>('http://localhost:8080/api/demf').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
// calling api for add
  addData(adding:object){
    return this.http.post<any>("http://localhost:8080/add/api/demf",adding).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
//callimn api for update
  updateData(updating:object){
    return this.http.post<any>("http://localhost:8080/update/api/demf",updating).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

 
  //delete data with error handled
  delete(year) {
    return this.http.delete(`${baseUrl}/${year}`).pipe(
      retry(1),
      catchError(this.handleError)

    );
  }

  handleError(error) {
    let errorMessage = '';

   if (error.error instanceof ErrorEvent) {

     // client-side error

     errorMessage = `Error: ${error.error.message}`;

   } else {

     // server-side error

     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

   }

   window.alert(errorMessage);

   return throwError(errorMessage);
  }

  }
