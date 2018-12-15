import { Injectable } from '@angular/core';
import { Validators, ValidatorFn, FormControl, NG_ASYNC_VALIDATORS, FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from '../../domain/subject/model/subject';
import { AppControl } from '../../controls/app.control';
import { FormGroupService } from '../../controls/formgroup.service';
import { Texts } from '../admin.module.texts';
import { AppFormGroup } from '../../controls/app.formgroup';

// TODO not used now - delete if will not be needed.
@Injectable()
export class SubjectFormGroupService extends FormGroupService {

    constructor(private texts: Texts) {
        super();
    }

    toFormGroup(subject: Subject): AppFormGroup {
        const group: any = {};
        group['name'] =
            new AppControl(this.texts.nameLabel,
                'name',
                subject ? subject.name : null,
                Validators.compose(this.getVaidators(Subject.validation.name)));
        group['description'] =
            new AppControl(this.texts.descriptionLabel,
                'description',
                subject ? subject.description : null,
                Validators.compose(this.getVaidators(Subject.validation.description)));
        return new AppFormGroup(group);
    }
}
