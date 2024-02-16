import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)},
  {path:'home',loadChildren:()=>import('./non-auth/non-auth-routing.module').then(m=>m.NonAuthRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
