import { Component, OnInit } from '@angular/core';

import { Produto } from '../../model/produto.model';
import { Venda } from '../../model/venda.model';
import { Produtos } from '../data';
import { equalSegments } from '@angular/router/src/url_tree';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})

export class VendasComponent implements OnInit {

  venda: Venda = new Venda();
  produtos: Array<Produto>

  nomeSelecionado: String;
  atualiza(){
    this.venda.setProduto(this.produtos.find(x => x.nome === this.nomeSelecionado))
    if(this.venda.getQuantidade() === undefined)
      this.venda.setQuantidade(1);
     this.venda.setValor(this.venda.getProduto().precoVenda * this.venda.getQuantidade());

  }

  constructor(private service:ProdutoService) {
    this.service.getAll().subscribe( p => {
      this.produtos = p
    })
  }
  ngOnInit() {
  }

}
