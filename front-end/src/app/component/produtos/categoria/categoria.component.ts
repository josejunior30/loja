import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria.service';
import {  IProduto } from 'src/app/produtos';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
 produtos: IProduto[] = [];
  constructor(private categoriaService: CategoriaService,private route: ActivatedRoute) {}
    
    
  listarPorCategoria(): void {
    const categoryId = this.route.snapshot.params['categoryId'];
    console.log('ID da Categoria:', categoryId);

    this.categoriaService.getAllProductsFromCategory(categoryId).subscribe(produtosList => {
      console.log('Produtos da Categoria:', produtosList);
      this.produtos = produtosList;
    });
  }
  
  
  ngOnInit(): void {

   this.listarPorCategoria(); 
  }
  
}


