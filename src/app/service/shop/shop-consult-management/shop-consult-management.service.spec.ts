import { TestBed } from '@angular/core/testing';

import { ShopConsultManagementService } from './shop-consult-management.service';

describe('ShopConsultManagementService', () => {
  let service: ShopConsultManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopConsultManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
