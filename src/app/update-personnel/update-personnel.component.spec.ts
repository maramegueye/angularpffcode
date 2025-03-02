import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonnelComponent } from './update-personnel.component';

describe('UpdatePersonnelComponent', () => {
  let component: UpdatePersonnelComponent;
  let fixture: ComponentFixture<UpdatePersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePersonnelComponent]
    });
    fixture = TestBed.createComponent(UpdatePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
