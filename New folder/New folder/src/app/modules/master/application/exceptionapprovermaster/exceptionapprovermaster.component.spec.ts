import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionapprovermasterComponent } from './exceptionapprovermaster.component';

describe('ExceptionapprovermasterComponent', () => {
  let component: ExceptionapprovermasterComponent;
  let fixture: ComponentFixture<ExceptionapprovermasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionapprovermasterComponent]
    });
    fixture = TestBed.createComponent(ExceptionapprovermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
