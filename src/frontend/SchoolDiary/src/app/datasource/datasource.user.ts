import { User } from '../authentication/User';
import { Role } from '../authentication/Role';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserDataSource {

    private users: User[];

    constructor() {
        this.users = new Array<User> (
            { name: 'admin',
              password: 'admin123',
              roles: new Array<Role>(Role.Admin) }
        );
    }

    getUsers(): Observable<User[]> {
        return of(this.users);
    }

    getUser(name: string, password: string): Observable<User> {
        return of(this.users.find(user =>
            (name === user.name) && (password === user.password)));
    }
}
