import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-formulario-cadastar-produto',
  templateUrl: './formulario-cadastar-produto.component.html',
  styleUrls: ['./formulario-cadastar-produto.component.css']
})
export class FormularioCadastarProdutoComponent implements OnInit {
  


  produto: Produto

  codigoEndereco ="http://bwipjs-api.metafloor.com/?bcid=code128&text=1234567890&includetext";
  constructor(private service: ProdutoService) {
    this.produto = new Produto

   }
   cadastrar(){
    this.service.save(this.produto).subscribe( p =>{
      alert(`Produto cadastrado no ID ${p._id}`)
      this.produto = new Produto
    })
  }

  //  change(){ 
  //   console.log(this.codigoEndereco); 
  //   this.codigoBarras+"1234567891";


  //   this.codigoEndereco = "http://bwipjs-api.metafloor.com/?bcid=code128&text="+this.codigoBarras.toString()+"&includetext";
  //   console.log(this.codigoEndereco); 
   
  //   this.altCode="Barcoded value "+this.codigoBarras;
  //  }

  ngOnInit() {
  }

}
