import { Component, OnInit } from '@angular/core';

import { Produto } from '../../model/produto.model';
import { Venda } from '../../model/venda.model';
import { equalSegments } from '@angular/router/src/url_tree';
import { ProdutoService } from '../produto.service';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})

export class VendasComponent implements OnInit {

  venda: Venda
  produtos: Array<Produto>

  nomeSelecionado: String;
  atualiza(){
    this.venda.setProduto(this.produtos.find(x => x.nome === this.nomeSelecionado))
    if(this.venda.getQuantidade() === undefined)
      this.venda.setQuantidade(1);
     this.venda.setValor(this.venda.getProduto().precoVenda * this.venda.getQuantidade());

  }
  vender(){
    const q = this.venda.getQuantidade()
    if(q > 0 && q <= this.venda.getProduto().unidades){
      this.venda.getProduto().unidades -= this.venda.getQuantidade()
      this.pService.update(this.venda.getProduto()).subscribe(v =>{
        console.log("works")
      })
      this.vService.save(this.venda).subscribe( v =>{
        alert(`Venda cadastrada no ID ${v._id}`)
        this.venda = new Venda
      })
    }
    else{
      alert('Quantidade inválida!')
    }
    

  }
  constructor(private pService:ProdutoService, private vService:VendaService) {
    this.pService.getAll().subscribe( p => {
      this.produtos = p
    })
    this.venda = new Venda
  }
  ngOnInit() {
  }

}
