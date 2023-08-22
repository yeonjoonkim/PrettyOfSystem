import { TestBed } from '@angular/core/testing';

import { LanguagePackageService } from './language-package.service';

describe('LanguagePackageService', () => {
  let service: LanguagePackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagePackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
