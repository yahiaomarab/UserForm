import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (control.value === '') {
    return { required: true };
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[gmail]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(control.value) ) {
    return {
      invalidEmail: true,
      invalidFormat: true,
    };
  }
  if( !control.value.endsWith('.com')){
    return {
        notEndingWithDotCom: true,
    }
  }

  return null;
}
