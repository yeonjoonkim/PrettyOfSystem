import { TestBed } from '@angular/core/testing';

import { LoginOptionService } from './login-option.service';

describe('LoginOptionService', () => {
  let service: LoginOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
