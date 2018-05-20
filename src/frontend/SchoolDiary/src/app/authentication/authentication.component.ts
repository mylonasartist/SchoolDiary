import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authenticationService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService,
    private location: Location) { }

  ngOnInit() {
  }

  authenticate() {
    const status = this.authenticationService.authenticate(this.username, this.password);
    if (!status.authenticated) {
      this.errorMessage = status.errorMessage;
    } else {
      this.location.back();
    }
  }

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}
