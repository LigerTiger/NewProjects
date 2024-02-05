import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationportfoliolistComponent } from './applicationportfoliolist.component';

describe('ApplicationportfoliolistComponent', () => {
  let component: ApplicationportfoliolistComponent;
  let fixture: ComponentFixture<ApplicationportfoliolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationportfoliolistComponent]
    });
    fixture = TestBed.createComponent(ApplicationportfoliolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
