import React, {useEffect, useState} from 'react';
import watchlistService, {WatchlistChangedEvent} from '../services/watchlistService';

interface IProps {
  movieId?: number
}

export default function AddToWatchlist(props: IProps) {
  const movieId = props.movieId || 0;
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [watchlistIds, setWatchlistIds] = useState<number[]>(watchlistService.getList());

  useEffect(() => WatchlistChangedEvent
    .subscribe((data) => setWatchlistIds(data.list)), []);

  useEffect(() => {
    setIsAdded(watchlistIds.includes(movieId));
  }, [watchlistIds, movieId]);

  const onClick = () => {
    if (isAdded) {
      watchlistService.removeFromWatchlist(movieId);
    } else {
      watchlistService.addToWatchlist(movieId);
    }
  };
  return (
    <div>
      <button onClick={onClick}>
        {isAdded ? 'Remove from watchlist' : 'Add to watchlist'}
      </button>
    </div>
  );
}
