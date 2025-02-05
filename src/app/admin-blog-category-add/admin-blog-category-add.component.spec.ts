import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogCategoryAddComponent } from './admin-blog-category-add.component';

describe('AdminBlogCategoryAddComponent', () => {
  let component: AdminBlogCategoryAddComponent;
  let fixture: ComponentFixture<AdminBlogCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBlogCategoryAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlogCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
