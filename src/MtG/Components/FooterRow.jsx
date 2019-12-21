import React from 'react';
import Miscellany from './Miscellany.jsx';
import Stats from './Stats.jsx';

class FooterRow extends React.Component {
  constructor(props) {
    super(props);
    this.expansion = this.props.expansion;
  }

  render() {
    return (
      <div className="card-footer mtg-footer w-100">
        <Miscellany cardNumber={this.props.cardNumber} expansionCount={this.expansion.TotalCards} copyright={this.expansion.Copyright} abbreviation={this.expansion.Abbreviation} rarity={this.props.rarity} artist={this.props.artist} />
        <Stats toughness={this.props.toughness} power={this.props.power} />
      </div>
    )
  }
}

export default FooterRow;
