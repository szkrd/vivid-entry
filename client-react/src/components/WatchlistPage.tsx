import React from 'react';
import watchlistService from '../services/watchlistService';

export default function WatchlistPage() {
  const onClearWatchlistClick = () => watchlistService.reset();
  return (
    <div>
      <h1>NYI :(</h1>
      <p>
        Technically the user <em>can</em> save a watchlist...
      </p>
      <p>
        <button onClick={onClearWatchlistClick}>Clear my watchlist</button>
      </p>
    </div>
  );
}
