import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationdlmasterComponent } from './applicationdlmaster.component';

describe('ApplicationdlmasterComponent', () => {
  let component: ApplicationdlmasterComponent;
  let fixture: ComponentFixture<ApplicationdlmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationdlmasterComponent]
    });
    fixture = TestBed.createComponent(ApplicationdlmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
