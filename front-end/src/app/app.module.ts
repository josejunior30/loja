import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ErrorpaginaComponent } from './component/errorpagina/errorpagina.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from './searchService';
import { SearchComponent } from './component/produtos/search-bar/search-bar.component';

import { LoginStateService } from './login-state.service';
import { CategoriaComponent } from './component/produtos/categoria/categoria.component';
import { CategoriaService } from './categoria.service';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorpaginaComponent,
    SearchComponent,
    CategoriaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
   
  ],
  providers: [SearchService, LoginStateService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
