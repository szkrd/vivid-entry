import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OverviewPage from './OverviewPage';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  component: {
    padding: '5px 10px 10px 10px',
    minWidth: 320,
    maxWidth: 1000,
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 0 45px rgba(0, 0, 0, .2)',
    minHeight: 'calc(100% - 15px)'
  }
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.component}>
        <Switch>
          <Route path="/"><OverviewPage/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
