import { TestBed } from '@angular/core/testing';

import { AsdGuard } from './asd.guard';

describe('AsdGuard', () => {
  let guard: AsdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AsdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
