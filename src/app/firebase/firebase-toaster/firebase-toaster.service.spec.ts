import { TestBed } from '@angular/core/testing';

import { FirebaseToasterService } from './firebase-toaster.service';

describe('FirebaseToasterService', () => {
  let service: FirebaseToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
