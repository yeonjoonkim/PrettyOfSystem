import { TestBed } from '@angular/core/testing';

import { SystemLanguageRepositoryService } from './system-language-repository.service';

describe('SystemLanguageRepositoryService', () => {
  let service: SystemLanguageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
