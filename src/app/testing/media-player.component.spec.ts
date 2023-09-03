import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlayerComponent } from '../shared/components/media-player/media-player.component';
import { TrackService } from '@modules/tracks/services/track.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MediaPlayerComponent', () => {
  let component: MediaPlayerComponent;
  let fixture: ComponentFixture<MediaPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MediaPlayerComponent],    providers: [TrackService],  
    });
    fixture = TestBed.createComponent(MediaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
