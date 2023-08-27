import { TestBed } from '@angular/core/testing';

import { PostcodeService } from './postcode-service.service';

describe('PostcodeServiceService', () => {
  let service: PostcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
