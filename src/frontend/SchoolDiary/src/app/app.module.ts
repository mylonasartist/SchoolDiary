import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserDataSource } from './datasource/datasource.user';
import { AuthenticationService } from './authentication/authenticationService';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserDataSource, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
