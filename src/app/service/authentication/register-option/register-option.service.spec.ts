import { TestBed } from '@angular/core/testing';

import { RegisterOptionService } from './register-option.service';

describe('RegisterOptionService', () => {
  let service: RegisterOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
