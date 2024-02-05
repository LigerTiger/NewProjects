import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizersmakerComponent } from './authorizersmaker.component';

describe('AuthorizersmakerComponent', () => {
  let component: AuthorizersmakerComponent;
  let fixture: ComponentFixture<AuthorizersmakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizersmakerComponent]
    });
    fixture = TestBed.createComponent(AuthorizersmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
