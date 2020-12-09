import { client } from './../model/client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:client=new client();
  constructor(private clientService:ClientsService,private rout:Router) { }

  ngOnInit(): void {
  }
  ajouter(){
   this.clientService.addClient(this.client).subscribe(res=>this.rout.navigateByUrl('clients'))
  }

}
