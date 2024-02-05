import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenPopupComponent } from './commen-popup.component';

describe('CommenPopupComponent', () => {
  let component: CommenPopupComponent;
  let fixture: ComponentFixture<CommenPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommenPopupComponent]
    });
    fixture = TestBed.createComponent(CommenPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
