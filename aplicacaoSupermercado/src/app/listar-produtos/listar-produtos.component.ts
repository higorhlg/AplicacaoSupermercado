import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Array<Produto>


  constructor(private service:ProdutoService) {
    this.service.getAll().subscribe( p => {
      this.produtos = p
    })
  }


  ngOnInit() {
  }

}
