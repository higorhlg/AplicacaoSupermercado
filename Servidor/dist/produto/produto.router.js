"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const produto_model_1 = require("./produto.model");
class ProdutoRouter extends router_1.Router {
    applyRouter(application) {
        application.get('/produtos', (req, resp, next) => {
            produto_model_1.Produto.find().then(produtos => {
                resp.json(produtos);
                return next();
            }).catch(next);
        });
        application.get('/produtos/:id', (req, resp, next) => {
            produto_model_1.Produto.findById(req.params.id).then(produto => {
                if (produto) {
                    resp.json(produto);
                    return next();
                }
                resp.send(404);
                return next();
            }).catch(next);
            return next();
        });
        application.post('/produto', (req, resp, next) => {
            let p = new produto_model_1.Produto(req.body);
            p.save().then(produto => {
                resp.json(produto);
            }).catch(next);
            return next();
        });
        application.del('/produto/:id', (req, resp, next) => {
            produto_model_1.Produto.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            }).catch(next);
        });
        application.patch('/produto/:id', (req, resp, next) => {
            const options = { new: true };
            produto_model_1.Produto.findByIdAndUpdate(req.params.id, req.body, options).then(p => {
                resp.json(p);
                return next();
            }).catch(next);
        });
    }
}
exports.produtoRouter = new ProdutoRouter;
