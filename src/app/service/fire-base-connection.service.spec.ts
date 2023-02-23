import { TestBed } from '@angular/core/testing';

import { FireBaseConnectionService } from './fire-base-connection.service';

describe('FireBaseConnectionService', () => {
  let service: FireBaseConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
