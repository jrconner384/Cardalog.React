import React from 'react';
import TitleRow from './TitleRow.es6';
import TypeRow from './TypeRow.es6';
import TextBlock from './TextBlock.es6';
import FooterRow from './FooterRow.es6';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card mtg-card col">
        <TitleRow Title={this.props.Title} Black={this.props.Black} Blue={this.props.Blue} Colorless={this.props.Colorless} Converted={this.props.Converted} Green={this.props.Green} Red={this.props.Red} White={this.props.White} />
        <TypeRow Type={this.props.Type} Subtype={this.props.Subtype} ExpansionName={this.props.ExpansionName} />
        <TextBlock Text={this.props.Text} FlavorText={this.props.FlavorText} />
        <FooterRow CardNumber={this.props.CardNumber} ExpansionCount={this.props.ExpansionCount} Copyright={this.props.Copyright} Abbreviation={this.props.Abbreviation} Rarity={this.props.Rarity} Artist={this.props.Artist} Toughness={this.props.Toughness} Power={this.props.Power} />
      </div>
    )
  }
}

export default Card;
