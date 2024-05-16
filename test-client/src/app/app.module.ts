import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './comps/signup/signup.component';
import { SigninComponent } from './comps/signin/signin.component';
import { HomeComponent } from './comps/home/home.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { UserComponent } from './comps/user/user.component';
import { NavigationComponent } from './comps/navigation/navigation.component';
import { AuthorizationComponent } from './comps/authorization/authorization.component';

import { AuthInterceptor } from './Interface/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    UserComponent,
    NavigationComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass:  AuthInterceptor,
        multi: true
      }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
