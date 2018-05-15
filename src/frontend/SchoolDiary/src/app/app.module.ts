import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserDataSource } from './datasource/datasource.user';
import { AuthenticationService } from './authentication/authenticationService';
import { AppRoutingModule } from './/app-routing.module';
import { DiariesComponent } from './diaries/diaries.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DiariesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserDataSource, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
