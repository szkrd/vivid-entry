import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ITopRated } from '../../types/movies';
import { ITopRatedResponse } from '../../types/api';

const qs = { stringify: (obj) => new URLSearchParams(obj).toString() };
type TMoviePage = Observable<ITopRated[]>;

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss']
})
export class DiscoverMoviesComponent implements OnInit {
  moviePages: TMoviePage[] = [];
  page = 1;

  ngOnInit(): void {
    this.download();
  }

  download() {
    this.moviePages.push(
      ajax.getJSON(`${env.apiUrl}/discover/movie?` + qs.stringify({
        sort_by: 'release_date.desc',
        'release_date.lte': (new Date()).toISOString().substr(0, 10),
        page: this.page
      })).pipe(map((data: ITopRatedResponse) => data.results))
    );
  }

  onShowMoreClick = () => {
    this.page++;
    this.download();
  }
}
