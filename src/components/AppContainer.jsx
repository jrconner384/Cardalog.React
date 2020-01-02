import React from 'react';
import Navbar from './Navigation/Navbar.jsx';
import Cards from './MtG/Cards.jsx';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Cards />
      </div>
    )
  }
}

export default AppContainer;
