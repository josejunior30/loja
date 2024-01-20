import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:8080/user";
  
 
 constructor(private http: HttpClient) { }

 public criarUsuario(usuario: Usuario): Observable<Usuario> {
  return this.http.post<Usuario>(
    this.url,
    usuario
  );

}
}
