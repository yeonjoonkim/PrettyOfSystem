import { TestBed } from '@angular/core/testing';

import { SystemLanguageStorageService } from './system-language-storage.service';

describe('SystemLanguageStorageService', () => {
  let service: SystemLanguageStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguageStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
