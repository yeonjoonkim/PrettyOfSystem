import { TestBed } from '@angular/core/testing';

import { SystemMenuCategoryAddService } from './system-menu-category-add.service';

describe('SystemMenuCategoryAddService', () => {
  let service: SystemMenuCategoryAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemMenuCategoryAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
