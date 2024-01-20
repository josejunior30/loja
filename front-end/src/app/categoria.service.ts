
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICategory, IProduto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlCategory = "http://localhost:8080/category/";

  categoria: ICategory[]=[]

  constructor(private http: HttpClient) {}

  getAllProductsFromCategory(categoryId: number): Observable<IProduto[]> {
    const getAllProductsUrl = `${this.urlCategory}${categoryId}/produtos`;
    return this.http.get<IProduto[]>(getAllProductsUrl)
      .pipe(
        catchError((error) => {
          // Tratar o erro aqui, por exemplo, logar ou lançar uma mensagem de erro.
          console.error('Erro na requisição:', error);
          throw error;
        })
      );
  }
  obterTodasCategorias(): Observable<ICategory[]> {
    const getAllCategoriesUrl = `${this.urlCategory}`; // Modifique conforme necessário
    return this.http.get<ICategory[]>(getAllCategoriesUrl)
      .pipe(
        catchError((error) => {
          console.error('Erro na requisição de categorias:', error);
          throw error;
        })
      );
  }
  
}


