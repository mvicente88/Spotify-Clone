import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) { 
  }
  
  // private skipById(listTracks: TrackModel[], id:number): Promise<TrackModel[]> {
  //   return new Promise((resolve, reject) =>{
  //     const listTmp = listTracks.filter(hiddenTrack => hiddenTrack._id !== id)
  //     resolve(listTmp)
  //   })
  // }

  getAllTracks$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any)=> {
        return data
      })
    )
  }

  getAllRandom$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      
      map(({data}:any)=> {
        return data
      })
    //   tap(data => console.log('This is the log of tap operator with all tracks',data)),
    //   mergeMap(({data}:any)=> this.skipById(data,5)),
    //   tap(data => console.log('This is the log of tap operator, hidding track 5 using a promise and filter method',data)),
    //   catchError((err) => {
    //     const {status, statusText} = err;
    //     console.log('Something went wrong 💀, please check me 🧐', [status, statusText]);
    //     return of([])
    //   })
    )
  }
  
}
