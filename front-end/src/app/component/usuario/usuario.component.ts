import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  public usuarios: Usuario;

  formContato = this.fb.group({
    nome:["",[
      Validators.minLength(3),
      Validators.required
  
    ]],
    email:["",[
      Validators.email,
      Validators.required
    ]],
    senha:["",[
      Validators.minLength(5),
      Validators.required
  
    ]]
  
})
  
  constructor(private fb: FormBuilder, private usuarioService:UsuarioService, 
  private router: Router){
    this.usuarios = new Usuario();
  }
  ngOnInit(): void {
    
  }
  criarNovoUsuario() {
    if (this.formContato.valid) {
      const nome = this.formContato.value.nome;
      const email = this.formContato.value.email;
      const senha = this.formContato.value.senha;
  
      // Verifica se email e senha não são nulos ou indefinidos
      if (nome !==null && nome !== undefined && email !== null && email !== undefined && senha !== null && senha !== undefined) {
        
        const novoUsuario: Usuario = {
          name : nome,
          login: email,
          password: senha,
          
        };
  
        this.usuarioService.criarUsuario(novoUsuario).subscribe(
          (usuarioCriado) => {
            console.log('Novo usuário criado:', usuarioCriado);
            // Redireciona para outra rota ou executa outras ações após o sucesso
          },
          (error) => {
            console.error('Erro ao criar usuário:', error);
            // Trata o erro, se necessário
          }
        );
      } else {
        console.log('Email ou senha nulos ou indefinidos');
      }
    } else {
      console.log('Formulário inválido');
    }
  }

  enviarFormulario(){
    alert("Usuario cadastrado com sucesso");
    this.router.navigate(['login']);
  }
}
