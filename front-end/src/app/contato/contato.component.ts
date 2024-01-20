import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
formContato = this.fb.group({
  nome:["",[
    Validators.minLength(3),
    Validators.required
  ]],
  sobrenome:["",[
    Validators.minLength(10),
    Validators.required
  ]],
  telefone:["",[
    Validators.minLength(11),
    Validators.required
  ]],
  email:["",[
    Validators.email,
    Validators.required
  ]],
  senha:["",[
    Validators.minLength(6),
    Validators.required

  ]]
})
enviarFormulario(){
  alert(" A menssagem foi enviada!");
  this.formContato.reset();
  this.formContato.reset();
}

  constructor(private fb: FormBuilder){}
}
