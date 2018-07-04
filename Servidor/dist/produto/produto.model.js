"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const produtoSchema = new mongoose_1.default.Schema({
    nome: {
        type: String
    },
    categoria: {
        type: String,
    },
    descricao: {
        type: String,
    },
    icms: {
        type: Number,
    },
    barCode: {
        type: Number,
    },
    precoCusto: {
        type: Number,
    },
    precoVenda: {
        type: Number,
    },
    peso: {
        type: Number,
    },
    unidades: {
        type: Number,
    }
});
exports.Produto = mongoose_1.default.model('Produto', produtoSchema);
