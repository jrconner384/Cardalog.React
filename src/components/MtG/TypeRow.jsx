import React from 'react';

class TypeRow extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.expansion = this.card.Expansion;
  }

  render() {
    return (
      <div className="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
        <div className="mtg-type float-left">{this.card.Type} - {this.card.Subtype}</div>
        <div className="mtg-expansion float-right">{this.expansion.Name}</div>
      </div>
    );
  }
}

export default TypeRow;
