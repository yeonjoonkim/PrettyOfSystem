import { TestBed } from '@angular/core/testing';

import { ShopServiceMenuOptionControllerService } from './shop-service-menu-option-controller.service';

describe('ShopServiceMenuOptionControllerService', () => {
  let service: ShopServiceMenuOptionControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServiceMenuOptionControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
