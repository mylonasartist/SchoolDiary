import { User } from '../authentication/User';
import { Role } from '../authentication/Role';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserDataSource {

    private users: User[];

    constructor() {
        this.users = [{
            name: 'admin',
            password: 'admin123',
            roles: [Role.Admin]
        }, {
            name: 'user1',
            password: 'pass1'
        }];
    }

    getUsers(): Observable<User[]> {
        return of(this.users);
    }

    getUser(name: string, password: string): Observable<User> {
        let result = this.users.find(user =>
            (name === user.name) && (password === user.password));
        if (result === undefined) {
            result = null;
        }
        return of(result);
    }
}
