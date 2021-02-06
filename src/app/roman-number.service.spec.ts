import { TestBed } from '@angular/core/testing';

import { RomanNumberService } from './roman-number.service';

describe('RomanNumberService', () => {
  let service: RomanNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
