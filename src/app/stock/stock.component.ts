import { stock } from './../model/stock';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
   listStock:stock[];
   critere:string;
   value:string;
   nmbStock:number;
   msg:string=""
  constructor(private stockTs:StockService,private rout:Router) {}

  ngOnInit(): void {
    this.stockTs.getStock().subscribe(res=>this.listStock=res);
  }
  chercher(){
   this.nmbStock= this.stockTs.getNumberOf(this.listStock,this.critere,this.value);
   this.msg="il existe "+ this.nmbStock +" produit dans le stock"
  }
  rederictionVersAdd(){
    this.rout.navigateByUrl('/addStock');
  }
  addStockFromFils(e:stock){
     this.stockTs.addStock(e).subscribe();
  }
  supprimer(e){
    console.log(e);
       this.stockTs.deleteStock(e).subscribe();
       this.stockTs.getStock().subscribe(res=>this.listStock=res);
  }

}
