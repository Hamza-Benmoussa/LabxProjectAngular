import { TestBed } from '@angular/core/testing';

import { TypeanalyseService } from './typeanalyse.service';

describe('TypeanalyseService', () => {
  let service: TypeanalyseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeanalyseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
