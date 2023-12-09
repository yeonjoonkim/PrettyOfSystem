import { TestBed } from '@angular/core/testing';

import { MassageBodyPreferenceService } from './massage-body-preference.service';

describe('MassageBodyPreferenceService', () => {
  let service: MassageBodyPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageBodyPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
