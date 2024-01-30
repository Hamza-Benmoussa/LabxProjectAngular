import { TestBed } from '@angular/core/testing';

import { TestanalyseService } from './testanalyse.service';

describe('TestanalyseService', () => {
  let service: TestanalyseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestanalyseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
