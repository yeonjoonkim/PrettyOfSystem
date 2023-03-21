import { TestBed } from '@angular/core/testing';

import { LanguageTranslationPackageService } from './language-translation-package.service';

describe('LanguageTranslationPackageService', () => {
  let service: LanguageTranslationPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageTranslationPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
