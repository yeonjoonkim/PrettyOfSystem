import { TestBed } from '@angular/core/testing';

import { ClientShopLanguagePackageService } from './client-shop-language-package.service';

describe('ClientShopLanguagePackageService', () => {
  let service: ClientShopLanguagePackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientShopLanguagePackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
