import { Injectable } from '@angular/core';
import { Validators, ValidatorFn, FormControl, NG_ASYNC_VALIDATORS, FormGroup } from '@angular/forms';
import { Subject } from '../../domain/subject/model/subject';
import { AppControl } from '../../controls/app.control';
import { FormGroupService } from '../../controls/formgroup.service';
import { Texts } from '../admin.module.texts';
import { AppFormGroup } from '../../controls/app.formgroup';

@Injectable()
export class SubjectFormGroupService extends FormGroupService {

    constructor(private texts: Texts) {
        super();
    }

    toFormGroup(subjects: Subject[]): AppFormGroup {
        const group: any = {};
        for (let i = 0; i < subjects.length; i++) {
            group[i + 'name'] =
                new AppControl(this.texts.nameLabel,
                    'name',
                    subjects[i].name,
                    Validators.compose(this.getVaidators(Subject.validation.name)));
            group[i + 'description'] =
                new AppControl(this.texts.descriptionLabel,
                    'description',
                    subjects[i].name,
                    Validators.compose(this.getVaidators(Subject.validation.description)));
        }
        return new AppFormGroup(group);
    }

    getControlName(index: number, propertyName: string): string {
        return index + propertyName;
    }

    addControls(formGroup: FormGroup, index: number) {
        formGroup.addControl(index + 'name', new AppControl(this.texts.nameLabel,
            'name',
            null,
            Validators.compose(this.getVaidators(Subject.validation.name))));

        formGroup.addControl(index + 'description', new AppControl(this.texts.descriptionLabel,
            'description',
            null,
            Validators.compose(this.getVaidators(Subject.validation.description))));
    }
}
