import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending:Array<TrackModel> = [ ]
  tracksRandom:Array<TrackModel> = [ ]
  listObserver$:Array<Subscription>=[]

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    // .subscribe((response:TrackModel[]) => {
    //   console.log('All 🎼🎵🎶',response)
    //   this.tracksTrending = response
    // })
  }

  loadDataRandom(): void{    
    this.trackService.getAllRandom$()
    .subscribe((response:TrackModel[]) => {
      console.log('Random 🎼🎵🎶',response)
      this.tracksRandom = response    
    })
  }

  ngOnDestroy(): void {
    
  }
}
