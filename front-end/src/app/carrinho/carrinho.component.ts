import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho:   IProdutoCarrinho[]=[];
  total= 0;
 

  constructor(public carrinhoService: CarrinhoService, private router: Router){
    console.log('CarrinhoComponent constructor');
  }
  
  ngOnInit(): void {
    
  this.itensCarrinho=this.carrinhoService.obterCarrinho();
  this.calcularTotal();
}
  calcularTotal(){
    this.total=this.itensCarrinho.reduce((prev,curr)=> (prev + curr.price * curr.quantidade), 0);
  }
  removeProdutoCarrinho(produtoId:number){
    this.itensCarrinho= this.itensCarrinho.filter(item=> item.id !==produtoId)
    this.carrinhoService.removerProdutoCarrinho(produtoId)
    this.calcularTotal();
  }
comprar(){
  alert("Parabens pela sua compra!")
  this.carrinhoService.limparCarrinho();
  this.router.navigate(["produtos"])

}
}
