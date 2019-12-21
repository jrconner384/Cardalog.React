import React from 'react';
import Cost from './Cost.jsx';

class TitleRow extends React.Component {
  constructor(props) {
    super(props);
    this.cost = this.props.cost;
  }

  render() {
    return (
      <div className="card-body mtg-title-row">
        <div className="card-title float-left mtg-title align-bottom">{this.props.title}</div>
        <Cost cost={this.cost} />
      </div>
    )
  }
}

export default TitleRow;
