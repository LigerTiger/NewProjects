import { TestBed } from '@angular/core/testing';
import { OtherentimentownermappingService } from './otherentimentownermapping.service';

describe('OtherentimentownermappingService', () => {
  let service: OtherentimentownermappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherentimentownermappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
