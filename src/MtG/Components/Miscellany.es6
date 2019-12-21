import React from 'react';

class Miscellany extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="mtg-miscellany text-uppercase float-left">
        <div>{this.props.CardNumber}/{this.props.ExpansionCount} &#169;{this.props.Copyright}</div>
        <div>{this.props.Abbreviation} ({this.props.Rarity[0]}) {this.props.Artist}</div>
      </div>
    )
  }
}

export default Miscellany;
