import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdopteurComponent } from './add-adopteur.component';

describe('AddAdopteurComponent', () => {
  let component: AddAdopteurComponent;
  let fixture: ComponentFixture<AddAdopteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdopteurComponent]
    });
    fixture = TestBed.createComponent(AddAdopteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
