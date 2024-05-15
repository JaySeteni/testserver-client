import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private baseUrl = 'http://your-backend-url/api';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  signIn(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, userData);
  }
}
