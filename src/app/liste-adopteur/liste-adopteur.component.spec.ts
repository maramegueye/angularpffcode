import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdopteurComponent } from './liste-adopteur.component';

describe('ListeAdopteurComponent', () => {
  let component: ListeAdopteurComponent;
  let fixture: ComponentFixture<ListeAdopteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAdopteurComponent]
    });
    fixture = TestBed.createComponent(ListeAdopteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
