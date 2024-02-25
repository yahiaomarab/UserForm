import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth-service';
import { emailValidator } from 'src/app/core/validators/email';
import { passwordValidation } from 'src/app/core/validators/password';
import { User } from 'src/app/interfaces/user';

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
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      emailValidator,
    ]),
    password: new FormControl('', [Validators.required, passwordValidation]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

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
    const { email, password } = this.formLogin.value;
    this.authService.loginUser(email as String).subscribe(
      res => {
        if (res.length>0 && res[0].password === password) {
          localStorage.setItem('email', email!);
          this.router.navigate(['home']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Email or password is wrong',
          });
        }
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'An error occurred while logging in. Please try again later.',
        });
      }
    );
    this.isLogin = true;
  }
  
  canActivate(): boolean {
    return true;
  }
}
