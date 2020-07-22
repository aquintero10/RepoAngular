import { TestBed } from '@angular/core/testing';

import { OneServiceService } from './one-service.service';

describe('OneServiceService', () => {
  let service: OneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
