import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication/authenticationService';

@Injectable()
export class AdminGuard {
    constructor(private router: Router,
        private authenticationService: AuthenticationService) {}

    canActivate(): boolean {
        let result = true;
        if (!this.authenticationService.admin) {
            this.router.navigateByUrl('/');
            result = false;
        }
        return result;
    }
}
