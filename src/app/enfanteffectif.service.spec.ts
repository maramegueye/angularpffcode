import { TestBed } from '@angular/core/testing';

import { EnfanteffectifService } from './enfanteffectif.service';

describe('EnfanteffectifService', () => {
  let service: EnfanteffectifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfanteffectifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
