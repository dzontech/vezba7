import { TestBed } from '@angular/core/testing';

import { SinglecountryService } from './singlecountry.service';

describe('SinglecountryService', () => {
  let service: SinglecountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglecountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
