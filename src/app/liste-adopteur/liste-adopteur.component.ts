import { Component, OnInit } from '@angular/core';
import { Adopteur } from '../models';
import { Observable } from 'rxjs';
import { AdopteurService } from '../adopteur.service';

@Component({
  selector: 'app-liste-adopteur',
  templateUrl: './liste-adopteur.component.html',
  styleUrls: ['./liste-adopteur.component.scss']
})
export class ListeAdopteurComponent implements OnInit {

  adopteurs$: Observable<Adopteur[]> | undefined;

  constructor(private adopteurService: AdopteurService) {}

  ngOnInit() {
    this.adopteurs$ = this.adopteurService.getAdopteurs();
  }
}
