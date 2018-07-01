
import {Server} from './server/server'
import { produtoRouter } from './produto/produto.router';
import { vendaRouter } from './venda/venda.router';

const server:Server = new Server

server.bootstrap([produtoRouter, vendaRouter]).then( server => {
   
    console.log(`servidor executando na porta ${server.application.address().port}`)
}).catch( error =>{
    console.log(`Servidor não inicializou ..  ${error}`)
    process.exit(1)
})
















// const restify = require('restify');
// const server = restify.createServer({
//     name: 'server',
//     version: '1.0.0'
// });

// server.listen(3000, () => {
//     console.log("escutando porta 3000");
// })

// server.get('/hello', (req,resp,next)=>{

// })