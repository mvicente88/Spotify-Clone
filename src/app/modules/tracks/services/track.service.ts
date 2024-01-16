import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { 
  }
  
  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    console.log(environment.api, "this is the API environment");

    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any)=> {
        return data
      })
    )
  }

  getAllRandom$():Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      
      // map(({data}:any)=> {
      //    return data
      // }),
      //  tap(data => console.log('This is the log of tap operator with all tracks',data)),
      //  mergeMap(({data}:any)=> this.skipById(data,5)),
      //  tap(data => console.log('This is the log of tap operator, hidding track 5 using a promise and filter method',data)),
      catchError((err) => {
        const {status, statusText} = err;
        console.log('Something went wrong 💀, please check me 🧐', [status, statusText]);
        return of([])
      })
    )
  }
  
}
