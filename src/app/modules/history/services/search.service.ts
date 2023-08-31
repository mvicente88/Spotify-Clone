import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }
  
  searchTracks$(term:String): Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${term}`)
      .pipe(
      map((dataRaw:any) => dataRaw.data)
      //this pipe allows to show in the play list body the results we're searching on the search bar
    )
  }
}
