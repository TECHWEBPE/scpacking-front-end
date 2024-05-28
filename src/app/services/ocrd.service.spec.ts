import { TestBed } from '@angular/core/testing';

import { OcrdService } from './ocrd.service';

describe('OcrdService', () => {
  let service: OcrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
