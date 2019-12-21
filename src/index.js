import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import './index.css';
import './MtG/CSS/Card.css'
import Card from './MtG/Components/Card.es6';
import Cards from './MtG/Components/Cards.es6';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <Cards />
  <Card Title="A card"
    Black={1} Blue={0} Colorless={0} Converted={1} Green={0} Red={0} White={0}
    Type="Main Type" Subtype="Subtype" ExpansionName="Expansion"
    Text="Test (This card is a test card.)" FlavorText="This is some lore about the Test Card."
    CardNumber="1" ExpansionCount="100" Copyright="2019"
    Abbreviation="EXP" Rarity="Rare" Artist="Jason Conner"
    Power={5} Toughness={5} />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
