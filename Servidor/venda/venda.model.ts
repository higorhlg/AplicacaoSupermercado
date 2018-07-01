import mongoose from 'mongoose'

export interface Venda extends mongoose.Document{
    _id:object,
    produto: string,
    quantidade: number,
    valor: number,

}

const vendaSchema = new mongoose.Schema({
    produto:{
        type: String
    },
    quantidade:{
        type: Number,
    },
    valor:{
        type: Number,
    }
})

export const Venda  = mongoose.model<Venda>('Venda',vendaSchema)