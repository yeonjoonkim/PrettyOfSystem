import { TestBed } from '@angular/core/testing';

import { LanguageModalService } from './language-modal.service';

describe('LanguageModalService', () => {
  let service: LanguageModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
