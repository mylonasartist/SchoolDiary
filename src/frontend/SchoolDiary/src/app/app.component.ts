import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authenticationService';
import { SdAttrDirective } from './sd.attr.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly authenticationService: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  logout() {
    this.authenticationService.logout();
    // TODO navigate out of diaries if currently on it
  }
}
