import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './comps/signup/signup.component';
import { SigninComponent } from './comps/signin/signin.component';
import { HomeComponent } from './comps/home/home.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { AdminComponent } from './comps/admin/admin.component';
import { UserComponent } from './comps/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
