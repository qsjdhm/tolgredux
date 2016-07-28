import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import NewsList from './containers/NewsList';

const store = configureStore();

render(
  <Provider store={store}>
    <NewsList />
  </Provider>,
  document.getElementById('app')
);
