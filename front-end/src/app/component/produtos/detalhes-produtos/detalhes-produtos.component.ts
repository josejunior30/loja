import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';


@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css'],
  
  
})
export class DetalhesProdutosComponent implements OnInit{
produto: IProduto | undefined;
quantidade= 1;

constructor(
  private produtosService: ProdutosService,
  private route: ActivatedRoute,
  private notificacaoService: NotificacaoService,
  private carrinhoService: CarrinhoService){}

  ngOnInit(): void {
this.obterDetalhesDoProduto();
    
}

obterDetalhesDoProduto(): void {
  const routeParams = this.route.snapshot.paramMap;
  const produtoId = Number(routeParams.get('id'));

  this.produtosService.getById(produtoId).subscribe({
    next: (produto) => {
      this.produto = produto;
    },
    error: (error) => {
      console.error('Erro ao obter o produto por ID:', error);
    },
  })}

  adicionarCarrinho(){
  this.notificacaoService.notificar("Adicionado ao carrinho");
  const produto: IProdutoCarrinho={...this.produto!, quantidade:this.quantidade}
  
  this.carrinhoService.adicionarCarrinho(produto);
}
aumentarQuantidade(): void {
  this.quantidade++;
}

diminuirQuantidade(): void {
  if (this.quantidade > 1) {
    this.quantidade--;
  }
}
}
