import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiltotalComponent } from './effectiltotal.component';

describe('EffectiltotalComponent', () => {
  let component: EffectiltotalComponent;
  let fixture: ComponentFixture<EffectiltotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffectiltotalComponent]
    });
    fixture = TestBed.createComponent(EffectiltotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
