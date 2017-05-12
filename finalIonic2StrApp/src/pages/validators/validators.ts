import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = /^\d/.test(control.value);
    console.log("Valid value:"+valid);
	return (valid) ? {emailValidatorOutput: false} : null;
  };
}