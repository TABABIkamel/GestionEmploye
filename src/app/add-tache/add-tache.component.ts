import { tache } from './../model/tache';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { TacheService } from '../shared/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {
tache:tache=new tache();
@Output() OutputTache=new EventEmitter<tache>();
  constructor(private tacheService:TacheService,private route:Router) { }

  ngOnInit(): void {
  }
  ajouter(){
    //this.tacheService.addTache(this.tache).subscribe(res=>this.route.navigateByUrl('/taches'));
    this.OutputTache.emit(this.tache);
  }
}
