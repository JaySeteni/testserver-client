import { Component } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) { }

  registerUser(userData: any) {
    this.authService.register(userData).subscribe(
      response => {
        console.log('User registered successfully', response);
      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }

  signInUser(userData: any) {
    this.authService.signIn(userData).subscribe(
      response => {
        console.log('User signed in successfully', response);
      },
      error => {
        console.error('Error signing in user', error);
      }
    );
  }
}

