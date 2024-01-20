import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logins: Login;
  formContato = this.fb.group({
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    senha: ["", [
      Validators.minLength(5),
      Validators.required
    ]]
  });

  enviarFormulario() {
    this.formContato.reset();
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.logins = new Login();
  }

  ngOnInit(): void {
    this.logins = new Login();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.logins).subscribe(
      (data) => {
        // Armazena o token no Local Storage
        localStorage.setItem('token', data.token);
        // Armazena informações do usuário, como o nome, se disponíveis
        localStorage.setItem('sub', data.login);
        // Notifica o serviço de login sobre o sucesso do login
        this.loginService.loginSuccessful();
        // Redireciona para a rota 'carrinho'
        this.router.navigate(['produtos']);
      },
      (httpError) => {
        this.alertService.error(httpError.error.message);
      }
    );
  }
}
