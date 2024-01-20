import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpaginaComponent } from './component/errorpagina/errorpagina.component'
import { CategoriaComponent } from './component/produtos/categoria/categoria.component';


const routes: Routes = 
[{ path: 'produtos', loadChildren: () => import('./component/produtos/produtos.module').then(m => m.ProdutosModule) },
 {path: "", redirectTo:'produtos', pathMatch:'full'},
{ path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
{ path: 'categoria/:categoryId', component: CategoriaComponent},
{ path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'cadastrar', loadChildren: () => import('./component/usuario/usuario.module').then(m => m.UsuarioModule) },
{path: "**", component: ErrorpaginaComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
