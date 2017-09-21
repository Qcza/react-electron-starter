import React from 'react';
import { Provider } from 'react-redux';
import HelloWorld from './containers/hello-world'

const Root = ({ store }) => (
  <Provider store={store} >
    <HelloWorld />
  </Provider>
);

export default Root;