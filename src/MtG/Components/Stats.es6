import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.Toughness !== 'undefined' && this.props.Toughness > 0) {
      return (
        <div class="mtg-pt float-right">
          <i class="far fa-heart"> {this.props.Power} </i>
          <i class="fas fa-shield-alt"> {this.props.Toughness} </i>
        </div>
      )
    }
    return <div class="mtg-pt float-right"></div>;
  }
}

export default Stats;
