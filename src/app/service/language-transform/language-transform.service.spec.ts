import { TestBed } from '@angular/core/testing';

import { LanguageTransformService } from './language-transform.service';

describe('LanguageTransformService', () => {
  let service: LanguageTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
