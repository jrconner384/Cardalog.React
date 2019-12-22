import React from 'react';
import Menu from './Navigation/Components/Menu.jsx';
//import Cards from './MtG/Components/Cards.jsx';
import Cards from './components/MtG/Cards.jsx';
import './App.css';
import './MtG/CSS/Card.css';
import './Navigation/CSS/Menu.css';

function App() {
  return (
    <div className="d-flex flex-row">
      <div id="cardalog-menu" className="d-flex flex-column justify-content-start"><Menu /></div>
      <div className="d-flex flex-column"><Cards /></div>
    </div>
  );
}

export default App;
