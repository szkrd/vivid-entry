import React, {useEffect, useState} from 'react';
import {ITopRated} from '../../../client/src/app/types/movies';
import apiService from '../services/apiService';
import {Link} from 'react-router-dom';

export default function DiscoverMovies() {
  const [movies, setMovies] = useState<ITopRated[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    apiService.getDiscoverableMovies(page).then(data => {
      console.log(data);
      setMovies(movies.concat(data));
    });
  }, [page]);

  const onShowMoreClick = () => {
    setPage(page + 1);
  };
  return (
    <div className="discover-movies-component">
      <h2>Discover movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.release_date} {movie.title}
            </Link>
            TODO add to watchlist
          </li>
        ))}
        <li>
          <button onClick={onShowMoreClick}>Show more</button>
        </li>
      </ul>
    </div>
  );
}
