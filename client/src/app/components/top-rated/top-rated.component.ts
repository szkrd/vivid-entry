import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment as env } from '../../../environments/environment';
import { IDiscovery } from '../../types/movies';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDiscoveryResponse } from '../../types/api';

// unfortunately top rated can NOT be sorted by release date
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  MAX_ITEMS = 10;
  movies$: Observable<IDiscovery[]>;

  ngOnInit(): void {
    this.movies$ = ajax.getJSON(`${env.apiUrl}/discover/movie`)
      .pipe(map((data: IDiscoveryResponse) => data.results.slice(0, this.MAX_ITEMS)));
  }
}
