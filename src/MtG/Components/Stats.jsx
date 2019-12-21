import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.toughness !== 'undefined' && this.props.toughness > 0) {
      return (
        <div class="mtg-pt float-right">
          <i class="far fa-heart"> {this.props.power} </i>
          <i class="fas fa-shield-alt"> {this.props.toughness} </i>
        </div>
      )
    }
    return <div class="mtg-pt float-right"></div>;
  }
}

export default Stats;
