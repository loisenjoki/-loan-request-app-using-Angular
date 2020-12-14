import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loan } from '../shared/loan';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  // HttpClient API post() method => Create employee
  createloanRequest(loan): Observable<Loan> {
    return this.http.post<Loan>(this.apiURL + '/api/loan/request', JSON.stringify(loan), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
   getstatement(): Observable<any[]> {
      return this.http.get<any[]>(this.apiURL + '/api/loan/statement/4');
    }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
