import { TestBed } from '@angular/core/testing';

import { MassageBodyService } from './massage-body.service';

describe('MassageBodyService', () => {
  let service: MassageBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
