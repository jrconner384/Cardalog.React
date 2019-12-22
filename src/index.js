import './assets/css/material-kit.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/Card.css'
import AppContainer from './components/AppContainer.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppContainer />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
