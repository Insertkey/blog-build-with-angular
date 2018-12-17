import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWritingComponent } from './blog-writing.component';

describe('BlogWritingComponent', () => {
  let component: BlogWritingComponent;
  let fixture: ComponentFixture<BlogWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
