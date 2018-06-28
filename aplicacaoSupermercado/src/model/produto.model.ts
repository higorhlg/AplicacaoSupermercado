


export class Produto{


    private nome?:string;
    private categoria:string; 
    private peso :number;
    private precoCusto:number;
    private precoVenda:number;
    private descricao:string;
    private barCode:number;

 

    constructor(){
        /*this.nome = "";
        this.categoria = "";
        this.descricao = "";
        this.peso = 0;
        this.precoCusto = 0;
        this.precoVenda = 0;
        this.barCode = 0;
        */
    }

    public setnome(nome:string){
        this.nome=nome;
    }
    public setcategoria(categoria:string){
        this.categoria=categoria;
    }
    public setpeso (peso :number){
        this.peso=peso;
    }
    public setprecoCusto(precoCusto:number){
        this.precoCusto=precoCusto;
    }
    public setprecoVenda(precoVenda:number){
        this.precoVenda=precoVenda;
    }
    public setdescricao(descricao:string){
        this.descricao=descricao;
    }
    public setbarCode(barCode:number){
        this.barCode=barCode;
    }


    public getnome():string{
        return this.nome;
    }
    public getcategoria():string {
        return this.categoria;
    }
    public getpeso ():number{
        return this.peso;
    }
    public getprecoCusto():number{
        return this.precoCusto;
    }
    public getprecoVenda():number{
        return this.precoVenda;
    }
    public getdescricao():string{
        return this.descricao;
    }
    public getbarCode():number{
        return this.barCode;
    }

}

