import { TestBed } from '@angular/core/testing';

import { SystemLanguagePackageService } from './system-language-package.service';

describe('SystemLanguagePackageService', () => {
  let service: SystemLanguagePackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguagePackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
