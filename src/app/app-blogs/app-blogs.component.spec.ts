import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogsComponent } from './app-blogs.component';

describe('AppBlogsComponent', () => {
  let component: AppBlogsComponent;
  let fixture: ComponentFixture<AppBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
