import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { TracksModule } from '@modules/tracks/tracks.module';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()
  
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('  ') //ToDo: begining with total track duration
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)
  private currentTrackIndex: number = -1;

  constructor(private trackService: TrackService) {
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        this.setAudio(responseOK)
      }

    })

    this.listenAllEvents()
  }

  private listenAllEvents(): void {
    
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  private setPlayerStatus = (state: any) => {
    console.log('state', state)
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play')
        break;
      case 'playing':
        this.playerStatus$.next('playing')
        break;
      case 'ended':
        this.playerStatus$.next('ended')
        break;
      default:
        this.playerStatus$.next('paused')
        break;
    }
  }

  private calculateTime = () => {
    console.log('Triggering event')
    const { duration, currentTime } = this.audio
    //console.table([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.setRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setPercentage(currentTime: number, duration: number): void {
    // duration 100%
    //currentTime x
    //currentTime * 100 / duration

    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage)


  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) // this operation will return an integer,previously the log table showed a decimal number 
    let minutes = Math.floor((currentTime / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes} : ${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  private setRemaining(currentTime: number, duration: number) {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60) // this operation will return an integer,previously the log table showed a decimal number 
    let minutes = Math.floor((timeLeft / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `- ${displayMinutes} : ${displaySeconds}`
    this.timeRemaining$.next(displayFormat)

  }

  
    
  



  //PUBLIC FUNCTION

  public setAudio(track: TrackModel): void {
    console.log('service with the track info', track);
    this.audio.src = track.url
    this.audio.play()
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }
  
  public seekAudio(percentage: number): void {
    const { duration } = this.audio
    console.log(`Duration: ${duration}, Percentage ${percentage}`)
    const percentageToSecond = (percentage * duration) / 100
    console.log(percentageToSecond)
    this.audio.currentTime = percentageToSecond
  
  }

  public playNextTrack(): void {
    this.trackService.getAllTracks$().subscribe((tracks: TrackModel[]) => {
      if (tracks.length === 0) return; // No hacemos nada si no hay pistas

      this.currentTrackIndex = (this.currentTrackIndex + 1) % tracks.length;
      const nextTrack: TrackModel = tracks[this.currentTrackIndex];

      if (nextTrack) {
        this.setAudio(nextTrack);
        this.trackInfo$.next(nextTrack);
      }
    });
  }

  public playPreviousTrack(): void {
    this.trackService.getAllTracks$().subscribe((tracks: TrackModel[]) => {
      if (tracks.length === 0) return; // No hacemos nada si no hay pistas

      this.currentTrackIndex = (this.currentTrackIndex - 1 + tracks.length) % tracks.length;
      const previousTrack: TrackModel = tracks[this.currentTrackIndex];

      if (previousTrack) {
        this.setAudio(previousTrack);
        this.trackInfo$.next(previousTrack);
      }
    });
  }
}










// // export class MultimediaService {

// //   callback: EventEmitter<any> = new EventEmitter<any>()
  
// //   myObservable1$:Observable<any> = new Observable()

// //   Subject
// //   myObservable1$: Subject<any> = new Subject()

// //   BehaviorSubject (Is necessary inicializate it)
// //   myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Sending value to media player component')

// //   constructor() {

// //     BehaviorSubject
// //     setTimeout(() => {
// //       this.myObservable1$.next('Sending value to media player component')
// //     }, 1000)

// //     Subject
// //     A Subject is both an Observable and an Observer, so we can use the methods inline, next to it (.next, .complete, .error)
// //     Use a setTimeout to let the component's ngOnInit run before the service's method
// //     setTimeout(() => {
// //       this.myObservable1$.next('Sending value to media player component')
// //     },1000)


// //     this.myObservable1$ = new Observable(
// //       (observer: Observer<any>) => {
// //         observer.next('This is the value send to the observable1$ subscription')
        
// //         setTimeout(() => {
// //           observer.complete()//this observer send complete to the subscription, therefore all other observables will be stopped 
// //         },1000)

// //         setTimeout(() => {
// //           observer.next('Every 2,5 seconds this observer send value to the subscription')
// //         },2500)

// //         setTimeout(() => {
// //           observer.error('Every 3,5 seconds this observer send error to the subscription')
// //         },3500)
// //       }
    
// //     )
// //   }
// // }



