import React from 'react';

class Miscellany extends React.Component {
  // According to React, classes should always call the base constructor (https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
  // but the linter doesn't like it. Disabling the warning for now.
  // eslint-disable-next-line
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
