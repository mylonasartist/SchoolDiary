import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AppControl } from '../../controls/app.control';

export class SubjectFormGroup extends FormGroup {
    constructor() {
        super({
            subject: new AppControl('Subject', 'subject', null,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100),
                    Validators.pattern('^[A-Za-z0-9 ]+$')
                ]))
        });
    }

    getFormControls(): AppControl[] {
        const controls: AppControl[] = [];
        Object.keys(this.controls).forEach(controlName =>
            controls.push(this.controls[controlName] as AppControl));
        return controls;
    }
}
