import { ModifClientComponent } from './modif-client/modif-client.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ClientsComponent } from './clients/clients.component';
import { ModifStockComponent } from './modif-stock/modif-stock.component';
import { StockComponent } from './stock/stock.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { TachesComponent } from './taches/taches.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:"",component:AppComponent},
  {path:"stock",component:StockComponent},
  {path:"addStock",component:AddStockComponent},
  {path:"modifStock/:id",component:ModifStockComponent},
  {path:"clients",component:ClientsComponent},
  {path:"modifClient/:id",component:ModifClientComponent},
  {path:"addClient",component:AddClientComponent},
  {path:'taches',component:TachesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
