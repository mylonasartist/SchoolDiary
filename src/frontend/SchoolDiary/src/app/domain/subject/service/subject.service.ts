import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../model/subject';
import { EntityService } from '../../entity.service';

@Injectable()
export class SubjectService extends EntityService<Subject, number> {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getSpecificUrl(): string {
        return 'api/v1/subjects';
    }
}
