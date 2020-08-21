import React, {useEffect, useState} from 'react';
import apiService from '../services/apiService';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';
import {IDiscovery} from '../../../client/src/app/types/movies';

const useStyles = createUseStyles({
  component: {
    maxWidth: 400,
    border: '1px solid gray',
    borderRadius: 5,
    boxShadow: '0 0 5px rgba(0,0,0,.3)'
  }
});

export default function TopRated() {
  const classes = useStyles();
  const [movies, setMovies] = useState<IDiscovery[]>([]);
  useEffect(() => {
    apiService.getTopRatedMovies().then(setMovies);
  }, []);
  return (
    <div className={classes.component}>
      <h2>Top movies of all time</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
