import { TestBed } from '@angular/core/testing';

import { ElsoService } from './elso.service';

describe('ElsoService', () => {
  let service: ElsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
