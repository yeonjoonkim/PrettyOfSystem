import { TestBed } from '@angular/core/testing';

import { SystemShopService } from './system-shop.service';

describe('SystemShopService', () => {
  let service: SystemShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
