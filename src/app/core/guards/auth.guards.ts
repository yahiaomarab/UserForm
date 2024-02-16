import { Component, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/auth/login/components/login/login.component';

export interface CanComponenetDeActivate {
  canActivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({ providedIn: 'root' })
export class AuthGuards implements CanDeactivate<CanComponenetDeActivate> {
  canDeactivate(component: LoginComponent) {
    return component.canActivate ? component.canActivate() : false;
  }
}
