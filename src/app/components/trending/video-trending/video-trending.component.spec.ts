import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTrendingComponent } from './video-trending.component';

describe('VideoTrendingComponent', () => {
  let component: VideoTrendingComponent;
  let fixture: ComponentFixture<VideoTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
