import { FormGroup } from '@angular/forms';
import { AppControl } from './app.control';

export class AppFormGroup extends FormGroup {

    getControls(): AppControl[] {
        const controls: AppControl[] = [];
        if (this.controls) {
            Object.keys(this.controls).forEach(controlName =>
                controls.push(this.controls[controlName] as AppControl));
        }
        return controls;
    }
}
