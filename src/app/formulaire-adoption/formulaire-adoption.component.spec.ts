import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAdoptionComponent } from './formulaire-adoption.component';

describe('FormulaireAdoptionComponent', () => {
  let component: FormulaireAdoptionComponent;
  let fixture: ComponentFixture<FormulaireAdoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireAdoptionComponent]
    });
    fixture = TestBed.createComponent(FormulaireAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
