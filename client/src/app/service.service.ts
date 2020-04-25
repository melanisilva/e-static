import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pets } from './pages/workshop/view/view.component';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  retrievepets(){
    return this.http.get<Pets[]>('http://localhost:8080/pets/').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addData(adding:object){
    return this.http.post<any>("http://localhost:8080/add/",adding).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  updateData(updating:object){
    return this.http.post<any>("http://localhost:8080/update/",updating).pipe(
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
