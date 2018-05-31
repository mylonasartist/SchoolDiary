import { Injectable } from '@angular/core';
import { UserDataSource } from '../datasource/datasource.user';
import { User } from './user';
import { AuthenticationStatus } from './authentication-status';
import { Role } from './Role';

@Injectable()
export class AuthenticationService {
    constructor (private userDatasource: UserDataSource) {}

    private user: User = null;

    get userName(): string {
        return this.user && this.user.name;
    }

    get admin(): boolean {
        return this.user && this.user.roles && this.user.roles.includes(Role.Admin);
    }

    authenticate(username: string, password: string): AuthenticationStatus {

        let result: AuthenticationStatus;
        // TODO hash password.
        // TODO authentication should not be fulfilled on datasource,
        // it should be impleented on a backend security engine.

        // TODO handle errors with pipe and catchError.
        this.userDatasource.getUser(username, password).subscribe(user => this.user = user);

        // TODO drop this error message calculation after error handling is provided.
        if (!this.isAuthenticated()) {
            const errorMessage = 'Credentials are incorrect';
            result = new AuthenticationStatus(false, errorMessage);
        } else {
            result = new AuthenticationStatus(true);
        }

        return result;
    }

    isAuthenticated() {
        return this.user != null;
    }

    logout() {
        this.user = null;
    }
}
