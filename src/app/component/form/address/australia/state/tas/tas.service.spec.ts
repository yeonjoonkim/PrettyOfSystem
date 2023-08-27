import { TestBed } from '@angular/core/testing';

import { TasService } from './tas.service';

describe('TasService', () => {
  let service: TasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
