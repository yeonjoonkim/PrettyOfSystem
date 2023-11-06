import { TestBed } from '@angular/core/testing';

import { ShopUserLanguagePackageService } from './shop-user-language-package.service';

describe('UserShopLanguagePackageService', () => {
  let service: ShopUserLanguagePackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopUserLanguagePackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
