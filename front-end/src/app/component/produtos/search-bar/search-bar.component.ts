import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { SearchService } from 'src/app/searchService';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchComponent {
  termoDePesquisa: string = '';

  constructor(private pesquisaService: SearchService) {}

  pesquisar(): void {
    this.pesquisaService.atualizarTermoDePesquisa(this.termoDePesquisa);
  }
}