import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { posGuradGuard } from './pos-gurad.guard';

describe('posGuradGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => posGuradGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
