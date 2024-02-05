import { TestBed } from '@angular/core/testing';

import { CommenPopupService } from './commen-popup.service';

describe('CommenPopupService', () => {
  let service: CommenPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommenPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
