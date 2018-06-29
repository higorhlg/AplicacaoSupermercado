import { Component, OnInit } from '@angular/core';

import { Produto } from '../../model/produto.model';
import { Venda } from '../../model/venda.model';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  venda: Venda = new Venda();
  produtos: Array<Produto>;

  atualizaValorVenda(){
    if(this.venda.getQuantidade() === undefined)
      this.venda.setQuantidade(1);
    // this.venda.setValor(this.venda.getProduto().getPrecoVenda() * this.venda.getQuantidade());

  }
  constructor() { }

  ngOnInit() {
  }

}
