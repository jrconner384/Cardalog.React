import React from 'react';

class Miscellany extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mtg-miscellany text-uppercase float-left">
        <div>{this.props.cardNumber}/{this.props.expansionCount} &#169;{this.props.copyright}</div>
        <div>{this.props.abbreviation} ({this.props.rarity[0]}) {this.props.artist}</div>
      </div>
    )
  }
}

export default Miscellany;
