import React, {useEffect, useState} from 'react';
import {ITopRated} from '../../../client/src/app/types/movies';
import apiService from '../services/apiService';
import {Link} from 'react-router-dom';
import AddToWatchlist from './AddToWatchlist';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, .1) 100%)',
    margin: 5,
    borderRadius: 5
  },
  link: {
    display: 'block',
    padding: 5
  }
});

export default function DiscoverMovies() {
  const classes = useStyles();
  const [movies, setMovies] = useState<ITopRated[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    apiService.getDiscoverableMovies(page).then(data => {
      setMovies(movies.concat(data));
    });
    // eslint-disable-next-line
  }, [page]); // do NOT add movies

  const onShowMoreClick = () => {
    setPage(page + 1);
  };
  return (
    <div className="discover-movies-component">
      <h2>Discover movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className={classes.row}>
            <Link to={`/movie/${movie.id}`}>
              {movie.release_date} {movie.title}
            </Link>
            <AddToWatchlist movieId={movie.id}/>
          </li>
        ))}
        <li>
          <button onClick={onShowMoreClick}>Show more</button>
        </li>
      </ul>
    </div>
  );
}
