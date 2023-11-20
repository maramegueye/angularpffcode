import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from '../models';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  personnels$: Observable<Personnel[]> | undefined;

  constructor(private personnelService: PersonnelService) {}

  ngOnInit() {
    this.personnels$ = this.personnelService.getPersonnels();
  }
}
