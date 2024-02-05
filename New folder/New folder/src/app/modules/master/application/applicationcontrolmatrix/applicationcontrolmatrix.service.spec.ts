import { TestBed } from '@angular/core/testing';

import { ApplicationcontrolmatrixService } from './applicationcontrolmatrix.service';

describe('ApplicationcontrolmatrixService', () => {
  let service: ApplicationcontrolmatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationcontrolmatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
