import { TestBed } from '@angular/core/testing';

import { SystemLanguageService } from './system-language.service';

describe('SystemLanguageService', () => {
  let service: SystemLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
