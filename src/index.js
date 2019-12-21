import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MtG/CSS/Card.css'
import Card from './MtG/Components/Card.jsx';
import TitleRow from './MtG/Components/TitleRow.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <Cards />
  <Card title="A card"
    black="1" blue="0" colorless="0" converted="1" green="0" red="0" white="0"
    type="Main Type" subtype="Subtype" expansionName="Expansion"
    text="Test (This card is a test card.)" flavorText="This is some lore about the Test Card."
    cardNumber="1" expansionCount="100" copyright="2019"
    abbreviation="EXP" rarity="Rare" artist="Jason Conner"
    power="5" toughness="5" />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
