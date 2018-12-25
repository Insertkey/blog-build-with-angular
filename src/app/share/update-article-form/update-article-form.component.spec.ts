import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleFormComponent } from './update-article-form.component';

describe('UpdateArticleFormComponent', () => {
  let component: UpdateArticleFormComponent;
  let fixture: ComponentFixture<UpdateArticleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArticleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
