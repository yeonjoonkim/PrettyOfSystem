import { TestBed } from '@angular/core/testing';

import { TranslateCriteriaService } from './translate-criteria.service';

describe('TranslateCriteriaService', () => {
  let service: TranslateCriteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateCriteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
