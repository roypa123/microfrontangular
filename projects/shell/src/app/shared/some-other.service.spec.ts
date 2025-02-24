import { TestBed } from '@angular/core/testing';

import { SomeOtherService } from './some-other.service';

describe('SomeOtherService', () => {
  let service: SomeOtherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeOtherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
