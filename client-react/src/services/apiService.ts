const API_URL = process.env.REACT_APP_API_URL || '//localhost:5050/3';

function getUrl(pathName: string, queryParams?: Record<string, string>) {
  const qs: string = queryParams ? new URLSearchParams(queryParams).toString() : '';
  return API_URL + pathName + (qs ? `?${qs}` : '');
}

// probably rxjs ajax would be okay
function getTopRatedMovies() {
  const MAX_ITEMS = 20;
  return fetch(getUrl('/movie/top_rated'))
    .then(response => response.json())
    .then(data => data.results.slice(0, MAX_ITEMS));
}

function getDiscoverableMovies(page = 1) {
  return fetch(getUrl('/discover/movie', {
    sort_by: 'release_date.desc',
    'release_date.lte': (new Date()).toISOString().substr(0, 10),
    page: '' + page
  }))
    .then(response => response.json())
    .then(data => data.results);
}

const apiService = {
  getTopRatedMovies,
  getDiscoverableMovies
};

export default apiService;
