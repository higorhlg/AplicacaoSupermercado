import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FormularioCadastarProdutoComponent } from './formulario-cadastar-produto/formulario-cadastar-produto.component';
import { VendasComponent } from './vendas/vendas.component';
import { TesteComponent } from './teste/teste.component';

export const routes: Routes = [
    {
        path: '', component:FormularioCadastarProdutoComponent
    },
    {
        path: 'vendas', component:VendasComponent
    }
];