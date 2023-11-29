import { TestBed } from '@angular/core/testing';

import { WaitngListShopService } from './waitng-list-shop.service';

describe('WaitngListShopService', () => {
  let service: WaitngListShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitngListShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
