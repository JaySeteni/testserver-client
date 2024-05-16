import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  private apiUrl = "http://localhost:3000/v1/users/";

  constructor(private http : HttpClient){}
  // private httpLink = {
  //   getAllUsers: `${this.apiUrl}/user/all`,
  //   getOneUser: `${this.apiUrl}/user`,
  //   getUsersWithLongPasswords: `${this.apiUrl}/user/long-passwords`,
  //   updateUser: (id: string) => `${this.apiUrl}/user/${id}`,
  //   getUserDashboard: `${this.apiUrl}/user`,
  //   getAdminDashboard: `${this.apiUrl}/admin`,
  //   deleteUserById: (id: string) => `${this.apiUrl}/users/${id}`,
  //   deleteAllUsers: `${this.apiUrl}/users`
  // };

  getAllUsers():Observable<any>{
    return this.http.get(this.apiUrl+"all")
  }
  getAllUsersP():Observable<any>{
    return this.http.get(this.apiUrl+"long-passwords")
  }


}
