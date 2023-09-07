import { TestBed } from '@angular/core/testing';

import { SystemLanguageManagementService } from './system-language-management.service';

describe('SystemLanguageManagementService', () => {
  let service: SystemLanguageManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguageManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
