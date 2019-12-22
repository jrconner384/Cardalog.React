import React from 'react';
import FooterRow from './FooterRow.jsx';
import TextBlock from './TextBlock.jsx';
import TitleRow from './TitleRow.jsx';
import TypeRow from './TypeRow.jsx';

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
          <TitleRow card={this.card} />
          <TypeRow card={this.card} />
          <TextBlock card={this.card} />
          <FooterRow card={this.card} />
        </div>
    )
  }
}

export default DisplayCard;
