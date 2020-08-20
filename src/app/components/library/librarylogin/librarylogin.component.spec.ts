import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryloginComponent } from './librarylogin.component';

describe('LibraryloginComponent', () => {
  let component: LibraryloginComponent;
  let fixture: ComponentFixture<LibraryloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
