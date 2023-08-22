import { TestBed } from '@angular/core/testing';

import { IonicIconService } from './ionic-icon.service';

describe('IonicIconService', () => {
  let service: IonicIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
