"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const venda_model_1 = require("./venda.model");
class VendaRouter extends router_1.Router {
    applyRouter(application) {
        application.get('/vendas', (req, resp, next) => {
            venda_model_1.Venda.find().then(vendas => {
                resp.json(vendas);
                return next();
            }).catch(next);
        });
        application.get('/vendas/:id', (req, resp, next) => {
            venda_model_1.Venda.findById(req.params.id).then(venda => {
                if (venda) {
                    resp.json(venda);
                    return next();
                }
                resp.send(404);
                return next();
            }).catch(next);
            return next();
        });
        application.post('/venda', (req, resp, next) => {
            let p = new venda_model_1.Venda(req.body);
            p.save().then(venda => {
                resp.json(venda);
            }).catch(next);
            return next();
        });
        application.del('/venda/:id', (req, resp, next) => {
            venda_model_1.Venda.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            }).catch(next);
        });
        application.patch('/venda/:id', (req, resp, next) => {
            const options = { new: true };
            venda_model_1.Venda.findByIdAndUpdate(req.params.id, req.body, options).then(p => {
                resp.json(p);
                return next();
            }).catch(next);
        });
    }
}
exports.vendaRouter = new VendaRouter;
