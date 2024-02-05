import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationcontrolmatrixComponent } from './applicationcontrolmatrix.component';

describe('ApplicationcontrolmatrixComponent', () => {
  let component: ApplicationcontrolmatrixComponent;
  let fixture: ComponentFixture<ApplicationcontrolmatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationcontrolmatrixComponent]
    });
    fixture = TestBed.createComponent(ApplicationcontrolmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
