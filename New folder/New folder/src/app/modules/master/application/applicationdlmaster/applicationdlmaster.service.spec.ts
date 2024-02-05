import { TestBed } from '@angular/core/testing';

import { ApplicationdlmasterService } from './applicationdlmaster.service';

describe('ApplicationdlmasterService', () => {
  let service: ApplicationdlmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationdlmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
