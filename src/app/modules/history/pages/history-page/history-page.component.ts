import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResults$: Observable<any> = of ([])

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    
  }

  receiveData(event: string): void{
    console.log('🧔 This is the father of search component receiving data =>', event)
    this.listResults$ = this.searchService.searchTracks$(event)
    //no needed a subscription cause we're equalling listResults$ (observable) with the service of Search component
  }

}
