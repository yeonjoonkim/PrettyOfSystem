import { TestBed } from '@angular/core/testing';

import { CheckInShopService } from './check-in-shop.service';

describe('CheckInShopService', () => {
  let service: CheckInShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
