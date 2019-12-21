import React from 'react';
import Miscellany from './Miscellany.es6';
import Stats from './Stats.es6';

class FooterRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card-footer mtg-footer w-100">
        <Miscellany CardNumber={this.props.CardNumber} ExpansionCount={this.props.ExpansionCount} Copyright={this.props.Copyright} Abbreviation={this.props.Abbreviation} Rarity={this.props.Rarity} Artist={this.props.Artist} />
        <Stats Toughness={this.props.Toughness} Power={this.props.Power} />
      </div>
    )
  }
}

export default FooterRow;
