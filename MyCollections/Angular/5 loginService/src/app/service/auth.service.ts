import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable, observable } from "rxjs";
import { HttpResponse } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {
   }
   // api call
  login(username: string|undefined|null, password: string|undefined|null):any{
    if(username == "admin" && password == "admin"){
      localStorage.setItem('signIn', 'true');
      return true;
    }
    else{
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('signIn');
    this.RedirectToLogIn();
  }

  autoLogout(){
    window.addEventListener('storage', () =>{
      if(!localStorage.getItem('signIn')){
        this.RedirectToLogIn();
      }
    });
  }

  autoLogIn(){
    window.addEventListener('storage', () =>{
      if(localStorage.getItem('signIn')){
        try {
          this.RedirectToHome();
        } catch (error) {
          console.log(error);
        }
      }
    });

    if(localStorage.getItem('signIn')){
      this.RedirectToHome();
    }
  }

  RedirectToLogIn(){
    this.router.navigateByUrl("/login");
  }
  RedirectToHome(){
    this.router.navigateByUrl("/home");
  }

  // used for authguard
  isUserLoggedIn(): boolean {
    if(localStorage.getItem('signIn')){
      return true;
    }else{
      return false;
    }
  }
}
