import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntroComponent } from './login-entro.component';

describe('LoginEntroComponent', () => {
  let component: LoginEntroComponent;
  let fixture: ComponentFixture<LoginEntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
