import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import watchlistService from './services/watchlistService';

watchlistService.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
