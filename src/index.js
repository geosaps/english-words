import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import configureStore from './store/configureStore';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

