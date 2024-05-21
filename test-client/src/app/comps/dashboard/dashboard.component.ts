import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../Service/master-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  allUser :any = []
  user : any = []
 
  constructor(private masterServer: MasterService){}

  ngOnInit(): void {
      this.getUsers()
      this.getUsersP()
      this. getOneUser()
  }

  getUsers(){

    this.masterServer.getAllUsers().subscribe({
      next: data =>{
      this.allUser = data.usersAll
        console.log(data.usersAll)
      },
      error: err=>{
        console.log(err)
      }
    })
  }
  getUsersP(){
    this.masterServer.getAllUsersP().subscribe({
      next: data =>{
        console.log(data)
      },
      error: err=>{
        console.log(err)
      }
    })
  }
  getOneUser(){
    this.masterServer.getOneUser().subscribe({
      next: data =>{
        this.user = data.user
        console.log(data)
      },
      error: err=>{
        console.log(err)
      }
    })
  }
}

