import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserDataSource } from './datasource/datasource.user';
import { AuthenticationService } from './authentication/authenticationService';
import { AppRoutingModule } from './/app-routing.module';
import { DiariesComponent } from './diaries/diaries.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DiariesComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserDataSource, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
