import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdoptionComponent } from './register-adoption.component';

describe('RegisterAdoptionComponent', () => {
  let component: RegisterAdoptionComponent;
  let fixture: ComponentFixture<RegisterAdoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAdoptionComponent]
    });
    fixture = TestBed.createComponent(RegisterAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
