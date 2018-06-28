import { ValidatorFn, Validators } from '@angular/forms';

export abstract class FormGroupService {
    protected getVaidators(metadata: any): ValidatorFn[] {
        const validators: ValidatorFn[] = [];
        Object.keys(metadata).forEach(limitation => {
            if (limitation === 'required') {
                validators.push(Validators[limitation]);
            } else {
                validators.push(Validators[limitation](metadata[limitation]));
            }
        });
        return validators;
    }
}
