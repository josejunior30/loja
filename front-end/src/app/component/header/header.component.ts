import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CarrinhoService } from 'src/app/carrinho.service';
import { LoginService } from 'src/app/login.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ICategory, IProduto } from 'src/app/produtos';
import { LoginStateService } from 'src/app/login-state.service';
import { CategoriaService } from 'src/app/categoria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = "";
  usuarioLogado: boolean = false;
  produtos: IProduto[] = [];
  
  

  constructor(
    public carrinhoService: CarrinhoService,
    private loginService: LoginService,
    private router: Router,
    private loginStateService: LoginStateService,
    
    
  ) { }

  ngOnInit(): void {
    this.verificarEstadoLogin();
    
    // Inscreva-se nas alterações do estado de login
    this.loginStateService.loggedIn$.subscribe((isLoggedIn) => {
      this.usuarioLogado = isLoggedIn;
      this.verificarEstadoLogin();  // Atualiza outras informações, se necessário
    });
  }

  verificarEstadoLogin(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.name = decodedToken.name;
      this.usuarioLogado = true;
    }
  }

  logout(): void {
    this.loginService.logout();
    // Notifica o serviço de estado de login sobre o logout
    this.loginStateService.setLoggedInState(false);
  }

  voltarProduto(): void {
    this.router.navigate(["produtos"]);
  }


  selecionarCategoria(categoriaId: number): void {
    const categoriaUrl = `/categoria/${categoriaId}`;
    // Navega para a URL da categoria e força a recarga da página
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([categoriaUrl]);
    });
}
}