import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminBlogCategoryManageComponent } from './app-admin-blog-category-manage.component';

describe('AppAdminBlogCategoryManageComponent', () => {
  let component: AppAdminBlogCategoryManageComponent;
  let fixture: ComponentFixture<AppAdminBlogCategoryManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAdminBlogCategoryManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAdminBlogCategoryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
