import mongoose from 'mongoose'

export interface Produto extends mongoose.Document{
    _id:object,
    nome: string,
    categoria: string,
    descricao: string,
    icms:number,
    barCode: number,
    peso: number,
    precoCusto: number,
    precoVenda: number,
    unidades: number,
}

const produtoSchema = new mongoose.Schema({
    nome:{
        type: String
    },
    categoria:{
        type:String,
    },
    descricao:{
        type: String,
    },
    icms:{
        type: Number,
    },
    barCode:{
        type: Number,
    },
    precoCusto:{
        type: Number,
    },
    precoVenda:{
        type: Number,
    },
    peso:{
        type: Number,
    },
    unidades:{
        type: Number,
    }
})

export const Produto  = mongoose.model<Produto>('Produto',produtoSchema)