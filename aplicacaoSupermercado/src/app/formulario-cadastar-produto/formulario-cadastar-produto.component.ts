import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-cadastar-produto',
  templateUrl: './formulario-cadastar-produto.component.html',
  styleUrls: ['./formulario-cadastar-produto.component.css']
})
export class FormularioCadastarProdutoComponent implements OnInit {
  
  codigoBarras = "1234567890";
  altCode="Barcoded value 1234567890";

  codigoEndereco ="http://bwipjs-api.metafloor.com/?bcid=code128&text=1234567890&includetext";
  constructor() {

   }


   change(){ 
    console.log(this.codigoEndereco); 
    this.codigoBarras+"1234567891";
    this.codigoEndereco = "http://bwipjs-api.metafloor.com/?bcid=code128&text="+this.codigoBarras.toString()+"&includetext";
    console.log(this.codigoEndereco); 
   
    this.altCode="Barcoded value "+this.codigoBarras;
   }

  ngOnInit() {
  }

}
