import { TestBed } from '@angular/core/testing';

import { SystemLanguageAddService } from './system-language-add.service';

describe('SystemLanguageAddService', () => {
  let service: SystemLanguageAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguageAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
