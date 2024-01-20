/*import { Injectable } from '@angular/core';
import { LoginStateService } from './login-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInVar: boolean = false;

  constructor(private loginStateService: LoginStateService) {
    this.checkTokenInLocalStorage();
  }

  public checkTokenInLocalStorage() {
    const storedToken = localStorage.getItem('authToken');
    this.isLoggedInVar = !!storedToken;
  
    console.log('Token verificado:', storedToken);
    console.log('Estado de autenticação:', this.isLoggedInVar);
  
    if (this.isLoggedInVar) {
      this.loginStateService.setLoggedInState(true);
    }
  }
  

  login(token: string) {
    if (token) {
      this.isLoggedInVar = true;
      localStorage.setItem('authToken', token);
      this.loginStateService.setLoggedInState(true);
    }
  }

  logout() {
    this.isLoggedInVar = false;
    localStorage.removeItem('authToken');
    this.loginStateService.setLoggedInState(false);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }
}*/
