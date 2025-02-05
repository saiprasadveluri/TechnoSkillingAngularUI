import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBloglistItemComponent } from './app-bloglist-item.component';

describe('AppBloglistItemComponent', () => {
  let component: AppBloglistItemComponent;
  let fixture: ComponentFixture<AppBloglistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBloglistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBloglistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
