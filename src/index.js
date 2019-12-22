import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MtG/CSS/Card.css'
import App from './App.js';
import Cards from './MtG/Components/Cards.jsx';
import Menu from './Navigation/Components/Menu.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
