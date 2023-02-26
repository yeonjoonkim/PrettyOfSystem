import { TestBed } from '@angular/core/testing';

import { SystemMenuCategoryService } from './system-menu-category.service';

describe('SystemMenuCategoryService', () => {
  let service: SystemMenuCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemMenuCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
