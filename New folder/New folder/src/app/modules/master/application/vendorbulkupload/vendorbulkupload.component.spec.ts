import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorbulkuplodComponent } from './vendorbulkupload.component';

describe('VendorbulkuplodComponent', () => {
  let component: VendorbulkuplodComponent;
  let fixture: ComponentFixture<VendorbulkuplodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorbulkuplodComponent]
    });
    fixture = TestBed.createComponent(VendorbulkuplodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
