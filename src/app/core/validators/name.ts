import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidators(control:AbstractControl):ValidationErrors|null{
    const namePattern = /[A-Za-z-' ]{2,50}/;
  if(control.value === ''){
    return {required:true}
  }
  if(!namePattern.test(control.value)){
     return{invalidName:true}
  }
  return null;
}