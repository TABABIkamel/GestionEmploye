import { client } from './../model/client';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 listClients:client[];
 critere:string;
 value:string;
 nbClient:number;
 msg:string="";
  constructor(private clientService:ClientsService) { }

  ngOnInit(): void {
this.clientService.getClient().subscribe(res=>this.listClients=res);
  }
  chercher(){
 this.nbClient=this.clientService.getNumberOf(this.listClients,this.critere,this.value);
 if(this.nbClient <= 1)
 this.msg=this.nbClient+ " client correspend à votre recherche";
 else 
 this.msg=this.nbClient+ " clients correspend à votre recherche";
  }
  supp(e){
    this.clientService.deleteClient(e).subscribe();
    this.clientService.getClient().subscribe(res=>this.listClients=res);

  }

}
