import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div id="accordion" className="sticky-top">
        <div className="card">
          <div className="card-header" id="menu-hamburger">
            <h5 className="mb-0">
              <i className="fas fa-bars fa-2x btn btn-link" data-toggle="collapse" data-target="#menu" aria-expanded="true" aria-controls="#menu" />
            </h5>
          </div>

          <div id="menu" class="collapse show" aria-labelledby="menu-hamburger" data-parent="#accordion">
            <div className="card-body">
              <a href="#">Home</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
