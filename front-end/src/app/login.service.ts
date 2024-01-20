import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from './login';
import { LoginStateService } from './login-state.service';  // Certifique-se de importar o serviço de estado de login
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080/auth/login";

  constructor(
    private http: HttpClient,
    private loginStateService: LoginStateService, private router: Router  // Injete o serviço de estado de login
  ) { }
  
  public doLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.url, login).pipe(
      tap((response) => {
        // Armazena o token no Local Storage
        localStorage.setItem('token', response.token);
        
        // Notifica o serviço de estado de login sobre o sucesso do login
        this.loginSuccessful();
      }),
      catchError((error) => {
        console.error('Erro no login:', error);
        return throwError(error);
      })
    );
  }
  

  public loginSuccessful(): void {
    // Notifica o serviço de estado de login sobre o sucesso do login
    this.loginStateService.setLoggedInState(true);
    
  }

  public logout(): void {
    // Limpa as informações de autenticação do Local Storage
    localStorage.removeItem('token');
    localStorage.removeItem('sub');
    this.router.navigate(['produtos'])
  }
}
