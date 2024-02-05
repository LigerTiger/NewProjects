import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraroleComponent } from './infrarole.component';

describe('InfraroleComponent', () => {
  let component: InfraroleComponent;
  let fixture: ComponentFixture<InfraroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraroleComponent]
    });
    fixture = TestBed.createComponent(InfraroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
