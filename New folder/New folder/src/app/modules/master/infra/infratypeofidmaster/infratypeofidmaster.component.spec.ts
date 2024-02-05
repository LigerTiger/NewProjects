import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfratypeofidmasterComponent } from './infratypeofidmaster.component';

describe('InfratypeofidmasterComponent', () => {
  let component: InfratypeofidmasterComponent;
  let fixture: ComponentFixture<InfratypeofidmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfratypeofidmasterComponent]
    });
    fixture = TestBed.createComponent(InfratypeofidmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
