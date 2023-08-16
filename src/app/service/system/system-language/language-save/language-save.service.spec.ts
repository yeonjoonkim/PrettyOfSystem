import { TestBed } from '@angular/core/testing';

import { LanguageSaveService } from './language-save.service';

describe('LanguageSaveService', () => {
  let service: LanguageSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
