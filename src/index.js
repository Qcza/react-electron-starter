require('./scss/main.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './js/reducers';
import Root from './js/root'

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== `production`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

let store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

