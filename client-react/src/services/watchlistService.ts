import eventBusService from './eventBusService';

const LS_KEY = 'watchlist';
let list: number[] = [];

// probably an rx behaviour subject would've been nicer
interface IWatchlistChangedEventPayload { list: number[] }
export class WatchlistChangedEvent {
  constructor(payload: IWatchlistChangedEventPayload) {
    eventBusService.emit('WatchlistChangedEvent', payload)
  }
  static subscribe = (cb: (payload: IWatchlistChangedEventPayload) => void) =>
    eventBusService.subscribe('WatchlistChangedEvent', cb);
}

// ---

function init() {
  list = (localStorage.getItem(LS_KEY) || '').split(',').filter(x => x).map(i => parseInt(i, 10));
}

function onListChange() {
  localStorage.setItem(LS_KEY, String(list));
  new WatchlistChangedEvent({ list });
}

function addToWatchlist(movieId: number) {
  list = list.concat(movieId);
  onListChange();
}

function removeFromWatchlist(movieId: number) {
  list = list.filter(n => n !== movieId);
  onListChange();
}

function reset() {
  list = [];
  localStorage.removeItem(LS_KEY);
}

function getList() {
  return list.slice();
}

function getCount() {
  return list.length;
}

const watchlistService = {
  init,
  getCount,
  getList,
  addToWatchlist,
  removeFromWatchlist,
  reset
};

export default watchlistService;
