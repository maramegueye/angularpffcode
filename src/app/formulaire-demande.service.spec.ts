import { TestBed } from '@angular/core/testing';

import { FormulaireDemandeService } from './formulaire-demande.service';

describe('FormulaireDemandeService', () => {
  let service: FormulaireDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaireDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
