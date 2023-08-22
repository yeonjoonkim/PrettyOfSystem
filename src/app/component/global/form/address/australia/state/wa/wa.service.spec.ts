import { TestBed } from '@angular/core/testing';

import { WaService } from './wa.service';

describe('WaService', () => {
  let service: WaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
