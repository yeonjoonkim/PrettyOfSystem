import { TestBed } from '@angular/core/testing';

import { MassagePressureLevelService } from './massage-pressure-level.service';

describe('MassagePressureLevelService', () => {
  let service: MassagePressureLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassagePressureLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
