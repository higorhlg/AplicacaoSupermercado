import { Produto } from "./produto.model";



export class Venda{

    _id:object
    private produto?:Produto;
    private quantidade?:number;
    private valor?:number;
    

 

    constructor(){

    }

    public setProduto(produto:Produto){
        this.produto=produto;
    }
    public setQuantidade(quantidade:number){
        this.quantidade=quantidade;
    }
    public setValor(valor:number){
        this.valor=valor;
    }
    
    
    public getProduto():Produto{
        return this.produto;
    }
    public getQuantidade():number {
        return this.quantidade;
    }
    public getValor():number {
        return this.valor;
    }
    
}

