import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfanteffectifComponent } from './enfanteffectif.component';

describe('EnfanteffectifComponent', () => {
  let component: EnfanteffectifComponent;
  let fixture: ComponentFixture<EnfanteffectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnfanteffectifComponent]
    });
    fixture = TestBed.createComponent(EnfanteffectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
