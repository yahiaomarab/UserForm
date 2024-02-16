import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  
  constructor() { }
  logError(error:HttpErrorResponse){
   if(error.error instanceof ErrorEvent){
     console.log('client side error');
   }else{
  console.log('server side error');
   }
   return throwError('there is error'); 
  }
}
