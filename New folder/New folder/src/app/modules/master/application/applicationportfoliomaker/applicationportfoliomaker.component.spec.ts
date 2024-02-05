import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationportfoliomakerComponent } from './applicationportfoliomaker.component';

describe('ApplicationportfoliomakerComponent', () => {
  let component: ApplicationportfoliomakerComponent;
  let fixture: ComponentFixture<ApplicationportfoliomakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationportfoliomakerComponent]
    });
    fixture = TestBed.createComponent(ApplicationportfoliomakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
