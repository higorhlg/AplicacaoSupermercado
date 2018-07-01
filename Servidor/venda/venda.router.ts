import * as restify from 'restify'
import { Router } from '../common/router';
import mongoose from 'mongoose'
import {Venda} from './venda.model'
import { URLSearchParams } from 'url';


class VendaRouter extends Router {
    applyRouter(application: restify.Server) {
        application.get('/vendas', (req,resp,next) =>{
            Venda.find().then(vendas =>{
                resp.json(vendas)
                return next()
            }).catch(next)
            
        })
        application.get('/vendas/:id',  (req,resp, next)=>{
            Venda.findById(req.params.id).then(venda =>{
                if(venda){
                    resp.json(venda)
                    return next()
                }
                resp.send(404)
                return next()
            }).catch(next)
            return next()
        })
        application.post('/venda', (req,resp,next)=>{
            let p = new Venda(req.body)
    
            p.save().then(venda => { 
                resp.json(venda)
            }).catch(next)
            return next();
        })

        application.del('/venda/:id' , (req,resp,next)=>{
            Venda.remove({_id:req.params.id}).exec().then((result)=>{
                if(result.n)
                    resp.send(204)
                else
                    resp.send(404)
                return next()
            } ).catch(next)
        })

        application.patch('/venda/:id', (req,resp , next) =>{
            const options  = { new : true}
            Venda.findByIdAndUpdate(req.params.id,req.body,options).then( p => {
                resp.json(p)
                return next()
            }).catch(next)
        })
    }
}

export const vendaRouter  = new VendaRouter