import { TestBed } from '@angular/core/testing';

import { VicService } from './vic.service';

describe('VicService', () => {
  let service: VicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
