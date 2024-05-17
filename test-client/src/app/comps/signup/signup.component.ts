import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth-token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{

  submitted = false;
  showPassword = false;

  signupForm = this.fb.group({

  email: ['', [Validators.required, Validators.email]],
  password: ['',[Validators.required]]
})

  constructor (private fb: FormBuilder,private auth:AuthService) {}

  onSubmit(): void {
    console.log('submitted successfully', this.signupForm.value,
      this.signupForm.invalid
    )

    this.auth.register( this.signupForm.value).subscribe((data)=>{
      console.log(data)
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
