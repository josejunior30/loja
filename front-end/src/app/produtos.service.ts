import { Injectable } from '@angular/core';
import { IProduto, produtofiltro } from './produtos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  private url = "http://localhost:8080/produtos";
  searchResults: IProduto[] = [];
  resultadosPesquisa : string="";
 
  constructor(private http: HttpClient) { }
  salvar(produto:IProduto):Observable<IProduto>{

    return this.http.post<IProduto>(this.url, produto)
  }

  listar():Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.url)
  }
  getById(id: number): Observable<IProduto> {
    const getByIdUrl = `${this.url}/${id}`;
    return this.http.get<IProduto>(getByIdUrl);
  }

  pesquisarPorNome(nome: string): Observable<IProduto[]> {
    const pesquisaUrl = `${this.url}/buscarPorNome?name=${nome}`;
    return this.http.get<IProduto[]>(pesquisaUrl);
  }
}

  



