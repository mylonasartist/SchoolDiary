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
import { UserComponent } from './user/user.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { AdminGuard } from './admin.guard';
import { SubjectService } from './domain/subject/service/subject.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './controls/ngbd-modal-content/ngbd-modal-content.component';
import { AppModalContentService } from './controls/ngbd-modal-content/app.modal.content.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DiariesComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    NgbdModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    UserDataSource,
    AuthenticationService,
    AuthenticatedGuard,
    AdminGuard,
    SubjectService,
    AppModalContentService
  ],
  entryComponents: [
    NgbdModalContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
