import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from '../../types/movies';
import { ajax } from 'rxjs/ajax';
import { environment as env } from '../../../environments/environment';
import { IReviewResponse } from '../../types/api';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews$: Observable<IReview[]>;
  @Input() movieId: number;

  ngOnInit(): void {
    this.reviews$ = ajax.getJSON(`${env.apiUrl}/movie/${this.movieId}/reviews`)
      .pipe(map((data: IReviewResponse) => data.results));
  }
}
