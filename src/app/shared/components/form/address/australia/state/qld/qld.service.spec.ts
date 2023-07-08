import { TestBed } from '@angular/core/testing';

import { QldService } from './qld.service';

describe('QldService', () => {
  let service: QldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
