import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientsExeterneService {

  constructor(protected http: HttpClient) { }

  getClients() {
    return this.http.get("https://jsonplaceholder.typicode.com/users", this.httpHearder())
  }

  getModeles() {
    return this.http.get("https://jsonplaceholder.typicode.com/users", this.httpHearder())
  }

  public httpHearder() {
    const _header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { "headers": _header }
  }


  public getEtablissements() {
    return this.http.get("https://jsonplaceholder.typicode.com/users", this.httpHearder())
      .pipe(catchError(this.handleError));
  }



  protected handleError(error) {
    return throwError(error);
  }
}
