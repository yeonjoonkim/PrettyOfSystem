import { TestBed } from '@angular/core/testing';

import { ShopLanguagePackageService } from './shop-language-package.service';

describe('ShopLanguagePackageService', () => {
  let service: ShopLanguagePackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopLanguagePackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
