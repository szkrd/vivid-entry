import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { IDiscovery } from '../../types/movies';
import { IDiscoveryResponse } from '../../types/api';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss']
})
export class DiscoverMoviesComponent implements OnInit {
  MAX_ITEMS = 10;
  movies$: Observable<IDiscovery[]>;

  constructor() { }

  ngOnInit(): void {
    this.movies$ = ajax.getJSON(`${env.apiUrl}/discover/movie`)
      .pipe(map((data: IDiscoveryResponse) => data.results.slice(0, this.MAX_ITEMS)));
  }
}
