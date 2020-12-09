import { StockService } from './../shared/stock.service';
import { HttpClient } from '@angular/common/http';
import { stock } from './../model/stock';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock:stock=new stock();
  constructor(private stockService:StockService,private route:Router) { }
  ajouterStock(e){
    console.log(e);
    this.stockService.addStock(e).subscribe(res=>this.route.navigateByUrl('/stock'));
  }

  ngOnInit(): void {
  }
  stockk=new FormGroup({
    id:new FormControl('',Validators.required),
    nom:new FormControl('',Validators.required),
    marque:new FormControl('',Validators.required),
    prix:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])})
      get id(){return this.stockk.get('id')}
      get nom(){return this.stockk.get('nom')}
      get marque(){return this.stockk.get('marque')}
      get prix(){return this.stockk.get('prix')}

}
