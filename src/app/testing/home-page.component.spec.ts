import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from '../modules/home/pages/home-page/home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterOutlet } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterOutlet
      ],
      declarations: [HomePageComponent, SideBarComponent, MediaPlayerComponent, SearchComponent, PlayListBodyComponent, PlayListHeaderComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
