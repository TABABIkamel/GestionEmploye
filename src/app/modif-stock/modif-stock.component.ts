import { stock } from './../model/stock';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-stock',
  templateUrl: './modif-stock.component.html',
  styleUrls: ['./modif-stock.component.css']
})
export class ModifStockComponent implements OnInit {
  stock:stock=new stock();
  id:string;
  constructor(private stockService:StockService,private actRoute:ActivatedRoute,private route:Router) { }
  addStock(){
   this.stockService.putStock(this.stock.id,this.stock).subscribe(res=>this.route.navigateByUrl('/stock'));
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(res=>this.id=res.get('id'))
    this.stockService.getProdById(Number(this.id)).subscribe(res=>this.stock=res)
  }

}
