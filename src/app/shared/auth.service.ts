import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }

  isAdmin(){
    return new Promise((resolve, reject)=>{
        resolve(this.loggedIn);
    });
  }

  constructor() { }
}
