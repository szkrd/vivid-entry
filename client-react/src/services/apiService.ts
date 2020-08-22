import { ICredits } from '../../../client/src/app/types/people';
import { Observable } from 'rxjs';
import { IDetails, IDiscovery, IReview, ITopRated } from '../../../client/src/app/types/movies';
import { map } from 'rxjs/operators';
import { call, getUrl } from '../utils/ajax';

class ApiService {
  // for cast and crew
  getMovieCredits(movieId: number) {
    return call.get<ICredits>(getUrl(`/movie/${movieId}/credits`));
  }

  // for discover movies
  discoverMovie(page = 1) {
    return call.get<ITopRated[]>(getUrl('/discover/movie', {
      sort_by: 'release_date.desc',
      'release_date.lte': (new Date()).toISOString().substr(0, 10),
      page: '' + page
    })).pipe(map((data: any) => data.results));
  }

  // for details
  getMovieDetails(movieId: number): Observable<IDetails> {
    return call.get(getUrl(`/movie/${movieId}`));
  }

  // for reviews
  getMovieReviews(movieId: number) {
    return call.get<IReview[]>(getUrl(`/movie/${movieId}/reviews`))
      .pipe(map((data: any) => data.results));
  }

  // for top rated
  getTopRatedMovies() {
    const MAX_ITEMS = 10;
    return call.get<IDiscovery[]>(getUrl('/movie/top_rated'))
      .pipe(map((data: any) => data.results.slice(0, MAX_ITEMS)));
  }
}

const apiService = new ApiService();
export default apiService;
