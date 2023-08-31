import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  listObservers$:Array<Subscription> = []

  constructor(public multimediaService: MultimediaService) {  }

  ngOnInit(): void {

    // this.multimediaService.trackInfo$.subscribe(res => {
    //   console.log('I must reproduce this track 🔊🎶', res);
    // })

  }

  ngOnDestroy(): void{
    this.listObservers$.forEach( list => list.unsubscribe())
    console.log('💣💣💣💣💣💣 BOOOOM!!!')
  }
}









// export class MediaPlayerComponent {
//   mockCover: TrackModel ={
//     cover:'https://m.media-amazon.com/images/I/51iYfQkU11L._SY300_SX300_QL70_ML2_.jpg',
//     name:'This Love',
//     album:'Vulgar Display of Power',
//     url:'http:local/host/track.mp3',
//     _id: 1

//   }

//   listObservers$:Array<Subscription> = []

//   constructor(private multimediaService: MultimediaService) {}

//   ngOnInit(): void {

//     //this function connect the media player component with the multimedia service

//     const obeservable$1 = this.multimediaService.myObservable1$
//       .subscribe(
//         (responseOk) => {
//           console.log('✅ Receiving observable value....📥🎶', responseOk)
//          },//this function make reference to responseOk, equivalent to next() the value of the observable flows through the component
//         (resposeFail) => {
//           console.log('❌ Not receiving observable value....📥🎶')
//         } //this function make reference to resposeFail, equivalent to error() the value of the observable does not flows through the component
//     )

//     // const obeserver1$: Subscription = this.multimediaService.callback.subscribe(
//     //   (response: TrackModel) => {
//     //     console.log('Receiving track....📥🎶',response)
//     //   }
//     // )

//     // this.listObservers$ = [obeserver1$]
//   }

//   ngOnDestroy(): void{
//     this.listObservers$.forEach( list => list.unsubscribe())
//     console.log('💣💣💣💣💣💣 BOOOOM!!!')
//   }
// }

