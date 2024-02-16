import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidation(
  control: AbstractControl
): ValidationErrors | null {
  if (control.value === '') {
    return { required: true };
  }
  const patternAtLeast8 = /[a-z]/g;
  if (!patternAtLeast8.test(control.value)) {
    return { atleast8: true };
  }
  const patternSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/g;
  if (!patternSpecialCharacter.test(control.value)) {
    return { specialChar: true };
  }
  const patternNumber = /\d/g;
  if (!patternNumber.test(control.value)) {
    return { hasNumber: true };
  }
  return null;
}
