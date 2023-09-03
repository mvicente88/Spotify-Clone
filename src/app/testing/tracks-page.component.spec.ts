import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksPageComponent } from '../modules/tracks/pages/tracks-page/tracks-page.component';
import { TrackService } from '@modules/tracks/services/track.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';

describe('TracksPageComponent', () => {
  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TracksPageComponent, GenericSectionComponent],
      providers: [TrackService]
    });
    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
