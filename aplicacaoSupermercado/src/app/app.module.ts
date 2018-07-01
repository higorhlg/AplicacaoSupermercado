import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerDeFundoComponent } from './container-de-fundo/container-de-fundo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormularioCadastarProdutoComponent } from './formulario-cadastar-produto/formulario-cadastar-produto.component';
import { VendasComponent } from './vendas/vendas.component';

import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from './produto.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerDeFundoComponent,
    NavBarComponent,
    FormularioCadastarProdutoComponent,
    VendasComponent,
    PesquisaComponent,
    ListarProdutosComponent,
  ],
  imports: [
    FormsModule,      
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ProdutoService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
