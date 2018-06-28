import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './entity';

// TODO consider make generic HTTP service.
export abstract class EntityService<T extends Entity<ID>, ID> {

    // TODO set the base URL from the backend
    private baseUrl = 'http://localhost:3000/';

    constructor(protected http: HttpClient) {}

    protected abstract getSpecificUrl(): string;

    // TODO provide a method for paging
    public get(): Observable<T[]> {
        // TODO provide error handling
        return this.http.get<T[]>(this.getUrl());
    }

    private getUrl(): string {
        return this.baseUrl + this.getSpecificUrl();
    }
}
