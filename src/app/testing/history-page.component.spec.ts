import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from '../modules/history/pages/history-page/history-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SearchComponent } from '@modules/history/components/search/search.component';

import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';
import { FormsModule } from '@angular/forms';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [HistoryPageComponent, SideBarComponent, MediaPlayerComponent, SearchComponent, PlayListBodyComponent, PlayListHeaderComponent,OrderListPipe]
    });
    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
