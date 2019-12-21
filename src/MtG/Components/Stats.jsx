import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.toughness !== 'undefined' && this.props.toughness > 0) {
      return (
        <div className="mtg-pt float-right">
          <i className="far fa-heart"> {this.props.power} </i>
          <i className="fas fa-shield-alt"> {this.props.toughness} </i>
        </div>
      )
    }
    return <div className="mtg-pt float-right"></div>;
  }
}

export default Stats;
