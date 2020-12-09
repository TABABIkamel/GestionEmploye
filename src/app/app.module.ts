import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ModifStockComponent } from './modif-stock/modif-stock.component';
import { ClientsComponent } from './clients/clients.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { TachesComponent } from './taches/taches.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { from } from 'rxjs';
import {AngularFireModule } from '@angular/fire';
import { LoginService } from './shared/login.service';
@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    AddStockComponent,
    ModifStockComponent,
    ClientsComponent,
    ModifClientComponent,
    AddClientComponent,
    TachesComponent,
    AddTacheComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBxjkkStoLPIOA1RqlQGj4LLgy_kaYPNss",
      authDomain: "k19011998.firebaseapp.com",
      projectId: "k19011998",
      storageBucket: "k19011998.appspot.com",
      messagingSenderId: "273319134540",
      appId: "1:273319134540:web:82ee77d34c44a7d0d57be9",
      measurementId: "G-8L865S465D"
    })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
