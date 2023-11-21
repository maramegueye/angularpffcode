import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdopteurComponent } from './update-adopteur.component';

describe('UpdateAdopteurComponent', () => {
  let component: UpdateAdopteurComponent;
  let fixture: ComponentFixture<UpdateAdopteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAdopteurComponent]
    });
    fixture = TestBed.createComponent(UpdateAdopteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
