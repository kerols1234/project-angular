import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  login(Token: string){
    localStorage.setItem('UserToken', Token);
  }

  logout(){
    localStorage.removeItem('UserToken');
  }

  isLogged(): boolean{
    if(localStorage.getItem('UserToken') != null){
      return true;
    }
    return false;
  }

  getToken(): string{
    return localStorage.getItem('UserToken')!;
  }
}
