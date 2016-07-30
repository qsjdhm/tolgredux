
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './stores';
import Login from './containers/Login';
import NewsList from './containers/NewsList';
import NewsViewer from './containers/NewsViewer';


const store = configureStore();

render(
  <Provider store={store}>
	  <Router history={browserHistory}>
		  <Route path="newslist" component={NewsList} />
		  <Route path="newsviewer/:id" component={NewsViewer} />
		  <Route path="login" component={Login} />
	  </Router>
  </Provider>,
  document.getElementById('app')
);
