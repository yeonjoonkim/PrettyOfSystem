import { TestBed } from '@angular/core/testing';

import { AustraliaPostCodeService } from './australia-post-code.service';

describe('AustraliaPostCodeService', () => {
  let service: AustraliaPostCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AustraliaPostCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
