import * as restify from 'restify'
import { Router } from '../common/router';
import mongoose from 'mongoose'
import {Produto} from './produto.model'
import { URLSearchParams } from 'url';


class ProdutoRouter extends Router {
    applyRouter(application: restify.Server) {
        application.get('/produtos', (req,resp,next) =>{
            Produto.find().then(produtos =>{
                resp.json(produtos)
                return next()
            }).catch(next)
            
        })
        application.get('/produtos/:id',  (req,resp, next)=>{
            Produto.findById(req.params.id).then(produto =>{
                if(produto){
                    resp.json(produto)
                    return next()
                }
                resp.send(404)
                return next()
            }).catch(next)
            return next()
        })
        application.post('/produto', (req,resp,next)=>{
            let p = new Produto(req.body)
    
            p.save().then(produto => { 
                resp.json(produto)
            }).catch(next)
            return next();
        })

        application.del('/produto/:id' , (req,resp,next)=>{
            Produto.remove({_id:req.params.id}).exec().then((result)=>{
                if(result.n)
                    resp.send(204)
                else
                    resp.send(404)
                return next()
            } ).catch(next)
        })

        application.patch('/produto/:id', (req,resp , next) =>{
            const options  = { new : true}
            Produto.findByIdAndUpdate(req.params.id,req.body,options).then( p => {
                resp.json(p)
                return next()
            }).catch(next)
        })
    }
}

export const produtoRouter  = new ProdutoRouter