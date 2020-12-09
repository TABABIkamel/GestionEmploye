import { stock } from './../model/stock';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
 url:string="http://localhost:3000/stock"
 httpOptions = { headers: new HttpHeaders({
  'Content-Type': 'application/json'})}
  constructor(private http:HttpClient) { }

  getStock():Observable<stock[]>{
    return this.http.get<stock[]>(this.url);
  }
  addStock(stock:stock):Observable<stock>{
    return this.http.post<stock>(this.url,stock,this.httpOptions);
  }
  putStock(id:number,stock:stock):Observable<stock>{
  return this.http.put<stock>(this.url+"/"+id,stock,this.httpOptions);
  }
  deleteStock(id:number): Observable<stock>{
    return this.http.delete<stock>(this.url+"/"+id);
  }
  getProdById(id:number):Observable<stock>{
    return this.http.get<stock>(this.url+"/"+id);
  }
  comp:number=0;
  getNumberOf(list:any[], critiria:string, value:any):number{
    this.comp=0;
    switch(critiria){
      case "prix": {
      for(let p of list){
        if(p.prix==value){
            this.comp++;
        }
      }
    }
      break;
      case "id":{
      for(let p of list){
        if(p.id==value){
            this.comp++;
        }
      }
      break;
    }
      case "marque": {
      for(let p of list){
        if(p.marque==value){
            this.comp++;
        }
      }
      break;
    }
      case "nom": {
      for(let p of list){
        if(p.nom==value){
            this.comp++;
        }
      }
      break;
    }
    
    default:{
      this.comp=0;
      break;
    }
    }
     return this.comp;
  }

}
