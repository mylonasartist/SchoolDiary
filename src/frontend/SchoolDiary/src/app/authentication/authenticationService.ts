import { Injectable } from '@angular/core';
import { UserDataSource } from '../datasource/datasource.user';
import { User } from './user';

@Injectable()
export class AuthenticationService {
    constructor (private userDatasource: UserDataSource) {}

    private user: User;

    authenticate(username: string, password: string): boolean {

        // TODO hash password.
        // TODO authentication should not be fulfilled on datasource,
        // it should be impleented on a backend security engine.
        this.userDatasource.getUser(username, password).subscribe(user => this.user);
        return this.isAuthenticated();
    }

    isAuthenticated() {
        return this.user != null;
    }
}
