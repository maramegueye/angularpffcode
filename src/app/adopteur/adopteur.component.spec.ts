import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopteurComponent } from './adopteur.component';

describe('AdopteurComponent', () => {
  let component: AdopteurComponent;
  let fixture: ComponentFixture<AdopteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopteurComponent]
    });
    fixture = TestBed.createComponent(AdopteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
