import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CookiesProvider } from 'react-cookie';

import App from './App';

import store from './services/store';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Router history={history}>
          <App />
        </Router>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
