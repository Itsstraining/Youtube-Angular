import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCategoriesComponent } from './trending-categories.component';

describe('TrendingCategoriesComponent', () => {
  let component: TrendingCategoriesComponent;
  let fixture: ComponentFixture<TrendingCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
