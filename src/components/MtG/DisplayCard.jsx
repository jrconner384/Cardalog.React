import React from 'react';

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.expansion = this.card.Expansion;
    this.cost = this.card.Cost;
  }

  render() {
    return (
        <div className="card mtg-card col">
          <div className="card-header mtg-title-row">
            <div className="card-title mtg-title float-left">{this.card.Title}</div>
            <div className="card-subtitle float-right mtg-cost">{this.cost.Black} {this.cost.Blue} {this.cost.Colorless} {this.cost.Green} {this.cost.Red} {this.cost.White}</div>
          </div>
          <div className="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
            <div className="mtg-type float-left">{this.card.Type} - {this.card.Subtype}</div>
            <div className="mtg-expansion float-right">{this.expansion.Name}</div>
          </div>
          <div className="card-body">
            <div className="mtg-text">{this.card.Text}</div>
            <div className="mtg-ftext font-italic">{this.card.FlavorText}</div>
          </div>
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
        </div>
    )
  }
}

export default DisplayCard;
