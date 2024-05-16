import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './comps/dashboard/dashboard.component';
import {SignupComponent } from './comps/signup/signup.component';
import { SigninComponent  } from './comps/signin/signin.component';
import { UserComponent } from './comps/user/user.component';
import { AdminComponent } from './comps/admin/admin.component';
import { HomeComponent } from './comps/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registration', component: SignupComponent },
  { path: 'signin', component: SigninComponent  },
  { path: 'signup', component: SignupComponent  },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
