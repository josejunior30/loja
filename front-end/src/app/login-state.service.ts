// login-state.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  loggedIn$ = this.loggedInSubject.asObservable();

  setLoggedInState(isLoggedIn: boolean): void {
    this.loggedInSubject.next(isLoggedIn);
  }

  isLoggedIn(): boolean {
    // Verifique se há um token JWT no localStorage
    return !!localStorage.getItem('token');
  }
}
