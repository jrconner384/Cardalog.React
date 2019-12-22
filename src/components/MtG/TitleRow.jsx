import React from 'react';
import Cost from './Cost.jsx';

class TitleRow extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.cost = this.card.Cost;
  }

  render() {
    return (
      <div className="card-header mtg-title-row">
        <div className="card-title mtg-title float-left">{this.card.Title}</div>
        <Cost cost={this.cost} />
      </div>
    )
  }
}

export default TitleRow;
