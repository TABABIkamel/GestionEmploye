import { Observable } from 'rxjs';
import { tache } from './../model/tache';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  url:string="http://localhost:3000/taches"
  httpOptions = { headers: new HttpHeaders({
   'Content-Type': 'application/json'})}
  constructor(private http:HttpClient) { }
  getTache():Observable<tache[]>{
    return this.http.get<tache[]>(this.url);
  }
  addTache(tache:tache):Observable<tache>{
      return this.http.post<tache>(this.url,tache,this.httpOptions);
  }
  deleteTache(id:number): Observable<tache>{
    return this.http.delete<tache>(this.url+"/"+id);
  }
}
