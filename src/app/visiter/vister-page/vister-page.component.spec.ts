import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisterPageComponent } from './vister-page.component';

describe('VisterPageComponent', () => {
  let component: VisterPageComponent;
  let fixture: ComponentFixture<VisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
