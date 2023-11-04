import { TestBed } from '@angular/core/testing';

import { ShopPictureRepositoryService } from './shop-picture-repository.service';

describe('ShopPictureRepositoryService', () => {
  let service: ShopPictureRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPictureRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
