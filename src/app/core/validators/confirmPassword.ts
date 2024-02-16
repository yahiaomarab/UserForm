import { AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidation(
  control: AbstractControl
): ValidationErrors | null {
  const originalPassword = control.get('Password');
  const confirmPassword = control.get('confirmPassword');

  if (confirmPassword?.value === '') {
    return { required: true };
  }

  if (originalPassword?.value !== confirmPassword?.value) {
    return { notMatched: true };
  }

  return null;
}
