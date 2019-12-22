import React from 'react';

class FooterRow extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.expansion = this.card.Expansion;
  }

  render() {
    return (
      <div className="card-footer mtg-footer w-100 row">
        <div className="mtg-miscellany text-uppercase col">
          <div>{this.card.CardNumber}/{this.expansion.TotalCards} &#169;{this.expansion.Copyright}</div>
          <div>{this.expansion.Abbreviation} ({this.card.Rarity[0]}) {this.card.Artist}</div>
        </div>
        <div className="mtg-pt col">
          <i className="far fa-heart"> {this.card.Power} </i>
          <i className="fas fa-shield-alt"> {this.card.Toughness} </i>
        </div>
      </div>
    )
  }
}

export default FooterRow;
