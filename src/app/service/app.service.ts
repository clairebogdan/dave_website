import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private HOST = 'TODO';

  getData(_data: any): Observable<any> {
    return this.http.get(`${this.HOST}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.HOST}/endpiont`, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
