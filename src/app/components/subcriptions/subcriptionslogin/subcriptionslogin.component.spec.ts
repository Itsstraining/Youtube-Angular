import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionsloginComponent } from './subcriptionslogin.component';

describe('SubcriptionsloginComponent', () => {
  let component: SubcriptionsloginComponent;
  let fixture: ComponentFixture<SubcriptionsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcriptionsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
