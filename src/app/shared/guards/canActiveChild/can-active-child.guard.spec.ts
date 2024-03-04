import { TestBed } from '@angular/core/testing';

import { CanActiveChildGuard } from './can-active-child.guard';

describe('CanActiveChildGuard', () => {
  let guard: CanActiveChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActiveChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
