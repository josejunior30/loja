import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private termoDePesquisa = new BehaviorSubject<string>('');
  termoDePesquisa$ = this.termoDePesquisa.asObservable();

  atualizarTermoDePesquisa(termo: string) {
    this.termoDePesquisa.next(termo);
  }
}


  



