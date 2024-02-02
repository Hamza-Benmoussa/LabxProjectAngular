import { TestBed } from '@angular/core/testing';

import { NormeService } from './norme.service';

describe('NormeService', () => {
  let service: NormeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
