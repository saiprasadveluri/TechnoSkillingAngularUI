import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGallaryItemComponent } from './app-gallary-item.component';

describe('AppGallaryItemComponent', () => {
  let component: AppGallaryItemComponent;
  let fixture: ComponentFixture<AppGallaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGallaryItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGallaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
