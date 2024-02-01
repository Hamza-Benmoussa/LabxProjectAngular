import { TestBed } from '@angular/core/testing';

import { ReactifService } from './reactif.service';

describe('ReactifService', () => {
  let service: ReactifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
