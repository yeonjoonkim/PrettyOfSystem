import { TestBed } from '@angular/core/testing';

import { SystemShopCapacityModalService } from './system-shop-capacity-modal.service';

describe('SystemShopCapacityModalService', () => {
  let service: SystemShopCapacityModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemShopCapacityModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
