import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageComponent } from '../modules/favorites/pages/favorites-page/favorites-page.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { TrackService } from '@modules/tracks/services/track.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FavoritesPageComponent, PlayListHeaderComponent, PlayListBodyComponent, OrderListPipe],
      providers: [TrackService],  
    });
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
