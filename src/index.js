import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MtG/CSS/Card.css'
import Cards from './MtG/Components/Cards.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Cards />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
