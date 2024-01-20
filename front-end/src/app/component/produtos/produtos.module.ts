import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from 'src/app/produtos.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutosComponent,
    
  
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    MatButtonToggleModule 
  ],
  providers: [ProdutosService],
})
export class ProdutosModule { }
