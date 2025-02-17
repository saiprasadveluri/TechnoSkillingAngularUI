import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGallaryViewComponent } from './app-gallary-view.component';

describe('AppGallaryViewComponent', () => {
  let component: AppGallaryViewComponent;
  let fixture: ComponentFixture<AppGallaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGallaryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGallaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
