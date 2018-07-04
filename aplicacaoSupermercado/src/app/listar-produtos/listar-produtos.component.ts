import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../produto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Array<Produto>

  selecionado: Produto
  constructor(private service:ProdutoService, private location: Location) {
    this.service.getAll().subscribe( p => {
      this.produtos = p
    })
    this.selecionado = new Produto
  }

  alt(p){
    this.selecionado = p
  }
  alterar(){
    this.service.update(this.selecionado).subscribe(v =>{
      console.log("works")
    })

  }

  deletar(p){
    this.selecionado = p
    this.service.delete(this.selecionado).subscribe(v =>{
      alert("Produto excluido!")
      this.load()
    })
  }
  

  ngOnInit() {

  }

  load() {
    location.reload()
    }
}
