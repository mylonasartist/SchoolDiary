import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authenticationService';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  authenticate() {
  }

}
