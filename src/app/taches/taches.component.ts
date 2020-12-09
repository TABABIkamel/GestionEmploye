import { TacheService } from './../shared/tache.service';
import { tache } from './../model/tache';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
listTache:tache[];
  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
    this.tacheService.getTache().subscribe(res=>this.listTache=res);
  }
  ajouterTache(e){
      this.tacheService.addTache(e).subscribe();
      this.tacheService.getTache().subscribe(res=>this.listTache=res);

  }
  supp(e){
    console.log(e)
this.tacheService.deleteTache(e).subscribe();
this.tacheService.getTache().subscribe(res=>this.listTache=res);
  }
}
