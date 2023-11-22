import { TestBed } from '@angular/core/testing';

import { AdopteurService } from './adopteur.service';

describe('AdopteurService', () => {
  let service: AdopteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdopteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
