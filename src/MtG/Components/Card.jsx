import React from 'react';
import TitleRow from './TitleRow.jsx';
import TypeRow from './TypeRow.jsx';
import TextBlock from './TextBlock.jsx';
import FooterRow from './FooterRow.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.expansion = this.card.Expansion;
    this.cost = this.card.Cost;
  }


  render() {
    return (
      <div class="card mtg-card col">
        <TitleRow title={this.card.Title} cost={this.card.Cost} />
        <TypeRow type={this.card.Type} subtype={this.card.Subtype} expansionName={this.expansion.Name} />
        <TextBlock text={this.card.Text} flavorText={this.card.FlavorText} />
        <FooterRow expansion={this.card.Expansion} cardNumber={this.card.CardNumber} rarity={this.card.Rarity} artist={this.card.Artist} toughness={this.card.Toughness} power={this.card.Power} />
      </div>
    )
  }
}

export default Card;
