import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherentimentownermappingComponent } from './otherentimentownermapping.component';

describe('OtherentimentownermappingComponent', () => {
  let component: OtherentimentownermappingComponent;
  let fixture: ComponentFixture<OtherentimentownermappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherentimentownermappingComponent]
    });
    fixture = TestBed.createComponent(OtherentimentownermappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
