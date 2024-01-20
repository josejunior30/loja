import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/searchService';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = [];

  constructor(
    private produtosService: ProdutosService, private pesquisaService: SearchService,
    private route: ActivatedRoute,
    
  ) {}

  listarTodos(): void {
    this.produtosService.listar().subscribe(produtosList => {
      this.produtos = produtosList;
    });
  }

  filterProductsByName(name: string): void {
    const lowerCaseName = name.toLowerCase();

    this.produtosService.listar().subscribe(produtosList => {
      this.produtos = produtosList.filter(produto => produto.name.toLowerCase().includes(lowerCaseName));
    });
  }

  ngOnInit(): void {
    this.pesquisaService.termoDePesquisa$.subscribe(termo => {
      console.log('Termo de Pesquisa:', termo);
  
      if (termo.trim() !== '') {
        this.produtosService.pesquisarPorNome(termo).subscribe(produtosList => {
          console.log('Resultados da Pesquisa:', produtosList);
          this.produtos = produtosList;
        }, error => {
          console.error('Erro na solicitação de pesquisa:', error);
        });
      } else {
        this.listarTodos();
      }
    });
  }
  
    

  }



