import { FormControl, Validators } from '@angular/forms';

// TODO consider customs validators
export class AppControl extends FormControl {
    constructor(public label: string,
        public propertyName: string,
        value: any,
        validators: Validators) {
            super(value, validators);
        }

    getValidationMessages(): string[] {
        const messages = [];
        if (this.errors) {
            Object.keys(this.errors).forEach(error => {
                switch (error) {
                    case 'required':
                        messages.push(`${this.label} is required`);
                        break;
                    case 'pattern':
                        messages.push(`Value of ${this.label} is invalid`);
                        break;
                    case 'min':
                        messages.push(
                            `Minimum value of ${this.label} should be ${this.errors['min'].min}`);
                        break;
                    case 'max':
                        messages.push(
                            `Maximum value of ${this.label} should be ${this.errors['max'].max}`);
                        break;
                    case 'minLength':
                        messages.push(
                            `At least ${this.errors['minLength'].requiredLength} characters ` +
                            `required for ${this.label}`);
                        break;
                    case 'maxLength':
                        messages.push(
                            `Maximum ${this.errors['maxLength'].requiredLength} ` +
                            `characters allowed for ${this.label}`);
                        break;
                }
            });
        }
        return messages;
    }
}
