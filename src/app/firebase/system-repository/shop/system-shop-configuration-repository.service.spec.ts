import { TestBed } from '@angular/core/testing';

import { SystemShopConfigurationRepositoryService } from './system-shop-configuration-repository.service';

describe('SystemShopConfigurationRepositoryService', () => {
  let service: SystemShopConfigurationRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemShopConfigurationRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
