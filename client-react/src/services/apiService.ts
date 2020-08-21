import { ICredits } from '../../../client/src/app/types/people';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { IDetails, IDiscovery, IReview, ITopRated } from '../../../client/src/app/types/movies';
import { map } from 'rxjs/operators';

const API_URL = process.env.REACT_APP_API_URL || '//localhost:5050/3';

function getUrl(pathName: string, queryParams?: Record<string, string>) {
  const qs: string = queryParams ? new URLSearchParams(queryParams).toString() : '';
  return API_URL + pathName + (qs ? `?${qs}` : '');
}

// for cast and crew
function getMovieCredits(movieId: number): Observable<ICredits> {
  return ajax.getJSON(getUrl(`/movie/${movieId}/credits`));
}

// for discover movies
function discoverMovie(page = 1): Observable<ITopRated[]> {
  return ajax.getJSON(getUrl('/discover/movie', {
    sort_by: 'release_date.desc',
    'release_date.lte': (new Date()).toISOString().substr(0, 10),
    page: '' + page
  })).pipe(map((data: any) => data.results)); // TODO data: ITopRatedResponse ??
}

// for details
function getMovieDetails(movieId: number): Observable<IDetails> {
  return ajax.getJSON(getUrl(`/movie/${movieId}`));
}

// for reviews
function getMovieReviews(movieId: number): Observable<IReview[]> {
  return ajax.getJSON(getUrl(`/movie/${movieId}/reviews`))
    .pipe(map((data: any) => data.results)); // TODO data: IReviewResponse ??
}

// for top rated
function getTopRatedMovies(): Observable<IDiscovery[]> {
  const MAX_ITEMS = 10;
  return ajax.getJSON(getUrl('/movie/top_rated'))
    .pipe(map((data: any) => data.results.slice(0, MAX_ITEMS))); // TODO data: IDiscoveryResponse ??
}

const apiService = {
  getMovieCredits,
  discoverMovie,
  getMovieDetails,
  getMovieReviews,
  getTopRatedMovies
};

export default apiService;
