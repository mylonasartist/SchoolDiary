import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './entity';

// TODO consider make generic HTTP service.
export abstract class EntityService<T extends Entity<ID>, ID> {

    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    // TODO set the base URL from the backend
    private baseUrl = 'http://localhost:3000/';

    constructor(protected http: HttpClient) {}

    protected abstract getSpecificUrl(): string;

    // TODO provide a method for paging
    public getEntities(): Observable<T[]> {
        // TODO provide error handling
        return this.http.get<T[]>(this.getUrl());
    }

    public getEntity(id: ID): Observable<T> {
        // TODO provide error handling
        return this.http.get<T>(`${this.getUrl()}/${id}`);
    }

    public update(entity: T): Observable<any> {
        return this.http.put(`${this.getUrl()}/${entity.id}`, entity, this.httpOptions);
    }

    public create(entity: T): Observable<any> {
        return this.http.post(this.getUrl(), entity, this.httpOptions);
    }

    private getUrl(): string {
        return this.baseUrl + this.getSpecificUrl();
    }
}
