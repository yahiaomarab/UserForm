import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth-service';
import { confirmPasswordValidation } from 'src/app/core/validators/confirmPassword';
import { emailValidator } from 'src/app/core/validators/email';
import { nameValidators } from 'src/app/core/validators/name';
import { passwordValidation } from 'src/app/core/validators/password';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService,private router:Router,private messageService: MessageService) {}
  visiable: boolean = false;
  confirmVisible: boolean = false;
  isRegister: boolean = false;
  kindIcon: string = 'fa-solid fa-eye-slash';
  confirmKindIcon: string = 'fa-solid fa-eye-slash';
  usersSignUp: any[] = [];
  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required, nameValidators]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      emailValidator,
    ]),
    Password: new FormControl('', [Validators.required, passwordValidation]),
    confirmPassword: new FormControl('', [
      Validators.required,
      confirmPasswordValidation,
    ]),
  });
  get email() {
    return this.formRegister.get('email');
  }
  get name() {
    return this.formRegister.get('name');
  }
  get Password() {
    return this.formRegister.get('Password');
  }
  get confirmPassword() {
    return this.formRegister.get('confirmPassword');
  }
  changePasswordVisibility() {
    this.visiable = !this.visiable;
    if (this.visiable) {
      this.kindIcon = 'fa fa-eye';
    } else {
      this.kindIcon = 'fa-solid fa-eye-slash';
    }
  }
  changeConfirmPasswordVisibility() {
    this.confirmVisible = !this.confirmVisible;
    if (this.confirmVisible) {
      this.confirmKindIcon = 'fa fa-eye';
    } else {
      this.confirmKindIcon = 'fa-solid fa-eye-slash';
    }
  }
  register() {
    const postData = { ...this.formRegister.value };
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      (response) =>{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'user registered successfully' });
        this.router.navigate(['login']);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });

      }
    );
    this.isRegister = true;
  }
}
