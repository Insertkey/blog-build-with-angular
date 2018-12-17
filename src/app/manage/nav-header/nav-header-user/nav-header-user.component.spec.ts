import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderUserComponent } from './nav-header-user.component';

describe('NavHeaderUserComponent', () => {
  let component: NavHeaderUserComponent;
  let fixture: ComponentFixture<NavHeaderUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
