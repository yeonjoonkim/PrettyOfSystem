import { TestBed } from '@angular/core/testing';

import { ShopConsultRepositoryService } from './shop-consult-repository.service';

describe('ShopConsultRepositoryService', () => {
  let service: ShopConsultRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopConsultRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
