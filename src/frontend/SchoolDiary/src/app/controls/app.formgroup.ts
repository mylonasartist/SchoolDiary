import { FormGroup } from '@angular/forms';
import { AppControl } from './app.control';

export class AppFormGroup extends FormGroup {

    getValidationMessages(): string[] {
        const messages: string[] = [];
        Object.keys(this.controls).forEach(controlName =>
            (this.controls[controlName] as AppControl).getValidationMessages().
                forEach(message => messages.push(message)));
        return messages;
    }

    getControlValidationMessage(controlName: string): string {
        let message: string = null;
        const control = this.controls[controlName];
        if (control) {
            message = (control as AppControl).getValidationMessages().join('\n');
        }
        return message;
    }
}
