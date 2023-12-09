import { TestBed } from '@angular/core/testing';

import { MassageBodyFrontService } from './massage-body-front.service';

describe('MassageBodyFrontService', () => {
  let service: MassageBodyFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageBodyFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
