import React from 'react';
import Miscellany from './Miscellany.jsx';
import Stats from './Stats.jsx';

class FooterRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card-footer mtg-footer w-100">
        <Miscellany cardNumber={this.props.cardNumber} expansionCount={this.props.expansionCount} copyright={this.props.copyright} abbreviation={this.props.abbreviation} rarity={this.props.rarity} artist={this.props.artist} />
        <Stats toughness={this.props.toughness} power={this.props.power} />
      </div>
    )
  }
}

export default FooterRow;
