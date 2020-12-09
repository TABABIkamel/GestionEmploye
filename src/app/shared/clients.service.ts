import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/clients"
 httpOptions = { headers: new HttpHeaders({
  'Content-Type': 'application/json'})}


  getClient():Observable<client[]>{
    return this.http.get<client[]>(this.url);
  }
  
  addClient(client:client):Observable<client>{
    return this.http.post<client>(this.url,client,this.httpOptions);
  }
  putClient(id:number,client:client):Observable<client>{
  return this.http.put<client>(this.url+"/"+id,client,this.httpOptions);
  }
  deleteClient(id:number): Observable<client>{
    return this.http.delete<client>(this.url+"/"+id);
  }
  getClientById(id:number):Observable<client>{
    return this.http.get<client>(this.url+"/"+id);
  }
  comp:number=0;
  getNumberOf(list:any[], critiria:string, value:any):number{
    this.comp=0;
    switch(critiria){
      case "name": {
      for(let p of list){
        if(p.name==value){
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
      case "username": {
      for(let p of list){
        if(p.username==value){
            this.comp++;
        }
      }
      break;
    }
      case "email": {
      for(let p of list){
        if(p.email==value){
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
