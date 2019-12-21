import React from 'react';
import TitleRow from './TitleRow.jsx';
import TypeRow from './TypeRow.jsx';
import TextBlock from './TextBlock.jsx';
import FooterRow from './FooterRow.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card mtg-card col">
        <TitleRow title={this.props.title} black={this.props.black} blue={this.props.blue} colorless={this.props.colorless} converted={this.props.converted} green={this.props.green} red={this.props.red} white={this.props.white} />
        <TypeRow type={this.props.type} subtype={this.props.subtype} expansionName={this.props.expansionName} />
        <TextBlock text={this.props.text} flavorText={this.props.flavorText} />
        <FooterRow cardNumber={this.props.cardNumber} expansionCount={this.props.expansionCount} copyright={this.props.copyright} abbreviation={this.props.abbreviation} rarity={this.props.rarity} artist={this.props.artist} toughness={this.props.toughness} power={this.props.power} />
      </div>
    )
  }
}

export default Card;
