import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  private apiUrl = "http://localhost:3000/v1/users";

  constructor(private http : HttpClient){}

  getAllUsers():Observable<any>{
    return this.http.get(this.apiUrl+"all")
  }
  getAllUsersP():Observable<any>{
    return this.http.get(this.apiUrl+"long-passwords")
  }

  getOneUser():Observable<any>{
    return this.http.get(this.apiUrl+"user")
  }

  updateUser(id:any):Observable<any>{
    return this.http.get(this.apiUrl+"user/" + id)
  }

  getUserDashboard():Observable<any>{
    return this.http.get(this.apiUrl+"user")
  }

  getAdminDashboard():Observable<any>{
    return this.http.get(this.apiUrl+"admin")
  }

  deleteUserById(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+"user/" + id)
  }

  deleteAllUsers():Observable<any>{
    return this.http.delete(this.apiUrl+"users")
  }
}
