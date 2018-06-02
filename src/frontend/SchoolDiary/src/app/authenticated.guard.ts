import { AuthenticationService } from './authentication/authenticationService';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticatedGuard {
    constructor(private router: Router,
        private authenticationService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let result = true;
        if (!this.authenticationService.isAuthenticated()) {
            this.router.navigateByUrl('/');
            result = false;
        }
        return result;
    }
}
