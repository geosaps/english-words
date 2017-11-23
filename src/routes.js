import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Word from './components/word/Word';
import Learn from './components/learn/learn';
import App from './components/App';

export default (
  <Route path={process.env.PUBLIC_URL + '/'} component={App}>
    <IndexRoute component={Word}></IndexRoute>
    <Route path={process.env.PUBLIC_URL + '/learn'} component={Learn}></Route>
  </Route>
)