import React from 'react';

class TextBlock extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
  }

  render() {
    return (
      <div className="card-body">
        <div className="mtg-text">{this.card.Text}</div>
        <div className="mtg-ftext font-italic">{this.card.FlavorText}</div>
      </div>
    )
  }
}

export default TextBlock;
