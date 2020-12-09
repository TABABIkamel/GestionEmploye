import { client } from './../model/client';
import { ClientsService } from './../shared/clients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-client',
  templateUrl: './modif-client.component.html',
  styleUrls: ['./modif-client.component.css']
})
export class ModifClientComponent implements OnInit {
 idClient:string;
 client:client=new client();
  constructor(private actRout:ActivatedRoute ,private clientService:ClientsService,private rout:Router) { }

  ngOnInit(): void {
    this.actRout.paramMap.subscribe(res=>this.idClient=res.get('id'));
    this.clientService.getClientById(+this.idClient).subscribe(res=>this.client=res);
  }
  modifier(){
    this.clientService.putClient(this.client.id,this.client).subscribe(res=>this.rout.navigateByUrl('/clients'));
  }


}
