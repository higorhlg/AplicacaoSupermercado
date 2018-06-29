


export class Produto{


    private nome?:string;
    private categoria?:string; 
    private peso?:number;
    private precoCusto?:number;
    private precoVenda?:number;
    private descricao?:string;
    private barCode?:number;

 
    constructor(){

    }

    public setNome(nome:string){
        this.nome=nome;
    }
    public setCategoria(categoria:string){
        this.categoria=categoria;
    }
    public setPeso (peso :number){
        this.peso=peso;
    }
    public setPrecoCusto(precoCusto:number){
        this.precoCusto=precoCusto;
    }
    public setPrecoVenda(precoVenda:number){
        this.precoVenda=precoVenda;
    }
    public setDescricao(descricao:string){
        this.descricao=descricao;
    }
    public setBarCode(barCode:number){
        this.barCode=barCode;
    }


    public getNome():string{
        return this.nome;
    }
    public getCategoria():string {
        return this.categoria;
    }
    public getPeso ():number{
        return this.peso;
    }
    public getPrecoCusto():number{
        return this.precoCusto;
    }
    public getPrecoVenda():number{
        return this.precoVenda;
    }
    public getDescricao():string{
        return this.descricao;
    }
    public getBarCode():number{
        return this.barCode;
    }

}

