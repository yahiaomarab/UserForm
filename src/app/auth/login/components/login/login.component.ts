import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/core/validators/email';
import { passwordValidation } from 'src/app/core/validators/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  visiable: boolean = false;
  isLogin: boolean = false;
  kindIcon: string = 'fa-solid fa-eye-slash';
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,emailValidator]),
    password: new FormControl('', [Validators.required, passwordValidation]),
  });

  constructor() {}

  // Helper method to access the 'email' control easily in the template
  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }
  // Add any other necessary methods or properties here
  changePasswordVisibility() {
    this.visiable = !this.visiable;
    if (this.visiable) {
      this.kindIcon = 'fa fa-eye';
    } else {
      this.kindIcon = 'fa-solid fa-eye-slash';
    }
  }
  login() {
    this.isLogin = true;
  }
  canActivate():boolean{
    return true;
  }
}
